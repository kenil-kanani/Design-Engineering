import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ projectId, title, description }) {
    const navigate = useNavigate();

    const handleClick = () => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/myprojects/${formattedTitle}`, { state: { projectId, title, formattedTitle } });
    };

    return (
        <div className="cardd" id={projectId} onClick={handleClick}>
            <p className="cardtitle">{title}</p>
            <p className="small-desc">
                {description}
            </p>
            <div className="go-corner">
                <div className="go-arrow">→</div>
            </div>
        </div>
    );
}

export default ProjectCard;
