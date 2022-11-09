import { TaskDTO } from "../../models/datamodels/project";
import { TaskModel } from "../../models/db/project/task.model";




export class TaskDAO {

    public async createNew(taskDetails: TaskDTO): Promise<any> {
        const query = TaskModel.create(taskDetails);
        const res = await query;
        return res;
    }

    public async findAllByProject(projectId: string): Promise<any> {
        const query = TaskModel.find({ project: projectId });
        const res = await query;
        return res;
    }

    public async findById(taskId: string): Promise<any> {
        const query = TaskModel.find({ _id: taskId });
        const res = await query;
        return res[0];
    }

    public async updateById(taskId: string, taskDetail: TaskDTO): Promise<any> {
        const query = TaskModel.updateOne({ _id: taskId }, taskDetail);
        const res = await query;
        return res;
    }



}

export const taskDAO = new TaskDAO();

export default taskDAO;