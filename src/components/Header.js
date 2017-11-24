import React from 'react';

// Example of stateless functional component
const Header = props =>
    (
        <div>
            <h1>{ props.title }</h1>
            <h2>{ props.subtitle }</h2>
        </div>
    );
// Default properties for the component
Header.defaultProps = {
    title: 'Indecision!',
    subtitle: 'Put your lives in the hands of the computer!'
};

export default Header;
