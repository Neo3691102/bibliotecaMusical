import style from "./style.css";
import LibrarySong from "../librarySong/librarySong";

const Library = (props) => {
    return(
        <>
            
                <h2 className="library__title">Libreria</h2>
                <div className="library__container">
                    <LibrarySong songs={props.songs} />
                </div>
           
        </>
    )
}

export default Library;