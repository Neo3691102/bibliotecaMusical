import song from "./song.css";
import { Link } from "react-router-dom";

const Song = (props) => {
    return (
        <div className="songCard">
            <img className="picture" src={props.strAlbumThumb} alt="imagen"/>
            <h2 className="songTitle">{props.strAlbum}</h2>
            <p className="artist">{props.strArtist}</p>
            <p className="album">{props.album}</p>
            <button className="button" onClick={props.onAddToLibrary}>
                Agregar a la biblioteca
            </button>
            <Link className="details-link" to={`/song/${props.idAlbum}`}>Ver detalles</Link>
        </div>
    );
};

export default Song;