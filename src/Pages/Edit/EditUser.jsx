import React, { useState } from "react";
import axios from "axios";

export const EditUser = ({ user, onClose }) => {
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [startDate, setStartDate] = useState(
    user.startDate && !isNaN(new Date(user.startDate))
      ? new Date(user.startDate).toISOString().slice(0, 10)
      : ""
  );
  const [endDate, setEndDate] = useState(
    user.endDate && !isNaN(new Date(user.endDate))
      ? new Date(user.endDate).toISOString().slice(0, 10)
      : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/users/${user._id}`, {
        name,
        surname,
        email,
        startDate,
        endDate,
      })
      .then(() => {
        onClose();
      });
  };

  return (
    <div className="edit-user-container">
      <form className="edit-user-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="name"
        />
        <label htmlFor="surname">Surname</label>
        <input
          value={surname}
          name="surname"
          onChange={(e) => setSurname(e.target.value)}
          id="surname"
          placeholder="surname"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="name@mail.com"
          id="email"
          name="email"
        />
        <label htmlFor="startdate">Start Date</label>
        <input
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          placeholder="yyyy-MM-dd"
          id="startdate"
          name="startdate"
        />
        <label htmlFor="enddate">End Date</label>
        <input
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          placeholder="yyyy-MM-dd"
          id="enddate"
          name="enddate"
        />
        <button className="but" type="submit">
          Edit
        </button>
        <button className="but" type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};
