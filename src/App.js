import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['Walk a dog', 'Study', 'Read', 'Code', 'Eat', 'Sleep']
        };
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    render() {
        return (
            <div>
                <Header title="Indecision!" subtitle="Put your lives in the hands of the computer!" />
                <Action hasOptions={this.state.options.length > 0} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

export default App;

