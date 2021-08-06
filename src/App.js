import './App.css';
import { useEffect, useState } from 'react';

import Card from './components/Card';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState();
  
  const getInfo = (e) =>{
    e.preventDefault();
    console.log("Query: " + query);
    fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}&query=${query}`)
    .then(res => res.json())
    .then(data => {
      return setResults(data)
    })
    .then(response => console.log(response))
    .catch(err => console.log("Something went wrong! " + err))

  }

  const setSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }
  
  return (
    <div className="App">
      <form >
        <input type="text" onSubmit={setSearch}/>
        <button onClick={getInfo} type="submit">Search</button>
      </form>
      <Card results={results}/>
    </div>
  );
}

export default App;
