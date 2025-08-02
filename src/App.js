import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Song from './components/song/Song';
import picture from './img/beethoven-ludwig-van.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <Song songName="Moonlight Sonata" artist="Beethoven" duration="5:00" picture={picture} />
    </div>
  );
}

export default App;
