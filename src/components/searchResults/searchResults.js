import Album from "../album/Album";
import style from "./style.css";


const SearchResults = (props) => {
  return (
    <>
      
      <div className="searchcontainer">
        <label htmlFor="searchinput">Buscar album</label>
        <input
          type="text"
          id="searchinput"
          placeholder="Introduce un artista"
          value={props.search}
          onChange={props.handleInputChange}
          onKeyDown={props.handleKeyDown}
        />
        <button className="searchbutton" onClick={props.handleSearch}>
          Buscar
        </button>
      </div>

      <div className="songList">
        {props.albums.map((album) => (
          <Album
            key={album.id}
            {...album}
            onAddToLibrary={() => props.onAddToLibrary(album)}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
