import React from 'react';
/* import logo from './logo.svg'; */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './components/home.jsx';
import Projects from './components/projects.jsx';
import Error from './components/404.jsx';

function App() {
  return (
    <Router>
        <Header />
          <Switch>
            <Route exact path="/"><Redirect to="/home" /></Route>
            <Route path="/home" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="*" component={Error}/>
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