import React, { useState, useEffect } from 'react';
import UsersList from './Lists/UsersList';
import AddUserForm from './Forms/AddUserForm';
import EditUserForm from './Forms/EditUserForm'
import axios from 'axios';

const App = () => {
  const API_ENDPOINT = 'http://localhost:4000/entries';

  let usersData = [];
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', postcode: '', telephone: '', email: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  useEffect(async () => {
    const result = await axios(
      API_ENDPOINT,
    );

    setUsers(result.data);
  }, []);


  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
    setEditing(false);
  }

  const editUser = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, postcode: user.postcode, telephone: user.telephone, email: user.email })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>Address Book</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UsersList users={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}
export default App