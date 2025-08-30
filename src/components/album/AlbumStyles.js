import { Link } from "react-router-dom";
import styled from 'styled-components';

const AlbumStylesDiv = styled.div`
  width: 240px;
  height: 450px;
  background-color: rgb(64, 65, 78);
  border-radius: 9px;
  box-shadow: 0 4px 8px rgba(199, 194, 194, 0.973);
  display: flex;
 flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const AlbumPicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  padding: 9px;
`;

const AlbumTitle = styled.h2`
    margin: 0; 
    padding: 0;
    color: white;
    font-size: 18px;
`;

const AlbumArtist = styled.p`
    font-size: 12px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: white;
`;

const AlbumYear = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: white;
`;

const AlbumButton = styled.button`
    color: white;
    background-color: black;
    padding: 6px;
    cursor: pointer;
    border-radius: 9px;
    font-size: 20px;
    &:hover{
        background-color: rgb(64, 65, 78);
        color: white;
    }
`;

const DetailLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  color: #fff;
  background-color: #3b5998;
  padding: 6px 14px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background-color: #1d3557;
    color: #ffd700;
  }
`;

export {
    AlbumStylesDiv,
    AlbumPicture,
    AlbumTitle,
    AlbumArtist,
    AlbumYear,
    AlbumButton,
    DetailLink
}