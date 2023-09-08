import React from 'react'
import './ShimmerAEIOU.css'

function Notes() {
    return (
        <>
            <div className='w-[100px] h-[24px] shimmer-note absolute top-3 left-3'></div>
            <div className='w-[16px] h-[16px] shimmer-note absolute top-3 right-3'></div>
            <div className='shimmer-note h-[34px] w-[300px]  mx-auto'></div>
            <div className='shimmer-note h-[34px] w-[300px]  mx-auto'></div>
            <div className='shimmer-note h-[34px] w-[300px]  mx-auto'></div>
            <div className='shimmer-note h-[34px] w-[300px]  mx-auto'></div>
            <div className='shimmer-note h-[34px] w-[300px]  mx-auto'></div>
        </>
    )
}

function ShimmerAEIOU() {

    return (
        <div className='h-[716px] w-[1270px] border'>
            {/* First Row */}
            <div className='h-[100px]'>

            </div>

            {/* Second Row */}
            <div className='h-[295px] flex'>
                <div className='w-1/3 h-full pt-[40px] flex flex-col justify-center gap-2 relative border'>
                    <Notes />
                </div>
                <div className='w-1/3 h-full pt-[40px] flex flex-col justify-center gap-2 relative border'>
                    <Notes />
                </div>
                <div className='w-1/3 h-full pt-[40px] flex flex-col justify-center gap-2 relative border'>
                    <Notes />
                </div>
            </div>

            {/* Third Row */}
            <div className='h-[320px] flex'>
                <div className='w-1/2 h-full pt-[40px] flex flex-col justify-center gap-2 relative border'>
                    <Notes />
                </div>
                <div className='w-1/2 h-full pt-[40px] flex flex-col justify-center gap-2 relative border'>
                    <Notes />
                </div>
            </div>
        </div>
    )
}

export default ShimmerAEIOU
