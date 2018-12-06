import React, { Component, Fragment } from 'react';

import '../../../index.css';

class Marks extends Component {

    render() {
        return (

            <Fragment>
                <div className="jumbotron jumbotron-fluid ">
                    <div className="container">
                        <div>
                            <h1>Marks Component</h1>
                        </div>
                        <p className="lead"> Something  Something  Something  Something  Something  Something </p>  
                    </div>
                    
                    <div className="alert alert-light " role="alert">
                        <p> <strong>Student's Name :</strong> Name </p>
                        <p><strong>Student's Grade :</strong> Grade</p>
                        <p><strong>Student's ID :</strong> ID</p>




                        <div className="btn-group ">
                            <button type="button" className="btn btn-primary ">Select Subject </button>
                            <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item " href="#">Math</a>
                                <a className="dropdown-item" href="#">Science</a>
                                <a className="dropdown-item" href="#">Art</a>
                                <a className="dropdown-item" href="#">History</a>
                                <a className="dropdown-item" href="#">English</a>
                                <a className="dropdown-item" href="#">Music</a>

                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">More </a>
                            </div>
                        </div>
                    </div>
                                 
                </div>
            </Fragment>
        )
    }

}
export default Marks;
