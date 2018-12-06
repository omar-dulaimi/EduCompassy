import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Parents.css';
import TimeTable from '../Teachers/ClassesComponents/TimeTable.jsx';
import HomeWork from '../Teachers/ClassesComponents/HomeWork.jsx';
import Marks from '../Teachers/ClassesComponents/Marks.jsx';
import WeeklyReports from '../Teachers/ClassesComponents/WeeklyReports.jsx';
import Events from '../Teachers/ClassesComponents/Events.jsx';

class Parents extends Component {
    render() {
        return (
            <Fragment>
                 <Router>
                     <div>
                <form>

                <div>
                    <h1>Parents Page:</h1>
                </div>
               
              
                
                <div className="jumbotron jumbotron-fluid teachers">
                    <div className="container">
                       
                       
                        <div className="dropdown myDropDown">
                           <h4> <span>Dashboard</span></h4>

                        </div>                
                        {/* <div className="dropdown myDropDown">
                            <h5><span>Classes</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <Link to="/TimeTable"><p>TimeTable</p></Link>
                                <Link to="/HomeWork"><p>Homework</p></Link>
                                <Link to="/Marks"><p>Student's Marks</p></Link>
                                <Link to="/WeeklyReports"><p>Weekly Reports</p></Link>
                                <Link to="/Events"><p>Events</p></Link>
                            </div>
                        </div>                 */}
                        <div className="dropdown myDropDown">
                            <h5><span>Children</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Ahamed</p></a> 
                                <a><p>Khalid</p></a>
                              
                            </div>
                        </div>
                        <div className="dropdown myDropDown">
                            <h5><span>Info</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <Link to="/timetable"><p>TimeTable</p></Link>
                                <Link to="/events"><p>Events</p></Link>
                                <Link to="marks"><p>Marks</p></Link>
                            </div>
                            <Route exact path="/timetable" component={TimeTable} />
                            <Route exact path="/events" component={Events} />
                            <Route exact path="/marks" component={Marks} />
                        </div>     
                        <div className="dropdown myDropDown">
                            <h5><span>Chatting</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Sarah:English</p></a>
                                <a><p>Khalid:Math</p></a>
                                <a><p>Omer:Arabic</p></a>
                            </div>
                        </div>
                   </div>

                   </div>
                
                
                        </form>
                      
                       
                        </div>
                        </Router>
               
            </Fragment>
        );
    }

}

                {/* <form>
                    <div className="btn-group">
                        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Children
                        </button>
                        <div className="dropdown-menu mymenu ">
                            <a className="dropdown-item muitem " href="#">Ahamed</a>
                            <a className="dropdown-item muitem " href="#">Khalid</a>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Chatting
                    </button>
                        <div className="dropdown-menu mymenu ">
                            <a className="dropdown-item muitem " href="#">Sarah:English</a>
                            <a className="dropdown-item muitem " href="#">Khalid:Math</a>
                            <a className="dropdown-item muitem " href="#">Omer:Arabic</a>
                            <a className="dropdown-item muitem " href="#">Ashraf:Sience</a>
                        </div>
                    </div>

                    <div className="btn-group">
                        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Info
                    </button>

                        <div className="dropdown-menu mymenu ">
                            <Link className="dropdown-item muitem " to="/timetable">Timetable</Link>
                            <a className="dropdown-item muitem " href="#">Homework</a>
                            <a className="dropdown-item muitem " href="#">Marks</a>
                            <a className="dropdown-item muitem " href="#">WeeklyReports</a>
                            <a className="dropdown-item muitem " href="#">Events</a>
                        </div>

                    </div>
                   
                       

                           
                            <Route exact path="/timetable" component={TimeTable} />
                        
                    

                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal" >Complians</button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label htmlFor="Parentes-name" className="col-form-label">Name</label>
                                        <input type="text" className="form-control" id="Parentes-name" required autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Title</label>
                                        <input type="text" className="form-control" id="Title-name" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Message:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-info">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
</Router> 
            </Fragment>
        );
    }
}  */}

export default Parents;
            
            
            
 