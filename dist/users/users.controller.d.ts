import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
import { SearchUsersDto } from './dto/search.users.dto';
import { Users } from '../entity/users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    usersAdd(usersDto: UsersDto): Promise<Users>;
    userFind(searchUsersDto: SearchUsersDto): Promise<Users>;
}
