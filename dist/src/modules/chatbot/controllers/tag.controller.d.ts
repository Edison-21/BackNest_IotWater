import { TagService } from '../services';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    findAll(): Promise<import("../entities").TagEntity[]>;
    findOne(id: number): Promise<import("../entities").TagEntity>;
}
