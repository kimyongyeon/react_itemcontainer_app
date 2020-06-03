// @flow
import * as React from 'react';

export default function PrimaryButton({handleClick, label}) {
    return (
        <button onClick={handleClick}>
            {label}
        </button>
    );
};