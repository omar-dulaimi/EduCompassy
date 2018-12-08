import React, { Component, Fragment } from 'react';

class ListTeachers extends Component {
    state = {
        ListTeachers: [],
    };

    componentDidMount() {
        this.ListAllTeachers()
            .then((res) => {
                console.log("res Mount: ", res)
                this.setState({ ListTeachers: res });
            })
            .catch(err => console.log(err));
    }


    ListAllTeachers = async () => {
        const response = await fetch('/S_ListAllTeachers');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return (
            <div>
                <div className="container mt-3">
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
                                this.state.ListTeachers.map((Teacher, i) => <tr><td>{Teacher.id}</td><td>{Teacher.first_name}</td><td>{Teacher.middle_names}</td><td>{Teacher.last_name}</td><td>{Teacher.date_of_birth}</td><td>{Teacher.date_of_employment}</td><td>{Teacher.id_number}</td></tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTeachers;