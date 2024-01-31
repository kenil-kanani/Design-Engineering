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


// canvas = {
//     environment: {
//         _id: "1234567890",
//         stickyColor: "#ffffff",
//         stickyNumber: 5,
//         data: [
//             "Sticky 1",
//             "Sticky 2",
//             "Sticky 3",
//             "Sticky 4",
//             "Sticky 5",
//         ]
//     },
//     activity: {
//         _id: "1234567891",
//         stickyColor: "#ffffff",
//         stickyNumber: 5,
//         data: [
//             "Sticky 1",
//             "Sticky 2",
//             "Sticky 3",
//             "Sticky 4",
//             "Sticky 5",
//         ]
//     },
//     // .... so on
// }