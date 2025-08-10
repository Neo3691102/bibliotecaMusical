import Song from "../song/Song";
import style from "../../components/searchResults/style.css";


const SearchResults = (props) => {
    return (
        <>
            
            {props.songs.map(song => (
                <Song
                    key={song.id}
                    {...song}
                    onAddToLibrary={() => props.onAddToLibrary(song)}
                />
            ))}
        </>
    );
};

export default SearchResults;