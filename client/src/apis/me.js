import axios from 'axios';

const me = async () => {
    try {
        if (localStorage.getItem("X-access-token") == null) return null;
        const response = await axios.get(
            // 'https://de-4sy0.onrender.com/api/v1/me',
            'http://localhost:3030/api/v1/me',
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