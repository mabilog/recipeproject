import './App.scss';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
// import Nav from './components/Nav';
import Home from './components/Home'
import Favorites from './components/Favorites'

import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';

import NavBar from './components/Navbar/Navbar';
function App() {
  const [query, setQuery] = useState(null);
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('react-recipes-app-favorite')) setFavorites(JSON.parse(localStorage.getItem('react-recipes-app-favorite')))
    else setFavorites([]);
  },[])

  useEffect(() => {
  }, [data])
  return (
    <div className="App">
        <NavBar 
          query={query}
          setQuery={setQuery}
          data={data} 
          setData={setData}
           />
        
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            {/* <Route path='/recipes/:query'> */}
              { data && <Recipes 
                data={data} 
                setData={setData}
                favorites={favorites}
                setFavorites={setFavorites}
                /> } 
            {/* </Route> */}
            <Route path='/recipe/:id' component={Recipe}/>
          </Switch>  
          
          <Favorites 
            setData={setData}
            favorites={favorites} 
            setFavorites={setFavorites}
            heading="Favorites" 
            />    

    </div>
  );
}

export default App;
