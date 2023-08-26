const { ProjectRepository } = require('../repository/index');

class ProjectService {
    constructor() {
        this.projectRepository = new ProjectRepository();
    }

    async createProject(projectDetail, userId) {
        try {
            projectDetail = { ...projectDetail, owner_id: userId };
            const project = await this.projectRepository.createProject(projectDetail);
            return project;
        } catch (error) {
            throw error;
        }
    }

    async updateProject(projectId, updateProjectDetail) {
        try {
            const updatedProject = await this.projectRepository.updateProject(updateProjectDetail);
            return updatedProject;
        } catch (error) {
            throw error;
        }
    }

    async getProjects(userId) {
        try {
            const projects = await this.projectRepository.getProjects(userId);
            return projects;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProjectService;