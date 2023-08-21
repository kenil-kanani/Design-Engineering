import React, { useState } from 'react'
import { StickyDiv } from '../../components'

const Contact = () => {

    let style = {
        transitionProperty: 'transform',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
    };

    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            Contact Page
            <p className='h-screen w-screen sm:hidden flex items-center justify-center text-[25px]'>Use in Desktop Mode</p>
            {/* // - Canvas */}
            <div className='p-2 w-min h-min 1270px:scale-[0.9] 1270px:transition-all 1270px:translate-x-[-50px] 1160px:scale-[0.8] 1160px:translate-x-[-125px] 1020px:scale-[0.7] 1020px:translate-x-[-190px] 890px:hidden' style={style}>
                <div className='h-[700px] w-[1254px] border-2  flex-col box-border'>

                    {/* // - First Row Start*/}
                    <div className='h-[99px] w-[1252px] border-b-[2px] box-border'></div>
                    {/* // - First Row End*/}

                    {/* // - Second Row Start */}
                    <div className='h-[286px] w-[1252px] border-b-[2px] box-border flex'>

                        {/* //! Environment */}
                        <div id='environment' className='h-full w-[33%] border-r-[2px] box-border relative'>
                            <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                Environment : ok
                            </p>
                            <StickyDiv width='w-[300px]' height='h-[35px]' canvasId="aeiou" divId="environment" projectId="1"></StickyDiv>
                        </div>

                        {/* //! Interaction */}
                        <div id='interaction' className='h-full w-[33%] box-border relative'>
                            <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                Interaction : ok
                            </p>
                            <StickyDiv width='w-[300px]' height='h-[35px]' canvasId="aeiou" divId="interaction" projectId="1"></StickyDiv>
                        </div>

                        {/* //! Objects */}
                        <div id='objects' className='h-full w-[33%] border-l-[2px] box-border relative'>
                            <p className='mt-2 px-2 flex justify-between w-[103%]'>
                                Objects : ok
                            </p>
                            <StickyDiv width='w-[300px]' height='h-[35px]' canvasId="aeiou" divId="objects" projectId="1"></StickyDiv>
                        </div>

                    </div> {/* // - Second Row End */}

                    {/* // - Third Row Start */}
                    <div className='h-[310px] w-[1252px] flex'>

                        {/* //! Activity */}
                        <div id='activity' className='h-full w-[50%] border-r-[2px] relative'>
                            <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                Activity : ok
                            </p>
                            <StickyDiv width='w-[300px]' height='h-[35px]' canvasId="aeiou" divId="activity" projectId="1"></StickyDiv>
                        </div>

                        {/* //! Users */}
                        <div id='users' className='h-full w-[50%] relative'>
                            <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                Users : ok
                            </p>
                            <StickyDiv width='w-[300px]' height='h-[35px]' canvasId="aeiou" divId="users" projectId="1"></StickyDiv>
                        </div>

                    </div> {/* // - Third Row End */}

                </div> {/* // - Canvas End */}
            </div>


        </div>
    )
}

export default Contact
