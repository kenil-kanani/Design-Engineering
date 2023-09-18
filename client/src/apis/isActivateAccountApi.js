import axios from 'axios';

const isActivateAccount = async () => {
    try {
        if (localStorage.getItem('X-access-token')) {
            const token = await localStorage.getItem('X-access-token');

            const response = await axios.get(
                'https://de-4sy0.onrender.com/api/v1/isactivated',
                // 'http://localhost:3030/api/v1/isactivated',
                {
                    params:{
                        token
                    }
                },
            );
            console.log(response);
            return response.data;
        }
        return false;
    } catch (error) {
        const { response } = error;
        if (response) {
            return response.data;
        }
    }
}

export default isActivateAccount;