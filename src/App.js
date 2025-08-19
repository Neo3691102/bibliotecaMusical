import "./App.css";
import Header from "./components/header/Header";
import SearchResults from "./components/searchResults/searchResults";
import Library from "./components/library/Library";
import SongDetail from "./components/songDetail/SongDetail";
import picture from "./img/beethoven-ludwig-van.jpg";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

const App = () => {
  const {
    albums = [],
    loading,
    error,
  } = useFetch(
    `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=coldplay`
  );

  const [librarysongs, setLibrary] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]); //aqui se manejaran los resultados de busqueda

  // Función para agregar una canción a la biblioteca
  const addToLibrary = (album) => {
    if (!librarysongs.some((s) => s.idAlbum === album.id)) {
      setLibrary([...librarysongs, album]);
    }
  };

  useEffect(() => {
    setFilteredSongs(albums); //efecto secundario que cambia los resultados de búsqueda al cargar las canciones
  }, [albums]);

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
      setFilteredSongs(albums);
      return;
    }
    const results = albums.filter(
      (album) =>
        album.strAlbum.toLowerCase().includes(search.toLowerCase()) ||
        album.strArtist.toLowerCase().includes(search.toLowerCase())
    );
    if (results.length === 0) {
      alert("No se encontraron resultados");
      setFilteredSongs(albums);
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

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar canciones</div>;

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
                albums={filteredSongs}
                onAddToLibrary={addToLibrary}
                search={search}
                handleInputChange={handleInputChange}
                handleKeyDown={handleKeyDown}
                handleSearch={handleSearch}
              />
            </>
          }
        />
        <Route path="/song/:id" element={<SongDetail albums={albums} />} />
      </Routes>
    </>
  );
};

export default App;
