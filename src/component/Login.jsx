import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/Authcontext";
import { useAuth } from "../contexts/useAuth";
import useMounted from "../hooks/useMounted";
import "./register.css";

export default function Login() {
  const navigate = useNavigate();
  const { signInWithGoogle, login} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const [isSubmitting, setIsSubmitting] = useState(false)
  //const toast = useToast()
  // const mounted = useRef(false)
  //const location = useLocation();

  //const mounted = useMounted();

  //function handleRedirectToOrBack() {
  //history.replace(location.state?.from ?? "/profile");
  //}

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
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
        <div className="register-container">
          <div> Sign in with: </div>
          <div className="google-apple-signup">
            <div className="google-btn">
              {" "}
              <img src="../assets/google.png" alt="googgle" />
              <button onClick={handleGoogleSignIn}> Google </button>
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
              autoComplete="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>
          <div className="signup-form">
            <input
              type="password"
              autoComplete="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>

          <p className="forgot-password">
            {" "}
            <Link to="/forgot">Forgot password?</Link>{" "}
          </p>

          <button type="submit" className="signup-btn" onSubmit={handleSubmit}>
            {" "}
            Login{" "}
          </button>

          <p className="existing-user">
            {" "}
            Don't have an account?{" "}
              {" "}
              <Link to="/register">Sign Up</Link>{" "}
          </p>

          <p className="signup-text">By signing up, you agree to</p>
          <p className="signup-text">
            {" "}
            Scissor's{" "}
            <span style={{ color: "black", fontWeight: "600" }}>
              Terms of Service, Privacy Policy
            </span>{" "}
            and{" "}
            <span style={{ color: "black", fontWeight: "600" }}>
              Acceptable Use Policy
            </span>{" "}
          </p>
        </div>
      </form>
    </>
  );
}
