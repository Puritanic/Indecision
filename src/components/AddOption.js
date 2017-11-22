import React, { Component } from 'react';

class AddOption extends Component {
    handleAddOption = (e) => {
        e.preventDefault();
        // console.log(e.target.elements);
        // Get the value of the addOption input from form element
        const option = e.target.elements.addOption.value.trim();
        if (option) {
            console.log(option);
            // Clear inputs
            e.target.reset();
        }
    };
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <label htmlFor="addOption">Add Option:
                    <input type="text" name="addOption" id="addOption" />
                </label>
                <button>Add Option</button>
            </form>
        );
    }
}

export default AddOption;
