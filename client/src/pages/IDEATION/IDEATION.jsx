import React, { useState } from 'react';
import { ProjectNotFound, StickyDiv } from '../../components';
import { useLocation } from 'react-router-dom';
import { ShimmerAEIOU } from '../../shimmerui/index'
import { useQuery, useMutation } from 'react-query';
import { toast } from "react-toastify";
import { getCanvasData, updateCanvasData } from '../../utils/projectApis';

function IDEATION() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id');
    const [canvas, setCanvas] = useState(null);


    const { isLoading, isError, error } = useQuery({
        queryKey: ['project-ideation-get'],
        queryFn: () => getCanvasData({ projectId, canvasName: 'ideation' }),
        staleTime: Infinity,
        onSuccess: (data) => setCanvas(data)
    })


    const mutation = useMutation(
        {
            mutationKey: ['project-ideation-update'],
            mutationFn: () => updateCanvasData({ projectId, canvasName: 'ideation', canvas }),
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
                
            </div>
        )
    )
}

export default IDEATION


