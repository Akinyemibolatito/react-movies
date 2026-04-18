---
name: react-movies
description: Builds a full-featured movie discovery and watchlist web application using React, TMDB API, JSON Server, Context API, and React Router. Use this skill when building React applications that need user authentication, API integration, local backend with JSON Server, global state management with Context API, and client-side routing with React Router.
---

# React Movies - Movie Finder & Watchlist Application

## Overview
A full-featured movie discovery and watchlist management web application. Integrates with TMDB API for live movie data and uses JSON Server as a local backend to persist user accounts, favourites, and watchlists.

## Prerequisites
- Node.js installed
- npm installed
- Free TMDB API key from themoviedb.org

## Step 1: Clone and Install
git clone https://github.com/Akinyemibolatito/react-movies.git
cd react-movies
npm install

## Step 2: Configure Environment
Create a .env file in the root folder:
REACT_APP_TMDB_KEY=your_tmdb_api_key_here

Get your free API key from themoviedb.org → Settings → API

## Step 3: Start JSON Server (Terminal 1)
npm run server

JSON Server runs on http://localhost:3001
Endpoints available:
- http://localhost:3001/users
- http://localhost:3001/favorites
- http://localhost:3001/watchlists

## Step 4: Start React App (Terminal 2)
npm start

App runs on http://localhost:3000 (or 3002 if ports are taken)

## Project Structure
react-movies/
├── src/
│   ├── components/
│   │   ├── MovieCard.js      ← Reusable movie card
│   │   ├── Navbar.js         ← Navigation bar
│   │   └── ProtectedRoute.js ← Auth guard
│   ├── pages/
│   │   ├── Home.js           ← Trending movies
│   │   ├── Search.js         ← Search movies
│   │   ├── MovieDetail.js    ← Full movie info
│   │   ├── Login.js          ← User login
│   │   ├── Register.js       ← User registration
│   │   ├── Profile.js        ← User profile
│   │   ├── Favourites.js     ← Saved favourites
│   │   ├── AdvancedSearch.js ← Filter search
│   │   ├── Watchlists.js     ← Manage watchlists
│   │   └── WatchlistDetail.js← Single watchlist
│   ├── context/
│   │   ├── AuthContext.js        ← Login state
│   │   ├── FavouritesContext.js  ← Favourites state
│   │   └── WatchlistContext.js   ← Watchlist state
│   └── services/
│       └── tmdb.js           ← All TMDB API calls
├── db.json                   ← JSON Server database
├── .env                      ← API key (not committed)
└── package.json              ← Scripts and dependencies

## Features

### Grade B - Guest Features
- Trending movies homepage (TMDB /trending/movie/day)
- Movie search by keyword (TMDB /search/movie)
- Movie detail page with poster, title, rating, genres, overview
- Add/remove favourites stored in localStorage
- Responsive CSS Grid layout for mobile and desktop

### Grade B+ - Authentication & Advanced Search
- User registration with name, email, password validation
- User login/logout with session persistence via localStorage
- AuthContext for global authentication state management
- Protected routes that redirect unauthenticated users to /login
- Profile page showing user info, favourites and watchlists
- Advanced search using TMDB /discover/movie endpoint
- Filters: genre, release year, minimum rating, language

### Grade A - Watchlist Manager
- Create named watchlists stored in JSON Server database
- Add movies to watchlists from Movie Detail page
- Remove individual movies from watchlist detail page
- Delete entire watchlists permanently
- Watchlist detail page at /watchlists/:id
- All watchlists shown on Profile page

## Routes
Route | Access | Description
/ | All users | Trending movies
/search | All users | Search by keyword
/movies/:id | All users | Movie details
/login | Guest only | Login form
/register | Guest only | Register form
/profile | Auth only | User profile
/favorites | Auth only | Saved favourites
/advanced-search | Auth only | Filter search
/watchlists | Auth only | All watchlists
/watchlists/:id | Auth only | Single watchlist

## Technology Stack
- React 19 with Functional Components
- React Hooks: useState, useEffect, useContext
- Context API: AuthContext, FavouritesContext, WatchlistContext
- React Router v7 for client-side routing
- TMDB REST API for movie data
- JSON Server on port 3001 as local backend
- CSS Grid for responsive layout

## Known Issues
- Passwords stored in plain text in JSON Server (development only)
- App may run on port 3002 if 3000 is already in use