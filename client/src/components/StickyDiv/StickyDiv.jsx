import React, { useState } from 'react'
import { StickyNote } from '../index'
import { useSelector, useDispatch } from 'react-redux'
import { updateStickyCount, updateStickyColor } from '../../features/projects/projectsSlice'
import { FaEdit } from "react-icons/fa";


function StickyDiv({ width, height, canvasId, divId, projectId }) {

    const projects = useSelector(state => state.projectsReducer);
    const [project, setProject] = useState(projects[0]);

    // const stickyCount = project.canvases.aeiou.environment.stickyCount
    const [stickyCount, setStickyCount] = useState(project.canvases[canvasId][divId].stickyCount);
    const [bgColor, setBgColor] = useState(project.canvases[canvasId][divId].stickyColor);

    const [newStickyCountandColor, setNewStickyCountandColor] = useState({
        newStickyCount: stickyCount,
        newBgColor: bgColor,
    });

    const dispatch = useDispatch();

    let submitButtonHandler = () => {

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

    let arr = [];
    for (let index = 0; index < stickyCount; index++) {
        arr.push(<StickyNote key={index} id={index} bgColor={bgColor} width={width} height={height}></StickyNote>)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '89%', justifyContent: "center", alignItems: "center", gap: "8px" }} >
            <FaEdit/>
            {arr}
            {/* <div style={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#27374D", color: "white" }} className='p-5 rounded-[10px] absolute right-2 top-10'>
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
            </div> */}
        </div>
    )
}

export default StickyDiv
