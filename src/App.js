import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import History from './components/History';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="nav">
          <Link to="/search">Search News</Link>
          <Link to="/history">Search History</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/history" component={History} />
      </Switch>
    </Router>
  );
}

export default App;
