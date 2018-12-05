import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Title from './components/Title.jsx';
import CreateStudent from './components/Create/CreateStudent.jsx';
import CreateAdmin from './components/Create/CreateAdmin.jsx';
import CreateTeacher from './components/Create/CreateTeacher.jsx';




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
                            <h5><span>Create</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <Link to="/CreateStudent"><p>Student</p></Link>
                                <Link to="/CreateAdmin"><p>Admin</p></Link>
                                <Link to="/CreateTeacher"><p>Teacher</p></Link>
                            </div>
                        </div>                
                        <div className="dropdown myDropDown">
                            <h5><span>Update</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Hello World!</p></a>
                                <a><p>Hello World!</p></a>
                                <a><p>Hello World!</p></a>
                            </div>
                        </div>
                        <div className="dropdown myDropDown">
                            <h5><span>View</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Grades</p></a>
                                <a><p>Progress</p></a>
                                <a><p>Something</p></a>
                            </div>
                        </div>     
                        <div className="dropdown myDropDown">
                            <h5><span>Chatting</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Admin</p></a>
                                <a><p>Parents</p></a>
                                <a><p>Students</p></a>
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