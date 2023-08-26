const { StatusCodes } = require('http-status-codes');
const ProjectModel = require('../models/project');
const { AppError } = require('../utils/errors/index');

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
            return projects;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to get Projects',
                'Something went wrong with getting user projects , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

module.exports = ProjectRepository;