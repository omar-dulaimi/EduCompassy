import React, { Component, Fragment } from 'react';

import '../../../index.css';

class Marks extends Component {

    render() {
        return (

            <Fragment>
                <div className="jumbotron jumbotron-fluid ">
                    <div className="container">
                        <div>
                            <h1>Students' Results</h1>
                        </div>
                        <p className="lead"> Students' Results</p>  
                    </div>
                    
                    <div className="alert alert-dark " role="alert">
                       
                        <form>

                            <label htmlFor="Student_name" className=""> Student's Name  </label>
                            <input type="text" id="student_name" placeholder="Student Name" />
                            <label htmlFor="student_grade" className=""> Students's Grade  </label>
                            <input type="text" id="student_grade"/>
                            <label htmlFor="subject_id" className=""> Subject ID  </label>
                            <input type="text" id="subject_id"/>
                            <br />

                            <button type="submit">Results</button>
                        </form>








                        <div>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Subject ID</th>
                                        <th scope="col">Math</th>
                                        <th scope="col">Science</th>
                                        <th scope="col">Music</th>
                                        <th scope="col">History</th>
                                        <th scope="col">English</th>
                                        <th scope="col">Arts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                                 
                </div>
            </Fragment>
        )
    }

}
export default Marks;
