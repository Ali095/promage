import { TaskDTO } from "../../models/datamodels/project";
import { taskDAO } from "../../dao/project";





class TaskService {
    public async createTask(projectId: string, taskDetails: TaskDTO): Promise<TaskDTO> {
        const taskData: TaskDTO = { ...taskDetails, project: projectId };
        return await taskDAO.createNew(taskData);
    }

    public async getTasksByProject(projectId: string): Promise<TaskDTO[]> {
        return await taskDAO.findAllByProject(projectId);
    }

    public async getTasksById(taskId: string): Promise<TaskDTO> {
        return await taskDAO.findById(taskId);
    }

    public async updateTaskById(taskId: string, taskDetail: TaskDTO): Promise<TaskDTO> {
        return await taskDAO.updateById(taskId, taskDetail);
    }

}

export const taskService: TaskService = new TaskService();
export default taskService;
