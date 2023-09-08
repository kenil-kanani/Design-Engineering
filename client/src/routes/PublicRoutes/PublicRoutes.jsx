import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicRoutes({ children }) {
    const navigate = useNavigate();
    // const { isAuthenticated } = useContext(AuthContext);
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, []);

    return <>{children}</>;
}

export default PublicRoutes;
