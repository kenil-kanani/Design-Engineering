import React, { useState, useMemo } from 'react';
import { StickyNote } from '../index';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

function StickyDiv({ width, height, canvasId, divId, divName, projectId, canvas, setCanvas }) {
    const [isFeatureVisible, setIsFeatureVisible] = useState(false);
    const stickyCount = canvas[divId].stickyCount;
    const bgColor = canvas[divId].stickyColor;

    const arr = useMemo(() => {
        const stickyNoteComponents = [];
        for (let index = 0; index < stickyCount; index++) {
            stickyNoteComponents.push(
                <StickyNote
                    key={index}
                    stickyNoteIndex={index}
                    bgColor={bgColor}
                    width={width}
                    height={height}
                    projectId={projectId}
                    canvasId={canvasId}
                    divId={divId}
                    canvas={canvas}
                    setCanvas={setCanvas}
                />
            );
        }
        return stickyNoteComponents;
    }, [stickyCount, bgColor, width, height, projectId, canvasId, divId, canvas, setCanvas]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '89%', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            {/* //-----------------Feature Icon-----------------// */}
            <div onClick={() => setIsFeatureVisible(!isFeatureVisible)} className='absolute top-[10px] right-[10px] cursor-pointer'>
                {!isFeatureVisible ? <FaEdit /> : <AiOutlineClose />}
            </div>

            <div className='absolute top-[10px] left-[10px]'>
                <p className='inline-block'>{divName}</p>
            </div>

            {/* //-----------------Sticky Notes-----------------// */}
            {arr}

            {/* //-----------------Feature Div-----------------// */}
            {isFeatureVisible && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#27374D', color: 'white' }} className='p-5 rounded-[10px] absolute right-2 top-10'>
                    <div className='flex gap-2'>
                        <label>Sticky Notes : </label>
                        <input
                            onChange={(e) => {
                                setCanvas({ ...canvas, [divId]: { ...canvas[divId], stickyCount: e.target.value } });
                            }}
                            value={stickyCount}
                            type='number'
                            maxLength={4}
                            style={{ backgroundColor: 'transparent' }}
                            className='border-2 border-[#fff] focus:border-amber-400'
                        />
                    </div>
                    <div className='flex gap-2'>
                        <label>Color : </label>
                        <input
                            onChange={(e) => {
                                setCanvas({ ...canvas, [divId]: { ...canvas[divId], stickyColor: e.target.value } });
                            }}
                            value={bgColor}
                            type='color'
                            maxLength={4}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default StickyDiv;
