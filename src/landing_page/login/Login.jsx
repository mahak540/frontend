import "./Login.css";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://zerodha-backend-09p1.onrender.com/login",
        {
          email,
          password
        },
        {
          withCredentials: true
        }
      );

      console.log(response.data);

      alert("Login Successful");

      navigate("/pricing");

    } catch (err) {

      console.log(err);

      alert("Invalid Credentials");
    }
  };

  return (
    <>
     
      <main className="login-page">
        <div className="login-container">

          <h1>Login</h1>

          <form className="login-form" onSubmit={handleSubmit}>

            <label>
              Email

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Password

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            

            <button type="submit">
              Login
            </button>

          </form>
        </div>
      </main>

      
    </>
  );
}
