import style from "./style.css";

const librarySong = (props) => {
    return(
       
            <div className="librarysong__container">
                {props.songs.map(song => {
                    const {id, songName, artist, duration, album, picture} = song;
                        return(
                            <>
                                <div className="librarysongcard" key={id}>
                                    <img className="librarysong__picture" src={picture} alt="imagen"/>
                                    <h2 className="librarysong__songTitle">{songName}</h2>
                                    <p className="librarysong__artist">{artist}</p>
                                    <p className ="librarysong__album">{album}</p>
                                    <p className="librarysong__duration">{duration}</p>
                                </div>
                            </>
                        )
                        
                })}
            </div>
    )
}

export default librarySong;