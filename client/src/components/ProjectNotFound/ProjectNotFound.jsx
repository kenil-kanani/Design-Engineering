import React from 'react';
import { Link } from 'react-router-dom';

function ProjectNotFound() {
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Sorry, it looks like the project you're searching for doesn't exist.
                </p>
                <Link to={"/myprojects"} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
                    Go To My Projects
                </Link>
            </div>
        </div>
    );
}

export default ProjectNotFound;
