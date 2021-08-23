import React from 'react'
import './scss/search.scss'
import  SearchIcon from '@material-ui/icons/Search';

const Search = ({handleChange, getInfo}) => {

  return (
  
    <div className="search-container">
      <form className="search-form">
        <input type="text" onChange={handleChange} placeholder="Search" className="search-input"/> 
        <button onClick={getInfo} className="search-button"><SearchIcon/></button>
      </form>
    </div>
    
  )
}

export default Search
