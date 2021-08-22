import React from 'react';

import './scss/header.scss';

import Search from './Search';

const Header = ({getInfo, handleChange}) => {
  return (
    <div className='header-wrapper'>
      <span>123Recipes</span>
        <Search  getInfo={getInfo} handleChange={handleChange} className="search"/>
    </div>
  )
}

export default Header
