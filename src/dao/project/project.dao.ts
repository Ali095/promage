import { ProjectDTO } from "../../models/datamodels/project";
import { ProjectModel } from "../../models/db/project";



export class ProjectDAO {

    public async createNew(projectDetails: ProjectDTO): Promise<any> {
        const query = ProjectModel.create(projectDetails);
        const res = await query;
        return res;
    }

    public async updateProject(projectId: string, projectData: ProjectDTO): Promise<any> {
        const query = ProjectModel.updateOne({ id: projectId }, projectData);
        const res = await query;
        return res;
    }

    public async findAll(): Promise<ProjectDTO[]> {
        const query = ProjectModel.find({});
        query.select("-tasks");
        const res = await query;
        return res;
    }

    public async findById(projectId: string): Promise<ProjectDTO> {
        const query = ProjectModel.find({ _id: projectId });
        const res = await query;
        return res[0];
    }
}

export const projectDAO = new ProjectDAO();

export default projectDAO;