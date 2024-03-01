import React from 'react';
import { ProjectNotFound, StickyDiv } from '../../components';
import { ShimmerAEIOU } from '../../shimmerui/index'
import useCanvas from '../../hooks/useCanvas';

function IDEATION() {

    const { isLoading, isError, error, canvas, setCanvas, saveHandler, mutation, projectId } = useCanvas('ideation');

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

    // const project = data;

    return (
        !canvas ? (
            <ProjectNotFound />
        ) : (
            <div className='w-screen flex justify-center items-center flex-col my-10 '>
                {/* // - Canvas */}
                <div className='w-[1250px] h-[700px] border-2'>
                    <div className='flex justify-around text-[23px] my-auto mt-[20px]'>
                        <p>The Ideanaut: Ideation Canvas</p>
                        <p className='font-bold'>Project:</p>
                        <p className='font-bold'>Team:</p>
                    </div>
                    <div className='w-[1190px] h-[600px]  mx-auto mt-[20px] border-2'>
                        {/* //-First Row */}
                        <div className='w-full h-[140px]  relative pt-[10px] border-b-2'>
                            <StickyDiv
                                width='w-[300px]'
                                height='h-[35px]'
                                canvasId='ideation'
                                divId='people'
                                divName='People :'
                                projectId={projectId}
                                canvas={canvas}
                                setCanvas={setCanvas}
                                maxStickyCount={4}
                            />
                        </div>

                        {/* //-Second Row */}
                        <div className='w-full h-[230px]  flex border-b-2'>
                            {/* <StickyDiv /> */}
                            <div className='w-[50%]  h-full border-r-2 relative pt-14'>
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='ideation'
                                    divId='activities'
                                    divName='Activities :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                />
                            </div>
                            <div className='w-[50%]  h-full relative pt-14'>

                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='ideation'
                                    divId='situation_context_location'
                                    divName='Situation / Context / Location :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                />
                            </div>
                        </div>

                        {/* //-Third Row */}
                        <div className='w-full h-[230px] relative pt-14'>
                            <StickyDiv
                                width='w-[300px]'
                                height='h-[35px]'
                                canvasId='ideation'
                                divId='props_tools_objects_equipment'
                                divName='Props / Tools / Objects / Equipment :'
                                projectId={projectId}
                                canvas={canvas}
                                setCanvas={setCanvas}
                            />
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

export default IDEATION


