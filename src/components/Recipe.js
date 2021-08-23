import React, { useEffect, useState } from 'react'
import './scss/recipe.scss';

const Recipe = (props) =>{
  const API_KEY = process.env.REACT_APP_API_KEY;
  const recipeId = props.match.params.id;
  const [item, setItem] = useState()
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      setItem(data)
      return data
    })
    .then(res => {
      for(let i = 0; i < res.extendedIngredients.length; i++) {
        console.log(res.extendedIngredients[i].nameClean)
        setIngredients([...ingredients, res.extendedIngredients[i].nameClean])
      }
    })
  }, [])
  
  return(
    <div>
      {item && 
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: item.title}}/>
        <p>Summary</p>
        <div dangerouslySetInnerHTML={{ __html: item.summary }} />
        <p>Ingredients</p>
        <ul>
        </ul>
        
        <p>Instructions</p>
        <div dangerouslySetInnerHTML={{ __html: item.instructions }} />
        <div>
          <ul>
          {item.analyzedInstructions[0].steps.map((step, index) => {
            return (
            <li key={index}>
              <span>Step {step.number}</span>
              <p>{step.step}</p>
            </li>

            )
          })}
          </ul>
          
        </div>
      </div>
        }
    </div>
  )
}

export default Recipe
