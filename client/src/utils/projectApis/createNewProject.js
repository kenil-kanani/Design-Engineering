import axios from "axios";

const createNewProject = async ({ projectName, projectDescription }) => {
    try {
        if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
        const response = await axios.post(
            'http://localhost:3030/api/v1/createproject',
            { projectName, projectDescription }, // body
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("X-access-token")
                }
            }
        );
        return response.data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default createNewProject;