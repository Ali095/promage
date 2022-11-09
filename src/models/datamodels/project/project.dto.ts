import { DTO } from "../dto";


export class ProjectDTO extends DTO {
    name?: string = undefined;
    details?: string = undefined;
    manager?: string = undefined;
    startDate?: Date = new Date();
    endDate?: Date = undefined;
    status?: ProjectStatus = ProjectStatus.PENDING;
}

export enum ProjectStatus {
    PENDING = "Pending",
    IN_PROGRESS = "In Progress",
    COMPLETED = "Completed"
}
