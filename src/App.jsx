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

  // const API_KEY = process.env.REACT_APP_API_KEY;

  // const getInfo = (e) => {
  //   e.preventDefault();
  //   fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data)
  //       history.push(`/recipes/${query}`)
  //     })
  //     .catch(err => console.log("Something went wrong! " + err))
  // }
  
  // useEffect(() => {
  //   console.log(data)
  // }, [data])
  
  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  //   console.log(e.target.value)
  // }

  return (
    <div className="App">
        <Nav query={query} setQuery={setQuery} data={data} setData={setData} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/recipes/:query'><Recipes data={data}/></Route>
            <Route path='/recipe/:id' component={Recipe}/>
          </Switch>      
    </div>
  );
}

export default App;
