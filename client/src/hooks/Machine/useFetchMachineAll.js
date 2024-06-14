import { useState, useEffect, useCallback } from 'react';
import { getAllMachines } from '../../api/Machine/ListMachineApi';

const useFetchMachineAll = () => {
    const [machinesAll, setMachines] = useState([]);

    const fetchMachines = useCallback(async () => {
        try {
            const data = await getAllMachines();
            setMachines(data);
        } catch (err) {
            console.error('Error fetching machines:', err);
            throw err;
        }
    }, []);

    useEffect(() => {
        fetchMachines();
    }, [fetchMachines]);

    return { machinesAll};
};

export default useFetchMachineAll;
