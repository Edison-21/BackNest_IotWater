import { TokensDto } from '@core/dtos';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthenticationService {
    private jwtService;
    private userService;
    private configService;
    private readonly logger;
    constructor(jwtService: JwtService, userService: UserService, configService: ConfigService);
    regenerateTokens(id: number, username: string): Promise<TokensDto>;
    hashData(data: string): Promise<string>;
    getTokens(userId: number, username: string): Promise<TokensDto>;
    updateRtHash(userId: number, rt: string): Promise<void>;
    passwordMatch(password: string, hash: string): Promise<void>;
    rtMatch(rt: string, hashedRt: string): Promise<void>;
}
