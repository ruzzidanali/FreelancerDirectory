import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";

const API_URL = "/api/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleSave = (user) => {
    if (user.id) {
      axios
        .put(`${API_URL}/${user.id}`, user)
        .then(() => refreshUsers())
        .catch((err) => console.error("Error updating user:", err));
    } else {
      axios
        .post(API_URL, user)
        .then(() => refreshUsers())
        .catch((err) => console.error("Error adding user:", err));
    }
    setSelectedUser(null);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => refreshUsers())
      .catch((err) => console.error("Error deleting user:", err));
  };

  const refreshUsers = () => {
    axios
      .get(API_URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "#f8f9fa" }}
    >
      <div className="container p-4 shadow-lg rounded bg-white" style={{ width: "100%" }}>
        <div className="container mt-4 text-center">
          <h1>Complete Developer Network</h1>
          <h2 className="mb-4">Freelancer Program</h2>{" "}
          <UserForm onSubmit={handleSave} selectedUser={selectedUser} className="mb-4"/>
          <UserTable users={users} onEdit={setSelectedUser} onDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
};

export default App;
