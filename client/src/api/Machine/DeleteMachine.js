import axios from 'axios';
const BASE_URL = 'http://localhost:6868';

const deleteMachine = async (itemId) => {
  try {
    console.log(itemId);
    const response = await axios.post(`${BASE_URL}/delete-machine`, { machine_id: itemId });
    return response.data; 
  } catch (error) {
    console.error('Lỗi khi xóa:', error);
    throw error; 
  }
};

export default deleteMachine;