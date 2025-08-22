import album from "./album.css";
import { Link } from "react-router-dom";

const Album = (props) => {
    return (
        <div className="albumCard">
            <img className="picture" src={props.strAlbumThumb} alt="imagen"/>
            <h2 className="albumtitle">{props.strAlbum}</h2>
            <p className="artist">{props.strArtist}</p>
            <p className="year">{props.intYearReleased}</p>
            <button className="button" onClick={props.onAddToLibrary}>
                Agregar a la biblioteca
            </button>
            <Link className="details-link" to={`/album/${props.idAlbum}`}>Ver detalles</Link>
        </div>
    );
};

export default Album;