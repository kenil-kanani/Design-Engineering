import React from 'react';
import { ProjectCard } from '../../components/index';
import { useSelector } from 'react-redux'
import { SProjectCard } from '../../shimmerui/index'

function SharedProjects() {

    const isLoading = useSelector(state => state.projectsReducer.isLoading);
    const projects = useSelector(state => state.projectsReducer.projects.filter(project => project.type === 'shared'));


    return (
        !isLoading ? (
            <>
                {projects.length === 0 ? (
                    <div className='w-screen h-screen flex flex-col justify-center items-center'>
                        <p className='text-4xl font-bold text-gray-600'>Oops, No projects available!</p>
                        <p className='text-lg text-gray-400'>Start by creating a new project.</p>
                    </div>

                ) : (
                    <div className='w-screen h-screen flex justify-center flex-wrap'>
                        {projects.map(project => (
                            <ProjectCard key={project._id} title={project.project_name} description={project.project_description} projectId={project._id} />
                        ))}
                    </div >
                )
                }
            </>
        ) : (
            <div className='flex w-screen h-screen justify-center items-center flex-wrap'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <SProjectCard key={n} />
                    ))
                }
            </div>
        )
    );
}

export default SharedProjects;
