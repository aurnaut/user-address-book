import React from 'react';

const UsersList = props => (
    <div>
        {
            props.users.map(user => (
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.postcode}</li>
                    <li>{user.telephone}</li>
                    <li>{user.email}</li>
                    <button onClick={() => { props.editUser(user) }} className="button muted-button">Edit</button>
                    <button onClick={() => props.deleteUser(user.id)} className="button muted-button">Delete</button>
                </ul>
            ))
        }
    </div>
)

export default UsersList;