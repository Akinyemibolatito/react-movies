import { useAuth } from '../context/AuthContext';
import { useFavourites } from '../context/FavouritesContext';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

function Profile() {
  const { user, logout } = useAuth();
  const { favs } = useFavourites();

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

      <h2 style={{ marginTop: '30px' }}>📋 My Watchlists</h2>
      <Link to="/watchlists" style={{
        display: 'inline-block',
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#032541',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none'
      }}>
        View My Watchlists
      </Link>
    </div>
  );
}

export default Profile;