import React, { useState } from "react";
import "./register.css";
//import { Card } from '../components/Card'
//import { Layout } from '../components/Layout'
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/Authcontext";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth();
  const query = useQuery();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  

  console.log(query.get("mode"), query.get("oobCode"));

  return (
    <div className="forgot-container">
      <h2> Reset Password </h2>

      <div className="forgot-form">
        <input
          name="password"
          type="password"
          autoComplete="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </div>

      <button
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await resetPassword(query.get("oobCode"), password);
            navigate.push("/login");
          } catch (error) {
            console.log(error.message);
          }
        }}
        className="signup-btn"
      >
        {" "}
        Set a New Password{" "}
      </button>

      <p className="reset-text"> Reset the Password and Login </p>
    </div>
  );
}
