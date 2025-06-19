import { NodeService } from '../services';
export declare class NodeController {
    private readonly nodeService;
    constructor(nodeService: NodeService);
    findAll(): Promise<import("../entities").NodeEntity[]>;
    findOne(id: number): Promise<import("../entities").NodeEntity>;
}
