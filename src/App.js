import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

class App extends Component {
    render() {
        const options = ['Walk a dog', 'Study', 'Read', 'Code', 'Eat', 'Sleep'];
        return (
            <div>
                <Header title="Indecision!" subtitle="Put your lives in the hands of the computer!" />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

export default App;

