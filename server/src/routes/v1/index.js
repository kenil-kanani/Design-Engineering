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

router.post(
    '/updateproject',
    authenticateJwt,
    ProjectController.updateProject
)

router.get(
    '/me',
    authenticateJwt,
    UserController.me
)
module.exports = router;