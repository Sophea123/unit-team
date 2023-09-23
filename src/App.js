import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import NavScrollExample from './components/NavScrollExample';
import Searchbox from './components/SearchBox';
import { Login } from './components/Login';
import {BrowserRouter as Router, Routes, Route, useNavigate, } from "react-router-dom"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
  const url =  `http://www.omdbapi.com/?s=${searchValue}&apikey=67da658`;

  const response = await fetch (url);
  const responseJson = await response.json();

  if(responseJson.Search){
  setMovies(responseJson.Search);
  }
};

useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);

  return (
      
    <div className='container-fluid movie-app'>

      <div className='row d-flex align-items-center mt-2'>
        <MovieListHeading heading='Movies' />
        <Searchbox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>

      <div className='row'>
      <MovieList movies={movies}/>
      </div>
  </div>
  );
}
;

export default App;
