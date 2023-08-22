import React from 'react'
import { useLocation } from 'react-router-dom';
import { CanvasCard } from '../../components';

function Project() {
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
