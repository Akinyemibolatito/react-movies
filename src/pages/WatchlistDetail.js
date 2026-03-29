import { useParams, Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';

function WatchlistDetail() {
  const { id } = useParams();
  const { watchlists, removeMovie } = useWatchlist();
  const wl = watchlists.find(w => String(w.id) === String(id));

  if (!wl) return <p style={{ padding: '20px' }}>Watchlist not found</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <Link to="/watchlists" style={{
        color: '#032541',
        textDecoration: 'none',
        fontSize: '16px'
      }}>
        ← Back to Watchlists
      </Link>
      <h1 style={{ marginTop: '10px' }}>📋 {wl.name}</h1>
      <p style={{ color: 'gray' }}>{wl.movies.length} movies</p>

      {wl.movies.length === 0 ? (
        <p style={{ marginTop: '20px' }}>No movies yet! Go add some from a movie page.</p>
      ) : (
        <div className="movie-grid" style={{ marginTop: '20px' }}>
          {wl.movies.map(m => (
            <div key={m.id} style={{ position: 'relative' }}>
              <MovieCard movie={m} />
              <button
                onClick={() => removeMovie(wl.id, m.id)}
                style={{
                  width: '100%',
                  padding: '8px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '4px'
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchlistDetail;