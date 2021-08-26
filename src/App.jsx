import './App.scss';
import { useState, useEffect } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';

import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Nav from './components/Nav';
import Home from './components/Home'

function App() {
  const [query, setQuery] = useState(null);
  const [data, setData] = useState(null);
  const [favorite, setFavorite] = useState([]);

  return (
    <div className="App">
        <Nav query={query} setQuery={setQuery} data={data} setData={setData} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/recipes/:query'><Recipes data={data} favorite={favorite} setFavorite={setFavorite}/></Route>
            <Route path='/recipe/:id' component={Recipe}/>
          </Switch>      
    </div>
  );
}

export default App;
