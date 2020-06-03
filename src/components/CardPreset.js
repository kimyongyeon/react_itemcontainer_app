import React from 'react';
import PrimaryButton from "./PrimaryButton";

const CardPreset = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <PrimaryButton label={props.likeLabel}
                           handleClick={props.handleClick} />
        </div>
    );
};

export default CardPreset;