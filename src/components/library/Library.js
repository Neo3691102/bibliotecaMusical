import style from "./style.css";
import LibrarySong from "../librarySong/librarySong";

const Library = (props) => {
    return(
        <div className="library">
            <h2 className="library__title">Biblioteca</h2>
                <div className="library__container">
                    <LibrarySong songs={props.songs} />
                </div>
        </div>
            
                
           
        
    )
}

export default Library;