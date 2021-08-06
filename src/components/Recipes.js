import React,{ useEffect } from 'react'
// import './scss/recipes.scss'
const Recipes = () => {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  
  // const getRecipe = (id) => {
  //   // fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
  //   // .then(res => res.json())
  //   // .then(data => console.log(data.id))
  //   // .catch(err => console.log("Something went wrong. no idea what though so go read it yourself " + err ))
  // }
  // const handleClick = (id) => {getRecipe(id)}

  // console.log(searchData)

  useEffect(() => {
    fetch(`/fake data/apple.jpg`)
    .then(res => {return res.blob()})
    .then(res => console.log(res))

  }, [])
  return (
    <>
    <div className="recipes-card">
      <div className="recipes-body">
        <img src="" id="apple" alt="apple"/>
        {/* {searchData.results.map(recipe => {
          return(
            <div key={recipe.id}>
            <h5 className="card-title">{recipe.title}</h5>
            <h6 className="card-subtitle">{recipe.id}</h6>
              <img src={recipe.image} alt={recipe.name}/>
              <button onClick={getRecipe(recipe.id)}>Check Recipe</button>
           </div>
          )
        })} */}
      </div>
    </div>
    </>
    
  )
}

export default Recipes
