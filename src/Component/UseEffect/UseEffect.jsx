import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffect = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
   
    const FetchRandomUser = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching random user data:', error);
      }
    };

    FetchRandomUser();
  }, [1500]); 

  return (
    <div>
      <h2>Random User Data</h2>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>website:{userData.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UseEffect;
