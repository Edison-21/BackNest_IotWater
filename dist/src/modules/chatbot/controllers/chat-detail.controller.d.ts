import { ChatDetailService } from '../services';
export declare class ChatDetailController {
    private readonly chatDetailService;
    constructor(chatDetailService: ChatDetailService);
    findAll(): Promise<import("../entities").ChatDetailEntity[]>;
    findOne(id: number): Promise<import("../entities").ChatDetailEntity>;
}
