import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users', error);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  }

  const handleCloseModal = () => {
    setSelectedUser(null);
  }

  return (
    <div className="App">
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>×</span>
            <h2>{selectedUser.name}</h2>
            <p>{selectedUser.address.street}, {selectedUser.address.city} {selectedUser.address.zipcode}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Website: {selectedUser.website}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
