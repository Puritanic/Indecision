import React from 'react';
import Option from './Option';

const Options = props => (
    <div>
        {props.options.length === 0 && <p>You are without options right now :/</p>}
        { props.options.map(option => <Option key={option} option_text={option} handleDeleteOption={props.handleDeleteOption} />) }
        <button onClick={props.handleDeleteOptions}>Remove all</button>
    </div>
);

export default Options;
