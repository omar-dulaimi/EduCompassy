import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Parents.css';
import TimeTable from '../Teachers/ClassesComponents/TimeTable.jsx';
import HomeWork from '../Teachers/ClassesComponents/HomeWork.jsx';
import Marks from '../Teachers/ClassesComponents/Marks.jsx';
import WeeklyReports from '../Teachers/ClassesComponents/WeeklyReports.jsx';
import Events from '../Teachers/ClassesComponents/Events.jsx';

class Parents extends Component {
    state = {
        parent_name: "",
        Title: "",
        Message: "",
        submit: false,

    };
    // `id` INT NOT NULL AUTO_INCREMENT,
    // `date_of_send` VARCHAR(45) NULL,
    // `date_of_process` VARCHAR(45) NULL,
    // `parents_id` INT  NULL,
    // `teacher_id` INT  NULL,
    // `parent_name` VARCHAR(45) NULL,
    // `title`VARCHAR(45) NULL,
    // `message`VARCHAR(45) NULL,
    // PRIMARY KEY (`id`));


    // componentDidMount(){
    //     this.listAllAdmins()
    //     .then((res) => {
    //         console.log("res Mount: ", res)
    //         this.setState({ ListAdmins: res });
    //     })
    //     .catch(err => console.log(err));
    // }

    handleSubmitPOST = async e => {
        e.preventDefault();
        const response = await fetch('/S_complaints', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        });
        const body = await response.text();
        const body1 = JSON.parse(body)

        console.log(body1);
        // this.setState({
        //     parent_name: body1.parent_name,
        //     Title: body1.Title,
        //     Message: body1.Message,
        //     submit: true,
        // });
        console.log("handleSubmitPOST body: ", body1.parent_name);
        console.log(this.state.parent_name)
    };

    addNewComplaint = () => {
        this.setState({
            submit: false,
        });
    }

    // getQuote = async () => {
    //     const response = await fetch('http://quotes.rest/qod.json?category=inspire');
    //     const body = await response.json();
    //     // console.log("S_ListAllAdmins: ", body);
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    // };



    render() {
        return (
            <Fragment>
                <Router>
                    <div>
                        <div>
                            <h1>Parents Page:</h1>
                        </div>
                        <div className="jumbotron jumbotron-fluid teachers">
                            <div className="container">
                                <div className="dropdown myDropDown">
                                    <h4> <span>Dashboard</span></h4>
                                </div>
                                <div className="dropdown myDropDown">
                                    <h5><span>Children </span></h5>
                                    <ul>
                                        <div className="dropdown-content myDropDown-content">
                                            <div className="dropdown-submenu">
                                                <li><a><p>Ahamed</p></a>
                                                    <ul>
                                                        <div className="dropdown myDropDown">
                                                            <li><Link to="/timetable"><p>TimeTable</p></Link></li>
                                                            <li><Link to="/events"><p>Events</p></Link></li>
                                                            <li><Link to="/marks"><p>Marks</p></Link></li>
                                                            <li><Link to="/weeklyreports"><p>WeeklyReports</p></Link></li>
                                                            <li><Link to="/homework"><p>HomeWork</p></Link></li>
                                                        </div>
                                                    </ul>
                                                </li>
                                            </div>
                                            <div className="dropdown-submenu">
                                                <li><a><p>Khalid</p></a>
                                                    <ul>
                                                        <div className="dropdown myDropDown">
                                                            <li><Link to="/timetable"><p>TimeTable</p></Link></li>
                                                            <li><Link to="/events"><p>Events</p></Link></li>
                                                            <li><Link to="/marks"><p>Marks</p></Link></li>
                                                            <li><Link to="/weeklyreports"><p>WeeklyReports</p></Link></li>
                                                            <li><Link to="/homework"><p>HomeWork</p></Link></li>
                                                        </div>
                                                    </ul>

                                                </li>
                                            </div>
                                        </div>
                                    </ul>

                                </div>

                                <div className="dropdown myDropDown">
                                    <h5><span>Chatting</span></h5>
                                    <div className="dropdown-content myDropDown-content">
                                        <a><p>Sarah:English</p></a>
                                        <a><p>Khalid:Math</p></a>
                                        <a><p>Omer:Arabic</p></a>
                                    </div>
                                </div>
                                <a className="  mybtn" data-toggle="modal" data-target="#exampleModal" >Complaints</a>
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
                                                    <input type="text" className="form-control" id="Parentes-name" placeholder="Name"
                                                        value={this.state.parent_name}
                                                        onChange={e => this.setState({ parent_name: e.target.value })}
                                                        required autoFocus />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Title</label>
                                                    <input type="text" className="form-control" id="Title-name" placeholder="Title"
                                                        value={this.state.Title}
                                                        onChange={e => this.setState({ Title: e.target.value })} />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                                    <textarea className="form-control" id="message-text" placeholder="Message"
                                                        value={this.state.Message}
                                                        onChange={e => this.setState({ Message: e.target.value })}
                                                    ></textarea>
                                                </div>

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-info" data-dismiss="modal" onClick={this.handleSubmitPOST }>Send message</button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


 
                    <Route exact path="/timetable" component={TimeTable} />
                    <Route exact path="/events" component={Events} />
                    <Route exact path="/marks" component={Marks} />
                    <Route exact path="/weeklyreports" component={WeeklyReports} />
                    <Route exact path="/homework" component={HomeWork} />

                    </div>
                </Router>

            </Fragment >
        );
    }

}



export default Parents;



