import axios from 'axios';

const me = async () => {
    try {
        if (localStorage.getItem("X-access-token") == null) return null;
        const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/v1/me`,
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("X-access-token")
                }
            }
        );
        return response.data.data;
    } catch (error) {
        return null;
    }
}

export default me;