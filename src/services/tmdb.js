const BASE = 'https://api.themoviedb.org/3';
const KEY = process.env.REACT_APP_TMDB_KEY;

export const getTrending = () =>
  fetch(`${BASE}/trending/movie/day?api_key=${KEY}`)
    .then(r => { if(!r.ok) throw new Error('Failed'); return r.json(); });

export const searchMovies = (query) =>
  fetch(`${BASE}/search/movie?api_key=${KEY}&query=${query}`)
    .then(r => r.json());

export const getMovieDetails = (id) =>
  fetch(`${BASE}/movie/${id}?api_key=${KEY}`)
    .then(r => r.json());

export const discoverMovies = (params) =>
  fetch(`${BASE}/discover/movie?api_key=${KEY}&${params}`)
    .then(r => r.json());

export const getGenres = () =>
  fetch(`${BASE}/genre/movie/list?api_key=${KEY}`)
    .then(r => r.json());