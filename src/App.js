import './App.css';
import { useState } from 'react';

import Index from './components/Index';
import Card from './components/Card';

function App() {
  const [query, setQuery] = useState('');
  
  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">

      </header>
=======
      <Index query={query} setQuery={setQuery}/>
      <Card/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
