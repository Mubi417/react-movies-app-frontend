import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Results from './components/Results'
import url from './services/request'

function App() {
  const [selectedGenreURL, setSelectedGenreURL] = useState(url.trendingMovies)

  return (
    <div className="App">
      <Header />
      <Nav setSelectedGenre={setSelectedGenreURL}/>
      <Results selectedGenre={selectedGenreURL}/>
    </div>
  );
}

export default App;