import React from 'react';

// Another stateless function
const Action = props =>
    (
        <div>
            <button className="button button--big" disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    );

export default Action;
