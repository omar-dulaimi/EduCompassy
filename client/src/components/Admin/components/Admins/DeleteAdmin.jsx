import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom";

class DeleteAdmin extends Component {
    state = {
        id: '',
        first_name: '',
        middle_names: '',
        last_name: '',
        date_of_birth: '',
        date_of_employment: '',
        phone_number: '',
        id_number: '',
        adminToDelete: [],
        form_submited: false,
    };

    handleSubmitPOST = async e => {
        e.preventDefault();
        const response = await fetch('/S_SearchAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: this.state.id }),
        });
        const body = await response.text();
        console.log("handleSubmitPOST body: ", body);
        var body1 = JSON.parse(body)
        console.log("handleSubmitPOST body1: ", body1);

        this.setState({ adminToDelete: body1 });
        console.log("adminToDelete body: ", this.adminToDelete);
        this.setState({ form_submited: true });

    };

    handleSubmitPOST_Delete = async e => {
        e.preventDefault();
        const response = await fetch('/S_DeleteAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: this.state.id }),
        });
        const body = await response.text();
        console.log("handleSubmitPOST body: ", body);
        var body1 = JSON.parse(body)
        console.log("handleSubmitPOST body1: ", body1);

        this.setState({ form_submited: false });
        alert('Success!');
        return <Redirect to={{ pathname: '/ListAdmins' }} />
    };

    render() {

        if (!this.state.form_submited) {
            return (
                <div>
                    <h3 className="row justify-content-center mb-3 mt-5">Delete admin</h3>
                    <div className="container mt-5">
                        <form onSubmit={this.handleSubmitPOST}>
                            <div className="form-group row justify-content-center">
                                <label htmlFor="id_number" className="col-sm-2 col-form-label">ID Number</label>
                                <div className="col-sm-5">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="ID Number"
                                        id="id"
                                        inputProps={{ min: "0000000000", max: "9999999999", step: "1" }}
                                        value={this.state.id}
                                        onChange={e => this.setState({ id: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row justify-content-center">
                                <div className="col-sm-10 ">
                                    <button type="submit" className="btn btn-info">Find</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="container mt-3">
                        <h3 className="row justify-content-center mb-3 mt-5">{this.state.adminToDelete.length > 0 ? 'Admin found' : 'Admin not found'}</h3>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Middle Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Date of Birth</th>
                                    <th scope="col">Date of Employment</th>
                                    <th scope="col">ID Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.adminToDelete.map((Admin, i) => <tr><td>{Admin.id}</td><td>{Admin.first_name}</td><td>{Admin.middle_names}</td><td>{Admin.last_name}</td><td>{Admin.date_of_birth}</td><td>{Admin.date_of_employment}</td><td>{Admin.id_number}</td></tr>)
                                }
                            </tbody>
                        </table>
                        {
                            this.state.adminToDelete.length > 0 ? <div>
                                <h3 className="row justify-content-left mb-3 mt-5 ml-2">Are you sure you want delete this admin?</h3>
                                <div className="container mt-5">
                                    <form onSubmit={this.handleSubmitPOST_Delete}>
                                        <div className="form-group row justify-content-center">
                                            <div className="col-sm-10 ">
                                                <button type="submit" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            );
        }
    }
}

export default DeleteAdmin;
