const { AppError } = require('../utils/errors/index');
const { StatusCodes } = require('http-status-codes');
const ProfileModel = require('../models/profile');

class ProfileRepository {
    async createProfile(profileData) {
        try {
            const profile = new ProfileModel(profileData);
            await profile.save();
            return profile;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to crete Profile',
                'Something went wrong with creating user profile , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async updateProfile(userId, updateProfileData) {
        try {
            const updatedProfile = ProfileModel.updateOne({ owner_id: userId }, updateProfileData);
            console.log(updatedProfile);
            console.log(updateProfileData);
            return updatedProfile;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to update Profile',
                'Something went wrong with updating user profile , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getProfile(userId) {
        try {
            const profile = await ProfileModel.findOne({ owner_id: userId });
            return profile;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Not able to get Profile',
                'Something went wrong with getting user profile , come back again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

module.exports = ProfileRepository;