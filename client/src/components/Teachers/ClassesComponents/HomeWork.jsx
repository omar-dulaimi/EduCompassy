import React, { Component, Fragment } from 'react';
import '../../../index.css';

class HomeWork extends Component {

    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid ">
                    <div className="container ">
                        <h1 className="display-4"> <strong>HomeWorks Page</strong> </h1>
                        <p className="lead">Homework page Goes Here</p>
                        <div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Grades
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" >G 1</a>
                                    <a className="dropdown-item" >G 2</a>
                                    <a className="dropdown-item" >G 3</a>
                                    <a className="dropdown-item" >G 4</a>
                                    <a className="dropdown-item" >G 5</a>
                                    <a className="dropdown-item" >G 6</a>
                                    <a className="dropdown-item" >G 7</a>
                                    <a className="dropdown-item" >G 8</a>
                                    <a className="dropdown-item" >G 9</a>
                                    <a className="dropdown-item" >G 10</a>
                                    <a className="dropdown-item" >G 11</a>
                                    <a className="dropdown-item" >G 12</a>
                                </div>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page"></li>
                                </ol>
                            </nav>
                            <div>
                                <div>
                                    <button type="button " className="btn btn-warning myDropDown " data-toggle="modal" data-target=".bd-example-modal-lg">Math</button>
                                    <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <img src="http://k6s3v6r4.ssl.hwcdn.net/pictures/789/789223.jpg" />
                                                <div className="card text-center">
                                                    <div className="card-header">
                                                        Weekly Homework
                                                      </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Your Kinds' HomeWork </h5>
                                                                <p><strong>Section :</strong></p>                      
                                                                <p><strong>Title :</strong></p>
                                                                <p><strong>Page :</strong></p>
                                                                <p><strong>Resources :</strong></p>
                                                        <h6 className="card-text">For more details about your kid please chatting the teacher!</h6>
                                                        <a className="btn btn-primary">Chat</a>
                                                    </div>
                                                    <div className="card-footer text-muted">
                                                        2 days ago
                                                     </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-warning myDropDown" data-toggle="modal" data-target=".bd-example-modal-lg">Science</button>
                                    <div className="modal fade bd-example-modal-lg" tabIndex={-2} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <img className="card-img homeworkImg" src="https://assets.pearsonschool.com/asset_mgr/current/201216/sf_science_2010_de_anchor.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-warning myDropDown" data-toggle="modal" data-target=".bd-example-modal-lg">I.T</button>
                                    <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <img className="card-img homeworkImg" src="https://www.celerion.com/wp-content/uploads/2011/12/biostatistics.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-warning myDropDown" data-toggle="modal" data-target=".bd-example-modal-lg">History</button>
                                    <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <img className="card-img homeworkImg" src="https://www.celerion.com/wp-content/uploads/2011/12/biostatistics.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-warning myDropDown" data-toggle="modal" data-target=".bd-example-modal-lg">Music</button>
                                    <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <img className="card-img homeworkImg" src="https://www.celerion.com/wp-content/uploads/2011/12/biostatistics.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-warning myDropDown" data-toggle="modal" data-target=".bd-example-modal-lg">English</button>
                                    <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <img className="card-img homeworkImg" src="https://www.celerion.com/wp-content/uploads/2011/12/biostatistics.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-warning myDropDown" data-toggle="modal" data-target=".bd-example-modal-lg">Chemsitry</button>
                                    <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <img className="card-img homeworkImg" src="https://www.celerion.com/wp-content/uploads/2011/12/biostatistics.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-dark text-white">
                                <img className="card-img homeworkImg" src="https://i0.wp.com/stmamom.com/wp-content/uploads/2018/01/preschool.jpg?resize=700%2C200" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Home Works Goes Here</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default HomeWork;