import { useState } from "react";
import "./Verify.css"
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function VerifyOTP() {

  const [otp, setOtp] = useState("");

  // Get email passed from signup page
  const location = useLocation();

  const email = location.state?.email;
  const password = location.state?.password;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/verify-otp",
        {
          email,
          otp,
        }
      );

      console.log(response.data);
      await axios.post(
        "http://localhost:5000/set-password",
        {
          email,
          password
        }
      );

      alert("Email Verified Successfully");

    } catch (err) {

      console.log(err);

      alert("Invalid OTP");
    }
  };

  return (
   
    <div className="ab1">
        
      <main>
        <h1>Verify OTP</h1>

      <p>OTP sent to: {email}</p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button type="submit">
          Verify OTP
        </button>

      </form>
      </main>
   
    </div>
  );
}