import React from 'react'
import './scss/recipes.scss'

const Recipes = ({searchData}) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const getRecipe = async (id) => {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data.id))
    .catch(err => console.log("Something went wrong. no idea what though so go read it yourself " + err ))
  }

  console.log(searchData)


  return (
    <div className="recipes-card">
        {searchData.results.map(recipe => {
          return(
            <div className="recipe" key={recipe.id}>
            <h5 className="card-title">{recipe.title}</h5>
            <h6 className="card-subtitle">{recipe.id}</h6>
            <div className="img-container">
              <img src={recipe.image} alt={recipe.name}/>
              <button onClick={() => getRecipe(recipe.id)}>Check Recipe</button>
            </div>
           </div>
          )
        })}
    </div>
  )
}

export default Recipes
