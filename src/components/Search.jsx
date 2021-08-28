import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

// import './scss/search.scss'
import  SearchIcon from '@material-ui/icons/Search';

// import Recipes from './Recipes'

const Search = ({ query, setQuery, data, setData }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  // const history = useHistory();

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const getInfo = (e) => {
    e.preventDefault();
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => console.log("Something went wrong! " + err))
  }

  return (
    <SearchWrapper>
      <SearchForm className="search-form" >
        <SearchInput 
          type="text" 
          onChange={handleChange} 
          placeholder="Search" 
          className="search-input" 
          onSubmit={getInfo} 
        /> 
        <SearchBtn 
          onClick={getInfo} 
          className="search-button" 
          // component={Recipes}
        >
            <SearchIcon/>
        </SearchBtn>
      </SearchForm>
    </SearchWrapper>
    
  )
}

const SearchWrapper = styled.div`
  height: 50px;
  display: flex;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translate(-50%, -50%);
  background: white;
  transition: all 0.3s ease;
  &:focus{
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }
`;  

const SearchInput = styled.input`
  position: absolute;
  left: 20px;
  font-size: 14px;
  background: none;
  color: #5a6674;
  width: 300px; 
  height: 30px;
  border: none;
  appearance: none;
  outline: none;
`;

const SearchBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 25px;
  height: 20px;
  width: 10px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none!important;
  cursor: pointer;
`;

export default Search
