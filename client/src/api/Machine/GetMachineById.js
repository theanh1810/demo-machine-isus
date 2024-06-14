import axios from 'axios';
const BASE_URL = 'http://localhost:6868';

const getMachineById = async (itemId) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-detail-machine/${itemId}`);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

export default getMachineById;