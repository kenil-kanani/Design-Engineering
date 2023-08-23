import React, { useState } from 'react'
import { StickyNote } from '../index'
import { useSelector, useDispatch } from 'react-redux'
import { updateStickyCount, updateStickyColor } from '../../features/projects/projectsSlice'
import { FaEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";



function StickyDiv({ width, height, canvasId, divId, divName, projectId }) {

    const projects = useSelector(state => state.projectsReducer);
    const dispatch = useDispatch();

    if (!projects) {
        return (
            <>
                Refresh Plz
            </>
        )
    }

    let oneProject = {};
    for (let i = 0; i < projects.length; i++) {
        if (projects[i]._id === projectId) {
            oneProject = projects[i];
        }
    }
    const [project, setProject] = useState(oneProject);


    const [stickyCount, setStickyCount] = useState(project?.canvases?.[canvasId]?.[divId]?.stickyCount || 0);
    const [bgColor, setBgColor] = useState(project?.canvases?.[canvasId]?.[divId]?.stickyColor || '#ffffff');

    const [newStickyCountandColor, setNewStickyCountandColor] = useState({
        newStickyCount: stickyCount,
        newBgColor: bgColor,
    });

    let submitButtonHandler = () => {

        setIsFeatureVisible(false);

        setStickyCount(newStickyCountandColor.newStickyCount);
        setBgColor(newStickyCountandColor.newBgColor);

        dispatch(updateStickyCount({
            projectId,
            canvasId,
            divId,
            newCount: newStickyCountandColor.newStickyCount,
        }))
        dispatch(updateStickyColor({
            projectId,
            canvasId,
            divId,
            newColor: newStickyCountandColor.newBgColor,
        }))
    }

    const [isFeatureVisible, setIsFeatureVisible] = useState(false);

    let arr = [];
    for (let index = 0; index < stickyCount; index++) {
        arr.push(<StickyNote key={index} stickyNoteIndex={index} bgColor={bgColor} width={width} height={height} projectId={projectId} canvasId={canvasId} divId={divId}></StickyNote>)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '89%', justifyContent: "center", alignItems: "center", gap: "8px" }} >

            {/* //-----------------Feature Icon-----------------// */}
            <div onClick={() => {
                setIsFeatureVisible(!isFeatureVisible)
            }} className='absolute top-[10px] right-[10px] cursor-pointer'>
                {!isFeatureVisible ? <FaEdit /> : <AiOutlineClose />}
            </div>

            <div className='absolute top-[10px] left-[10px]'>
                <p className='inline-block'>
                    {divName}
                </p>
            </div>

            {/* //-----------------Sticky Notes-----------------// */}
            {arr}

            {/* //-----------------Feature Div-----------------// */}
            {isFeatureVisible &&
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#27374D", color: "white" }} className='p-5 rounded-[10px] absolute right-2 top-10'>
                    <div className='flex gap-2'>
                        <label>Sticky Notes : </label>
                        <input onChange={(e) => {
                            setNewStickyCountandColor({
                                newStickyCount: e.target.value,
                                newBgColor: newStickyCountandColor.newBgColor,
                            })
                        }} type='number' maxLength={4} style={{ backgroundColor: "transparent" }} className='border-2 border-[#fff] (condition) {
                        
                    } focus:border-amber-400'></input>
                    </div>
                    <div className='flex gap-2'>
                        <label>Color : </label>
                        <input onChange={(e) => {
                            setNewStickyCountandColor({
                                newStickyCount: newStickyCountandColor.newStickyCount,
                                newBgColor: e.target.value,
                            })
                        }} type='color' maxLength={4}></input>
                    </div>
                    <button className='border-1' onClick={submitButtonHandler}>Submit</button>
                </div>
            }
        </div>
    )
}

export default StickyDiv
