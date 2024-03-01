import React from 'react';
import { ProjectNotFound, StickyDiv, StoryInput } from '../../components';
import { ShimmerAEIOU } from '../../shimmerui/index'
import useCanvas from '../../hooks/useCanvas';

function EMPATHY() {

    const { isLoading, isError, error, canvas, setCanvas, saveHandler, mutation, projectId } = useCanvas('empathy');

    if (isLoading || mutation.isLoading) return (
        <div className='flex w-screen h-screen justify-center items-center'>
            <ShimmerAEIOU />
        </div>
    )

    if (isError) return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold text-gray-600'>Oops, Something went wrong!</p>
            <p className='text-lg text-gray-400'>{error.message}</p>
        </div>
    )

    return (
        !canvas ? (
            <ProjectNotFound />
        ) : (
            <div className='w-screen flex justify-center items-center flex-col'>

                {/* //! Outer Container of the Canvas */}
                <div className='w-[1000px] h-[1250px] border-2  my-10'>
                    <div className='flex flex-col text-[27px] font-bold mt-[20px]'>
                        <div className='flex justify-between'>
                            <p className='ml-10'>Design For:</p>
                            <p className='mr-52'>Design By:</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='ml-10'>Date:</p>
                            <p className='mr-52'>Version:</p>
                        </div>
                    </div>
                    {/* //! Inner Container of the Canvas */}
                    <div className='w-[950px] mt-[20px] border-2 mx-auto'>

                        {/* //! First Row */}
                        <div className='border-b-2 w-full h-[230px] flex '>
                            <div className='w-1/2 h-full border-r-2 box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='empathy'
                                    divId='user'
                                    divName='User :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                />
                            </div>
                            <div className='w-1/2 h-full box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='empathy'
                                    divId='stackholder'
                                    divName='StackHolder :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                />
                            </div>
                        </div>

                        {/* //! Second Row */}
                        <div className='border-b-2 w-full h-[230px] relative pt-14'>
                            <StickyDiv
                                width='w-[300px]'
                                height='h-[35px]'
                                canvasId='empathy'
                                divId='activity'
                                divName='Activity :'
                                projectId={projectId}
                                canvas={canvas}
                                setCanvas={setCanvas}
                            />
                        </div>

                        {/* //! Third Row */}
                        <div className='w-full flex flex-col'>
                            <h2 className='font-bold text-[20px] text-center mt-2'>STORY BORDING</h2>
                            <div className='w-full h-[150px] border-b-2'>
                                <StoryInput
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    storyName='Happy'
                                    storyId='happy1'
                                />
                            </div>
                            <div className='w-full h-[150px] border-b-2'>
                                <StoryInput
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    storyName='Happy'
                                    storyId='happy2'
                                />
                            </div>
                            <div className='w-full h-[150px] border-b-2'>
                                <StoryInput
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    storyName='Sad'
                                    storyId='sad1'
                                />
                            </div>
                            <div className='w-full h-[150px]'>
                                <StoryInput
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    storyName='Sad'
                                    storyId='sad2'
                                />
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
        )
    )
}

export default EMPATHY
