import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetail';

function Login() { return <h1>Login Page</h1>; }
function Register() { return <h1>Register Page</h1>; }
function Profile() { return <h1>Profile Page</h1>; }
function Favourites() { return <h1>Favourites Page</h1>; }
function AdvancedSearch() { return <h1>Advanced Search Page</h1>; }
function Watchlists() { return <h1>Watchlists Page</h1>; }
function WatchlistDetail() { return <h1>Watchlist Detail Page</h1>; }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/advanced-search" element={<AdvancedSearch />} />
        <Route path="/watchlists" element={<Watchlists />} />
        <Route path="/watchlists/:id" element={<WatchlistDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;