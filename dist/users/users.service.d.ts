import { Repository } from 'typeorm';
import { Users } from '../entity/users.entity';
import { UsersDto } from './dto/users.dto';
import { SearchUsersDto } from './dto/search.users.dto';
export declare class UsersService {
    private readonly users;
    constructor(users: Repository<Users>);
    findOne(username: string): Promise<Users | undefined>;
    usersAdd(usersDto: UsersDto): Promise<Users>;
    findUser(searchUsersDto: SearchUsersDto): Promise<Users>;
}
