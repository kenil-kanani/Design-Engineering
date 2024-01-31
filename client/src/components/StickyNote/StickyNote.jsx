// import React, { useState, useEffect, useMemo } from 'react';

// function StickyNote({ bgColor, width, height, projectId, canvasId, divId, stickyNoteIndex, canvas, setCanvas }) {
//     const stickyNoteData = canvas[divId].data[stickyNoteIndex]
//     const style = {
//         backgroundColor: bgColor,
//     };

//     const handleChange = (event) => {
//         setCanvas({
//             ...canvas,
//             [divId]: {
//                 ...canvas[divId],
//                 data: canvas[divId].data.map((data, index) => {
//                     if (index === stickyNoteIndex) {
//                         return event.target.value;
//                     }
//                     return data;
//                 })
//             }
//         })
//     };

//     console.log("Note Render")

//     return (
//         <input
//             type="text"
//             value={stickyNoteData}
//             onChange={handleChange}
//             style={style}
//             spellCheck="false"
//             className={`${width} ${height} border-none rounded-lg px-2`}
//         />
//     );
// }

// export default (StickyNote)



import React, { useState, useEffect, useMemo } from 'react';

function StickyNote({ bgColor, width, height, projectId, canvasId, divId, stickyNoteIndex, canvas, setCanvas }) {
    const stickyNoteData = canvas[divId].data[stickyNoteIndex];
    const style = {
        backgroundColor: bgColor,
    };

    // State to store the current input value
    const [inputValue, setInputValue] = useState(stickyNoteData);

    // Delay in milliseconds (2 seconds)
    const delay = 500;

    // Debounced handleChange function
    const debouncedHandleChange = useMemo(() => {
        let timeoutId;

        return (event) => {
            setInputValue(event.target.value);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setCanvas((prevCanvas) => ({
                    ...prevCanvas,
                    [divId]: {
                        ...prevCanvas[divId],
                        data: prevCanvas[divId].data.map((data, index) => {
                            if (index === stickyNoteIndex) {
                                return event.target.value;
                            }
                            return data;
                        }),
                    },
                }));
            }, delay);
        };
    }, [divId, stickyNoteIndex, setCanvas]);

    const handleChange = (event) => {
        event.persist(); // Ensure that the event is not nullified by debounce
        debouncedHandleChange(event);
    };

    console.log('Note Render');

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            style={style}
            spellCheck="false"
            className={`${width} ${height} border-none rounded-lg px-2`}
        />
    );
}

export default StickyNote;
