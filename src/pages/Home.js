import { useState, useEffect } from 'react';
import { getTrending } from '../services/tmdb';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrending()
      .then(data => setMovies(data.results))
      .catch(err => setError('Failed to load movies'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="spinner"></div>;
  if (error) return <p style={{ color: 'red', padding: '20px' }}>{error}</p>;

  return (
    <div>
      <h1 style={{ padding: '20px' }}>Trending Today</h1>
      <div className="movie-grid">
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}

export default Home;