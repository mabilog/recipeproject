import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import './scss/recipes.scss'
import { DynamicFeedOutlined } from '@material-ui/icons';

const Recipes = ({ data, favorites, setFavorites, saveToLocalStorage}) => {
  
   
  const addFavoriteRecipe = (recipe) => {
    const newFavoritesList = [...favorites, recipe];
    setFavorites(newFavoritesList);
    saveToLocalStorage(newFavoritesList);
  }

  return (
    <div className="recipes-card">
      {/* <h1>Recipes component </h1> */}
        {data.results.map(recipe => {
          // console.log(recipe)
          return(
            <div className="recipe" key={recipe.id}>
            <h5 className="card-title">{recipe.title}</h5>
            <h6 className="card-subtitle">{recipe.id}</h6>
            <div className="favoritesBtn">
              <span onClick={() => addFavoriteRecipe(recipe)}>Add to favorite</span>
              </div>
            
            <div className="img-container">
              <img src={recipe.image} alt={recipe.name}/>
                <Link to={`/recipe/${recipe.id}`} id={recipe.id}>Check Recipe</Link>
               {/* <button onClick={() => getRecipe(recipe.id)}>Check Recipe</button>  */}
            </div>
           </div>
          )
        })}
    </div>
  )
}

export default Recipes
