import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [user, setUser] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://reqres.in/api/users?page=2");
      setUser(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th className="tableHeadings">FirstName</th>
              <th className="tableHeadings">LastName</th>
              <th className="tableHeadings">Email</th>
              <th className="tableHeadings">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {user.data.map((item) => (
              <tr key={item.id}>
                <td className="tableValue">{item.first_name}</td>
                <td className="tableValue">{item.last_name}</td>
                <td className="tableValue">{item.email}</td>
                <td className="tableValue">{item.avatar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UserList;
