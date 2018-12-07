import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import logo from './logo.png';
import './Header.css';



class Header extends Component {
    state = {

    }

    componentDidMount() {
        this.handleNavBarActive('home');
    }

    //According to state -> add or remove classes
    NavBarItemActive = (value) => {
        return 'nav-item ' + ((value === this.state.selected) ? 'active' : '');
    }

    //Change selected item to current value
    handleNavBarActive = (value) => {
        this.setState({ selected: value });
    }

    onChange = date => this.setState({ date });

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
                    <nav className="navbar navbar-light bg-light">
                        <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt="website logo" /></Link>
                    </nav>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className={this.NavBarItemActive('home')} onClick={this.handleNavBarActive.bind(this, 'home')}>
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className={this.NavBarItemActive('about')} onClick={this.handleNavBarActive.bind(this, 'about')}>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Users
                                        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/admin">Admin</Link>
                                    <Link className="dropdown-item" to="/teachers">Teacher</Link>
                                    <Link className="dropdown-item" to="/parents">Parent</Link>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/signin" id="signinbtn">Sign In</Link>
                            </li>
                        </ul>

                    </div>
                </nav >
            </Fragment>
        );
    }
}

Header.propTypes = {
    userData: PropTypes.string
}

export default Header;