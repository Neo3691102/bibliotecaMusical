import styled from "styled-components";

const LibraryAlbumDiv = styled.div`
  width: 100%;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LibrarySongCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
`;

const LibrarySongPicture = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
  left: 20px;
`;

const LibrarySongTitle = styled.h2`
  font-size: 18px;
  color: white;
`;

const LibrarySongArtist = styled.p`
  font-size: 18px;
  color: white;
`;

const LibrarySongDuration = styled.p`
  font-size: 18px;
  color: white;
  position: relative;
  right: 20px;
`;
export {
  LibraryAlbumDiv,
  LibrarySongCard,
  LibrarySongPicture,
  LibrarySongTitle,
  LibrarySongArtist,
  LibrarySongDuration,
};
