import React from 'react'

const Index = ({query, setQuery}) => {

  
  const getRecipe = (e) => {
    e.preventDefault(); 
    setQuery = document.getElementById('searchQuery').value;
    console.log(query);
    
  }
  return (
    <div>
      <form action="submit">
        <input type="text" name="searchQuery" id="searchQuery" />
        <button type="submit" onClick={getRecipe}>Search</button>
      </form>
    </div>
  )
}

export default Index
