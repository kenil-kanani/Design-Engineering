import axios from "axios";

const getCanvasData = async ({ projectId, canvasName }) => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.get(
        `http://localhost:3030/api/v1/project/${canvasName}/${projectId}`,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("X-access-token")
            }
        }
    );
    // console.log("Response : ", response.data.data)
    return response.data.data;
}

export default getCanvasData;