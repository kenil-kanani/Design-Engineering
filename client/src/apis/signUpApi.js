import axios from 'axios';

const signUpApi = async (name, email, password) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}/api/v1/signup`,
            {
                name,
                email,
                password,
            },
        );
        return response.data;
    } catch (error) {
        // console.log(error)
        // const { response } = error;
        // if (response) {
        //     return response.data;
        // }
        // console.log("Kenil ",error)
        throw error;
    }
}

export default signUpApi;