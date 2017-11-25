import React from 'react';
import Option from './Option';

const Options = props => (
    <div>
        <div className="widget--header">
            <h3>Your Options</h3>
            <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
        {props.options.length === 0 && <p className="option">You are without options right now :/</p>}
        { props.options.map((option, index) => <Option count={index + 1} key={option} option_text={option} handleDeleteOption={props.handleDeleteOption} />) }
    </div>
);

export default Options;
