const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');
const { StatusCodes } = require('http-status-codes');


const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // if (!authHeader) {
    //     // Handle the case when the authorization header is not present
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }
    const token = authHeader.split(' ')[1];

    // console.log("Token : ", token)
    if (token != "null") {
        jwt.verify(token, JWT_KEY, (error, user) => {
            if (error) {
                console.log("In Middelware error - ", error)
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: 'Invalid Token!!!',
                    data: {},
                    success: false,
                    err: error
                });
            }
            req.user = user;
            // console.log("User - " , user)
            next();
        });
    } else {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Invalid Token from middleware!!!',
            data: {},
            success: false,
        });
    }
};

module.exports = {
    authenticateJwt,
}