import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
import { SearchUsersDto } from './dto/search.users.dto';
import { MenuDto } from './dto/menu.dto';
import { Users } from '../entity/users.entity';
import { Role } from '../entity/role.entity';
import { RoleMenu } from '../entity/role_menu.entity';
import { CreateRoleDto } from './dto/create.role.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    usersAdd(usersDto: UsersDto): Promise<Users>;
    userFind(searchUsersDto: SearchUsersDto): Promise<Users | [Users[], number]>;
    menuAdd(menuDto: MenuDto[]): Promise<any>;
    menuSearch(): Promise<RoleMenu[]>;
    getMenu(id: string): Promise<Role>;
    getRoles(): Promise<Role[]>;
    createRole(createRoleDto: CreateRoleDto): Promise<Role>;
}
