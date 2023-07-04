  import React, { useState } from 'react'
  //import { useHistory } from 'react-router-dom'
  import { useAuth } from '../contexts/Authcontext'
  import "./register.css";
  
  export default function ForgotPasswordPage() {
    const { forgotPassword } = useAuth()
    const [error, setError] = useState("")
    const [email, setEmail] = useState('')


    const passwordForgot = async (e) => {
      e.preventDefault()
      // your login logic here
      try {
        await forgotPassword(email)
      } catch (error) {
        console.log(error.message)
      }
    }
  
    return (
       <>
       <form onSubmit={passwordForgot}>
       <div class="forgot-container">
          <h2> Forgot Password </h2>
          <div class="forgot-form">
            <input type="email"
            name="email"
            autoComplete="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address" />
          </div>
          <button onSubmit={passwordForgot} type= "submit" class="signup-btn"> Send Reset Link
          </button>

          <p class="reset-text"> Log in to your email for reset link </p>

        </div>
        </form>
       </>   
    )
  }