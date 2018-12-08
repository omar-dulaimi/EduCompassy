import React, { Component, Fragment } from 'react';

class CreateTeacher extends Component {
    state = {
        insertId: '',
        first_name: '',
        middle_names: '',
        last_name: '',
        date_of_birth: '',
        date_of_employment: '',
        phone_number: '',
        id_number: '',
        form_submited: false,

    };

    handleSubmitPOST = async e => {
        e.preventDefault();
        const response = await fetch('/S_CreateTeacher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        });
        const body = await response.text();
        const body1 = JSON.parse(body)
        // this.setState({ responseToPost: body });
        console.log('body1 = ', body1);
        this.setState({
            insertId: body1.insertId,
            form_submited: true,
        });
        console.log("handleSubmitPOST body: ", body1.insertId);
        console.log(this.state.insertId)
    };

    addNewTeacher = () => {
        this.setState({
            form_submited: false,
        });
    }

    render() {

        if (!this.state.form_submited) {
            return (
                <div className="container mt-5">
                    <form onSubmit={this.handleSubmitPOST}>
                        <h3 className="row justify-content-center mb-5">Add new teacher</h3>
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
                                    required
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
                                    required
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
                                    required
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
                                    required
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
                                    required
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
                                    required
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
                                    required
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
                <div className="container mt-5">
                    <form onSubmit={this.addNewTeacher}>
                        <h3 className="row justify-content-center mb-5">New teacher saved!</h3>
                        <div className="form-group row justify-content-center">
                            <label htmlFor="insertId" className="col-sm-2 col-form-label">Inserted ID</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control"
                                    id="insertId"
                                    type="text"
                                    value={this.state.insertId || 1111}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <label htmlFor="first_name" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control"
                                    id="first_name"
                                    type="text"
                                    value={this.state.first_name || 1111}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <label htmlFor="middle_names" className="col-sm-2 col-form-label">Middle Name</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control"
                                    id="middle_names"
                                    type="text"
                                    value={this.state.middle_names || 1111}
                                    disabled
                                />
                            </div>
                        </div>


                        <div className="form-group row justify-content-center">
                            <label htmlFor="last_name" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control"
                                    id="last_name"
                                    type="text"
                                    value={this.state.last_name || 1111}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <label htmlFor="date_of_birth" className="col-sm-2 col-form-label">Date of Birth</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control"
                                    id="date_of_birth"
                                    type="date"
                                    value={this.state.date_of_birth || 1111}
                                    disabled
                                />
                            </div>
                        </div>


                        <div className="form-group row justify-content-center">
                            <label htmlFor="date_of_employment" className="col-sm-2 col-form-label">Date of Employment</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control"
                                    id="date_of_employment"
                                    type="date"
                                    value={this.state.date_of_employment || 1111}
                                    disabled
                                />
                            </div>
                        </div>


                        <div className="form-group row justify-content-center">
                            <label htmlFor="phone_number" className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control"
                                    id="phone_number"
                                    type="tel"
                                    value={this.state.phone_number || 1111}
                                    disabled
                                />
                            </div>
                        </div>


                        <div className="form-group row justify-content-center">
                            <label htmlFor="id_number" className="col-sm-2 col-form-label">ID Number</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control"
                                    id="id_number"
                                    type="tel"
                                    value={this.state.id_number || 1111}
                                    disabled
                                />
                            </div>
                        </div>

                    </form>
                </div>
            );
        }



    }

}
export default CreateTeacher;