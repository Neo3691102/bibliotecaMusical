import "./App.css";

import Header from "./components/header/Header";
import SearchResults from "./components/searchResults/searchResults";
import Library from "./components/library/Library";
import AlbumDetail from "./components/albumDetail/AlbumDetail";
import SongDetail from "./components/songDetail/SongDetail";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";



const App = () => {
 

  const [libraryalbums, setLibrary] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState([]); //aqui se manejaran los resultados de busqueda
  const [query, setQuery] = useState(""); //para actualizar lo que el usuario busca

   const {
    albums = [],
    loading,
    error,
  } = useFetch(
    `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${query}`
  );

  // Función para agregar una canción a la biblioteca
  const addToLibrary = (album) => {
    if (!libraryalbums.some((s) => s.idAlbum === album.id)) {
      setLibrary([...libraryalbums, album]);
    }
  };

useEffect(() => {
  // Si la API no devuelve nada, limpia los resultados
  if (!albums || albums.length === 0) {
    setFilteredAlbums([]);
    return;
  }
  // Si no hay búsqueda, muestra todos los álbumes obtenidos
  if (search.trim() === "") {
    setFilteredAlbums(albums);
    return;
  }
  // Filtra localmente por nombre de álbum o artista
  const results = albums.filter(
    (album) =>
      album.strAlbum?.toLowerCase().includes(search.toLowerCase()) ||
      album.strArtist?.toLowerCase().includes(search.toLowerCase())
  );
  setFilteredAlbums(results);
}, [albums, search]);

  useEffect(() => {
    if (libraryalbums.length > 0) {
      console.log("Se ha agregado una canción a la biblioteca");
      alert("Cancion agregada a la biblioteca");
    }
  }, [libraryalbums]);

  // Handler para el input de búsqueda
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // Handler para buscar
  const handleSearch = () => {
  setQuery(search); // Actualiza la búsqueda en la API
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
              <Library albums={libraryalbums} />
              <SearchResults
                albums={filteredAlbums}
                onAddToLibrary={addToLibrary}
                search={search}
                handleInputChange={handleInputChange}
                handleKeyDown={handleKeyDown}
                handleSearch={handleSearch}
              />
            </>
          }
        />
        <Route path="/album/:id" element={<AlbumDetail albums={albums} />} />
        <Route path="/album/:albumId/song/:id" element={<SongDetail />} />
      </Routes>
    </>
  );
};

export default App;
