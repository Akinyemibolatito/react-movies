import { useState, useEffect } from 'react';
import { discoverMovies, getGenres } from '../services/tmdb';
import MovieCard from '../components/MovieCard';

function AdvancedSearch() {
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [minRating, setMinRating] = useState('');
  const [language, setLanguage] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGenres().then(data => setGenres(data.genres));
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (genre) params.append('with_genres', genre);
    if (year) params.append('primary_release_year', year);
    if (minRating) params.append('vote_average.gte', minRating);
    if (language) params.append('with_original_language', language);

    const data = await discoverMovies(params.toString());
    setResults(data.results);
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Advanced Search</h1>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px', marginTop: '10px' }}>
        <select
          onChange={e => setGenre(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        >
          <option value="">All Genres</option>
          {genres.map(g => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>

        <input
          placeholder="Year (e.g. 2024)"
          onChange={e => setYear(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />

        <input
          placeholder="Min Rating (e.g. 7)"
          onChange={e => setMinRating(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />

        <select
          onChange={e => setLanguage(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        >
          <option value="">All Languages</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
        </select>

        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            backgroundColor: '#032541',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      <div className="movie-grid">
        {results.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}

export default AdvancedSearch;