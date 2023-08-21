import React, { useState } from 'react'

function StickyNote({ bgColor, width, height, id }) {

    const style = {
        backgroundColor: bgColor,
    };

    const [stickInfo, setStickyInfo] = useState('');

    return (
        <input
            type="text"
            value={stickInfo}
            onChange={(event) => {
                setStickyInfo(event.target.value);
            }}
            style={style}
            spellCheck="false"
            className={`${width} ${height} border-none rounded-lg px-2`}
            id={id}
        />
    )
}

export default StickyNote
