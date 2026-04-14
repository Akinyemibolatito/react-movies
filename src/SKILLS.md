---
name: react-movies
description: A full-featured movie discovery and watchlist management web application. Use this skill when building React applications with TMDB API integration, user authentication, JSON Server backend, Context API state management, and React Router navigation.
---

# React Movies - Movie Finder & Watchlist Application

## Overview
A React application that integrates with TMDB API to retrieve live movie data and uses JSON Server as a local backend to persist user accounts, favourites, and watchlists.

## Setup Instructions

### Prerequisites
- Node.js installed
- npm installed
- TMDB API key (free at themoviedb.org)

### Installation
1. Clone the repository:
git clone https://github.com/Akinyemibolatito/react-movies.git
cd react-movies

2. Install dependencies:
npm install

3. Create .env file in root folder:
REACT_APP_TMDB_KEY=your_tmdb_api_key_here

4. Start JSON Server (Terminal 1):
npm run server

5. Start React app (Terminal 2):
npm start

## Features Implemented

### Grade B - Guest Features
- Trending movies homepage using TMDB /trending/movie/day endpoint
- Movie search using TMDB /search/movie endpoint
- Movie detail page with poster, title, rating, genres, overview
- Local favourites using localStorage and Context API
- Responsive CSS Grid layout

### Grade B+ - Authentication & Advanced Search
- User registration with client-side validation
- User login/logout with session persistence via localStorage
- AuthContext for global authentication state
- Protected routes redirecting unauthenticated users to /login
- Profile page showing user info, favourites and watchlists
- Advanced search using TMDB /discover/movie endpoint
- Filters: genre, release year, minimum rating, language

### Grade A - Watchlist Manager
- Create named watchlists stored in JSON Server
- Add movies to watchlists from Movie Detail page
- Remove individual movies from watchlists
- Delete entire watchlists
- Watchlist detail page at /watchlists/:id
- Watchlists displayed on Profile page

## Technology Stack
- React 19 (Functional Components only)
- React Hooks (useState, useEffect, useContext)
- Context API (AuthContext, FavouritesContext, WatchlistContext)
- React Router v7
- TMDB API (REST)
- JSON Server (local backend on port 3001)
- CSS Grid (responsive design)

## Project Structure
src/
  components/
    MovieCard.js
    Navbar.js
    ProtectedRoute.js
  pages/
    Home.js
    Search.js
    MovieDetail.js
    Login.js
    Register.js
    Profile.js
    Favourites.js
    AdvancedSearch.js
    Watchlists.js
    WatchlistDetail.js
  context/
    AuthContext.js
    FavouritesContext.js
    WatchlistContext.js
  services/
    tmdb.js

## Known Issues
- Passwords stored in plain text in JSON Server (development only)
- App runs on port 3002 if 3000 and 3001 are already in use