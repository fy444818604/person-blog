import { Repository } from 'typeorm';
import { Users } from '../entity/users.entity';
import { RoleMenu } from '../entity/role_menu.entity';
import { UsersDto } from './dto/users.dto';
import { SearchUsersDto } from './dto/search.users.dto';
import { MenuDto } from './dto/menu.dto';
import { Role } from '../entity/role.entity';
import { CreateRoleDto } from './dto/create.role.dto';
export declare class UsersService {
    private readonly users;
    private readonly roleMenu;
    private readonly roles;
    constructor(users: Repository<Users>, roleMenu: Repository<RoleMenu>, roles: Repository<Role>);
    findOne(username: string): Promise<Users | undefined>;
    usersAdd(usersDto: UsersDto): Promise<Users>;
    findUser(searchUsersDto: SearchUsersDto): Promise<Users | [Users[], number]>;
    menuAdd(menuDto: MenuDto[]): Promise<any>;
    getMenu(id: string): Promise<Role>;
    menuSearch(): Promise<RoleMenu[]>;
    getRoles(): Promise<Role[]>;
    createRole(createRoleDto: CreateRoleDto): Promise<Role>;
    getRolesByIds(ids: any): Promise<RoleMenu[]>;
}
