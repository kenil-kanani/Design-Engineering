const { StatusCodes } = require('http-status-codes');
const ProjectModel = require('../models/project');
const { AppError } = require('../utils/errors/index');
const UserModel = require('../models/user');

class ProjectRepository {
    async createProject(projectData) {
        try {
            const project = new ProjectModel(projectData);
            await project.save();
            return project;
        } catch (error) {
            console.log(error)
            throw new AppError(
                'RepositoryError',
                'Not able to crete Project',
                'Something went wrong with creating user project , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async deleteProject(projectId) {
        try {
            await ProjectModel.deleteOne({ _id: projectId });
            return projectId;
        } catch (error) {
            console.log("Error Repo : ", error)
            throw new AppError(
                'RepositoryError',
                'Not able to delete Project',
                'Something went wrong with deleting user project , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async updateProject(updateProjectData) {
        try {
            const updatedProject = ProjectModel.updateOne({ _id: updateProjectData._id }, updateProjectData);
            return updatedProject;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to update Project',
                'Something went wrong with updating user project , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getProjects(userId) {
        try {
            const projects = await ProjectModel.find({ owner_id: userId });
            // console.log(projects)
            return projects;
        } catch (error) {
            console.log("Repo :", error)
            throw new AppError(
                'RepositoryError',
                'Not able to get Projects',
                'Something went wrong with getting user projects , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async myProjects(userId) {
        try {
            const projects = await ProjectModel.find({ owner_id: userId }).select('project_name project_description _id');
            return projects;
        } catch (error) {
            // console.log("Repo :", error)
            throw new AppError(
                'RepositoryError',
                'Not able to get Projects',
                'Something went wrong with getting user projects , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getOneProject(projectId) {
        try {
            const project = await ProjectModel.findOne({ _id: projectId });
            return project;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to get Project',
                'Something went wrong with getting user project , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getOneCanvas(projectId, canvasName) {
        try {
            const project = await ProjectModel.findOne({ _id: projectId });
            let canvas = project.canvases
            canvas = canvas[canvasName]
            return canvas;
        } catch (error) {
            console.log("Repo :", error)
            throw new AppError(
                'RepositoryError',
                'Not able to get Canvas',
                'Something went wrong with getting user canvas , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async updateOneCanvas(projectId, canvasName, canvasData) {
        try {
            const project = await ProjectModel.findOne({ _id: projectId });
            let canvas = project.canvases
            canvas[canvasName] = canvasData
            project.canvases = canvas
            await project.save()
            return project;
        } catch (error) {
            console.log("Repo :", error)
            throw new AppError(
                'RepositoryError',
                'Not able to update Canvas',
                'Something went wrong with updating user canvas , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getSharedProjects(accessedProjectsId) {  // accessedProjectsId is array of project id
        try {
            let sharedProjects = [];
            for (let i = 0; i < accessedProjectsId.length; i++) {
                const project = await ProjectModel.findOne({ _id: accessedProjectsId[i] });
                sharedProjects.push(project);
            }
            return sharedProjects;
        } catch (error) {
            console.log(error)
            throw new AppError(
                'RepositoryError',
                'Not able to get shared projects',
                'Something went wrong with getting shared projects , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async giveAccess(ownerId, projectId, email) {
        try {
            const project = await ProjectModel.findOne({ _id: projectId });
            console.log(project, "project")
            const user = await UserModel.findOne({ email: email });
            if (!project) {
                throw new AppError(
                    'RepositoryError',
                    'Project not exist',
                    'Something went wrong with giving access to user project , come back again',
                    StatusCodes.INTERNAL_SERVER_ERROR
                )
            }
            if (ownerId != project.owner_id) {
                throw new AppError(
                    'RepositoryError',
                    'Not allowed',
                    'You are not allowed to give access to this project',
                    StatusCodes.INTERNAL_SERVER_ERROR
                )
            }
            user.projectAccess.push(projectId);
            project.members.push(email);
            await project.save();
            await user.save();
            return project;
        } catch (error) {
            console.log(error)
            throw new AppError(
                'RepositoryError',
                'Not able to give access',
                'Something went wrong with giving access to user project , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async removeAccess(ownerId, projectId, email) {
        try {
            const project = await ProjectModel.findOne({ _id: projectId });
            const user = await UserModel.findOne({ email: email });
            if (!project) {
                throw new AppError(
                    'RepositoryError',
                    'Project not exist',
                    'Something went wrong with removing access to user project , come back again',
                    StatusCodes.INTERNAL_SERVER_ERROR
                )
            }
            console.log(ownerId, project.owner_id)
            if (ownerId != project.owner_id) {
                throw new AppError(
                    'RepositoryError',
                    'Not allowed',
                    'You are not allowed to remove access to this project',
                    StatusCodes.INTERNAL_SERVER_ERROR
                )
            }
            user.projectAccess = user.projectAccess.filter(project => project != projectId);
            project.members = project.members.filter(member => member != email);
            await project.save();
            await user.save();
            return project;
        } catch (error) {
            console.log(error)
            throw new AppError(
                'RepositoryError',
                'Not able to remove access',
                'Something went wrong with removing access to user project , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }


}

module.exports = ProjectRepository;