import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStickyData } from '../../features/projects/projectsSlice';

function StickyNote({ bgColor, width, height, projectId, canvasId, divId, stickyNoteIndex }) {
    const dispatch = useDispatch();

    const project = useSelector(state => state.projectsReducer.find(proj => proj._id === projectId));
    const stickyNoteData = project.canvases[canvasId][divId].data[stickyNoteIndex];

    const style = {
        backgroundColor: bgColor,
    };

    const [tempStickyInfo, setTempStickyInfo] = useState(stickyNoteData);
    const [debouncedStickyInfo, setDebouncedStickyInfo] = useState(stickyNoteData);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setDebouncedStickyInfo(tempStickyInfo);
            dispatch(updateStickyData({
                projectId,
                canvasId,
                divId,
                stickyNoteIndex,
                newData: tempStickyInfo,
            }));
        }, 2000); // Adjust the debounce time interval as needed (in milliseconds)

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [tempStickyInfo, dispatch, projectId, canvasId, divId, stickyNoteIndex]);

    const handleChange = (event) => {
        const newStickyInfo = event.target.value;
        setTempStickyInfo(newStickyInfo);
    };

    return (
        <input
            type="text"
            value={tempStickyInfo}
            onChange={handleChange}
            style={style}
            spellCheck="false"
            className={`${width} ${height} border-none rounded-lg px-2`}
        />
    );
}

export default StickyNote;
