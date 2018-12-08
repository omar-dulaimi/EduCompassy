import React, { Component, Fragment } from 'react';
import SlideShow from '../SlideShow/SlideShow.jsx'

class Home extends Component {
    state = {
        date: new Date(),
        numberFact: '',
        activeNavBarLink: ''
    }

    componentDidMount() {
        this.getNumberFact().then(data => {
            this.setState({ numberFact: data.fact });
        }).catch(err => console.log(err));
    }

    //Get a number fact from the server
    getNumberFact = async () => {
        const response = await fetch('/numberfact');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };


    onChange = date => this.setState({ date })

    render() {
        return (
            <Fragment>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <SlideShow />
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default Home;