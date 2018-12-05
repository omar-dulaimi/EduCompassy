import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Home from '../Home/Home.jsx';
import Parents from '../Parents/Parents.jsx';
import Teachers from '../Teachers/Teachers.jsx';
import Admin from '../Admin/Admin.jsx';
import About from '../About/About.jsx';
import Signin from '../Signin/Signin.jsx';

class App extends Component {
  state = {
    post: '',
    get: '',
    responseToPost: 'Click the button to Post',
    responseToGet: 'Click the button to Get',
    responseToGetAuto: 'This will Auto Change',

  };

  /*
  Read about:
  componentDidMount()
  https://reactjs.org/docs/react-component.html#componentdidmount
  */
  componentDidMount() {
    this.callApiHi()
      .then(res => this.setState({ responseToGetAuto: res.express }))
      .catch(err => console.log(err));
  }


  /*
    
    MDN Fetch() / jquery ajax()
    
    Read about Fetch API: 
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    Read about async () =>
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

    Read about await:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

    Notes how this function invoked:

    - callApiHi on client load fetch for get /api/hi using componentDidMount()
    - handleSubmitGET on button "Get /api/hello" clicked (using fetch get)
    - handleSubmitPOST on button "Post /api/world" clicked (using fetch Post)
  */
  callApiHi = async () => {
    const response = await fetch('/GetTest1');
    const body = await response.json();
    console.log("callApiHi body: ", body.express);
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  /*
  Read about Events Handling (In our case, Clicking the form submit button)
  Notes that we use variable e for event 
  
  e.preventDefault();
  https://reactjs.org/docs/handling-events.html


  */

  handleSubmitGET = async e => {
    e.preventDefault();
    const response = await fetch('/GetTest2');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log("handleSubmitGET body: ", body);
    this.setState({ responseToGet: body.express });
  };

  handleSubmitPOST = async e => {
    e.preventDefault();
    const response = await fetch('/PostTest1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    console.log("handleSubmitPOST body: ", body);

  };

  render() {
    return (
      <Fragment>
        <Home />

        {/* Testing Components*/}
        <div className="DivNotes">
          {/* 
        Read New Semantic Elements in HTML5: (<header> <nav> <section> <footer>)
        https://www.w3schools.com/html/html5_semantic_elements.asp
      
      */}

          <header className="App-header">
            <hr />
            <div className="DivNotes">
              <h2>Testing Part:</h2>
            </div>
          </header>

          <section>
            <Parents />
            <hr />
            <Teachers />
            <hr />
            <Admin />
          </section>

          <div className="DivNotes">
            <h3>From componentDidMount() > callApiHi</h3>
            <p>{this.state.responseToGetAuto}</p>
          </div>
          <div className="DivNotes">
            <h3>Form Get:</h3>
            <form onSubmit={this.handleSubmitGET}>
              <p>
                <strong>Get From Server:</strong>
              </p>
              <button type="submit">Get /api/hello</button>
            </form>
            <p>{this.state.responseToGet}</p>
          </div>
          <div className="DivNotes">
            <h3>Form Post:</h3>
            <form onSubmit={this.handleSubmitPOST}>
              <p>
                <strong>Post to Server:</strong>
              </p>
              <input
                type="text"
                value={this.state.post}
                onChange={e => this.setState({ post: e.target.value })}
              />
              <button type="submit">Post /api/world</button>
            </form>
            <p>{this.state.responseToPost}</p>
          </div>

          <footer>
            <hr />
            <p>Have a nice day!</p>
          </footer>
        </div>
      </Fragment >
    );
  }
}

export default App;
