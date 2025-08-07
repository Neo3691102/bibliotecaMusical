import Song from "../song/Song";
import style from "../../components/searchResults/style.css";


const searchResults = (props) => {
    return(
        <>
            {props.songs.map(song => {
                const {id, songName, artist, duration, album, picture} = song;
                return(
                <Song key={id} songName={songName} artist={artist} duration={duration} album={album} picture={picture} />
                )
            })}
        </>
    )
}

export default searchResults;