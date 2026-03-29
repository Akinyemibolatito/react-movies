import { Link } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';

function Navbar() {
  const { favs } = useFavourites();

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
      <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginLeft: 'auto' }}>
        Login
      </Link>
      <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
        Register
      </Link>
    </nav>
  );
}

export default Navbar;