import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import OptionModal from './components/OptionModal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selected: undefined
        };
    }

    componentDidMount() {
        // Handle possible errors with try catch
        try {
            // get options from local storage
            const options = JSON.parse(localStorage.getItem('options'));
            console.log({ 'Component did mount': options });
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            console.info(error);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // Don't run this if data doesn't change
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('component did update');
        }
    }
    componentWillUnmount() {
        console.log('Component unmounted');
    }

    handleAddOption = (option) => {
        // Check if new task is not already in tasks array
        if (this.state.options.indexOf(option) !== -1) {
            return 'That task is already on the list';
        }
        const options = [...this.state.options];
        options.push(option);
        this.setState(() => ({ options }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (option) => {
        this.setState(prevState => ({
            options: prevState
                .options
                .filter(opt => option !== opt)
        }));
    };

    handlePick = () => {
        this.setState(() => ({ selected: true }));
    };

    handleModalClose = () => {
        this.setState(() => ({ selected: undefined }));
    };

    render() {
        return (
            <div>
                <Header />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
                <OptionModal
                    selected={this.state.selected}
                    options={this.state.options}
                    closeModal={this.handleModalClose}
                />
            </div>
        );
    }
}

export default App;
