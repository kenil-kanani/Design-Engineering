import axios from "axios";

const getMyProjects = async () => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.get(
        'http://localhost:3030/api/v1/myprojects',
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("X-access-token")
            }
        }
    );
    // console.log(response)
    return response.data.data;
}

export default getMyProjects;