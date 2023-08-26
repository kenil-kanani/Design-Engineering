import React from 'react';
import { ProjectCard } from '../../components/index';
import { useSelector, useDispatch } from 'react-redux'
import { BsPatchPlusFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { createNewProject } from '../../features/projects/projectsSlice';

function MyProjects() {

    const [isProjectFormVisible, setIsProjectFormVisible] = React.useState(false);



    function AddProjectForm() {

        const [projectName, setProjectName] = React.useState('');
        const [projectDescription, setProjectDescription] = React.useState('');

        const dispatch = useDispatch();


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
                        dispatch(createNewProject({ projectName, projectDescription }));
                    }}>Create Project</button>
                </form >
            </>
        )
    }

    const isLoading = useSelector(state => state.projectsReducer.isLoading);
    const projects = useSelector(state => state.projectsReducer.projects);

    return (
        !isLoading ? (
            <>
                <div className='w-screen h-screen flex justify-center flex-wrap'>
                    {projects.map(project => (
                        <ProjectCard key={project._id} title={project.project_name} description={project.project_description} projectId={project._id} />
                    ))}
                </div>
                {isProjectFormVisible &&
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
        ) : (
            <div className='flex w-screen h-screen justify-center items-center '>
                Loading....
            </div>
        )
    );
}

export default MyProjects;
