import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import History from './History';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <h1>Hello There ! </h1>
          <div className='link'>
            <NavLink exact to="/" activeClassName='red'><p>Home</p></NavLink>
            <NavLink to="/notre-histoire" activeClassName='red'><p>History</p></NavLink>
          </div>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/notre-histoire' exact component={History}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
