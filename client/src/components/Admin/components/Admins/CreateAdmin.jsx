import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CreateAdmin extends Component {
    state = {
        first_name: '',
        middle_names: '',
        last_name: '',
        date_of_birth:'',
        date_of_employment: '',
        phone_number: '',
        id_number:'',

      };

      handleSubmitPOST = async e => {
        e.preventDefault();
        const response = await fetch('/CreateAdmin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
        console.log("handleSubmitPOST body: ", body);
      };

    render() {
        return (
            <div>
                <h1>Create Admin Page:</h1>
                <div className="">
                    <h3>Form Post:</h3>
                    <form onSubmit={this.handleSubmitPOST}>
                        
                        <label htmlFor="first_name" className="">First name: </label>
                        <input 
                        type="text" 
                        id="first_name" 
                        className="" 
                        placeholder="First name" 
                        value={this.state.first_name} 
                        onChange={e => this.setState({ first_name: e.target.value })} 
                        required />
                        <br />

                        <label htmlFor="middle_names" className="">Middle names: </label>
                        <input 
                        type="text" 
                        id="middle_names" 
                        className="" 
                        placeholder="Middle names" 
                        value={this.state.middle_names} 
                        onChange={e => this.setState({ middle_names: e.target.value })} 
                        required />
                        <br />

                        <label htmlFor="last_name" className="">Last name: </label>
                        <input 
                        type="text" 
                        id="last_name" 
                        className="" 
                        placeholder="Last name" 
                        value={this.state.last_name} 
                        onChange={e => this.setState({ last_name: e.target.value })} 
                        required />
                        <br />

                        <label htmlFor="date_of_birth" className="">Date of Birth: </label>
                        <input 
                        type="text" 
                        id="date_of_birth" 
                        className="" 
                        placeholder="Date of Birth" 
                        value={this.state.date_of_birth} 
                        onChange={e => this.setState({ date_of_birth: e.target.value })} 
                        required />
                        <br />

                        <label htmlFor="date_of_employment" className="">Date Of Employment: </label>
                        <input 
                        type="text" 
                        id="date_of_employment" 
                        className="" 
                        placeholder="Date Of Employment" 
                        value={this.state.date_of_employment} 
                        onChange={e => this.setState({ date_of_employment: e.target.value })} 
                        required />
                        <br />

                        <label htmlFor="phone_number" className="">Phone Number: </label>
                        <input 
                        type="text" 
                        id="phone_number" 
                        className="" 
                        placeholder="Phone Number" 
                        value={this.state.phone_number} 
                        onChange={e => this.setState({ phone_number: e.target.value })} 
                        required />
                        <br />

                        <label htmlFor="id_number" className="">ID Number: </label>
                        <input 
                        type="text" 
                        id="id_number" 
                        className="" 
                        placeholder="ID Number" 
                        value={this.state.id_number} 
                        onChange={e => this.setState({ id_number: e.target.value })} 
                        required />
                        <br />

                        <button type="submit">Submit</button>
                    </form>
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
                    <p>{this.state.responseToPost}</p>
                </div>
            </div>
        );
    }

}
export default CreateAdmin;