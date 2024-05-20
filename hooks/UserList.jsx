import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index} className="mb-4 p-4 border rounded shadow-md">
              <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} className="w-16 h-16 rounded-full" />
              <p><strong>Name:</strong> {`${user.name.first} ${user.name.last}`}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Position:</strong> {user.position}</p>
              <p><strong>Location:</strong> {user.location}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserList;
