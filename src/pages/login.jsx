import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import useMounted from "../hooks/useMounted";
import "./register.css";

export default function Loginpage() {
  const history = useHistory();
  const { signInWithGoogle, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isSubmitting, setIsSubmitting] = useState(false)
  //const toast = useToast()
  // const mounted = useRef(false)
  const location = useLocation();

  const mounted = useMounted();

  function handleRedirectToOrBack() {
    history.replace(location.state?.from ?? "/profile");
  }

  return (
    <div className="register-container">
      <div> Sign in with: </div>
      <div className="google-apple-signup">
        <div className="google-btn">
          {" "}
          <img src="../assets/google.png" alt="googgle" />
          <button
            onClick={() =>
              signInWithGoogle()
                .then((user) => {
                  handleRedirectToOrBack();
                  console.log(user);
                })
                .catch((e) => console.log(e.message))
            }
          >
            {" "}
            Google
          </button>
        </div>
        <div className="apple-btn">
          <img src="../assets/apple.png" alt="aaple" /> <button> Apple</button>
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
        <Link to="/forgotpassword">Forgot password?</Link>{" "}
      </p>

      <button type="submit"
        className="signup-btn"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!email || !password) {
            toast({
              description: "Credentials not valid.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            return;
          }
          // your login logic here
          setIsSubmitting(true);
          login(email, password)
            .then((res) => {
              handleRedirectToOrBack();
            })
            .catch((error) => {
              console.log(error.message);
              toast({
                description: error.message,
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            })
            .finally(() => {
              // setTimeout(() => {
              //   mounted.current && setIsSubmitting(false)
              //   console.log(mounted.current)
              // }, 1000)
              mounted.current && setIsSubmitting(false);
            });
        }}
      >
        {" "}
        Login{" "}
      </button>

      <p className="existing-user">
        {" "}
        Don't have an account?{" "}
        <a href="#">
          {" "}
          <Link to="/signup">Sign Up</Link>{" "}
        </a>
      </p>

      <p className="signup-text">By signing up, you agree to</p>
      <p className="signup-text">
        {" "}
        Scissor's{" "}
        <span style="color: black; font-weight: 600;">
          Terms of Service, Privacy Policy
        </span>{" "}
        and{" "}
        <span style="color: black;font-weight: 600;">
          Acceptable Use Policy
        </span>{" "}
      </p>
    </div>
  );
}
