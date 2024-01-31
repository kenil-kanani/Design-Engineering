import React from 'react'

const StoryInput = ({ canvas, setCanvas, storyName, storyId }) => {
    return (
        <div className='w-[90%] flex flex-col mx-auto'>
            {storyName}
            <input
                className='w-full h-[100px] border-b-2 mx-auto text-sm border-b-0'
                type="text"
                value={canvas.storyboarding[storyId]}
                onChange={(e) => setCanvas({ ...canvas, storyboarding: { ...canvas.storyboarding, [storyId]: e.target.value } })}
            />
        </div>
    )
}

export default StoryInput
