import { useEffect, useState } from "react";


function useFetch (url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState();

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const convertedData = await response.json();
            setData(convertedData);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]) // bağımlılıklara url eklenmeli yoksa bir kere render edildiğinden yazı basılmıyor.

    return {data, loading, error};
}


export default useFetch; 