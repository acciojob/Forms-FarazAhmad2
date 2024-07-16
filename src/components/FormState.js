import React from "react";
import Card from "./Card";
import { useState } from "react";

const FormState = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newData = { ...formData };
    newData[id] = value;
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card>
      <h2>Form using State</h2>
      <form id="form-state-link" onSubmit={handleSubmit}>
        <input
          id="full_name"
          type="text"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
