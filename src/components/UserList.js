import React from 'react';

const UserList = (props) => {
    const userDetails = props.users.map((user, index) => <li key={index}>{user.name}</li>)
    return (
        <div>
            {userDetails}
        </div>
    );
};

export default UserList;