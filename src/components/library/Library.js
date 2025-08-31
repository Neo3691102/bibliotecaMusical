
import LibraryAlbum from "../libraryAlbum/libraryAlbum";
import { LibraryDiv, LibraryContainer, LibraryTitle } from "./LibraryStyles";
const Library = (props) => {
    return(
        <LibraryDiv>
            <LibraryTitle>Albums</LibraryTitle>
                <LibraryContainer>
                    <LibraryAlbum albums={props.albums} />
                </LibraryContainer>
        </LibraryDiv>
            
                
           
        
    )
}

export default Library;