import "./App.css";
import Header from "./components/header/Header";
import SearchResults from "./components/searchResults/searchResults";
import Library from "./components/library/Library";
import picture from "./img/beethoven-ludwig-van.jpg";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const initialSongList = [
  {
    id: 1,
    songName: "Winter",
    artist: "Vivaldi",
    duration: "9:27",
    album: "classic-songs",
    picture: picture,
  },
  {
    id: 2,
    songName: "Rondo Alla Turca",
    artist: "Mozart",
    duration: "3:32",
    album: "classic-songs",
    picture: picture,
  },
  {
    id: 3,
    songName: "Lacrimosa",
    artist: "Mozart",
    duration: "4:05",
    album: "classic-songs",
    picture: picture,
  },
  {
    id: 4,
    songName: "Moonlight Sonata",
    artist: "Beethoven",
    duration: "6:00",
    album: "classic-songs",
    picture: picture,
  },
  {
    id: 5,
    songName: "Virus",
    artist: "Beethoven",
    duration: "3:35",
    album: "classic-songs",
    picture: picture,
  },
  {
    id: 6,
    songName: "Apassionata",
    artist: "Beethoven",
    duration: "7:35",
    album: "classic-songs",
    picture: picture,
  },
];

const App = () => {
  const [librarysongs, setLibrary] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(initialSongList);

  // Función para agregar una canción a la biblioteca
  const addToLibrary = (song) => {
    if (!librarysongs.some((s) => s.id === song.id)) {
      setLibrary([...librarysongs, song]);
    }
  };

  useEffect(() => {
    if (librarysongs.length > 0) {
      console.log("Se ha agregado una canción a la biblioteca");
      alert("Cancion agregada a la biblioteca");
    }
  }, [librarysongs]);

  // Handler para el input de búsqueda
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // Handler para buscar
  const handleSearch = () => {
    if (search.trim() === "") {
      setFilteredSongs(initialSongList);
      return;
    }
    const results = initialSongList.filter(
      (song) =>
        song.songName.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase())
    );
    if (results.length === 0) {
      alert("No se encontraron resultados");
      setFilteredSongs(initialSongList);
    } else {
      setFilteredSongs(results);
    }
  };

  // Permite buscar al presionar Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Library songs={librarysongs} />
              <SearchResults
                songs={filteredSongs}
                onAddToLibrary={addToLibrary}
                search={search}
                handleInputChange={handleInputChange}
                handleKeyDown={handleKeyDown}
                handleSearch={handleSearch}
              />
            </>
          }
        />
      </Routes>
    </>
  );
};




export default App;
