import React from 'react';
import Option from './Option';

const displayOptions = (options = []) => options.map(option => <Option key={option} option_text={option} />);
const Options = props => (
    <div>
        {props.options.length >= 1 && displayOptions(props.options)}
        <button onClick={props.handleDeleteOptions}>Remove all</button>
    </div>
);

export default Options;
