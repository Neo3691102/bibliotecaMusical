import styled from "styled-components";
import { Link } from "react-router-dom";

const SongDetailCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin: 0 auto;

  & img {
    width: 100px;
    height: 100px;
    padding: 9px;
    border-radius: 9px 9px 0 0;

    @media screen and (max-width: 480px) {
      width: 93px;
      height: 93px;
    }
  }

  & h2 {
    color: white;
    margin: 0;
  }

  & p {
    color: white;
    margin: 0;
  }
`;

const Container = styled.div`
  background-color: rgb(64, 65, 78);
  border-radius: 9px;
  box-shadow: 0 4px 8px rgba(199, 194, 194, 0.973);
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 200px;
  padding: 18px;
`;

const Descripcion = styled.p`
  padding: 18px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 0;
`;

const BackLink = styled(Link)`
  width: 120px;
  display: block;
  color: #fff;
  background-color: #3b5998;
  padding: 6px 14px;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #2d4373;
  }
`;

export { SongDetailCard, Container, Descripcion, BtnContainer, BackLink };
