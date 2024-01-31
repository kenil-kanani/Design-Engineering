import React, { useState } from 'react';
import { ProjectNotFound, StickyDiv } from '../../components';
import { useLocation } from 'react-router-dom';
import { ShimmerAEIOU } from '../../shimmerui/index'
import { useQuery, useMutation } from 'react-query';
import { toast } from "react-toastify";
import { getCanvasData, updateCanvasData } from '../../utils/projectApis';


function AEIOU() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id');
    const [canvas, setCanvas] = useState(null);


    const { isLoading, isError, error } = useQuery({
        queryKey: ['project-aeiou-get'],
        queryFn: () => getCanvasData({ projectId, canvasName: 'aeiou' }),
        staleTime: Infinity,
        onSuccess: (data) => setCanvas(data)
    })

    

    const mutation = useMutation(
        {
            mutationKey: ['project-aeiou-update'],
            mutationFn: () => updateCanvasData({ projectId, canvasName: 'aeiou', canvas }),
            staleTime: Infinity,
            onSuccess: () => toast.success("Project Updated Successfully"),
            onError: (error) => toast.error(`Something went wrong: ${error.message}`),
        }
    )

    const saveHandler = (e) => {
        mutation.mutate()
    }

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
            <div className='w-screen flex justify-center items-center flex-col my-10'>
                {/* // - Canvas */}
                <div className='h-[700px] w-[1254px] border-2  flex-col box-border'>
                    {/* // - First Row Start*/}
                    <div className='h-[99px] w-[1252px] border-b-[2px] box-border flex justify-around'>
                        <h1 className='my-auto font-bold text-[30px]'>AEIOU Summary:</h1>
                        <div className='my-auto flex flex-col gap-2'>
                            <p>Group ID:</p>
                            <p>Domain Name:</p>
                        </div>
                        <p className='my-auto'>Date:</p>
                        <p className='my-auto'>Version:</p>
                    </div>
                    {/* // - First Row End*/}

                    {/* // - Second Row Start */}
                    <div className='h-[286px] w-[1252px] border-b-[2px] box-border flex'>
                        {/* //! Environment */}
                        <div
                            id='environment'
                            className='h-full w-[33%] border-r-[2px] box-border relative pt-14'
                        >
                            <StickyDiv
                                width='w-[300px]'
                                height='h-[35px]'
                                canvasId='aeiou'
                                divId='environment'
                                divName='Environment :'
                                projectId={projectId}
                                canvas={canvas}
                                setCanvas={setCanvas}
                            />
                        </div>

                        {/* //! Interaction */}
                        <div
                            id='interaction'
                            className='h-full w-[33%] box-border relative pt-14'
                        >
                            <StickyDiv
                                width='w-[300px]'
                                height='h-[35px]'
                                canvasId='aeiou'
                                divId='interaction'
                                divName='Interaction :'
                                projectId={projectId}
                                canvas={canvas}
                                setCanvas={setCanvas}
                            />
                        </div>

                        {/* //! Objects */}
                        <div
                            id='objects'
                            className='h-full w-[33%] border-l-[2px] box-border relative pt-14'
                        >
                            <StickyDiv
                                width='w-[300px]'
                                height='h-[35px]'
                                canvasId='aeiou'
                                divId='objects'
                                divName='Objects :'
                                projectId={projectId}
                                canvas={canvas}
                                setCanvas={setCanvas}
                            />
                        </div>
                    </div>
                    {/* // - Second Row End */}

                    {/* // - Third Row Start */}
                    <div className='h-[310px] w-[1252px] flex'>
                        {/* //! Activity */}
                        <div
                            id='activity'
                            className='h-full w-[50%] border-r-[2px] relative pt-14'
                        >
                            <StickyDiv
                                width='w-[300px]'
                                height='h-[35px]'
                                canvasId='aeiou'
                                divId='activity'
                                divName='Activity :'
                                projectId={projectId}
                                canvas={canvas}
                                setCanvas={setCanvas}
                            />
                        </div>

                        {/* //! Users */}
                        <div
                            id='users'
                            className='h-full w-[50%] relative pt-14'
                        >
                            <StickyDiv
                                width='w-[300px]'
                                height='h-[35px]'
                                canvasId='aeiou'
                                divId='users'
                                divName='Users :'
                                projectId={projectId}
                                canvas={canvas}
                                setCanvas={setCanvas}
                            />
                        </div>
                    </div>
                    {/* // - Third Row End */}
                </div>
                {/* // - Canvas End */}
                <button
                    className='w-[70px] h-[70px] text-sm bg-[#1a1a1a] hover:bg-[#444141] text-white absolute top-20 rounded-l-[50%] right-0'
                    onClick={saveHandler}
                >
                    Save
                </button>
            </div>
        )
    );
}

export default AEIOU;