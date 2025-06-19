import { AuthenticationFacade } from '@auth/facades';
import { AuthDto, LoginDto } from '@auth/dtos';
export declare class AuthenticationController {
    private readonly authenticationFacade;
    constructor(authenticationFacade: AuthenticationFacade);
    login(payload: LoginDto): any;
    register(payload: AuthDto): any;
    logout(userId: number): any;
    restorePassword(): any;
    refresh(userId: number, refreshToken: string): any;
}
