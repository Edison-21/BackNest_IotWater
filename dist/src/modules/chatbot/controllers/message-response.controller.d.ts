import { MessageResponseService } from '../services';
export declare class MessageResponseController {
    private readonly messageResponseService;
    constructor(messageResponseService: MessageResponseService);
    findAll(): Promise<import("../entities").MessageResponseEntity[]>;
    findOne(id: number): Promise<import("../entities").MessageResponseEntity>;
}
