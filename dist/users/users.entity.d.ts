export declare type UserRoleType = "admin" | "editor" | "ghost";
export declare class Users {
    userId: string;
    username: string;
    password: string;
    fullName: string;
    roles: UserRoleType;
    power: string[];
}
