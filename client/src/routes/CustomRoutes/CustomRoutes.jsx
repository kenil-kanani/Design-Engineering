import React from 'react'
import { Login, SignUp, Home, Contact, Verify, MyProfile, MyProjects, Project } from '../../pages/index'
import { PrivateRoute, PublicRoutes } from '../index';
import { Route, Routes, useParams } from "react-router-dom"
import { AEIOU, EMPATHY } from '../../pages/index';


function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/profile' element={<PrivateRoute>
                <MyProfile />
            </PrivateRoute>} />
            <Route path="/signup" element={<PublicRoutes>
                <SignUp />
            </PublicRoutes>} />
            <Route path="/signin" element={<PublicRoutes>
                <Login />
            </PublicRoutes>} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/contact" element={
                <PrivateRoute>
                    <Contact />
                </PrivateRoute>
            } />
            <Route path="/myprojects" element={
                <PrivateRoute>
                    <MyProjects />
                </PrivateRoute>
            } />
            <Route path="/myprojects/:projectname" element={
                <PrivateRoute>
                    <Project />
                </PrivateRoute>
            } />
            <Route path="/myprojects/:projectname/:canvasname" element={
                <PrivateRoute>
                    <Canvases />
                </PrivateRoute>
            } />
        </Routes>
    )
}

export default CustomRoutes


function Canvases() {
    //* Access the canvasname parameter from the route
    let { canvasname } = useParams();

    //* Conditionally render components based on the canvasname parameter
    if (canvasname === 'aeiou') {
        return <AEIOU />;
    } else if (canvasname === 'empathy') {
        return <EMPATHY />;
    } else {
        return <>Nothing</>
    }
}