
import './App.css';
import Header from './components/header/Header';
import SearchResults from './components/searchResults/searchResults';
import Library from './components/library/Library';
import picture from "./img/beethoven-ludwig-van.jpg";
import { useState, useEffect } from 'react';


const App = () => {
  //componentDidMount(){
   // console.log("La aplicacion se cargó correctamente");
  //}
    const songList = [
      {
        id: 1,
        songName: "Winter",
        artist: "Vivaldi",
        duration: "9:27",
        album: "classic-songs",
        picture: picture
      },
      {
        id: 2,
        songName: "Rondo Alla Turca",
        artist: "Mozart",
        duration: "3:32",
        album: "classic-songs",
        picture: picture
      },
      {
        id: 3,
        songName: "Lacrimosa",
        artist: "Mozart",
        duration: "4:05",
        album: "classic-songs",
        picture: picture
      },
      {
        id: 4,
        songName: "Moonlight Sonata",
        artist: "Beethoven",
        duration: "6:00",
        album: "classic-songs",
        picture: picture
      },
      {
        id: 5,
        songName: "Virus",
        artist: "Beethoven",
        duration: "3:35",
        album: "classic-songs",
        picture: picture
      },
      {
        id: 6,
        songName: "Apassionata",
        artist: "Beethoven",
        duration: "7:35",
        album: "classic-songs",
        picture: picture
      }
    ]

     const [librarysongs, setLibrary] = useState([]);

  // Función para agregar una canción a la biblioteca
  const addToLibrary = (song) => {
    // Evita duplicados
    if (!librarysongs.some(s => s.id === song.id)) {
      setLibrary([...librarysongs, song]);
    }
  };

    useEffect(() => {
  if (librarysongs.length > 0) {
    console.log("Se ha agregado una canción a la biblioteca");
  }
}, [librarysongs]);

    return (
    <div className="App">
      <Header />

      <div className="library">
        <Library songs={librarysongs} />
      </div>

      <div className="searchcontainer">
        <label for="searchinput">Buscar cancion</label>
        <input type="text" id="searchinput" placeholder="Buscar cancion" />
      </div>
      

      <div className="songList">
        <SearchResults songs={songList} onAddToLibrary={addToLibrary} />
      </div>
      
    </div>
  )
  
  
}

export default App;
//<div className="songList">
    //    <Song songName="Moonlight Sonata" artist="Beethoven" duration="6:00" album="classic-songs" picture={picture} />
      //  <Song songName="Virus" artist="Beethoven" duration="3:35" album="classic-songs" picture={picture} />
      //  <Song songName="Apassionata" artist="Beethoven" duration="7:35" album="classic-songs" picture={picture} />
     // </div>