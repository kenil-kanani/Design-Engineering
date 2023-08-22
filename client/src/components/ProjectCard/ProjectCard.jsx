import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ projectId, title, description }) {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(title)
        const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/myprojects/${formattedTitle}`, { state: { projectId, title, formattedTitle } });
    };

    return (
        <div className="cardd" id={projectId} onClick={handleClick}>
            <p className="cardtitle">{title}</p>
            <p className="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                eum nihil itaque!
            </p>
            <div className="go-corner">
                <div className="go-arrow">→</div>
            </div>
        </div>
    );
}

export default ProjectCard;
