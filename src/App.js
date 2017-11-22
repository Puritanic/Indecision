import React, { Component } from 'react';
import './App.css';
import { random } from './helpers';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
    }

    handleAddOption = (option) => {
        // Check if new task is not already in tasks array
        if (this.state.options.indexOf(option) !== -1) {
            return 'That task is already on the list';
        }
        const options = [...this.state.options];
        options.push(option);
        this.setState(() => ({ options }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handlePick = () => {
        console.log(random(this.state.options));
    };

    render() {
        return (
            <div>
                <Header
                    title="Indecision!"
                    subtitle="Put your lives in the hands of the computer!"
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

export default App;

