import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: authReducer,
    middleware: [thunkMiddleware]
})