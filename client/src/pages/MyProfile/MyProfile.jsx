import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const MyProfile = () => {
    const { isValid, user } = useContext(AuthContext);

    useEffect(() => {
        isValid();
    }, [])

    user.avatar =
        "https://media.licdn.com/dms/image/D4D03AQGghuVyQderNw/profile-displayphoto-shrink_800_800/0/1679610791074?e=2147483647&v=beta&t=khbE90ru3MGqFyQt34Mkk6Gc9z0PHB3s3maoqyvZ7EM";

    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user.name);

    const handleEditClick = () => {
        // setIsEditing(true);
    };

    const handleSaveChanges = () => {
        // Handle saving changes to backend
        // setIsEditing(false);
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
                {isEditing ? (
                    // Edit Profile Form
                    <form>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                className="border py-2 px-3 w-full rounded focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Add other editable form fields here */}

                        <button
                            type="button"
                            onClick={handleSaveChanges}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Save Changes
                        </button>
                    </form>
                ) : (
                    // Non-Editable User Info
                    <>
                        <div className="flex items-center">
                            <img
                                src={user.avatar}
                                alt="avatar"
                                className="w-20 h-20 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="text-xl font-medium">{user.name}</h2>
                                <p className="text-gray-500">{user.email}</p>
                            </div>

                        </div>
                        <div className="w-[100%] flex justify-end">
                            <button
                                type="button"
                                onClick={handleEditClick}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ml-4"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MyProfile
