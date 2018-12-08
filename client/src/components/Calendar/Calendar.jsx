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
                <div className="col-md">
                    <CalendarReact
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Calendar;