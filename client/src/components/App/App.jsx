import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Parents from '../Parents/Parents.jsx';
import Teachers from '../Teachers/Teachers.jsx';
import Admin from '../Admin/Admin.jsx';
import About from '../About/About.jsx';
import Signin from '../Signin/Signin.jsx';
import Header from '../Header/Header.jsx'
import Home from '../Home/Home.jsx'

import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/signin" component={Signin} />
            <Route path="/admin" component={Admin} />
            <Route path="/teachers" component={Teachers} />
            <Route path="/parents" component={Parents} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
