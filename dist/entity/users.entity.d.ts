import { Role } from './role.entity';
export declare type UserRoleType = "admin" | "editor" | "ghost";
export declare class Users {
    userId: string;
    username: string;
    password: string;
    fullName: string;
    status: boolean;
    roles: Role;
    power: string[];
}
