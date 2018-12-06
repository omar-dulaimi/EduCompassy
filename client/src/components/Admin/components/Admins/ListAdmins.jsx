import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ListAdmins extends Component {
    state = {
        response: {},
    };

    /*
      Read about:
      componentDidMount()
      https://reactjs.org/docs/react-component.html#componentdidmount
    */

    componentDidMount() {
        this.listAllAdmins()
            .then((res) => {
                console.log(res)
                // this.setState({ responseToGetAuto: res.express });
            })
            .catch(err => console.log(err));
    }


    listAllAdmins = async () => {
        const response = await fetch('/S_ListAllAdmins');
        const body = await response.json();
        console.log("S_ListAllAdmins: ", body);
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return (
            <div>
                <h1>Admins List:</h1>
                <div className="">
                
                    {/* 
                    `id` INT NOT NULL AUTO_INCREMENT,
                    `first_name` VARCHAR(45) NULL,
                    `middle_names` VARCHAR(45) NULL,
                    `last_name` VARCHAR(45) NOT NULL,
                    `date_of_birth` VARCHAR(45) NULL,
                    `date_of_employment` DATE NOT NULL,
                    `phone_number` INT NOT NULL,
                    `id_number` INT NOT NULL,
                    
                    
                    */}
                    {/* <p>{this.state}</p>

                    first_name, middle_names, last_name, date_of_birth, date_of_employment, phone_number, id_number} */}
                </div>
            </div>
        );
    }

}
export default ListAdmins;