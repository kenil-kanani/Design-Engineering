const UserModel = require('../models/user');
const { AppError } = require('../utils/errors/index');
const { StatusCodes } = require('http-status-codes');

class UserRepository {

    async createUser(userDetail) {
        try {
            const user = await new UserModel(userDetail);
            await user.save();
            console.log(user);
            return user;
        } catch (error) {
            console.log("user create err - ", error)
            if (error.name === 'MongoServerError' && error.code === 11000) {
                // Duplicate email error
                throw new AppError(
                    'DuplicateEmailError',
                    'User with the same email already exists',
                    'A user with the same email address already exists. Please use a different email address.',
                    StatusCodes.CONFLICT
                );
            } else {
                // Handle other errors
                throw new AppError(
                    'RepositoryError',
                    'Not able to create new User',
                    'There was some issue with creating a new User, try again later',
                    StatusCodes.INTERNAL_SERVER_ERROR
                );
            }
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await UserModel.findOne({ email: userEmail });
            return user;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to get user by email',
                'There was some issue with get user by email, try againg later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getById(userId) {
        try {
            const user = await UserModel.findOne({ _id: userId });
            return user;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to get user by id',
                'There was some issue with getting user by id, try againg later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async updatePassword(userId, newEncryptedPassword) {
        try {
            const updatedUser = await UserModel.updateOne({ _id: userId }, { password: newEncryptedPassword });
            return updatedUser;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to update the password',
                'not able to update , try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async activeAccount(userId) {
        try {
            const updatedUser = await UserModel.updateOne({ _id: userId }, { status: true });
            return updatedUser;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to activate the user',
                'Might be wrong token, Not able to verify',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = UserRepository;