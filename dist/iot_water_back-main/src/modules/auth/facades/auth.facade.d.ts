import { AuthDto, LoginDto } from '@auth/dtos';
import { AuthenticationService, UserService } from '@auth/services';
import { TokensDto } from '@core/dtos';
export declare class AuthenticationFacade {
    private userService;
    private authService;
    private readonly logger;
    constructor(userService: UserService, authService: AuthenticationService);
    login(payload: LoginDto): Promise<any>;
    register(payload: AuthDto): Promise<TokensDto>;
    logout(userId: number): any;
    restorePassword(identity: number): number;
    refresh(data: {
        userId: number;
        refreshToken: string;
    }): Promise<any>;
}
