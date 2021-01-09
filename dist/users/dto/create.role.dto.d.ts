import { RoleMenu } from '../../entity/role_menu.entity';
export declare class CreateRoleDto {
    id: string;
    name: string;
    description: string;
    roleMenus: RoleMenu[];
}
