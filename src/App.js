
import './App.css';
import Header from './components/header/Header';
import SearchResults from './components/searchResults/searchResults';
import Library from './components/library/Library';
import picture from "./img/beethoven-ludwig-van.jpg";


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
      },
    ]


    return (
    <div className="App">
      <Header />

      <div>
        <Library />
      </div>

      <div className="songList">
        <SearchResults songs={songList} />
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