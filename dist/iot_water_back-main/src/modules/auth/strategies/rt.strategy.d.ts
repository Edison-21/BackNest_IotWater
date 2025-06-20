import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';
declare const RtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class RtStrategy extends RtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(req: Request, payload: any): unknown;
}
export {};
