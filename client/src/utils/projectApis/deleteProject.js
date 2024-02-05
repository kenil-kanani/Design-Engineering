import axios from "axios";

const deleteProject = async (projectId) => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/deleteproject`,
        projectId,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("X-access-token")
            }
        }
    );
    // console.log(response.data.data)
    return response.data.data;
}

export default deleteProject;