/* eslint-disable @typescript-eslint/no-unused-vars */

import { projectService, taskService } from "../../services/project";
import { Request, Response, NextFunction } from "express";
import { apiOk } from "../../util/apiHelpers";
import { RouterClass } from "../RouterClass";



class ProjectRouter extends RouterClass { }

export const projectRouter = new ProjectRouter();
export default projectRouter;

projectRouter.post("/", [], async (req: Request, res: Response, next: NextFunction) => {
        const { name, details, manager, start_date, end_date } = req.body;
        const result = await projectService.createProject({ name, details, manager, startDate: start_date, endDate: end_date });
        apiOk(res, result);
});

projectRouter.get("/", [], async (req: Request, res: Response, next: NextFunction) => {
        const result = await projectService.getAllProjects();
        apiOk(res, result);
});

projectRouter.get("/:id", [], async (req: Request, res: Response, next: NextFunction) => {
        const projectId: string = req.params.id;
        const result = await projectService.getProjectById(projectId);
        apiOk(res, result);
});

projectRouter.put("/:id", [], async (req: Request, res: Response, next: NextFunction) => {
        const { name, details, manager, startDate, endDate } = req.body;
        const projectId: string = req.params.id;
        const result = await projectService.updateProject(projectId, { name, details, manager, startDate, endDate });
        apiOk(res, result);
});

projectRouter.patch("/:id/assign", [], async (req: Request, res: Response, next: NextFunction) => {
        const projectId: string = req.params.id;
        const { assign_to } = req.body;
        const result = await projectService.updateProject(projectId, { manager: assign_to });
        apiOk(res, result);
});

projectRouter.post("/:projectId/task", [], async (req: Request, res: Response, next: NextFunction) => {
        const projectId: string = req.params.projectId;
        const { name, description, assign_to, start_date, end_date } = req.body;
        const result = await taskService.createTask(projectId,
                { name, description, asignee: assign_to, startDate: start_date, endDate: end_date });
        apiOk(res, result);
});

projectRouter.get("/:projectId/task", [], async (req: Request, res: Response, next: NextFunction) => {
        const projectId: string = req.params.projectId;
        const result = await taskService.getTasksByProject(projectId);
        apiOk(res, result);
});


