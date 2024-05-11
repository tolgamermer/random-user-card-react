import React from "react";
import { useState, useEffect } from "react";

//component
import SingleUser from "./SingleUser";

// https://randomuser.me/api/?results=10

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/?results=3");
    const data = await res.json();
    setUserList(data.results);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div className="user-list-container">
        <ul>
          {userList.map((user, idx) => (
            <li key={idx}>
              <SingleUser user={user} />
            </li>
          ))}
        </ul>
        <button onClick={fetchUser} className="user-refresh-btn">
          Refresh The Users
        </button>
      </div>
    </div>
  );
};
export default UserList;
