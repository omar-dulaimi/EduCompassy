import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Main from '../Main/Main.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Main />
      </Fragment >
    );
  }
}

export default App;
