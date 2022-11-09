import { ProjectDTO, ProjectStatus } from "../../models/datamodels/project";
import { projectDAO } from "../../dao/project";





class ProjectService {
    public async createProject(projectDetails: ProjectDTO): Promise<string> {
        if (new Date(projectDetails.startDate) <= new Date()) {
            if (new Date(projectDetails.endDate) < new Date())
                projectDetails.status = ProjectStatus.COMPLETED;
            else projectDetails.status = ProjectStatus.IN_PROGRESS;
        }

        return await projectDAO.createNew(projectDetails);
    }

    public async getAllProjects(): Promise<ProjectDTO[]> {
        return await projectDAO.findAll();
    }

    public async getProjectById(projectId: string): Promise<ProjectDTO> {
        return await projectDAO.findById(projectId);
    }

    public async updateProject(projectId: string, projectDetails: ProjectDTO): Promise<string> {
        if (new Date(projectDetails.startDate) <= new Date()) {
            if (new Date(projectDetails.endDate) < new Date())
                projectDetails.status = ProjectStatus.COMPLETED;
            else projectDetails.status = ProjectStatus.IN_PROGRESS;
        }

        return await projectDAO.updateProject(projectId, projectDetails);
    }

    public async updateManager(projectId: string, managerId: string): Promise<string> {
        return await projectDAO.updateProject(projectId, { manager: managerId });
    }

}

export const projectService: ProjectService = new ProjectService();
export default projectService;
