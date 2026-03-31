# React Movies 🎬

A full-featured movie discovery and watchlist management web application built with React. The app integrates with The Movie Database (TMDB) API to retrieve live movie data and uses JSON Server as a local backend to persist user accounts, favourites, and watchlists.

## Prerequisites
- Node.js (v14 or higher)
- npm
- json-server (installed globally)

## Installation

1. Clone the repository:
```
git clone https://github.com/Akinyemibolatito/react-movies.git
```

2. Install dependencies:
```
npm install
```

3. Create a .env file in the root folder:
```
REACT_APP_TMDB_KEY=your_tmdb_api_key_here
```

4. Start JSON Server (in one terminal):
```
npm run server
```

5. Start the React app (in another terminal):
```
npm start
```

## Features

### Grade B - Guest Features
- ✅ Trending movies homepage
- ✅ Movie search by keyword
- ✅ Movie detail page (poster, title, rating, genres, overview)
- ✅ Add/remove favourites (localStorage)
- ✅ Responsive design

### Grade B+ - Authentication & Advanced Search
- ✅ User registration
- ✅ User login and logout
- ✅ Session persistence
- ✅ Profile page
- ✅ Persistent favourites (database)
- ✅ Advanced search filters (genre, year, rating, language)
- ✅ Protected routes

### Grade A - Watchlist Manager
- ✅ Create named watchlists
- ✅ Add movies to watchlists
- ✅ Remove movies from watchlists
- ✅ Delete watchlists
- ✅ Watchlist detail page
- ✅ Watchlists shown on profile page

## Known Issues
- Passwords are stored in plain text in JSON Server (this is a development project)
```

Save with `Ctrl + S` then run:
```
git add .
```
```
git commit -m "docs: add README"
```
```
git push