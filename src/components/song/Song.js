import song from "./song.css";
import { Link } from "react-router-dom";

const Song = (props) => {
    return (
        <div className="songCard">
            <img className="picture" src={props.picture} alt="imagen"/>
            <h2 className="songTitle">{props.songName}</h2>
            <p className="artist">{props.artist}</p>
            <p className="album">{props.album}</p>
            <p className="duration">{props.duration}</p>
            <button className="button" onClick={props.onAddToLibrary}>
                Agregar a la biblioteca
            </button>
            <Link className="details-link" to={`/song/${props.id}`}>Ver detalles</Link>
        </div>
    );
};

export default Song;