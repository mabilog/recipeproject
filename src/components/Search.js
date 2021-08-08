import React from 'react'
import './scss/search.scss'

const Search = ({handleChange, getInfo}) => {


  return (
    <form className="search-form">
      <input type="text" onChange={handleChange} placeholder="Search" className="search-input"/> 
      <button onClick={getInfo} className="search-button">Search</button>
    </form>
  )
}

export default Search
