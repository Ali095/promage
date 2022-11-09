import { DTO } from "../dto";

export class UserDTO extends DTO {
    name: string = undefined;
    role: UserRoles = undefined;
}

export enum UserRoles {
    MANAGER = "Project Manager",
    DEVELOPER = "Developer",
    QA = "Tester"
}