import React from 'react';
/* import logo from './logo.svg'; */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './components/home.jsx';
import Error from './components/404.jsx';

function App() {
  return (
    <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} exact/>
            <Route component={Error}/>
          </Switch>
          <div class="footer-anchor">
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/* base code
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/