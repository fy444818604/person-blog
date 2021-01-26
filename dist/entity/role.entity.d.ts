import { RoleMenu } from './role_menu.entity';
import { Users } from './users.entity';
export declare class Role {
    id: string;
    name: string;
    description: string;
    roleMenus: RoleMenu[];
    users: Users[];
}
