/* eslint-disable @typescript-eslint/no-unused-vars */

import { taskService } from "../../services/project";
import { Request, Response, NextFunction } from "express";
import { apiOk } from "../../util/apiHelpers";
import { RouterClass } from "../RouterClass";



class TaskRouter extends RouterClass { }

export const taskRouter = new TaskRouter();
export default taskRouter;

taskRouter.get("/:id", [], async (req: Request, res: Response, next: NextFunction) => {
        const taskId: string = req.params.id;
        const result = await taskService.getTasksById(taskId);
        apiOk(res, result);
});

taskRouter.put("/:id", [], async (req: Request, res: Response, next: NextFunction) => {
        const { name, description, assign_to, start_date, end_date } = req.body;
        const taskId: string = req.params.id;
        const result = await taskService.updateTaskById(taskId,
                { name, description, asignee: assign_to, startDate: start_date, endDate: end_date });
        apiOk(res, result);
});

taskRouter.patch("/:id/assign", [], async (req: Request, res: Response, next: NextFunction) => {
        const taskId: string = req.params.id;
        const { assign_to } = req.body;
        const result = await taskService.updateTaskById(taskId, { asignee: assign_to });
        apiOk(res, result);
});

