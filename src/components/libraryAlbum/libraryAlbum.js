import {
  LibraryAlbumDiv,
  LibrarySongCard,
  LibrarySongPicture,
  LibrarySongTitle,
  LibrarySongArtist,
  LibrarySongDuration,
} from "./LibraryAlbumStyles";

const libraryAlbum = (props) => {
  return (
    <LibraryAlbumDiv>
      {props.albums.map((album) => {
        const { id, strAlbum, strArtist, strGenre, strAlbumThumb } = album;
        return (
          <>
            <LibrarySongCard key={id}>
              <LibrarySongPicture src={strAlbumThumb} alt="imagen" />
              <LibrarySongTitle>{strAlbum}</LibrarySongTitle>
              <LibrarySongArtist>{strArtist}</LibrarySongArtist>

              <LibrarySongDuration>{strGenre}</LibrarySongDuration>
            </LibrarySongCard>
          </>
        );
      })}
    </LibraryAlbumDiv>
  );
};

export default libraryAlbum;
