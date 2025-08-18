import { useParams } from "react-router-dom";

const SongDetail = ({ songs }) => {
  const { id } = useParams();
  const song = songs.find((s) => s.id === parseInt(id));

  if (!song) return <div>No se encontró la canción.</div>;

  return (
    <div>
      <h2>{song.songName}</h2>
      <p>Artista: {song.artist}</p>
      <p>Álbum: {song.album}</p>
      <p>Duración: {song.duration}</p>
      <img src={song.picture} alt={song.songName} style={{ width: 200 }} />
    </div>
  );
};

export default SongDetail;