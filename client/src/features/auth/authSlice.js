import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: { name: 'ok', email: '' },
    isAuthenticated: false
}

// export const fetchDefaultAuthStatus = () => async (dispatch) => {

//     try {
//         if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
//         const response = await axios.get(
//             'http://localhost:3030/api/v1/me',
//             {
//                 headers: {
//                     "Authorization": "Bearer " + localStorage.getItem("X-access-token")
//                 }
//             }
//         );
//         dispatch(setIsAuthenticated(true));
//     } catch (error) {
//         dispatch(setIsAuthenticated(false));
//         console.log("Error from rudux store : ", error);
//     }
// };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    }
});

export const { setUser, setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;