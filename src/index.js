import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FavouritesProvider } from './context/FavouritesContext';
import { AuthProvider } from './context/AuthContext';
import { WatchlistProvider } from './context/WatchlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <WatchlistProvider>
        <FavouritesProvider>
          <App />
        </FavouritesProvider>
      </WatchlistProvider>
    </AuthProvider>
  </React.StrictMode>
);