import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Recipe from './components/Recipe';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact  component={App} />
        <Route path='/recipe/:id' component={Recipe}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
