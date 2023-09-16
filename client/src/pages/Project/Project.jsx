import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { CanvasCard } from '../../components';
import { useSelector, useDispatch } from 'react-redux'
import { fetchInitialProjects } from '../../features/projects/projectsSlice'


function Project() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projectsReducer.isLoading);

    const projects = useSelector(state => state.projectsReducer.projects);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id');
    const formattedTitle = searchParams.get('formattedTitle');


    const project = projects.find(p => p._id === projectId);


    return (
        !isLoading && !project ? (
            <div>
                <h2>Project Not Found</h2>
                <p>The requested project does not exist.</p>
            </div>
        ) : (
            !isLoading ? (
                <div className='w-screen h-screen flex justify-center flex-wrap'>
                    <CanvasCard projectId={projectId} canvasName={"AEIOU"} />
                    <CanvasCard projectId={projectId} canvasName={"Empathy"} />
                    <CanvasCard projectId={projectId} canvasName={"Ideation"} />
                    <CanvasCard projectId={projectId} canvasName={"Product Development"} />
                    <CanvasCard projectId={projectId} canvasName={"Business Model"} />
                    <CanvasCard projectId={projectId} canvasName={"LNM"} />
                </div>
            ) : (
                <div className='flex w-screen h-screen justify-center items-center'>
                    Loading....
                </div>
            )
        )
    )
}

export default Project
