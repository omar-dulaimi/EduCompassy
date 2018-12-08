import React, { Component, Fragment } from 'react';

class NumberFacts extends Component {
    state = {
        numberFact: ''
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

    render() {
        return (
            <Fragment>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="card mt-5" style={{ maxWidth: '50rem' }}>
                            <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/10/13/12/Numbers_0.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h2 className="card-title">Fun Number Facts</h2>
                                <h5 className="card-text">{this.state.numberFact}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default NumberFacts;