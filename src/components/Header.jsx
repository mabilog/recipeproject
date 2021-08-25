import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import {BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import './scss/header.scss';

import Search from './Search';

const Header = ({ getInfo, handleChange, query }) => {
  const history = useHistory(); 
  
  const handleClick = () => {
    history.push("/");
    console.log('useHistory')
  }

  return (
    <div className='header-wrapper'>
        <span onClick={handleClick}>123Recipes</span>
        <Search getInfo={getInfo} handleChange={handleChange} query={query} className="search"/>
    </div>
  )
}

export default Header
