import React from 'react';
import { ProjectNotFound } from '../../components';
import { ShimmerAEIOU } from '../../shimmerui/index'
import useCanvas from '../../hooks/useCanvas';

const BUSINESSMODEL = () => {

    const { isLoading, isError, error, canvas, setCanvas, saveHandler, mutation, projectId } = useCanvas('businessmodel');

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
                    <div className='flex justify-between mt-[23px] text-[17px] font-semibold'>
                        <p className='text-[23px] font-bold ml-[50px] items-center'>The Business Model Canvas</p>
                        <p className='my-auto'>Designed for:</p>
                        <p className='my-auto'>Designed by:</p>
                        <p className='my-auto'>Date:</p>
                        <p className='mr-[130px] my-auto'>Version:</p>
                    </div>
                    <div className='h-[900px] w-[1250px] border-2 mx-auto mt-[22px]'>
                        {/* //-First Row */}
                        <div className='h-[650px] border-b-2 flex'>
                            {/* 1 */}
                            <div className='w-[20%] h-full border-r-2'>
                                <Input
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    inputName='Key Partners'
                                    inputId='key_partners'
                                />
                            </div>
                            {/* 2 */}
                            <div className='w-[20%] h-full border-r-2'>
                                <div className='w-full h-1/2 border-b-2'>
                                    <Input
                                        canvas={canvas}
                                        setCanvas={setCanvas}
                                        inputName='Key Activities'
                                        inputId='key_activities'
                                    />
                                </div>
                                <div className='w-full h-1/2'>
                                    <Input
                                        canvas={canvas}
                                        setCanvas={setCanvas}
                                        inputName='Key Resources'
                                        inputId='key_resources'
                                    />
                                </div>
                            </div>
                            {/* 3 */}
                            <div className='w-[20%] h-full border-r-2'>
                                <Input
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    inputName='Value Proposition'
                                    inputId='value_proposition'
                                />
                            </div>
                            {/* 4 */}
                            <div className='w-[20%] h-full border-r-2'>
                                <div className='w-full h-1/2 border-b-2'>
                                    <Input
                                        canvas={canvas}
                                        setCanvas={setCanvas}
                                        inputName='Customer Relationships'
                                        inputId='customer_relationships'
                                    />
                                </div>
                                <div className='w-full h-1/2'>
                                    <Input
                                        canvas={canvas}
                                        setCanvas={setCanvas}
                                        inputName='Channels'
                                        inputId='channels'
                                    />
                                </div>
                            </div>
                            {/* 5 */}
                            <div className='w-[20%] h-full'>
                                <Input
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    inputName='Customer Segments'
                                    inputId='customer_segments'
                                />
                            </div>
                        </div>
                        {/* //-Second Row */}
                        <div className='h-[250px] flex'>
                            <div className='w-[50%] h-[90%] border-r-2'>
                                <Input
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    inputName='Cost Structure'
                                    inputId='cost_structure'
                                />
                            </div>
                            <div className='w-[50%] h-[90%]'>
                                <Input
                                    canvas={canvas}
                                    setCanvas={setCanvas}
                                    inputName='Revenue Streams'
                                    inputId='revenue_streams'
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

export default BUSINESSMODEL


const Input = ({ canvas, setCanvas, inputName, inputId }) => {
    return (
        <div className='w-[90%] h-full flex flex-col mx-auto gap-[10px]'>
            <h3 className='font-semibold'> {inputName}</h3>
            <textarea
                spellCheck="false"
                className='w-full h-[86%] mx-auto my-auto text-sm break-words resize-none'
                type="text"
                value={canvas[inputId]}
                onChange={(e) => setCanvas({ ...canvas, [inputId]: e.target.value })}
            />
        </div>
    )
}