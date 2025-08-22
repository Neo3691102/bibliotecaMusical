import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import songdetail from '../songDetail/songdetail.css';

const SongDetail = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://www.theaudiodb.com/api/v1/json/2/track.php?h=${id}`
        );
        console.log(song);
        setSong(response.data.track ? response.data.track[0] : null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchSong();
  }, [id]);

  if (loading) return <div>Cargando detalles de la canción...</div>;
  if (error) return <div>Error al cargar detalles.</div>;
  if (!song) return <div>No se encontró la canción.</div>;

  return (
    <div className="song-detail-card">
        <div className="container">
            <img src={song.strTrackThumb} alt={song.strTrack} />

            <div className="infocontainer">
             <h2>{song.strTrack}</h2>
            <p><strong>Artista:</strong> {song.strArtist}</p>
            <p><strong>Álbum:</strong> {song.strAlbum}</p>
            <p><strong>Duración:</strong> {song.intDuration} ms</p>
            <p><strong>Género:</strong> {song.strGenre}</p>
           
     </div>
     
        </div>
        
      <p className="descripcion"><strong>Descripción:</strong> {song.strDescriptionEN || "No disponible"}</p>
      
     
 
        <div className="btncontainer">
            <Link to={`/album/${song.idAlbum}`} className="btn">Volver al álbum</Link>
            <Link to="/" className="btn">Regresar al inicio</Link>
        </div>
      
    </div>
  );
};

export default SongDetail;