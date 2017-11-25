import React, { Component } from 'react';

class AddOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }
    handleAddOption = (e) => {
        e.preventDefault();
        // console.log(e.target.elements);
        // Get the value of the addOption input from form element
        const option = e.target.elements.addOption.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        // this.props.handleAddOption(option);
        // Clear inputs
        e.target.reset();
    };
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleAddOption}>
                    <input className="form__input" type="text" name="addOption" id="addOption" required />
                    <button className="button">Add Option</button>
                </form>
                { this.state.error && <p>{this.state.error}</p> }
            </div>
        );
    }
}

export default AddOption;
