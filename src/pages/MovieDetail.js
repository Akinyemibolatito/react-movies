import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/tmdb';
import { useFavourites } from '../context/FavouritesContext';
import { useWatchlist } from '../context/WatchlistContext';
import { useAuth } from '../context/AuthContext';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedWl, setSelectedWl] = useState('');
  const [added, setAdded] = useState(false);
  const { addFav, removeFav, isFav } = useFavourites();
  const { watchlists, addMovie } = useWatchlist();
  const { user } = useAuth();

  useEffect(() => {
    getMovieDetails(id)
      .then(setMovie)
      .catch(() => setError('Failed to load movie'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ padding: '20px' }}>Loading...</p>;
  if (error) return <p style={{ color: 'red', padding: '20px' }}>{error}</p>;
  if (!movie) return <p style={{ padding: '20px' }}>Movie not found</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '300px', borderRadius: '8px' }}
      />
      <h1 style={{ marginTop: '20px' }}>{movie.title}</h1>
      <p>📅 {movie.release_date}</p>
      <p>⭐ {movie.vote_average?.toFixed(1)}</p>
      <p>🎬 {movie.genres?.map(g => g.name).join(', ')}</p>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>{movie.overview}</p>

      <button
        onClick={() => isFav(movie.id) ? removeFav(movie.id) : addFav(movie)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isFav(movie.id) ? 'red' : 'green',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        {isFav(movie.id) ? '❤️ Remove from Favourites' : '🤍 Add to Favourites'}
      </button>

      {user && watchlists.length > 0 && (
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <select
            onChange={e => setSelectedWl(e.target.value)}
            style={{ padding: '10px', fontSize: '16px' }}
          >
            <option value="">Add to watchlist...</option>
            {watchlists.map(wl => (
              <option key={wl.id} value={wl.id}>{wl.name}</option>
            ))}
          </select>
          <button
            onClick={() => {
              if (selectedWl) {
                addMovie(selectedWl, movie);
                setAdded(true);
                setTimeout(() => setAdded(false), 2000);
              }
            }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#032541',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Add to Watchlist
          </button>
        </div>
      )}
      {added && (
        <p style={{ color: 'green', marginTop: '8px', fontWeight: 'bold' }}>
          ✅ Added to watchlist!
        </p>
      )}
    </div>
  );
}

export default MovieDetail;
