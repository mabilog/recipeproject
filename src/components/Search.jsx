import React from 'react'
import './scss/search.scss'
import  SearchIcon from '@material-ui/icons/Search';

import Recipes from './Recipes'
const Search = ({ handleChange, getInfo }) => {

  return (
  
    <div className="search-container">
      <form className="search-form">
        <input type="text" onChange={handleChange} placeholder="Search" className="search-input" onSubmit={getInfo} to={(e) => `/recipes/${e.target.value}`}/> 
        <button onClick={getInfo} className="search-button" component={Recipes}><SearchIcon/></button>
      </form>
    </div>
    
  )
}

export default Search
