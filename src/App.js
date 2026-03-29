import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AdvancedSearch from './pages/AdvancedSearch';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function Favourites() { return <h1>Favourites Page</h1>; }
function Watchlists() { return <h1>Watchlists Page</h1>; }
function WatchlistDetail() { return <h1>Watchlist Detail Page</h1>; }

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        } />
        <Route path="/favorites" element={
          <ProtectedRoute><Favourites /></ProtectedRoute>
        } />
        <Route path="/advanced-search" element={
          <ProtectedRoute><AdvancedSearch /></ProtectedRoute>
        } />
        <Route path="/watchlists" element={
          <ProtectedRoute><Watchlists /></ProtectedRoute>
        } />
        <Route path="/watchlists/:id" element={
          <ProtectedRoute><WatchlistDetail /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
