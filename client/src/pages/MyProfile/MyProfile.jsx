import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {

    let user = useSelector(state => state.authReducer.user)

    const avatar =
        "https://i.ibb.co/fdFnnt0/Whats-App-Image-2024-03-02-at-12-33-05-AM.jpg";

    user = { ...user, avatar }
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
            <div className="p-10 mx-auto bg-white rounded-lg shadow-lg">
                <div className="flex items-center">
                    <img
                        src={user.avatar}
                        alt="avatar"
                        className="w-40 h-40 rounded-full mr-4"
                    />
                    <div>
                        <h2 className="text-4xl font-medium mb-2">{user.name}</h2>
                        <p className="text-gray-500">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile