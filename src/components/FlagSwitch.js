import React from 'react';

const FlagSwitch = (props) => {
    return (
        <div>
            <button onClick={props.handleUpdateFlag}>Switch Flag</button>
        </div>
    );
};

export default FlagSwitch;

