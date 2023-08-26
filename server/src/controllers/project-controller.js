const { ProjectService } = require('../services/index');

const projectService = new ProjectService();

const createProject = async (req, res) => {
    try {
        const response = await projectService.createProject(req.body.projectName, req.body.projectDescription, req.user.id);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new project',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something went while creating project',
            data: {},
            success: false,
            err: error
        })
    }
}

const updateProject = async (req, res) => {
    try {
        const response = await projectService.updateProject(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully updated a project',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something went while updating project',
            data: {},
            success: false,
            err: error
        })
    }
}

const getProjects = async (req, res) => {
    try {
        const response = await projectService.getProjects(req.user.id);
        return res.status(201).json({
            success: true,
            message: 'Successfully fetched all projects',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something went while fetching projects',
            data: {},
            success: false,
            err: error
        })
    }
}

module.exports = {
    createProject,
    updateProject,
    getProjects
}