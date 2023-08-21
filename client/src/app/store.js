import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import projectsReducer from '../features/projects/projectsSlice'
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        authReducer,
        projectsReducer
    },
    middleware: [thunkMiddleware]
})