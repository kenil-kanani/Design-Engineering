import axios from 'axios';

const signInApi = async (email, password) => {
    try {
        const response = await axios.post(
            'http://localhost:3030/api/v1/signin',
            {
                email,
                password,
            },
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("res : " + response.data)
        return response.data;
    } catch (error) {
        const { response } = error;
        if (response) {
            return response.data;
        }
    }
}

export default signInApi;