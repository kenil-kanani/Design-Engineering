import React from 'react';
import { ProjectCard } from '../../components/index';
import { BsPatchPlusFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { SProjectCard } from '../../shimmerui/index'
import { useMutation, useQuery } from 'react-query';
import { createNewProject, getMyProjects } from '../../utils/projectApis';
import { toast } from "react-toastify";

function MyProjects() {

    const [isProjectFormVisible, setIsProjectFormVisible] = React.useState(false);
    const [projects, setProjects] = React.useState([]);

    function AddProjectForm() {

        const [projectName, setProjectName] = React.useState('');
        const [projectDescription, setProjectDescription] = React.useState('');

        const mutation = useMutation({
            mutationKey: ['project-create'],
            mutationFn: () => createNewProject({ projectName, projectDescription }),
            onSuccess: (data) => {
                toast.success("Project Created Successfully")
                setProjects([...projects, { project_name: data.project_name, project_description: data.project_description, _id: data._id }])
            },
            onError: (error) => toast.error(`Something went wrong: ${error.message}`),
        })

        return (
            <>
                <form className='form relative'>
                    <div className='absolute top-2 right-2 text-2xl cursor-pointer text-red-500' onClick={() => { setIsProjectFormVisible(false) }}>
                        <AiFillCloseCircle />
                    </div>
                    <div className='flex-column'>
                        <label>Title</label>
                    </div>
                    <div className='inputForm'>
                        <input
                            placeholder='Title Of The Project'
                            className='input'
                            type='text'
                            value={projectName}
                            onChange={(event) => {
                                setProjectName(event.target.value);
                            }}
                        />
                    </div>
                    <div className='flex-column'>
                        <label>Description </label>
                    </div>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        type='text'
                        value={projectDescription}
                        onChange={(event) => {
                            setProjectDescription(event.target.value);
                        }}
                        placeholder='Description Of The Project'
                        className='p-2'
                        style={{ border: "1.5px solid #ecedec" }}>
                    </textarea>

                    <button className='button-submit' onClick={(event) => {
                        event.preventDefault();
                        setIsProjectFormVisible(false);
                        mutation.mutate();
                    }}>Create Project</button>
                </form >
            </>
        )
    }

    const { isLoading, isError, data, error } = useQuery({
        queryKey: 'myprojects',
        queryFn: () => getMyProjects(),
        onSuccess: (data) => setProjects(data),
        staleTime: Infinity,
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

    // const projects = data;


    return (
        <>
            {projects.length === 0 ? (
                <div className='w-screen h-screen flex flex-col justify-center items-center'>
                    <p className='text-4xl font-bold text-gray-600'>Oops, No projects available!</p>
                    <p className='text-lg text-gray-400'>Start by creating a new project.</p>
                </div>

            ) : (
                <div className='w-screen h-screen flex justify-center flex-wrap'>
                    {projects.map(project => (
                        <ProjectCard key={project._id} title={project.project_name} description={project.project_description} projectId={project._id} setProjects={setProjects} />
                    ))}
                </div >
            )
            }
            {
                isProjectFormVisible &&
                <div className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center mt-[70px]'>
                    <AddProjectForm />
                </div>
            }
            <button
                className='w-[60px] h-[60px] text-3xl bg-[#1a1a1a] hover:bg-[#444141] text-white absolute top-20 rounded-l-[50%] right-0 flex justify-center items-center text-blue-400'
                onClick={() => {
                    setIsProjectFormVisible(!isProjectFormVisible);
                }}
            >
                {isProjectFormVisible &&
                    <div className='text-3xl cursor-pointer text-red-500'>
                        <AiFillCloseCircle />
                    </div>
                }
                {!isProjectFormVisible && <BsPatchPlusFill />}
            </button>
        </>
    )
}

export default MyProjects;
