import axios from "axios";

const deleteProject = async (projectId) => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.post(
        'http://localhost:3030/api/v1/deleteproject',
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