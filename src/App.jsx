import './App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About';
// import Search from './components/Search';

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState(null);
  // const [searchData, setSearchData] = useState(null)
  const [data, setData] = useState(null);

  // const [savedRecipes, setSavedRecipes] = useState(
  //   localStorage.getItem('savedRecipes', JSON.stringify({}))
  // // )
  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // }

  // const getInfo = (e) =>{
  //   e.preventDefault();
  //   console.log("Query: " + query);
  //   fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`)
  //     .then(res => res.json())
  //     .then(data => setSearchData(data))
  //     .catch(err => console.log("Something went wrong! " + err))
  // }

  
  return (
    <div className="App">

      <Router>
        <Header query={query} setQuery={setQuery} data={data} setData={setData}/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/recipes/:query' component={Recipes}/>
            <Route path='/recipe/:id' component={Recipe}/>
          </Switch>
      </Router>

      
    </div>
  );
}

export default App;
