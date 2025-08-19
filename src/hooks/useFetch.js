import {useState, useEffect} from 'react';
import axios from ' axios';

const useFetch = (url) => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlbums = async () => {
            try{
                const response = await axios.get(`https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${url}`);
                setAlbums(response.data.results);
            }catch (error){
                setError(error);
            }
            setLoading(false);
        };
        fetchAlbums();
    }, []);

    return {albums, loading, error};
}

export default useFetch;