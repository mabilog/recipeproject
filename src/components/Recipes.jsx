import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './scss/recipes.scss'

const Recipes = ({match:{params:{query}}}) => {
  // const API_KEY = process.env.RECT_APP_API_KEY;
  // const query = props.match.params.query;
  // const [item, setItem] = useState();

  // useEffect(() => {
  //   console.log(props)
  // }, [])
  
  return (
    <div className="recipes-card">
      <h1>Recipes component {query}</h1>
        {/* {props.searchData.results.map(recipe => {
          return(
            <div className="recipe" key={recipe.id}>
            <h5 className="card-title">{recipe.title}</h5>
            <h6 className="card-subtitle">{recipe.id}</h6>
            <input type="checkbox" name="" id="" />
            <div className="img-container">
              <img src={recipe.image} alt={recipe.name}/>
              <button>
                <Link to={{ pathname: `/recipe/${recipe.id}` }} id={recipe.id}>Check Recipe</Link>
              </button>
               {/* <button onClick={() => getRecipe(recipe.id)}>Check Recipe</button> 
            </div>
           </div>
          )
        })} */}
    </div>
  )
}

export default Recipes
