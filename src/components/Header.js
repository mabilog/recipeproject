import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './scss/header.scss';

import Search from './Search';

const Header = ({query, setQuery, data, setData}) => {

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getInfo = (e) => {
    e.preventDefault();
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
      .catch(err => console.log("Something went wrong! " + err))
  }
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className='header-wrapper'>
      <span>123Recipes</span>
        <Search getInfo={getInfo} handleChange={handleChange} className="search"/>
        
    </div>
  )
}

export default Header
