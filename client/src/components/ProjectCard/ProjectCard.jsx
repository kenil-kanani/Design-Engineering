import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { deleteProject } from '../../utils/projectApis';
import { toast } from "react-toastify";

function ProjectCard({ projectId, title, description, setProjects, mutation, setProjectId }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
        const encodedProjectId = encodeURIComponent(projectId);
        navigate(`/myprojects/${formattedTitle}?id=${encodedProjectId}`, { state: { title, formattedTitle } });
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
            <div
                className='absolute bottom-0 right-0 text-3xl bg-white hover:bg-red-400 p-2 cursor-pointer rounded-tl-[50%]'
                onClick={(e) => {
                    e.stopPropagation();
                    setProjectId(projectId)
                    mutation.mutate();
                }}
            >
                <RiDeleteBin5Fill />
            </div>
        </div>
    );
}

export default ProjectCard;
