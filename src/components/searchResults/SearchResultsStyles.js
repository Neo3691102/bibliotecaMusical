import styled from "styled-components";

const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: white;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const Label = styled.label`
  font-size: 24px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid white;
`;

const SongList = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 30px;
  padding: 20px;

  @media screen and (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SearchButton = styled.button`
  background-color: black;
  padding: 6px;
  border-radius: 9px;
  font-size: 20px;
  color: white;

  &:hover {
    background-color: rgb(64, 65, 78);
    cursor: pointer;
  }
`;

export { SearchResultsContainer, Label, Input, SongList, SearchButton };
