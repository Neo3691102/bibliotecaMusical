

import { AlbumStylesDiv, AlbumTitle, AlbumArtist, AlbumYear, AlbumButton, AlbumPicture, DetailLink} from "./AlbumStyles";


const Album = (props) => {
    return (
        <AlbumStylesDiv>
            <AlbumPicture src={props.strAlbumThumb} alt="imagen"/>
            <AlbumTitle>{props.strAlbum}</AlbumTitle>
            <AlbumArtist>{props.strArtist}</AlbumArtist>
            <AlbumYear className="year">{props.intYearReleased}</AlbumYear>
            <AlbumButton onClick={props.onAddToLibrary}>
                Agregar a la biblioteca
            </AlbumButton>
            <DetailLink to={`/album/${props.idAlbum}`}>Ver detalles</DetailLink>
        </AlbumStylesDiv>
    );
};

export default Album;