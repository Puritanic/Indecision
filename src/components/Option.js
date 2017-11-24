import React from 'react';

const Option = props =>
    (
        <div>
            <p>{ props.option_text } <button onClick={e => props.handleDeleteOption(props.option_text)}>&times;</button></p>
        </div>
    );

export default Option;
