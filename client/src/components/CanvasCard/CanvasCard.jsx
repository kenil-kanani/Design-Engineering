import React from 'react'
import { useNavigate } from 'react-router-dom';
import './CanvasCard.css'

function CanvasCard({ projectId, title, description, canvasName, formattedTitle }) {
    const navigate = useNavigate();

    const handleClick = () => {
        const formattedCanvasName = canvasName.toLowerCase().replace(/\s+/g, '-');
        navigate(`/myprojects/${formattedTitle}/${formattedCanvasName}`, { state: { projectId, title } });
    };

    return (
        <div className="card cursor-pointer m-[20px]">
            <span className='text-2xl mr-3 card-title cursor-text'>{canvasName} : </span>
            <p className="card-title text-sm flex justify-end cursor-text">{title}</p>
            <p className="card-des cursor-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
                deleniti officia. Aliquam repellendus illum pariatur nesciunt dolor et
                natus consectetur repudiandae suscipit autem distinctio commodi vel sed,
                id inventore modi.
            </p>
            <p className="card-text">
                <span>Click Me</span>
                <svg className="arrow-icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                </svg>
            </p>
            <div className='wraper' onClick={handleClick}></div>
        </div>
    )
}

export default CanvasCard
