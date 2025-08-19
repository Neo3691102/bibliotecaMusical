import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlbums = async () => {
            try{
                const response = await axios.get(url);
                setAlbums(response.data.album || []);
                console.log(response.data.album);
            }catch (error){
                setError(error);
            }
            setLoading(false);
        };
        fetchAlbums();
    }, [url]);

    return {albums, loading, error};
}

export default useFetch;