import React, { Component } from 'react';

class Option extends Component {
    render() {
        return (
            <div>
                {this.props.option_text}
            </div>
        );
    }
}

export default Option;
