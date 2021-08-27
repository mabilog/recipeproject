import React, { useEffect } from 'react'

import './scss/favorites.scss'

const Favorites = ({favorites, setFavorites}) => {
  useEffect(() => {
    favorites.map(favorite => console.log(favorite.id))
  }, [favorites])

  const removeFavoriteRecipe = (recipe) => {
    const newFavoritesList = favorites.filter(favorite => favorite.id !== recipe.id);
    setFavorites(newFavoritesList);
  }

  return (
    <div className="favoritesWrapper">
      <div className="favoriteRecipe">
        <h3></h3>
      </div>

    </div>
  )
}

export default Favorites
