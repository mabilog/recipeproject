import React from 'react';
import { useHistory } from 'react-router-dom';
// import {BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import './scss/nav.scss';

import Search from './Search';

const Nav = ({ query, setQuery, data, setData }) => {
  const history = useHistory(); 
  
  const handleClick = () => {
    history.push("/");
  }

  return (
    <div className='nav-wrapper'>
        <span onClick={handleClick}>123Recipes</span>
        <Search query={query} setQuery={setQuery} data={data} setData={setData} className="search"/>
    </div>
  )
}

export default Nav
