import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div className="movie-card">
        <img src={img} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average?.toFixed(1)}</p>
        <p>{movie.release_date?.slice(0, 4)}</p>
      </div>
    </Link>
  );
}

export default MovieCard;