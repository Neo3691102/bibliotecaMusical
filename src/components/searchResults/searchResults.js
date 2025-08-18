import Song from "../song/Song";
import style from "./style.css";


const SearchResults = (props) => {
  return (
    <>
      
      <div className="searchcontainer">
        <label htmlFor="searchinput">Buscar cancion</label>
        <input
          type="text"
          id="searchinput"
          placeholder="Buscar cancion"
          value={props.search}
          onChange={props.handleInputChange}
          onKeyDown={props.handleKeyDown}
        />
        <button className="searchbutton" onClick={props.handleSearch}>
          Buscar
        </button>
      </div>

      <div className="songList">
        {props.songs.map((song) => (
          <Song
            key={song.id}
            {...song}
            onAddToLibrary={() => props.onAddToLibrary(song)}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
