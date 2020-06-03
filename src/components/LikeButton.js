import React from 'react';

const LikeButton = ({url, label}) => {
    return (
        <div>
            <a href={`${url}`}>{label}</a>
        </div>
    );
};

export default LikeButton;