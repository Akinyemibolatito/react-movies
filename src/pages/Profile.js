import { useAuth } from '../context/AuthContext';
import { useFavourites } from '../context/FavouritesContext';
import { useWatchlist } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

function Profile() {
  const { user, logout } = useAuth();
  const { favs } = useFavourites();
  const { watchlists } = useWatchlist();

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: '#032541',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1>👤 {user.name}</h1>
        <p>📧 {user.email}</p>
        <button onClick={logout} style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Logout
        </button>
      </div>

      <h2>❤️ My Favourites ({favs.length})</h2>
      {favs.length === 0 ? (
        <p>No favourites yet! Go add some movies.</p>
      ) : (
        <div className="movie-grid">
          {favs.map(m => <MovieCard key={m.id} movie={m} />)}
        </div>
      )}

      <h2 style={{ marginTop: '30px' }}>📋 My Watchlists ({watchlists.length})</h2>
      {watchlists.length === 0 ? (
        <p>No watchlists yet! <Link to="/watchlists">Create one</Link></p>
      ) : (
        watchlists.map(wl => (
          <div key={wl.id} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '8px',
            marginBottom: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <Link to={`/watchlists/${wl.id}`} style={{
              textDecoration: 'none',
              color: '#032541',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              📋 {wl.name}
            </Link>
            <span style={{ color: 'gray' }}>{wl.movies.length} movies</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;