import { DTO } from "../dto";

export class TaskDTO extends DTO {
    name?: string = undefined;
    description?: string = undefined;
    asignee?: string = undefined;
    startDate?: Date = undefined;
    endDate?: Date = undefined;
    status?: TaskStatus = TaskStatus.BACKLOG;
    project?: string =undefined;
}

export enum TaskStatus {
    BACKLOG = "Pending in Backlog",
    IN_PROGRESS = "In Progress",
    TESTING = "Ready For QA",
    COMPLETED = "Completed"
}