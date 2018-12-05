import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Teachers.css';
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
                <div className="jumbotron jumbotron-fluid teachers">
                    <div className="container">
                        <h1 className="display-4"> <strong>Teachers Page</strong> </h1>
                        <p className="lead"> Something  Something  Something  Something  Something  Something </p>
                        <div className="dropdown myDropDown">
                           <h4> <span>Dashboard</span></h4>

                        </div>                
                        <div className="dropdown myDropDown">
                            <h5><span>Classes</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <Link to="/TimeTable"><p>TimeTable</p></Link>
                                <Link to="/HomeWork"><p>Homework</p></Link>
                                <Link to="/Marks"><p>Student's Marks</p></Link>
                                <Link to="/WeeklyReports"><p>Weekly Reports</p></Link>
                                <Link to="/Events"><p>Events</p></Link>
                            </div>
                        </div>                
                        <div className="dropdown myDropDown">
                            <h5><span>Students</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Hello World!</p></a>
                                <a><p>Hello World!</p></a>
                                <a><p>Hello World!</p></a>
                            </div>
                        </div>
                        <div className="dropdown myDropDown">
                            <h5><span>Parents</span></h5>
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
                        <div className="card">
                            <img className="card-img-bottom" src="https://www.xdesk.com/blog/wp-content/uploads/2015/07/bigstock-Pupils-raising-hand-during-geo-83001707-700x200.jpg" alt="Card image cap" />
                        </div>
                          <Route exact path="/timetable" component={TimeTable} />
                        <Route exact path="/HomeWork" component={HomeWork} />

                      <Route exact path="/events" component={Events} />  
                        <Route exact path="/marks" component={Marks} />                    
                        <Route exact path="/WeeklyReports" component={WeeklyReports} />                    

                    </div>  
                </Router>
                        
                <div>
                <TimeTable/>
                </div> 


                <div>
                    <Events />
                    <HomeWork/>
                    <Marks/>
                    <WeeklyReports/>

                </div> 
                
            </Fragment>
        );
    }

}
export default Teachers;