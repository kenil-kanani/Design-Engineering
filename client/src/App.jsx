import './App.css'
import React, { useEffect } from "react";
import { Navbar, ToastContainer, LoadingMain } from './components/index'
import { CustomRoutes } from './routes/index';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthStatus } from './features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function App() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(checkAuthStatus({ dispatch, navigate }))
    }, []);

    const isLoading = useSelector(state => state.authReducer.isLoading)

    return (
        <>
            <ToastContainer />
            {!isLoading ?
                (<>
                    <Navbar />
                    <CustomRoutes />
                </>)
                :
                (<LoadingMain />)
            }
        </>
    )
}

export default App
