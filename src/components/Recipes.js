import React from 'react'

const Recipes = ({ searchData }) => {
  console.log(searchData);
  return (
    <>
    <div className="recipes-card">
      <div className="recipes-body">
        {searchData.results.map(recipe => {
          return(
            <div>
            <h5 className="card-title">{recipe.title}</h5>
            <h6 className="card-subtitle">{recipe.id}</h6>
            {/* <p className="card-text">Something something too sweet for you bb</p>  */}
            <img src={recipe.image} alt={recipe.name}/>
           </div>
          )
        })}
      </div>
    </div>
    </>
    
  )
}

export default Recipes
