import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
            body: JSON.stringify({ id: this.state.id }),
        });
        const body = await response.text();
        console.log("handleSubmitPOST body: ", body);
        var body1 = JSON.parse(body)
        console.log("handleSubmitPOST body1: ", body1);

        this.setState({ ListAdmins: body1 });
        console.log("ListAdmins body: ", this.ListAdmins);
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

    };

    render() {

        if (!this.state.form_submited) {
            return (

                <div>
                    <h1>Delete Admin:</h1>
                    <div className="">
                        <form onSubmit={this.handleSubmitPOST}>

                            <label htmlFor="id" className="">id: </label>
                            <input
                                type="text"
                                id="id"
                                className=""
                                placeholder="id number"
                                value={this.state.id}
                                onChange={e => this.setState({ id: e.target.value })}
                            />
                            <br />

                            {/* <label htmlFor="first_name" className="">First name: </label>
                            <input
                                type="text"
                                id="first_name"
                                className=""
                                placeholder="First name"
                                value={this.state.first_name}
                                onChange={e => this.setState({ first_name: e.target.value })}
                                />
                            <br />

                            <label htmlFor="middle_names" className="">Middle names: </label>
                            <input
                                type="text"
                                id="middle_names"
                                className=""
                                placeholder="Middle names"
                                value={this.state.middle_names}
                                onChange={e => this.setState({ middle_names: e.target.value })}
                                />
                            <br />

                            <label htmlFor="last_name" className="">Last name: </label>
                            <input
                                type="text"
                                id="last_name"
                                className=""
                                placeholder="Last name"
                                value={this.state.last_name}
                                onChange={e => this.setState({ last_name: e.target.value })}
                                />
                            <br />

                            <label htmlFor="date_of_birth" className="">Date of Birth: </label>
                            <input
                                type="text"
                                id="date_of_birth"
                                className=""
                                placeholder="Date of Birth"
                                value={this.state.date_of_birth}
                                onChange={e => this.setState({ date_of_birth: e.target.value })}
                                />
                            <br />

                            <label htmlFor="date_of_employment" className="">Date Of Employment: </label>
                            <input
                                type="text"
                                id="date_of_employment"
                                className=""
                                placeholder="Date Of Employment"
                                value={this.state.date_of_employment}
                                onChange={e => this.setState({ date_of_employment: e.target.value })}
                                />
                            <br />

                            <label htmlFor="phone_number" className="">Phone Number: </label>
                            <input
                                type="text"
                                id="phone_number"
                                className=""
                                placeholder="Phone Number"
                                value={this.state.phone_number}
                                onChange={e => this.setState({ phone_number: e.target.value })}
                                />
                            <br />

                            <label htmlFor="id_number" className="">ID Number: </label>
                            <input
                                type="text"
                                id="id_number"
                                className=""
                                placeholder="ID Number"
                                value={this.state.id_number}
                                onChange={e => this.setState({ id_number: e.target.value })}
                                />
                            <br /> */}

                            <button type="submit">Delete Admin</button>
                        </form>

                        <p>{this.state.responseToPost}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Admins List:</h1>
                    <div className="">
                        <table >
                            <tr>
                                <th>id</th>
                                <th>first_name</th>
                                <th>middle_names</th>
                                <th>last_name</th>
                                <th>date_of_birth</th>
                                <th>date_of_employment</th>
                                <th>id_number</th>
                            </tr>
                            {
                                this.state.ListAdmins.map((Admin, i) => <tr><td>{Admin.id}</td><td>{Admin.first_name}</td><td>{Admin.middle_names}</td><td>{Admin.last_name}</td><td>{Admin.date_of_birth}</td><td>{Admin.date_of_employment}</td><td>{Admin.id_number}</td></tr>
                                )
                            }

                        </table>
                        <h3>Are you sure you want Delete This Admin?</h3>
                        <form onSubmit={this.handleSubmitPOST_Delete}>
                            <button type="submit">Delete Admin</button>
                        </form>



                    </div>
                </div>
            );
        }

    }

}
export default DeleteAdmin;