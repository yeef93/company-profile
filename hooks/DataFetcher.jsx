"use client";
import React, { useEffect, useState } from 'react';
import UserList from './UserList';

const additionalData = [
  { position: 'Pastry Chef', location: 'London', phone: '123-456-7890' },
  { position: 'Bakery Manager', location: 'Manchester', phone: '987-654-3210' },
  { position: 'Culinary Instructor', location: 'Birmingham', phone: '456-789-1230' },
  { position: 'Head Baker', location: 'Leeds', phone: '654-321-9870' },
  { position: 'Patisserie Specialist', location: 'Liverpool', phone: '789-123-4560' },
];

const DataFetcher = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?nat=gb&results=5')
      .then(response => response.json())
      .then(data => {
        const combinedData = data.results.map((user, index) => ({
          ...user,
          ...additionalData[index % additionalData.length],
        }));
        setUsers(combinedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <UserList users={users} />;
};

export default DataFetcher;
