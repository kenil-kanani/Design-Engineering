import axios from "axios";

const getSharedProject = async () => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/getsharedprojects`,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("X-access-token")
            }
        }
    );
    console.log("Shared Project Data : ",response.data.data)
    return response.data.data;
}

export default getSharedProject;