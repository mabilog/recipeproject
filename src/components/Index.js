import React from 'react'

const index = ({getRecipe, getQuery}) => {


  return (
    <div>
      <form action="submit">
        <input type="text" name="searchQuery" id="searchQuery" onChange={getQuery()}/>
        <button type="submit" onClick={getRecipe}>Search</button>
      </form>
    </div>
  )
}

export default index
