import React, { useEffect } from 'react';
import { ProjectCard } from '../../components/index';
import { useSelector, useDispatch } from 'react-redux'
import { setInitialProjects } from '../../features/projects/projectsSlice'
import axios from 'axios';

function MyProjects() {

    const dispatch = useDispatch();

    const [projects, setProjects] = React.useState([]);

    const fetchProjects = async () => {
        try {
            if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
            const response = await axios.get(
                'http://localhost:3030/api/v1/getprojects',
                {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("X-access-token")
                    }
                }
            );
            console.log(response.data.data);
            return response.data.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    useEffect(() => {
        const getProjects = async () => {
            const projectsFromServer = await fetchProjects();
            console.log("From Server : ",projectsFromServer)
            dispatch(setInitialProjects(projectsFromServer));
            setProjects(projectsFromServer);
        }
        getProjects();
    }
        , []);


    // const projects = [
    //     { project_name: "Design Engineering", _id: "1" },
    //     { project_name: "Kenil Kanani", _id: "2" },
    //     { project_name: "Krish Goyani", _id: "3" }
    // ];

    return (
        <div className='w-screen h-screen flex justify-center flex-wrap'>
            {projects.map(project => (
                <ProjectCard key={project._id} title={project.project_name} description={project.project_description} projectId={project._id} />
            ))}
        </div>
    );
}

export default MyProjects;
