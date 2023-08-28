import React from 'react'
import './SAEIOU.css'
import { SStickyNote } from '../index'

function BunchOFNotes() {
    return (
        <>
            {[1, 2, 3, 4, 5].map((el, index) => {
                return (
                    <div className='py-[10px]'>
                        <SStickyNote
                            width={300}
                            height={34}
                            key={index}
                        />
                    </div>
                )
            })}
        </>
    )
}

function SAEIOU() {
    return (
        <div className='w-[1252px] h-[716px] '>
            <div className='w-[100%] h-[100px]'>

            </div>
            <div className='h-[286px] w-[100%]'>
                <BunchOFNotes />
                <BunchOFNotes />
            </div>
            <div className='w-[100%] h-[310px]'>

            </div>
        </div>
    )
}

export default SAEIOU
