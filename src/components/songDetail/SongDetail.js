import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import songdetail from './songdetail.css';

const SongDetail = ({ albums }) => {
  const { id } = useParams();

  // Busca el álbum actual
  const album = albums.find((a) => String(a.idAlbum) === String(id));

  // Estado para las canciones
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Petición para obtener las canciones del álbum
  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${id}`
        );
        setTracks(response.data.track || []);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchTracks();
  }, [id]);

  if (!album) return <div>No se encontró el álbum.</div>;
  if (loading) return <div>Cargando canciones...</div>;
  if (error) return <div>Error al cargar canciones.</div>;

  return (
    <>
      <div className="sdetailcard">
        <img className="picture" src={album.strAlbumThumb} alt={album.strAlbum} style={{ width: 200 }} />
        <h2 className="songTitle">{album.strAlbum}</h2>
        <p className="artist">{album.strArtist}</p>
      </div>
      <h3 className="subtitle">Canciones del álbum:</h3>
      <table className="songTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Artista</th>
            <th>Duración (ms)</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.idTrack}>
              <td>{track.intTrackNumber}</td>
              <td>{track.strTrack}</td>
              <td>{track.strArtist}</td>
              <td>{track.intDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="back" to="/">Regresar</Link>
    </>
  );
};

export default SongDetail;