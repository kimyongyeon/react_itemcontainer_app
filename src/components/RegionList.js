import React from 'react';

const RegionList = (props) => {
    const regionDetails = props.regions.map(({name, code}) => <li key={code}>{name}</li>)
    return (
        <div>
            {regionDetails}
        </div>
    );
};

export default RegionList;