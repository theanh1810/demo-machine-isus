import axios from 'axios';
const BASE_URL = 'http://localhost:6868';

const addMachine = async (arrMachine) => {
  try {
    const response = await axios.post(`${BASE_URL}/add-machine`, { machine_arr: arrMachine });
    console.log('Thêm thành công:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Lỗi khi thêm:', error);
    throw error; 
  }
};

export default addMachine;