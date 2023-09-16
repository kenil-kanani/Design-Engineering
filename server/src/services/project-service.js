const { ProjectRepository } = require('../repository/index');

class ProjectService {
    constructor() {
        this.projectRepository = new ProjectRepository();
    }

    async createProject(title, description, userId) {
        try {
            const projectDetail = {
                owner_id: userId,
                project_name: title,
                project_description: description,
                members: [{ name: '', role: '' }],
                canvases: {
                    aeiou: {
                        environment: {
                            stickyCount: 5,
                            stickyColor: "#64B5F6",
                            data: [
                                "Environment-1",
                                "Environment-2",
                                "Environment-3",
                                "Environment-4",
                                "Environment-5",
                                "Environment-6",
                                "Environment-7",
                            ]
                        },
                        interaction: {
                            stickyCount: 5,
                            stickyColor: "#FFB74D",
                            data: [
                                "Interaction-1",
                                "Interaction-2",
                                "Interaction-3",
                                "Interaction-4",
                                "Interaction-5",
                                "Interaction-6",
                                "Interaction-7",
                            ]
                        },
                        objects: {
                            stickyCount: 5,
                            stickyColor: "#81C784",
                            data: [
                                "Objects-1",
                                "Objects-2",
                                "Objects-3",
                                "Objects-4",
                                "Objects-5",
                                "Objects-6",
                                "Objects-7",
                            ]
                        },
                        users: {
                            stickyCount: 5,
                            stickyColor: "#E57373",
                            data: [
                                "Users-1",
                                "Users-2",
                                "Users-3",
                                "Users-4",
                                "Users-5",
                                "Users-6",
                                "Users-7",
                            ]
                        },
                        activity: {
                            stickyCount: 5,
                            stickyColor: "#BA68C8",
                            data: [
                                "Activity-1",
                                "Activity-2",
                                "Activity-3",
                                "Activity-4",
                                "Activity-5",
                                "Activity-6",
                                "Activity-7",
                            ]
                        },
                    },
                    empathy: {
                        user: {
                            stickyCount: 4,
                            stickyColor: "#64B5F6",
                            data: [
                                "User-1",
                                "User-2",
                                "User-3",
                                "User-4",
                                "User-5",
                                "User-6",
                                "User-7",
                            ]
                        },
                        stackholder: {
                            stickyCount: 4,
                            stickyColor: "#FFB74D",
                            data: [
                                "Stackholder-1",
                                "Stackholder-2",
                                "Stackholder-3",
                                "Stackholder-4",
                                "Stackholder-5",
                                "Stackholder-6",
                                "Stackholder-7",
                            ]
                        },
                        activity: {
                            stickyCount: 4,
                            stickyColor: "#81C784",
                            data: [
                                "Activity-1",
                                "Activity-2",
                                "Activity-3",
                                "Activity-4",
                                "Activity-5",
                                "Activity-6",
                                "Activity-7",
                            ]
                        },
                        storyboarding: {
                            happy1: "Happy Story Likhni Hai , Bhai",
                            happy2: "Happy Story Likhni Hai , Bhai",
                            sad1: "Sad Story Likhni Hai , Bhai",
                            sad2: "Sad Story Likhni Hai , Bhai",
                        },
                    }
                }
            }

            const project = await this.projectRepository.createProject(projectDetail);
            return project;
        }
        catch (error) {
            throw error;
        }
    }

    async deleteProject(projectId) {
        try {
            console.log(projectId)
            const deletedProject = await this.projectRepository.deleteProject(projectId);
            return deletedProject;
        } catch (error) {
            throw error;
        }
    }

    async updateProject(updateProjectDetail) {
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