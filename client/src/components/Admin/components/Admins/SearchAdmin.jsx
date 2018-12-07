import React, { Component, Fragment } from 'react';

class SearchAdmin extends Component {
    state = {
        id: '',
        first_name: '',
        middle_names: '',
        last_name: '',
        date_of_birth: '',
        date_of_employment: '',
        phone_number: '',
        id_number: '',
        ListAdmins: [],
        form_submited: false,
    };

    handleSubmitPOST = async e => {
        e.preventDefault();
        const response = await fetch('/S_SearchAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: this.state.id, first_name: this.state.first_name, middle_names: this.state.middle_names, last_name: this.state.last_name, date_of_birth: this.state.date_of_birth, date_of_employment: this.state.date_of_employment, phone_number: this.state.phone_number, id_number: this.state.id_number }),
        });
        const body = await response.text();
        console.log("handleSubmitPOST body: ", body);
        var body1 = JSON.parse(body)
        console.log("handleSubmitPOST body1: ", body1);

        this.setState({ ListAdmins: body1 });
        console.log("ListAdmins body: ", this.ListAdmins);
        this.setState({ form_submited: true });

    };

    render() {

        if (!this.state.form_submited) {
            return (
                <div className="container mt-5">
                    <form onSubmit={this.handleSubmitPOST}>
                        <h3 className="row justify-content-center mb-5">Find an admin</h3>
                        <div className="form-group row justify-content-center">
                            <label htmlFor="first_name" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control"
                                    id="first_name"
                                    type="text"
                                    id="first_name"
                                    placeholder="First Name"
                                    value={this.state.first_name}
                                    onChange={e => this.setState({ first_name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <label htmlFor="middle_name" className="col-sm-2 col-form-label">Middle Name</label>
                            <div className="col-sm-5">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="middle_name"
                                    placeholder="Middle Name"
                                    value={this.state.middle_names}
                                    onChange={e => this.setState({ middle_names: e.target.value })}
                                />
                            </div>
                        </div>


                        <div className="form-group row justify-content-center">
                            <label htmlFor="middle_name" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-5">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="last_name"
                                    placeholder="Last Name"
                                    value={this.state.last_name}
                                    onChange={e => this.setState({ last_name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <label htmlFor="date_of_birth" className="col-sm-2 col-form-label">Date of Birth</label>
                            <div className="col-sm-5">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Date of Birth"
                                    id="date_of_birth"
                                    value={this.state.date_of_birth}
                                    onChange={e => this.setState({ date_of_birth: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <label htmlFor="date_of_employment" className="col-sm-2 col-form-label">Date of Employment</label>
                            <div className="col-sm-5">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Date of Employment"
                                    id="date_of_employment"
                                    value={this.state.date_of_employment}
                                    onChange={e => this.setState({ date_of_employment: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <label htmlFor="phone_number" className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-5">
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    id="phone_number"
                                    value={this.state.phone_number}
                                    onChange={e => this.setState({ phone_number: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <label htmlFor="id_number" className="col-sm-2 col-form-label">ID Number</label>
                            <div className="col-sm-5">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="ID Number"
                                    id="id_number"
                                    inputProps={{ min: "0000000000", max: "9999999999", step: "1" }}
                                    value={this.state.id_number}
                                    onChange={e => this.setState({ id_number: e.target.value })}
                                />
                            </div>
                        </div>


                        <div className="form-group row justify-content-center">
                            <div className="col-sm-10 ">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="container mt-3">
                        <h3 className="row justify-content-center mb-3 mt-5">Results found</h3>
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
                                    this.state.ListAdmins.map((Admin, i) => <tr><td>{Admin.id}</td><td>{Admin.first_name}</td><td>{Admin.middle_names}</td><td>{Admin.last_name}</td><td>{Admin.date_of_birth}</td><td>{Admin.date_of_employment}</td><td>{Admin.id_number}</td></tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

    }

}
export default SearchAdmin;