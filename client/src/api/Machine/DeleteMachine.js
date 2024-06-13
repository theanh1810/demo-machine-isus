import axios from 'axios';
const BASE_URL = 'http://localhost:6868';

const deleteMachine = async (itemId) => {
  try {
    const response = await axios.post(`${BASE_URL}/delete-machine`, { machine_id: itemId });
    console.log('Xóa thành công:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Lỗi khi xóa:', error);
    throw error; 
  }
};

export default deleteMachine;