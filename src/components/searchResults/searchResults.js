import Album from "../album/Album";
import style from "./style.css";
import { SearchButton } from "./styles";


const SearchResults = (props) => {
  return (
    <>
      
      <div className="searchcontainer">
        <label htmlFor="searchinput">Buscar artista</label>
        <input
          type="text"
          id="searchinput"
          placeholder="Introduce un artista"
          value={props.search}
          onChange={props.handleInputChange}
          onKeyDown={props.handleKeyDown}
        />

        <SearchButton onClick={props.handleSearch}>Buscar</SearchButton>
        {/* <button className="searchbutton" onClick={props.handleSearch} > */}

        
         
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
