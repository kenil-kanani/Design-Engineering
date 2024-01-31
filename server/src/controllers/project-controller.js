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

const deleteProject = async (req, res) => {
    try {
        const response = await projectService.deleteProject(req.body.projectId, req.user.id);
        return res.status(201).json({
            success: true,
            message: 'Successfully deleted a project',
            data: response,
            err: {}
        });
    } catch (error) {
        // console.log(error)
        return res.status(400).json({
            message: 'Something went while deleting project',
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
        console.log("Conto :", error)
        return res.status(500).json({
            message: 'Something went while fetching projects',
            data: {},
            success: false,
            err: error
        })
    }
}

const myProjects = async (req, res) => {
    try {
        const response = await projectService.myProjects(req.user.id);
        return res.status(201).json({
            success: true,
            message: 'Successfully fetched all projects',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log("Conto :", error)
        return res.status(500).json({
            message: 'Something went while fetching projects',
            data: {},
            success: false,
            err: error
        })
    }
}

const getOneProject = async (req, res) => {
    try {
        const response = await projectService.getOneProject(req.params.projectId);
        return res.status(201).json({
            success: true,
            message: 'Successfully fetched project',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log("Conto :", error)
        return res.status(500).json({
            message: 'Something went while fetching project',
            data: {},
            success: false,
            err: error
        })
    }
}

const getOneCanvas = async (req, res) => {
    try {
        const response = await projectService.getOneCanvas(req.params.projectId, req.params.canvasname);
        return res.status(201).json({
            success: true,
            message: 'Successfully fetched canvas',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log("Conto :", error)
        return res.status(500).json({
            message: 'Something went while fetching canvas',
            data: {},
            success: false,
            err: error
        })
    }
}

const updateOneCanvas = async (req, res) => {
    try {
        const response = await projectService.updateOneCanvas(req.params.projectId, req.params.canvasname, req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully updated canvas',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log("Conto :", error)
        return res.status(500).json({
            message: 'Something went while updating canvas',
            data: {},
            success: false,
            err: error
        })
    }
}

const giveAccess = async (req, res) => {
    try {
        const ownerId = req.user.id;  // owner of the project
        const projectId = req.body.projectId;  // project to which access is to be given
        const email = req.body.email;  // email of the user to whom access is to be given
        console.log(projectId, email)
        console.log(email, "EMAIL")
        const response = await projectService.giveAccess(ownerId, projectId, email);
        return res.status(201).json({
            success: true,
            message: 'Successfully gave access to the user',
            data: email,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: {},
            success: false,
            err: error
        })
    }
}

const removeAccess = async (req, res) => {
    try {
        const ownerId = req.user.id;  // owner of the project
        const projectId = req.body.projectId;  // project to which access is to be removed
        const email = req.body.email;  // email of the user to whom access is to be removed
        const response = await projectService.removeAccess(ownerId, projectId, email);
        return res.status(201).json({
            success: true,
            message: 'Successfully removed access of the user',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: {},
            success: false,
            err: error
        })
    }
}

const getSharedProjects = async (req, res) => {
    try {
        const response = await projectService.getSharedProjects(req.user.id);
        return res.status(201).json({
            success: true,
            message: 'Successfully fetched all shared projects',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something went while fetching shared projects',
            data: {},
            success: false,
            err: error
        })
    }
}

module.exports = {
    createProject,
    updateProject,
    getProjects,
    myProjects,
    getOneProject,
    getOneCanvas,
    updateOneCanvas,
    deleteProject,
    giveAccess,
    removeAccess,
    getSharedProjects
}