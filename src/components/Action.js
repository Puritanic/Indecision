import React from 'react';

// Another stateless function
const Action = props =>
    (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    );

export default Action;
