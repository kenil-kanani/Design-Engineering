import axios from "axios";

const giveProjectAccess = async (data) => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.post(
        // 'https://de-4sy0.onrender.com/api/v1/updateproject',
        `${import.meta.env.VITE_SERVER_URL}/api/v1/giveaccess`,
        {
            projectId: data._id,
            email: data.email
        },
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("X-access-token")
            }
        }
    );
    return data;
}

export default giveProjectAccess;