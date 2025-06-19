import { UserEntity } from '../entities';
import { Repository } from 'typeorm';
import { AuthDto, LoginDto } from '@auth/dtos';
export declare class UserService {
    private readonly usersRepository;
    private readonly logger;
    constructor(usersRepository: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    findOneByUsername(login: LoginDto): Promise<UserEntity>;
    findOneById(id: number): Promise<UserEntity>;
    create(payload: AuthDto): Promise<{
        email: any;
        password: any;
        username: any;
    } & UserEntity>;
    updateRtHash(id: number, refreshToken: string): Promise<import("typeorm").UpdateResult>;
    updateUsersWithRefreshToken(id: number): Promise<{
        users: UserEntity[];
        refreshToken: string;
    }>;
}
