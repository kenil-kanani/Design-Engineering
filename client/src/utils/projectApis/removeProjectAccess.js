import axios from "axios";

const removeProjectAccess = async (data) => {
    if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
    const response = await axios.post(
        // 'https://de-4sy0.onrender.com/api/v1/updateproject',
        'http://localhost:3030/api/v1/removeaccess',
        {
            projectId: data._id,
            email: data.email
        },
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("X-access-token")
            }
        }
    );
    // console.log(data)
    return data;
}

export default removeProjectAccess;