import React, { Component } from 'react';

class Action extends Component {
    static handlePick = () => {
        console.log('Option picked!?');
    }
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={Action.handlePick}>What should I do?</button>
            </div>
        );
    }
}

export default Action;
