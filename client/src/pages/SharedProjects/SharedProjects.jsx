import React, { useState } from 'react';
import { ProjectCard } from '../../components/index';
import { useSelector } from 'react-redux'
import { SProjectCard } from '../../shimmerui/index'
import { useQuery } from 'react-query';
import { getSharedProject } from '../../utils/projectApis';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';

function SharedProjects() {

    const [projects, setProjects] = useState([]);
    const { isLoading, isError, error } = useQuery({
        queryKey: ['projects-shared-get'],
        queryFn: () => getSharedProject(),
        staleTime: Infinity,
        onSuccess: (data) => setProjects(data)
    })

    if (isLoading) return (
        <div className='flex w-screen h-screen justify-center items-center flex-wrap'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <SProjectCard key={n} />
                ))
            }
        </div>
    )

    if (isError) return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold text-gray-600'>Oops, Something went wrong!</p>
            <p className='text-lg text-gray-400'>{error.message}</p>
        </div>
    )

    return (
        <>
            <div className='absolute top-20 left-0'>
                <BackButton backPath={'/'} />
            </div>
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
    )
}

export default SharedProjects;
