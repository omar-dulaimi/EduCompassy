import React, { Component, Fragment } from 'react';
import '../../../index.css';

class WeeklyReports extends Component {

    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid ">
                    <div className="container ">
                        <h1 className="display-4"> <strong>Weekly Reports</strong></h1>
                        <p className="lead"> Something  Something  Something  Something  Something  Something </p>
                        <div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page"></li>
                                </ol>
                            </nav>
                            <div>

                                <div >

                                </div>

                            </div>
                        </div>
                        <div className="card bg-dark text-white">
                            <img className="card-img homeworkImg" src="https://www.nedlands.wa.gov.au/sites/default/files/styles/top_img/public/iStock_000010466267Large.jpg?itok=I4YlSvJX" />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Reports Goes Here</h5>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Week 1
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p><strong> Psychology Report :</strong> Standard 1: Students read a wide range of print and non-print texts … to acquire new information; to respond to the needs and demands of society and the workplace; and for personal fulfillment. Among these texts are fiction and nonfiction, classic and contemporary works.</p>
                                        <p><strong> Technical Report :</strong> Standard 2: Students read a wide range of print and non-print texts … to acquire new information; to respond to the needs and demands of society and the workplace; and for personal fulfillment. Among these texts are fiction and nonfiction, classic and contemporary works.</p>
                                    <p><strong> Emotional Report :</strong> Standard 3: Students read a wide range of print and non-print texts … to acquire new information; to respond to the needs and demands of society and the workplace; and for personal fulfillment. Among these texts are fiction and nonfiction, classic and contemporary works.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Week 2
                                         </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p><strong> Psychology Report :</strong> Standard 1: Students read a wide range of print and non-print texts … to acquire new information; to respond to the needs and demands of society and the workplace; and for personal fulfillment. Among these texts are fiction and nonfiction, classic and contemporary works.</p>
                                        <p><strong> Technical Report :</strong>Standard 2: Students read a wide range of print and non-print texts … to acquire new information; to respond to the needs and demands of society and the workplace; and for personal fulfillment. Among these texts are fiction and nonfiction, classic and contemporary works.</p>
                                        <p><strong> Emotional Report :</strong>Standard 3: Students read a wide range of print and non-print texts … to acquire new information; to respond to the needs and demands of society and the workplace; and for personal fulfillment. Among these texts are fiction and nonfiction, classic and contemporary works.</p>
                                                                        </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          Week 3
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p><strong> Psychology Report :</strong> Standard 1: Students read a wide range of print and non-print texts … to acquire new information; to respond to the needs and demands of society and the workplace; and for personal fulfillment. Among these texts are fiction and nonfiction, classic and contemporary works.</p>
                                        <p><strong> Technical Report :</strong>Standard 2: Students read a wide range of print and non-print texts … to acquire new information; to respond to the needs and demands of society and the workplace; and for personal fulfillment. Among these texts are fiction and nonfiction, classic and contemporary works.</p>
                                        <p><strong> Emotional Report :</strong>Standard 3: Students read a wide range of print and non-print texts … to acquire new information; to respond to the needs and demands of society and the workplace; and for personal fulfillment. Among these texts are fiction and nonfiction, classic and contemporary works.</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment >

        )
    }

}
export default WeeklyReports;
