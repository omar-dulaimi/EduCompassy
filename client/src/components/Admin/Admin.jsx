import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Title from './components/Title.jsx';
import CreateStudent from './components/Students/CreateStudent.jsx';
import Parents from './components/Parents/CreateParent.jsx';
import CreateAdmin from './components/Admins/CreateAdmin.jsx';
import CreateTeacher from './components/Teachers/CreateTeacher.jsx';

class Admin extends Component {


    render() {
        return (
            <Fragment>
                <Router>
                    <div className="jumbotron jumbotron-fluid teachers">
                        <div className="container">
                            <h1 className="display-4"> <strong>Admin Page:</strong> <small>example</small></h1>
                            <p className="lead"> Something  Something  Something  Something  Something  Something </p>
                            <div className="dropdown myDropDown">
                                <h4> <span>Dashboard</span></h4>
                            </div>                
                            <div className="dropdown myDropDown">
                                    <Link to="/Title"><p>Title</p></Link>
                            </div> 
                            <div className="dropdown myDropDown">
                                <h5><span>Admins</span></h5>
                                <div className="dropdown-content myDropDown-content">
                                    <Link to="/CreateAdmin"><p>Create Admin</p></Link>
                                </div>
                            </div>                
                            <div className="dropdown myDropDown">
                                <h5><span>Teachers</span></h5>
                                <div className="dropdown-content myDropDown-content">
                                    <Link to="/CreateTeacher"><p>Create Teacher</p></Link>
                                    <a><p>Hello World!</p></a>
                                    <a><p>Hello World!</p></a>
                                    <a><p>Hello World!</p></a>
                                </div>
                            </div>
                            <div className="dropdown myDropDown">
                                <h5><span>Students</span></h5>
                                <div className="dropdown-content myDropDown-content">
                                    <Link to="/CreateStudent"><p>Create Student</p></Link>
                                    <a><p>Grades</p></a>
                                    <a><p>Progress</p></a>
                                    <a><p>Something</p></a>
                                </div>
                            </div>
                            <div className="dropdown myDropDown">
                                <h5><span>Parents</span></h5>
                                <div className="dropdown-content myDropDown-content">
                                    <Link to="/CreateParent"><p>Create Parent</p></Link>
                                </div>
                            </div>
                            <div className="dropdown myDropDown">
                                <h5><span>Chatting</span></h5>
                                <div className="dropdown-content myDropDown-content">
                                    <a><p>Chatting 1</p></a>
                                    <a><p>Chatting 2</p></a>
                                    <a><p>Chatting 3</p></a>
                                </div>
                            </div>
                        </div>
                        <Route exact path="/Title" component={Title} /> 
                        <Route exact path="/CreateStudent" component={CreateStudent} /> 
                        <Route exact path="/CreateAdmin" component={CreateAdmin} /> 
                        <Route exact path="/CreateTeacher" component={CreateTeacher} />                  
                    </div>  
                </Router>
            </Fragment>
        );
    }

}
export default Admin;