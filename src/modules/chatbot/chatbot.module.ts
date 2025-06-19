import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ChatEntity,
  ChatDetailEntity,
  ProcessEntity,
  TagEntity,
  MessageResponseEntity,
  ConversationHistoryEntity,
} from './entities';
import {
  ChatService,
  ChatDetailService,
  ProcessService,
  TagService,
  MessageResponseService,
  ConversationHistoryService,
} from './services';
import {
  ChatController,
  ChatDetailController,
  ProcessController,
  TagController,
  MessageResponseController,
  ConversationHistoryController,
} from './controllers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ChatEntity,
      ChatDetailEntity,
      ProcessEntity,
      TagEntity,
      MessageResponseEntity,
      ConversationHistoryEntity,
    ]),
  ],
  providers: [
    ChatService,
    ChatDetailService,
    ProcessService,
    TagService,
    MessageResponseService,
    ConversationHistoryService,
  ],
  controllers: [
    ChatController,
    ChatDetailController,
    ProcessController,
    TagController,
    MessageResponseController,
    ConversationHistoryController,
  ],
  exports: [
    ChatService,
    ChatDetailService,
    ProcessService,
    TagService,
    MessageResponseService,
    ConversationHistoryService,
  ],
})
export class ChatbotModule {}