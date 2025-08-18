import { useParams } from "react-router-dom";
import songdetail from './songdetail.css';
import { Link } from "react-router-dom";

const SongDetail = ({ songs }) => {
  const { id } = useParams();
  const song = songs.find((s) => s.id === parseInt(id));

  if (!song) return <div>No se encontró la canción.</div>;

  return (
    <>
    <div className="sdetailcard">
      <img className="picture" src={song.picture} alt={song.songName} style={{ width: 200 }} />
      <h2 className="songTitle">{song.songName}</h2>
      <p className="artist">Artista: {song.artist}</p>
      <p className="album">Álbum: {song.album}</p>
      <p className="duration">Duración: {song.duration}</p>
      
    </div>
    <Link className="back" to="/">Regresar</Link>
    </>
    
  );
};

export default SongDetail;