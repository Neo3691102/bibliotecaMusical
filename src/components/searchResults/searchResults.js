import Album from "../album/Album";
import {
  Input,
  Label,
  SearchResultsContainer,
  SongList,
  SearchButton,
} from "./SearchResultsStyles";


const SearchResults = (props) => {
  return (
    <>
      <SearchResultsContainer>
        <Label htmlFor="searchinput">Buscar artista</Label>
        <Input
          type="text"
          id="searchinput"
          placeholder="Introduce un artista"
          value={props.search}
          onChange={props.handleInputChange}
          onKeyDown={props.handleKeyDown}
        />
        <SearchButton onClick={props.handleSearch}>Buscar</SearchButton>
        {/* <button className="searchbutton" onClick={props.handleSearch} > */}
      </SearchResultsContainer>

      <SongList>
        {props.albums.map((album) => (
          <Album
            key={album.id}
            {...album}
            onAddToLibrary={() => props.onAddToLibrary(album)}
          />
        ))}
      </SongList>
    </>
  );
};

export default SearchResults;
