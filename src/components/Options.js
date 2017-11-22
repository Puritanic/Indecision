import React, { Component } from 'react';

class Options extends Component {
    static displayOptions = (options = []) => options.map(option => <li key={option}>{option}</li>);

    render() {
        return (
            <div>
                {this.props.options.length >= 1 && Options.displayOptions(this.props.options)}
            </div>
        );
    }
}

export default Options;
