import './App.css';
import {  useState } from 'react';

import Recipes from './components/Recipes';

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const [query, setQuery] = useState(null);
  // const [searchData, setSearchData] = useState(null);
  
  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // }

  // const getInfo = (e) =>{
  //   e.preventDefault();
  //   // console.log("Query: " + query);
  //   // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`)
  //   //   .then(res => res.json())
  //   //   .then(data => setSearchData(data))
  //   //   .catch(err => console.log("Something went wrong! " + err))

  //   fetch(`/fake data/fake.json`)
  //     .then(res => res.jsonify())
  //     .then(data => {
  //       setSearchData(data)
  //       console.log(data)})
  //     .catch(err => console.log("something seems a fucky " + err))

  // }

  
  return (
    <div className="App">
      <form >
        {/* <input type="text" onChange={handleChange} placeholder="Search"/> 
                <button onClick={getInfo}>Search</button>
*/}
        <input type="text" placeholder="Search"/>
        <button >Search</button>
      </form>
      {/* {searchData &&  <Recipes searchData={searchData}/>} */}
      <Recipes/>
    </div>
  );
}

export default App;
