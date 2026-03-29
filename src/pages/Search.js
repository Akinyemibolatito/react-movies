import { useState } from 'react';
import { searchMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const data = await searchMovies(query);
      setResults(data.results);
    } catch (err) {
      setError('Failed to search movies');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch} style={{ padding: '20px' }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies..."
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' }}>
          Search
        </button>
      </form>
      {loading && <p style={{ padding: '20px' }}>Loading...</p>}
      {error && <p style={{ color: 'red', padding: '20px' }}>{error}</p>}
      <div className="movie-grid">
        {results.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}

export default Search;