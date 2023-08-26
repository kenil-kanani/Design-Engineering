import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { CanvasCard } from '../../components';
import { useSelector, useDispatch } from 'react-redux'
import { fetchInitialProjects } from '../../features/projects/projectsSlice'


function Project() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projectsReducer.isLoading);

    useEffect(() => {
        dispatch(fetchInitialProjects());
    }, [dispatch]);

    if (isLoading) {
        console.log("Rendering loading screen...");
        return <div className='flex w-screen h-screen justify-center items-center'>
            Loading....
        </div>;
    }
    
    const { state } = useLocation();
    const projectId = state.projectId;
    const title = state.title;
    const formattedTitle = state.formattedTitle;



    return (
        <div className='w-screen h-screen flex justify-center flex-wrap'>
            {/* <p>Project ID: {projectId}</p> */}
            <CanvasCard title={title} projectId={projectId} canvasName={"AEIOU"} formattedTitle={formattedTitle} />
            <CanvasCard title={title} projectId={projectId} canvasName={"Empathy"} />
            <CanvasCard title={title} projectId={projectId} canvasName={"Ideation"} />
            <CanvasCard title={title} projectId={projectId} canvasName={"Product Development"} />
            <CanvasCard title={title} projectId={projectId} canvasName={"Business Model"} />
            <CanvasCard title={title} projectId={projectId} canvasName={"LNM"} />
        </div>
    )
}

export default Project
