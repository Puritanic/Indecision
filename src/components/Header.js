import React from 'react';

// Example of stateless functional component
const Header = props =>
    (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{ props.title }</h1>
                <h2 className="header__subtitle">{ props.subtitle }</h2>
            </div>
        </div>
    );
// Default properties for the component
Header.defaultProps = {
    title: 'Indecision!',
    subtitle: 'Put your lives in the hands of the computer!'
};

export default Header;
