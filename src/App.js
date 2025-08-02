
import './App.css';
import React, {Component} from 'react';
import Header from './components/header/Header';
import Song from './components/song/Song';
import picture from './img/beethoven-ludwig-van.jpg';

class App extends Component {
  componentDidMount(){
    console.log("La aplicacion se cargó correctamente");
  }


  render() {
    return (
    <div className="App">
      <Header />
      <div className="songList">
        <Song songName="Moonlight Sonata" artist="Beethoven" duration="6:00" picture={picture} />
        <Song songName="Virus" artist="Beethoven" duration="3:35" picture={picture} />
        <Song songName="Apassionata" artist="Beethoven" duration="7:35" picture={picture} />
      </div>
      
    </div>
  )
  }
  
}

export default App;
