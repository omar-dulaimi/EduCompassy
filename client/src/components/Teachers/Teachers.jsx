import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

//import './Teachers.css';
import TimeTable from './ClassesComponents/TimeTable.jsx';
import HomeWork from './ClassesComponents/HomeWork.jsx';
import Marks from './ClassesComponents/Marks.jsx';
import WeeklyReports from './ClassesComponents/WeeklyReports.jsx';
import Events from './ClassesComponents/Events.jsx';




class Teachers extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <div className="jumbotron jumbotron-fluid ">
                        <div className="container">
                            <h1 className="display-4"> <strong>Teachers Page</strong></h1>
                            <p className="lead"> Teachers Page Goes Here</p>
                            <ul className="nav nav-pills">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Classes</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/TimeTable"><p>TimeTable</p></Link>
                                        <Link className="dropdown-item" to="/HomeWork"><p>Homework</p></Link>
                                        <Link className="dropdown-item" to="/Marks"><p>Student's Marks</p></Link>
                                        <Link className="dropdown-item" to="/WeeklyReports"><p>Weekly Reports</p></Link>
                                        <Link className="dropdown-item" to="/Events"><p>Events</p></Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Students</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#"><a><p>List Students</p></a></Link>
                                        <Link className="dropdown-item" to="#"><a><p>Search Student</p></a></Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Parents</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#"><a><p>Students' Marks</p></a></Link>
                                        <Link className="dropdown-item" to="#"><a><p>WeeklyReports</p></a></Link>
                                        <Link className="dropdown-item" to="#"><a><p>Events</p></a></Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Chatting</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#"><a><p>Admin</p></a></Link>
                                        <Link className="dropdown-item" to="#"><a><p>Parents</p></a></Link>
                                        <Link className="dropdown-item" to="#"><a><p>Students</p></a></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <img className="card-img-bottom" src="https://www.xdesk.com/blog/wp-content/uploads/2015/07/bigstock-Pupils-raising-hand-during-geo-83001707-700x200.jpg" alt="Card image cap" />
                        </div>
                        <Switch>
                            <Route exact path="/timetable" id = "time"component={TimeTable} />
                            <Route exact path="/HomeWork" component={HomeWork} />
                            <Route exact path="/events" component={Events} />
                            <Route exact path="/marks" component={Marks} />
                            <Route exact path="/WeeklyReports" component={WeeklyReports} />
                        </Switch>
                    </div>
                </Router>
            </Fragment>
        );
    }
}
export default Teachers;