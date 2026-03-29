import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

function Watchlists() {
  const { watchlists, createWatchlist, deleteWatchlist } = useWatchlist();
  const [newName, setNewName] = useState('');

  const handleCreate = () => {
    if (newName.trim()) {
      createWatchlist(newName);
      setNewName('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>📋 My Watchlists</h1>

      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <input
          value={newName}
          onChange={e => setNewName(e.target.value)}
          placeholder="New watchlist name..."
          style={{ padding: '10px', fontSize: '16px', flex: 1 }}
        />
        <button onClick={handleCreate} style={{
          padding: '10px 20px',
          backgroundColor: '#032541',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Create
        </button>
      </div>

      {watchlists.length === 0 ? (
        <p>No watchlists yet! Create one above.</p>
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
            <button onClick={() => deleteWatchlist(wl.id)} style={{
              padding: '8px 16px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlists;