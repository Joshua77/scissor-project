
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
//import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/Authcontext";
//import useMounted from "../hooks/useMounted";
import "./register.css";



export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register, signInWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(email, password);
      navigate("/account");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/account");
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <>
    {error ? <div>{error}</div> : null}
    <form onSubmit={handleSubmit}>
    <div className="register-container" >
          <div> Sign Up with: </div>
          <div className="google-apple-signup">
            <div className="google-btn">
            {" "}
             <img src="../assets/google.png" alt="googgle" />
             <button
              onClick={handleGoogleSignIn}
             >
              {" "}
              Google
             </button>
            </div>
            <div className="apple-btn">
              <img src="../assets/apple.png" alt="aaple" />{" "}
              <button> Apple</button>
            </div>
          </div>

          <div className="divider">
            <div className="grey-divider"></div>
            <p> Or</p> <div class="grey-divider"></div>
          </div>


          <div className="signup-form">
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />
          </div>
          <div className="signup-form">
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

          <div className="signup-form">
            <input
            name="password"
            type="password"
            placeholder="Retype Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        
        
          
        <p className="password-detail">
          {" "}
          6 or more characters, one number, one uppercase & one lowercase
        </p>

        <button type="submit" className="signup-btn" >
            {" "} Sign Up with Email{" "}
        </button>

        <p className="existing-user">{" "}Already have an account? <Link to="/login">Login </Link>{" "}</p>

        <p className="signup-text">By signing up, you agree to</p>
        <p className="signup-text"> {" "} Scissor's{" "}<span style = {{ color :"black", fontWeight: "600"}}> Terms of Service, Privacy Policy</span>{" "} and{" "} <span style ={{color: "black", fontWeight: "600"}}> Acceptable Use Policy </span>{" "} </p>
      
      
    </div>
    </form>
    </>
  )
};
