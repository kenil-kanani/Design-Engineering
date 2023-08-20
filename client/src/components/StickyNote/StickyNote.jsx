import React, { useState } from 'react'

function StickyNote({ color, width, height, id }) {

    const style = {
        backgroundColor: color,
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
            className={`${width} ${height} bg-${color} border-none rounded-lg px-2`}
            id={id}
        />
    )
}

export default StickyNote
