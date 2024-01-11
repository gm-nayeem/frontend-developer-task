import { useEffect, useState } from "react";
import axios from "axios";

export const useCardInfo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCardInfo = async () => {
        try {
            const res = await axios.get('http://localhost:3500/card-info');

            if (res && res.data?.length > 0) setData(res.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCardInfo();
    }, []);

    return { loading, data };
}