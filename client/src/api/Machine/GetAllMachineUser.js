import axios from 'axios';

const BASE_URL = 'http://localhost:6868';

export const getAllMachinesUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/get-all-machine-user`);
        return response.data;
    } catch (error) {
        console.error('Error fetching machines:', error);
        throw error;
    }
};