import React from 'react';

const Option = props =>
    (
        <div>
            <p className="option option__text">{props.count}: { props.option_text } <button className="button button--link" onClick={e => props.handleDeleteOption(props.option_text)}>&times;</button></p>
        </div>
    );

export default Option;
