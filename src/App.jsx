import './App.scss';
import { useState, useEffect } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';

import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Nav from './components/Nav';
import Home from './components/Home'
import Favorites from './components/Favorites'

function App() {
  const [query, setQuery] = useState(null);
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-recipes-app-favorite', JSON.stringify(items))
  }
   
  return (
    <div className="App">
        <Nav query={query} setQuery={setQuery} data={data} setData={setData} />
        <Favorites 
          favorites={favorites} 
          setFavorites={setFavorites} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/recipes/:query'>
              <Recipes 
                data={data} 
                favorites={favorites} 
                setFavorites={setFavorites}
                saveToLocalStorage={saveToLocalStorage}
                />
            </Route>
            <Route path='/recipe/:id' component={Recipe}/>
          </Switch>      
    </div>
  );
}

export default App;
