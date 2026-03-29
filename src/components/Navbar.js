import { Link } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { favs } = useFavourites();
  const { user, logout } = useAuth();

  return (
    <nav style={{
      backgroundColor: '#032541',
      padding: '15px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }}>
      <Link to="/" style={{ color: '#01b4e4', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }}>
        🎬 MovieApp
      </Link>
      <Link to="/search" style={{ color: 'white', textDecoration: 'none' }}>
        Search
      </Link>
      <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>
        ❤️ Favourites ({favs.length})
      </Link>
      {user ? (
        <>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none', marginLeft: 'auto' }}>
            👤 {user.name}
          </Link>
          <Link to="/watchlists" style={{ color: 'white', textDecoration: 'none' }}>
            📋 Watchlists
          </Link>
          <button onClick={logout} style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '4px'
          }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginLeft: 'auto' }}>
            Login
          </Link>
          <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;