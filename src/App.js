import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './styles/App.scss';
import { random } from './helpers';
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
            return <p className="option">That task is already on the list</p>;
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
        const option = random(this.state.options);
        this.setState(() => ({
            selected: option
        }));
    };

    handleModalClose = () => {
        this.setState(() => ({ selected: undefined }));
    };

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal
                    selected={this.state.selected}
                    closeModal={this.handleModalClose}
                />
            </div>
        );
    }
}

export default App;
