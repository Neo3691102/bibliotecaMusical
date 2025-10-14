import { Link } from "react-router-dom";
import styled from "styled-components";

const AlbumDetailDiv = styled.div`
  width: 300px;
  height: 400px;
  background-color: rgb(64, 65, 78);
  border-radius: 9px;
  box-shadow: 0 4px 8px rgba(199, 194, 194, 0.973);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    width: 70%;
  }

`;

const AlbumPicture = styled.img`
  width: 200px;
`;

const AlbumTitle = styled.h2`
  color: white;
`;

const AlbumArtist = styled.p`
  color: white;
`;

const AlbumYear = styled.p`
  color: white;
`;

const Subtitle = styled.h3`
  color: white;
  text-align: center;
  padding: 24px;
`;

const SongTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  background-color: white;
  margin: 0 auto;

  

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background: black;
    color: white;
    font-weight: bold;
  }

  tr{
    background-color: white;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

`;

const DetailLink = styled(Link)`
    color: white;
    background-color: black;
    padding: 6px;
    cursor: pointer;
    border-radius: 9px;
    font-size: 15px;
    text-decoration: none;

  &:hover {
    background-color: rgb(64, 65, 78);
    color: white;
  }
`;

const BotonBack = styled(Link)`
    width: 90px;
  display: block;
  color: #fff;
  background-color: #3b5998;
  padding: 6px 14px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
  margin: 30px auto;

  &:hover {
    background-color: #1d3557;
  color: #ffd700;
  }
`;

export { AlbumDetailDiv, 
    AlbumPicture, 
    AlbumTitle, 
    AlbumArtist, 
    AlbumYear, 
    Subtitle, 
    SongTable, 
    DetailLink, 
    BotonBack 
};