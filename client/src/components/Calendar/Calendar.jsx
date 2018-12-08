import React, { Component, Fragment } from 'react';
import CalendarReact from 'react-calendar'

class Calendar extends Component {
    state = {
        date: new Date()
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <Fragment>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <CalendarReact
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Calendar;