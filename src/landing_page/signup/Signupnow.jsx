import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './signup.css'
export default function Signup() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );

      console.log(response.data);

      navigate("/verify", {
        state: {
          email: formData.email,
          password: formData.password
        },
      });

      // Later navigate to verify page

    } catch (err) {

      console.log(err);

      alert("Signup Failed frontend not working");
    }
  };

  return (
    <>

      <main className="signup-page">

        <div className="signup-container">

          <p>Create Account</p>

          <form
            className="signup-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />

            <button type="submit">
              Signup
            </button>

          </form>

        </div>

      </main>

    </>
  );
}