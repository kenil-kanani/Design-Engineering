import React from 'react'
import { Login, SignUp, Home, Contact, Verify, MyProfile, MyProjects, Project, AEIOU } from '../../pages/index'
import { PrivateRoute, PublicRoutes } from '../index';
import { Route, Routes } from "react-router-dom"


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
                    <AEIOU />
                </PrivateRoute>
            } />
        </Routes>
    )
}

export default CustomRoutes
