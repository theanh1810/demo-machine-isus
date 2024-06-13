import { useState } from 'react';
import deleteMachine  from '../../api/Machine/DeleteMachine'

const useDeleteItem = () => {
  const [loadingDelete, setLoading] = useState(false);
  const [errorDelete, setError] = useState(null);

  const deleteItem = async (itemId) => {
    setLoading(true);
    try {
      await deleteMachine(itemId); // Gọi hàm xóa (được truyền vào từ component sử dụng hook này)
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return { loadingDelete, errorDelete, deleteItem };
};

export default useDeleteItem;