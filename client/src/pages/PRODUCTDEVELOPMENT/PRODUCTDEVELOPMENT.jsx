import React from 'react';
import { ProjectNotFound, StickyDiv } from '../../components';
import { ShimmerAEIOU } from '../../shimmerui/index'
import useCanvas from '../../hooks/useCanvas';

const PRODUCTDEVELOPMENT = () => {

    const { isLoading, isError, error, canvas, setCanvas, saveHandler, mutation, projectId } = useCanvas('productdevelopment');

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
            <div className='w-screen flex justify-center items-center flex-col my-10'>
                <div className='h-[1000px] w-[1320px] border-2  '>
                    <div className='flex justify-between mt-[15px] text-[24px] font-semibold'>
                        <p className='text-[30px] font-bold ml-[50px] items-center'>Product Development Canvas</p>
                        <p className='my-auto'>Team:</p>
                        <p className='my-auto'>Date:</p>
                        <p className='mr-[200px] my-auto'>Version:</p>
                    </div>
                    <div className='w-[1250px] border-2 h-[900px] mx-auto flex mt-[15px]'>
                        {/*//- First Column */}
                        <div className='w-[300px] h-full'>
                            <div className='h-[50%] w-full border-r-[2px] border-b-2 box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[250px]'
                                    height='h-[30px]'
                                    canvasId='productdevelopment'
                                    divId='purpose'
                                    divName='Purpose :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                />
                            </div>
                            <div className='h-[50%] w-full border-r-[2px] box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[250px]'
                                    height='h-[30px]'
                                    canvasId='productdevelopment'
                                    divId='people'
                                    divName='People :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                />
                            </div>
                        </div>

                        {/* //- Second Column */}
                        <div className='w-[600px] h-full '>
                            <div className='h-[18%] w-full border-r-[2px] border-b-2 box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[30px]'
                                    canvasId='productdevelopment'
                                    divId='product_experience'
                                    divName='Product Experience :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    maxStickyCount={3}
                                />
                            </div>
                            <div className='h-[23%] w-full border-r-[2px] border-b-2 box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[30px]'
                                    canvasId='productdevelopment'
                                    divId='product_functions'
                                    divName='Product Functions :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    maxStickyCount={5}
                                />
                            </div>
                            <div className='h-[25%] w-full border-r-[2px] border-b-2 box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[30px]'
                                    canvasId='productdevelopment'
                                    divId='product_features'
                                    divName='Product Features :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    maxStickyCount={5}
                                />
                            </div>
                            <div className='h-[34%] w-full border-r-[2px] box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[30px]'
                                    canvasId='productdevelopment'
                                    divId='components'
                                    divName='Components :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                />
                            </div>
                        </div>

                        {/* //-Third Column */}
                        <div className='w-[350px] h-full'>
                            <div className='h-[50%] w-full border-r-[2px] border-b-2 box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[250px]'
                                    height='h-[30px]'
                                    canvasId='productdevelopment'
                                    divId='customer_revalidation'
                                    divName='Customer Revalidation :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                />
                            </div>
                            <div className='h-[50%] w-full border-r-[2px] box-border relative pt-14'>
                                <StickyDiv
                                    width='w-[250px]'
                                    height='h-[30px]'
                                    canvasId='productdevelopment'
                                    divId='reject_redesign_retain'
                                    divName='Reject Redesign Retain :'
                                    projectId={projectId}
                                    canvas={canvas}
                                    setCanvas={setCanvas}
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

export default PRODUCTDEVELOPMENT
