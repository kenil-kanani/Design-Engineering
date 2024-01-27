const express = require('express');
const router = express.Router();
const { authenticateJwt } = require('../../middlewares/auth')

const { UserController, ProfileController, ProjectController } = require('../../controllers/index')

router.post(
    '/signup',
    UserController.createUser
);

router.post(
    '/signin',
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

router.get(
    '/verify',
    UserController.activateAccount
);

router.patch(
    '/changepassword',
    UserController.changePassword
)

router.post(
    '/createprofile',
    ProfileController.createProfile
)

router.post(
    '/updateprofile',
    ProfileController.updateProfile
)

router.get(
    '/isactivated',
    UserController.isActivated
)

router.post(
    '/createproject',
    authenticateJwt,
    ProjectController.createProject
)

router.get(
    '/getprojects',
    authenticateJwt,
    ProjectController.getProjects
)

// new added

router.get(
    '/myprojects',
    authenticateJwt,
    ProjectController.myProjects
)

router.get(
    '/project/:projectId',
    authenticateJwt,
    ProjectController.getOneProject
)

router.get(
    '/project/:canvasname/:projectId',
    authenticateJwt,
    ProjectController.getOneCanvas
)

router.post(
    '/project/:canvasname/:projectId',
    authenticateJwt,
    ProjectController.updateOneCanvas
)


// new added
router.post(
    '/updateproject',
    authenticateJwt,
    ProjectController.updateProject
)

router.post(
    '/deleteproject',
    authenticateJwt,
    ProjectController.deleteProject
)

router.get(
    '/me',
    authenticateJwt,
    UserController.me
)

router.post(
    '/giveaccess',
    authenticateJwt,
    ProjectController.giveAccess
)

router.post(
    '/removeaccess',
    authenticateJwt,
    ProjectController.removeAccess
)

router.get(
    '/getsharedprojects',
    authenticateJwt,
    ProjectController.getSharedProjects
)

module.exports = router;