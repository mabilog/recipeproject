import React from 'react'
import { useHistory } from 'react-router-dom'
import './scss/search.scss'
import  SearchIcon from '@material-ui/icons/Search';

import Recipes from './Recipes'

const Search = ({ query, setQuery, data, setData }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const history = useHistory();

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const getInfo = (e) => {
    e.preventDefault();
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        history.push(`/recipes/${query}`)
      })
      .catch(err => console.log("Something went wrong! " + err))
  }

  return (
    <div className="search-container">
      <form className="search-form" >
        <input 
          type="text" 
          onChange={handleChange} 
          placeholder="Search" 
          className="search-input" 
          onSubmit={getInfo} 
        /> 
        <button 
          onClick={getInfo} 
          className="search-button" 
          // component={Recipes}
        >
            <SearchIcon/>
        </button>
      </form>
    </div>
    
  )
}

export default Search
