import { useFavourites } from '../context/FavouritesContext';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

function Favourites() {
  const { favs, removeFav } = useFavourites();

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>❤️ My Favourites ({favs.length})</h1>

      {favs.length === 0 ? (
        <div style={{ marginTop: '20px' }}>
          <p>No favourites yet!</p>
          <Link to="/" style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#032541',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none'
          }}>
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="movie-grid" style={{ marginTop: '20px' }}>
          {favs.map(m => (
            <div key={m.id}>
              <MovieCard movie={m} />
              <button
                onClick={() => removeFav(m.id)}
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
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;