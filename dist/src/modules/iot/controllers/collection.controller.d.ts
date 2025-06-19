import { CollectionService } from '../services';
export declare class CollectionController {
    private readonly collectionService;
    constructor(collectionService: CollectionService);
    findAll(): Promise<import("../entities").CollectionEntity[]>;
    findOne(id: number): Promise<import("../entities").CollectionEntity>;
}
