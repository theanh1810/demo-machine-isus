
import { useState } from 'react';
import addMachine  from '../../api/Machine/AddMachine'

const useAddMachine = () => {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [errorAdd, setErrorAdd] = useState(null);

  const addMachines = async (machineIds) => {
    setLoadingAdd(true);
    setErrorAdd(null);
    try {
      // Gọi API để thêm máy mới
      await addMachine(machineIds);
      setLoadingAdd(false);
    } catch (error) {
      setErrorAdd(error);
      setLoadingAdd(false);
    }
  };

  return { loadingAdd, errorAdd, addMachines };
};

export default useAddMachine;