import song from "./song.css";

const Song = (props) => {
   
  
        return (
            <div className="songCard">
                <img className="picture" src={props.picture} alt="imagen"/>
                <h2 className="songTitle">{props.songName}</h2>
                <p className="artist">{props.artist}</p>
                <p className ="album">{props.album}</p>
                <p className="duration">{props.duration}</p>
                <button className="button">Agregar a la biblioteca</button>
            </div>
        )
    
}

export default Song;