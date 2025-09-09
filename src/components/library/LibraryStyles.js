import styled from 'styled-components';

const LibraryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 480px){
    width: 90%;
  }
`;

const LibraryTitle = styled.h2`
  color: rgba(199, 194, 194, 0.973);
  padding: 21px;
  border-bottom: 3px solid rgba(199, 194, 194, 0.973);
  text-align: center;
`;

const LibraryContainer = styled.div`
  background-color: rgb(64, 65, 78);
  width: 100%;
  height: 330px;
  position: relative;
  top: -20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow-y: scroll;
`;

export { LibraryDiv, LibraryTitle, LibraryContainer };


