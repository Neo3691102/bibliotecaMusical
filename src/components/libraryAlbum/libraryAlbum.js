import style from "./style.css";

const libraryAlbum = (props) => {
    
    return(
       
            <div className="librarysong__container">
                {props.albums.map( album => {
                    const {id, strAlbum, strArtist, strGenre, strAlbumThumb} = album;
                        return(
                            <>
                                <div className="librarysongcard" key={id}>
                                    <img className="librarysong__picture" src={strAlbumThumb} alt="imagen"/>
                                    <h2 className="librarysong__songTitle">{strAlbum}</h2>
                                    <p className="librarysong__artist">{strArtist}</p>
                               
                                    <p className="librarysong__duration">{strGenre}</p>
                                </div>
                            </>
                        )
                        
                })}
            </div>
    )
}

export default libraryAlbum;