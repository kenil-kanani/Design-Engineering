import axios from 'axios';

const signInApi = async (email, password) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}api/v1/signin`,
            {
                email,
                password,
            },
            // {
            // withCredentials: true,
            // headers: {
            // "Content-Type": "application/json",
            // },
            // }
        );
        // console.log("Response : ", response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default signInApi;