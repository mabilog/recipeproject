import './App.scss';
import {  useState } from 'react';
import Recipes from './components/Recipes';
import Search from './components/Search';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState(null);
  const [searchData, setSearchData] = useState(null);
  // const [savedRecipes, setSavedRecipes] = useState(
  //   localStorage.getItem('savedRecipes', JSON.stringify({}))
  // )
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const getInfo = (e) =>{
    e.preventDefault();
    console.log("Query: " + query);
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => setSearchData(data))
      .catch(err => console.log("Something went wrong! " + err))
  }

  
  return (
    <div className="App">
      <header>123Recipes </header>

      <Search  getInfo={getInfo} handleChange={handleChange} className="search"/>
      {searchData &&  <Recipes searchData={searchData}/>}
    </div>
  );
}

export default App;
