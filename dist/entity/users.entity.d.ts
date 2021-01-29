import { Role } from './role.entity';
import { PhotoGroup } from './photo_group.entity';
export declare type UserRoleType = "admin" | "editor" | "ghost";
export declare class Users {
    userId: string;
    username: string;
    password: string;
    fullName: string;
    status: boolean;
    roles: Role;
    photoGroups: PhotoGroup[];
}
