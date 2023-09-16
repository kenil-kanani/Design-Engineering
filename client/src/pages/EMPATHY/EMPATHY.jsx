import React from 'react'
import { ProjectNotFound, StickyDiv } from '../../components'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../../features/projects/projectsSlice';

function EMPATHY() {

    const isLoading = useSelector(state => state.projectsReducer.isLoading);
    const projects = useSelector(state => state.projectsReducer.projects);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id');

    const project = projects?.find(p => p._id === projectId);
    const dispatch = useDispatch();
    const saveHandler = (e) => {
        dispatch(updateProject(projectId));
    }

    return (
        !isLoading && !project ? (
            <ProjectNotFound />
        ) : (
            !isLoading ? (
                <div className='w-screen flex justify-center items-center flex-col'>

                    {/* //! Outer Container of the Canvas */}
                    <div className='w-[1000px] h-[1250px] border-2  my-10'>

                        {/* //! Inner Container of the Canvas */}
                        <div className='w-[950px] mt-[120px] border-2 mx-auto'>

                            {/* //! First Row */}
                            <div className='border-b-2 w-full h-[230px] flex '>
                                <div className='w-1/2 h-full border-r-2 box-border relative pt-14'>
                                    {/* <StickyDiv
                                        width='w-[300px]'
                                        height='h-[35px]'
                                        canvasId='empathy'
                                        divId='user'
                                        divName='User :'
                                        projectId={projectId}
                                    /> */}
                                </div>
                                <div className='w-1/2 h-full box-border relative pt-14'>
                                    <StickyDiv
                                        width='w-[300px]'
                                        height='h-[35px]'
                                        canvasId='empathy'
                                        divId='stackholder'
                                        divName='StackHolder :'
                                        projectId={projectId}
                                    />
                                </div>
                            </div>

                            {/* //! Second Row */}
                            <div className='border-b-2 w-full h-[230px] relative pt-14'>
                                {/* <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='empathy'
                                    divId='activity'
                                    divName='Activity :'
                                    projectId={projectId}
                                /> */}
                            </div>

                            {/* //! Third Row */}
                            <div className='w-full flex flex-col'>
                                <h2 className='font-bold text-[20px] text-center mt-2'>STORY BORDING</h2>
                                <div className='w-full h-[150px] border-b-2'>

                                </div>
                                <div className='w-full h-[150px] border-b-2'>

                                </div>
                                <div className='w-full h-[150px] border-b-2'>

                                </div>
                                <div className='w-full h-[150px]'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className='w-[70px] h-[70px] text-sm bg-[#1a1a1a] hover:bg-[#444141] text-white absolute top-20 rounded-l-[50%] right-0'
                        onClick={saveHandler}
                    >
                        Save
                    </button>
                </div>
            ) : (
                <>
                    <h1>Loader</h1>
                </>
            )
        )
    )
}

export default EMPATHY
