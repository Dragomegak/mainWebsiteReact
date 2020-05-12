import React from 'react';
/* import logo from './logo.svg'; */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Home from './components/Home/home.jsx';
import Projects from './components/Projects/projects.jsx';
import Error from './components/404/404.jsx';
import ContactInfo from './components/Contact-Info/contact-info.jsx'

function App() {
  return (
    <Router>
        <Header />
          <Switch>
            <Route exact path="/"><Redirect to="/home" /></Route>
            <Route path="/home" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact-info" exact component={ContactInfo} />
            <Route path="*" component={Error}/>
          </Switch>
          <div class="footer-anchor">
        <Footer />
      </div>
    </Router>
  );
}

export default App;