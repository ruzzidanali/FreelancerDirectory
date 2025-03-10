import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, selectedUser }) => {
  const [user, setUser] = useState({ username: '', email: '', phoneNumber: '', skillsets: '', hobby: '' });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ username: '', email: '', phoneNumber: '', skillsets: '', hobby: '' });
    }
  }, [selectedUser]);

  const validateForm = () => {
    let newErrors = {};

    if (!user.username.trim()) {
      newErrors.username = 'Username is required.';
    }
    if (!user.email.trim() || !/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = 'Invalid email format (example: user@example.com).';
    }
    if (!user.phoneNumber.trim() || !/^\d{10,15}$/.test(user.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10-15 digits.';
    }
    if (!user.skillsets.trim()) {
      newErrors.skillsets = 'Skillsets cannot be empty.';
    }
    if (!user.hobby.trim()) {
      newErrors.hobby = 'Hobby cannot be empty.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setNotification('❌ Please fix the errors before submitting.');
      setTimeout(() => setNotification(''), 5000); 
      return;
    }

    onSubmit(user);
    setNotification('✅ User added successfully!');
    setTimeout(() => setNotification(''), 5000);

    setUser({ username: '', email: '', phoneNumber: '', skillsets: '', hobby: '' });
  };

  return (
    <div>
      {notification && <div className="alert alert-info">{notification}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input type="text" name="username" value={user.username} onChange={handleChange} className="form-control" placeholder="Username" required />
          {errors.username && <small className="text-danger">{errors.username}</small>}
        </div>
        <div className="mb-2">
          <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" placeholder="Email" required />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="mb-2">
          <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} className="form-control" placeholder="Phone Number" required />
          {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
        </div>
        <div className="mb-2">
          <input type="text" name="skillsets" value={user.skillsets} onChange={handleChange} className="form-control" placeholder="Skillsets" required />
          {errors.skillsets && <small className="text-danger">{errors.skillsets}</small>}
        </div>
        <div className="mb-2">
          <input type="text" name="hobby" value={user.hobby} onChange={handleChange} className="form-control" placeholder="Hobby" required />
          {errors.hobby && <small className="text-danger">{errors.hobby}</small>}
        </div>
        <button type="submit" className="btn btn-primary">{selectedUser ? "Update User" : "Add User"}</button>
      </form>
    </div>
  );
};

export default UserForm;
