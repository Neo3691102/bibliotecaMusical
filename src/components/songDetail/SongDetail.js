import { useParams } from "react-router-dom";
import songdetail from './songdetail.css';
import { Link } from "react-router-dom";

const SongDetail = ({ albums }) => {
  const { id } = useParams();
  // Busca por idAlbum y compara como string
  const album = albums.find((a) => String(a.idAlbum) === String(id));

  if (!album) return <div>No se encontró el álbum.</div>;

  return (
    <>
      <div className="sdetailcard">
        <img className="picture" src={album.strAlbumThumb} alt={album.strAlbum} style={{ width: 200 }} />
        <h2 className="songTitle">{album.strAlbum}</h2>
        <p className="artist">{album.strArtist}</p>
       
      </div>
      <Link className="back" to="/">Regresar</Link>
    </>
  );
};

export default SongDetail;