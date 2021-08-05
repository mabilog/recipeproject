import './App.css';
import { useEffect, useState } from 'react';

// import Index from './components/Index';
import Card from './components/Card';


function App() {
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    console.log(process.env.REACT_APP_API_PLEASE);
  }, [])


  const getRecipe = (e) => {
    e.preventDefault();
    fetch(setQuery(document.getElementById('searchQuery').value))
    .then(() => console.log(query));
    // console.log(query);
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <form>
        <input type="text" placeholder="Query" id="searchQuery"/>
        <button onClick={getRecipe}>Search</button>

      </form>
      {/* <Index query={query} setQuery={setQuery}/> */}
      <Card/>
    </div>
  );
}

export default App;
