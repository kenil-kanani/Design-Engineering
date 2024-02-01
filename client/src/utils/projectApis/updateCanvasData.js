import axios from "axios";

const updateCanvasData = async ({ projectId, canvasName, canvas }) => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/project/${canvasName}/${projectId}`,
        canvas,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("X-access-token")
            }
        },
    );
    // console.log("Response : ", response.data.data)
    return response.data.data;
}

export default updateCanvasData;