import React from 'react'
import './SStickyNote.css'

function SStickyNote({ height, width }) {
    return (
        <div className={`h-[${height}px] w-[${width}px]`}>
        </div>
    )
}

export default SStickyNote
