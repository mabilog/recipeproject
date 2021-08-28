import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

const Favorites = ({ setData, favorites, setFavorites }) => {
  console.log(favorites);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-recipes-app-favorite', JSON.stringify(items))
  }
  const RemoveFavoriteRecipe = (recipe) => {
    const newFavoritesList = favorites.filter(favorite => favorite.id !== recipe.id)
    setFavorites(newFavoritesList);
    saveToLocalStorage(newFavoritesList);
  }

  return (
  <>
    <h1>Favorites</h1>
      <RecipesWrapper>
          { favorites  && favorites.map(recipe => {
            return(
              <RecipeWrapper key={recipe.id}>
                <h5 className="card-title">{recipe.title}</h5>
                {/* <h6 className="card-subtitle">{recipe.id}</h6> */}
                <div className="favoritesBtn">
                  <span onClick={() => RemoveFavoriteRecipe(recipe)}>Remove Favorite ❌</span>
                </div>
                
                <div className="img-container">
                  <img src={recipe.image} alt={recipe.name}/>
                    <Link to={`/recipe/${recipe.id}`} id={recipe.id} onClick={() => setData('')}>Check Recipe</Link>
                  {/* <button onClick={() => getRecipe(recipe.id)}>Check Recipe</button>  */}
                  <Overlay>{}</Overlay>
                </div>
              </RecipeWrapper>
            )
          })}
      </RecipesWrapper>
   </>
  )
}
const RecipesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 20px;
  gap: 20px;
  overflow: hidden;
  &:hover{
    overflow: auto;
  }
`;

const RecipeWrapper = styled.div`
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
  justify-content: flex-start;
  img{
    justify-content: space-between;
  }

  &:hover{
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    width: 1005;
    transition: 0.5s ease;
    opacity: 0;
    bottom: 0;
    font-size: 20px;
    padding: 20px;
    text-align: center;
`;

export default Favorites
