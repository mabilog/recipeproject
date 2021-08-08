import React from 'react'

const Search = ({handleChange, getInfo}) => {


  return (
    <form className="search-bar">
      <input type="text" onChange={handleChange} placeholder="Search"/> 
      <button onClick={getInfo}>Search</button>
    </form>
  )
}

export default Search
