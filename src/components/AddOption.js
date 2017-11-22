import React, { Component } from 'react';

class AddOption extends Component {
    render() {
        return (
            <form>
                <label htmlFor="addOption">Add Option:
                    <input type="text" name="addOption" id="addOption" />
                </label>
            </form>
        );
    }
}

export default AddOption;
