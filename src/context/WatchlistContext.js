import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const WatchlistCtx = createContext();

export function WatchlistProvider({ children }) {
  const { user } = useAuth();
  const [watchlists, setWatchlists] = useState([]);

  useEffect(() => {
    if (!user) { setWatchlists([]); return; }
    fetch(`http://localhost:3001/watchlists?userId=${user.id}`)
      .then(r => r.json())
      .then(setWatchlists);
  }, [user]);

  const createWatchlist = async (name) => {
    const res = await fetch('http://localhost:3001/watchlists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, userId: user.id, movies: [] })
    });
    const newList = await res.json();
    setWatchlists(prev => [...prev, newList]);
  };

  const deleteWatchlist = async (id) => {
    await fetch(`http://localhost:3001/watchlists/${id}`, { method: 'DELETE' });
    setWatchlists(prev => prev.filter(w => w.id !== id));
  };

  const addMovie = async (watchlistId, movie) => {
    const wl = watchlists.find(w => String(w.id) === String(watchlistId));
    if (wl.movies.find(m => m.id === movie.id)) return;
    const updated = { ...wl, movies: [...wl.movies, movie] };
    await fetch(`http://localhost:3001/watchlists/${watchlistId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
    setWatchlists(prev => prev.map(w => String(w.id) === String(watchlistId) ? updated : w));
  };

  const removeMovie = async (watchlistId, movieId) => {
    const wl = watchlists.find(w => String(w.id) === String(watchlistId));
    const updated = { ...wl, movies: wl.movies.filter(m => m.id !== movieId) };
    await fetch(`http://localhost:3001/watchlists/${watchlistId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
    setWatchlists(prev => prev.map(w => String(w.id) === String(watchlistId) ? updated : w));
  };

  return (
    <WatchlistCtx.Provider value={{ watchlists, createWatchlist, deleteWatchlist, addMovie, removeMovie }}>
      {children}
    </WatchlistCtx.Provider>
  );
}

export const useWatchlist = () => useContext(WatchlistCtx);