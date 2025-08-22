import style from "./style.css";
import LibraryAlbum from "../libraryAlbum/libraryAlbum";

const Library = (props) => {
    return(
        <div className="library">
            <h2 className="library__title">Albums</h2>
                <div className="library__container">
                    <LibraryAlbum albums={props.albums} />
                </div>
        </div>
            
                
           
        
    )
}

export default Library;