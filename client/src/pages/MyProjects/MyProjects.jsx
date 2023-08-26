import React, { useEffect } from 'react';
import { ProjectCard } from '../../components/index';
import { useSelector, useDispatch } from 'react-redux'
import { fetchInitialProjects } from '../../features/projects/projectsSlice'

function MyProjects() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projectsReducer.isLoading);
    const projects = useSelector(state => state.projectsReducer.projects);

    useEffect(() => {
        dispatch(fetchInitialProjects());
    }, [dispatch]);

    return (
        !isLoading ? (
            <div className='w-screen h-screen flex justify-center flex-wrap'>
                {projects.map(project => (
                    <ProjectCard key={project._id} title={project.project_name} description={project.project_description} projectId={project._id} />
                ))}
            </div>
        ) : (
            <div className='flex w-screen h-screen justify-center items-center'>
                Loading....
            </div>
        )
    );
}

export default MyProjects;
