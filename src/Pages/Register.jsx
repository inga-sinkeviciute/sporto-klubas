import React, { useState } from "react";
import axios from "axios";

export const Register = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const [startDate, setStartDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users", {
        name,
        surname,
        email,
        startDate,
        endDate,
      })
      .then(() => {
        setName("");
        setSurname("");
        setEmail("");
        setStartDate(new Date().toISOString().slice(0, 10));
        setEndDate("");
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
