import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
import { Users } from './users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    usersAdd(usersDto: UsersDto): Promise<Users>;
}
