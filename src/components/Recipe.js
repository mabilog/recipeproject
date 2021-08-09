import React, { useEffect } from 'react'

const Recipe = (props) =>{
  const API_KEY = process.env.REACT_APP_API_KEY;
  const recipeId = props.match.params.id;


  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return(
    <div>Not a penis</div>
  )
}

export default Recipe
