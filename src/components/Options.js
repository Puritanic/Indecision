import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
    static displayOptions = (options = []) => options.map(option => <Option key={option} option_text={option} />);
    render() {
        return (
            <div>
                {this.props.options.length >= 1 && Options.displayOptions(this.props.options)}
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
            </div>
        );
    }
}

export default Options;
