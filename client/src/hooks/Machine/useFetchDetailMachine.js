import { useState, useEffect } from 'react';
import getMachineById  from '../../api/Machine/GetMachineById';

const useFetchMachineDetail = (machine_select_id) => {
    const [machineDetail, setMachineDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMachineDetail = async () => {
            setLoading(true);
            try {
                const data = await getMachineById(machine_select_id);
                setMachineDetail(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching machine detail:', err);
                setError(err);
                setLoading(false);
            }
        };

        if (machine_select_id) {
            fetchMachineDetail();
        }
    }, [machine_select_id]);

    return { machineDetail, loading, error };
};

export default useFetchMachineDetail;