import { useState } from 'react';
import './index.css';

function App() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=ce1d37c8`);
    const result = await response.json();
    console.log(result);
    
    if (result.Search) {
      setMovies(result.Search);
    }
  };

  return (
    <div>
      <h2>Movie Data</h2>
      <input 
        type="text" 
        placeholder="Enter movie name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <button onClick={getMovie}>Get Movie</button>
      <br /><br />
      
      {movies.length > 0 && (
        <section style={{ width: '100%' }}>
          {movies.map((movie) => (
            <div key={movie.imdbID} style={{ marginBottom: '20px' }}>
              <h2>{movie.Title}</h2>
              <div><b>Year:</b> <span>{movie.Year}</span></div>
              <div><b>Type:</b> <span>{movie.Type}</span></div>
              <br />
              <img src={movie.Poster} alt="Poster" width="150" />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default App;
