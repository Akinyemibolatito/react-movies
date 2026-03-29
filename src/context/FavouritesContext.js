import { createContext, useContext, useState, useEffect } from 'react';

const FavCtx = createContext();

export function FavouritesProvider({ children }) {
  const [favs, setFavs] = useState(() => {
    const saved = localStorage.getItem('favs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs]);

  const addFav = (movie) => setFavs(prev =>
    prev.find(f => f.id === movie.id) ? prev : [...prev, movie]);

  const removeFav = (id) => setFavs(prev => prev.filter(f => f.id !== id));

  const isFav = (id) => favs.some(f => f.id === id);

  return (
    <FavCtx.Provider value={{ favs, addFav, removeFav, isFav }}>
      {children}
    </FavCtx.Provider>
  );
}

export const useFavourites = () => useContext(FavCtx);