import { useState, useEffect, useCallback } from 'react';
import { getAllMachines } from '../../api/Machine/ListMachineApi';

const useFetchMachines = () => {
    const [machines, setMachines] = useState([]);
    const [loadingMachines, setLoading] = useState(true);
    const [errorMachines, setError] = useState(null);
    const [reload, setReload] = useState(0);

    const fetchMachines = useCallback(async () => {
        try {
            setLoading(true);
            const data = await getAllMachines();
            setMachines(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMachines();
    }, [fetchMachines, reload]);  
    const reloadMachines = () => {
        setReload(prev => prev + 1);  
    };

    return { machines, loadingMachines, errorMachines, reloadMachines };
};

export default useFetchMachines;
