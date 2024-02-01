const { StatusCodes } = require('http-status-codes');
const { ProjectRepository, UserRepository } = require('../repository/index');
const { ServiceError, ValidationError } = require('../utils/errors');

class ProjectService {
    constructor() {
        this.projectRepository = new ProjectRepository();
        this.userRepository = new UserRepository();
    }

    async createProject(title, description, userId) {
        try {
            const projectDetail = {
                owner_id: userId,
                project_name: title,
                project_description: description,
                members: [],
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
                    },
                    ideation: {
                        people: {
                            stickyCount: 4,
                            stickyColor: "#64B5F6",
                            data: [
                                "People-1",
                                "People-2",
                                "People-3",
                                "People-4",
                                "People-5",
                                "People-6",
                                "People-7",
                            ]
                        },
                        activities: {
                            stickyCount: 4,
                            stickyColor: "#FFB74D",
                            data: [
                                "Activities-1",
                                "Activities-2",
                                "Activities-3",
                                "Activities-4",
                                "Activities-5",
                                "Activities-6",
                                "Activities-7",
                            ]
                        },
                        situation_context_location: {
                            stickyCount: 4,
                            stickyColor: "#81C784",
                            data: [
                                "Situation-1",
                                "Situation-2",
                                "Situation-3",
                                "Situation-4",
                                "Situation-5",
                                "Situation-6",
                                "Situation-7",
                            ]
                        },
                        props_tools_objects_equipment: {
                            stickyCount: 4,
                            stickyColor: "#E57373",
                            data: [
                                "Props-1",
                                "Props-2",
                                "Props-3",
                                "Props-4",
                                "Props-5",
                                "Props-6",
                                "Props-7",
                            ]
                        },
                    },
                    productdevelopment: {
                        purpose: {
                            stickyCount: 4,
                            stickyColor: "#64B5F6",
                            data: [
                                "Purpose-1",
                                "Purpose-2",
                                "Purpose-3",
                                "Purpose-4",
                                "Purpose-5",
                                "Purpose-6",
                                "Purpose-7",
                            ]
                        },
                        people: {
                            stickyCount: 4,
                            stickyColor: "#FFB74D",
                            data: [
                                "People-1",
                                "People-2",
                                "People-3",
                                "People-4",
                                "People-5",
                                "People-6",
                                "People-7",
                            ]
                        },
                        product_experience: {
                            stickyCount: 4,
                            stickyColor: "#81C784",
                            data: [
                                "Product-1",
                                "Product-2",
                                "Product-3",
                                "Product-4",
                                "Product-5",
                                "Product-6",
                                "Product-7",
                            ]
                        },
                        product_functions: {
                            stickyCount: 4,
                            stickyColor: "#E57373",
                            data: [
                                "Functions-1",
                                "Functions-2",
                                "Functions-3",
                                "Functions-4",
                                "Functions-5",
                                "Functions-6",
                                "Functions-7",
                            ]
                        },
                        product_features: {
                            stickyCount: 4,
                            stickyColor: "#BA68C8",
                            data: [
                                "Features-1",
                                "Features-2",
                                "Features-3",
                                "Features-4",
                                "Features-5",
                                "Features-6",
                                "Features-7",
                            ]
                        },
                        components: {
                            stickyCount: 4,
                            stickyColor: "#E57373",
                            data: [
                                "Components-1",
                                "Components-2",
                                "Components-3",
                                "Components-4",
                                "Components-5",
                                "Components-6",
                                "Components-7",
                            ]
                        },
                        customer_revalidation: {
                            stickyCount: 4,
                            stickyColor: "#BA68C8",
                            data: [
                                "Customer-1",
                                "Customer-2",
                                "Customer-3",
                                "Customer-4",
                                "Customer-5",
                                "Customer-6",
                                "Customer-7",
                            ]
                        },
                        reject_redesign_retain: {
                            stickyCount: 4,
                            stickyColor: "#E57373",
                            data: [
                                "Reject-1",
                                "Reject-2",
                                "Reject-3",
                                "Reject-4",
                                "Reject-5",
                                "Reject-6",
                                "Reject-7",
                            ]
                        }
                    },
                    businessmodel: {
                        key_partners: "key_partners",
                        key_activities: "key_activities",
                        key_resources: "key_resources",
                        value_proposition: "value_proposition",
                        customer_relationships: "customer_relationships",
                        channels: "channels",
                        customer_segments: "customer_segments",
                        cost_structure: "cost_structure",
                        revenue_streams: "revenue_streams",
                    }
                }
            }

            let project = await this.projectRepository.createProject(projectDetail);
            project = project.toObject();
            project.type = 'owner';
            return project;
        }
        catch (error) {
            throw error;
        }
    }

    async deleteProject(projectId, userId) {
        try {
            // console.log(projectId)
            const deletedProject = await this.projectRepository.deleteProject(projectId, userId);
            return deletedProject;
        } catch (error) {
            throw error;
        }
    }

    async updateProject(updateProjectDetail) {
        try {
            const { type, ...updateProjectData } = updateProjectDetail;
            const updatedProject = await this.projectRepository.updateProject(updateProjectData);
            return updatedProject;
        } catch (error) {
            throw error;
        }
    }

    async getProjects(userId) {
        try {
            let projects = await this.projectRepository.getProjects(userId);
            // console.log("Project - " + projects)
            projects = projects.map(project => {
                const plainObject = project.toObject();
                plainObject.type = 'owner';
                return plainObject;
            });

            let sharedProjects = await this.getSharedProjects(userId);
            // console.log("Shared Project - " + sharedProjects)
            sharedProjects = sharedProjects.map(project => {
                const plainObject = project.toObject();
                plainObject.type = 'shared';
                return plainObject;
            });

            projects = projects.concat(sharedProjects);

            return projects;
        } catch (error) {
            console.log("Service :", error)
            throw error;
        }
    }

    async myProjects(userId) {
        try {
            const projects = await this.projectRepository.myProjects(userId);
            return projects;
        } catch (error) {
            throw error;
        }
    }

    async getOneProject(projectId) {
        try {
            const project = await this.projectRepository.getOneProject(projectId);
            return project;
        } catch (error) {
            throw error;
        }
    }

    async getOneCanvas(projectId, canvasName) {
        try {
            const project = await this.projectRepository.getOneCanvas(projectId, canvasName);
            return project;
        } catch (error) {
            throw error;
        }
    }

    async updateOneCanvas(projectId, canvasName, canvasData) {
        try {
            const project = await this.projectRepository.updateOneCanvas(projectId, canvasName, canvasData);
            return project;
        } catch (error) {
            throw error;
        }
    }

    async giveAccess(ownerId, projectId, email) {
        try {
            const user = await this.userRepository.getByEmail(email);
            // console.log(user, email)
            if (!user) {
                throw new ValidationError({
                    message: 'User not exist'
                })
            }
            const response = await this.projectRepository.giveAccess(ownerId, projectId, email);
            return response;
        } catch (error) {
            console.log("err - ", error)
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }
            throw new ServiceError(
                'Something went wrong while giving access',
                'Something went wrong while giving access, try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async removeAccess(ownerId, projectId, email) {
        try {
            console.log("Email : ", email)
            const user = await this.userRepository.getByEmail(email);
            if (!user) {
                throw new ValidationError({
                    message: 'User not exist'
                })
            }
            const response = await this.projectRepository.removeAccess(ownerId, projectId, email);
            return response;
        } catch (error) {
            console.log("err - ", error)
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }
            throw new ServiceError(
                'Something went wrong while removing access',
                'Something went wrong while removing access, try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getSharedProjects(userId) {
        try {
            const user = await this.userRepository.getById(userId);
            if (!user) {
                throw new ValidationError({
                    message: 'User not exist'
                })
            }
            const accessedProjectsId = user.projectAccess;  // array of project id
            const { sharedProjects, projectIdThatToBeNeededDeleted } = await this.projectRepository.getSharedProjects(accessedProjectsId);

            if (projectIdThatToBeNeededDeleted.length > 0) {
                user.projectAccess = user.projectAccess.filter(projectId => !projectIdThatToBeNeededDeleted.includes(projectId));
                await user.save();
            }
            return sharedProjects;
        } catch (error) {
            console.log("Error - ", error)
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }
            throw new ServiceError(
                'Something went wrong while fetching shared projects',
                'Something went wrong while fetching shared projects, try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = ProjectService;