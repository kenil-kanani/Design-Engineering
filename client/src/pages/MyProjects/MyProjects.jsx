import React from 'react';
import { ProjectCard } from '../../components/index';

function MyProjects() {
    const projects = [
        { title: "Design Engineering", projectId: "1" },
        { title: "Kenil Kanani", projectId: "2" },
        { title: "Krish Goyani", projectId: "3" }
    ];

    return (
        <div className='w-screen h-screen flex justify-center flex-wrap'>
            {projects.map(project => (
                <ProjectCard key={project.projectId} title={project.title} projectId={project.projectId} />
            ))}
        </div>
    );
}

export default MyProjects;
