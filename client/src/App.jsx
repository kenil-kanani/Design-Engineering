import './App.css'
import { AuthContext } from './context/AuthContext';
import React, { useEffect, useContext, useState } from "react";
import { Navbar, ToastContainer, LoadingMain } from './components/index'
import { CustomRoutes } from './routes/index';

function App() {


    const { isValid } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    async function checkAuth() {
        try {
            await isValid();
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

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
