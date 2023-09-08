import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { me } from '../../apis';

const initialState = {
    user: {
        name: 'ok',
        email: 'kenil.in'
    },
    isAuthenticated: false,
    isLoading: false
}

//! Async thunk to check if user is authenticated or not
export const checkAuthStatus = createAsyncThunk("auth/checkAuthStatus", async ({ dispatch, navigate }) => {
    try {
        dispatch(setLoading(true))
        const response = await me();
        if (response != null) {
            if (response.status) {
                dispatch(setLoading(false))
                dispatch(setIsAuthenticated(true));
                dispatch(setUser({ email: response.email, name: response.name }));
            }
            else {
                dispatch(setLoading(false))
                dispatch(setIsAuthenticated(false));
                navigate('/verify');
            }
        }
        else {
            dispatch(setIsAuthenticated(false));
            dispatch(setLoading(false))
        }
    } catch (error) {
        dispatch(setIsAuthenticated(false));
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        logOutUser: (state, action) => {
            toast.success("Logged out successfully");
            localStorage.removeItem("X-access-token");
            state.user = {};
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {

    }

});

export const { setUser, setIsAuthenticated, logOutUser, setLoading } = authSlice.actions;

export default authSlice.reducer;