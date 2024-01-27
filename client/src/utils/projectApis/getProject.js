import axios from "axios";

const getProject = async ({ projectId }) => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.get(
        `http://localhost:3030/api/v1/project/${projectId}`,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("X-access-token")
            }
        }
    );
    // console.log(response)
    return response.data.data;
}

export default getProject;