import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@auth/auth.module';
import { CoreModule } from '@core/core.module';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { DatabaseModule } from '@config/database';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from '@shared/guards';
import { IotModule } from './modules/iot/iot.module';
import { ChatbotModule } from './modules/chatbot/chatbot.module';

@Module({
  imports: [  
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    CoreModule,
    DatabaseModule,
    IotModule,
    ChatbotModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}