import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers((prev) => (prev = users));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <section>
      <h2>Fetch GitHub Users</h2>
      <ul className='users'>
        <PrintUsers users={users}></PrintUsers>
      </ul>
    </section>
  );
};

export default Users;

const PrintUsers = ({ users }) => {
  const result = users.map((user) => (
    <li key={user.id}>
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h4>{user.login}</h4>
        <a href={user.html_url}>View More</a>
      </div>
    </li>
  ));
  return result;
};
