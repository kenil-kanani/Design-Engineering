import axios from "axios";

const getProject = async ({ projectId }) => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/project/${projectId}`,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("X-access-token")
            }
        }
    );
    // console.log(response.data.data)
    return response.data.data;
}

export default getProject;