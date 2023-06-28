
  import React, { useState } from 'react'
 // import { useHistory } from 'react-router-dom'
  import { useAuth } from '../contexts/Authcontext'
  import "./register.css";
  
  export default function ForgotPasswordPage() {
  //  const history = useHistory()
    const { forgotPassword } = useAuth()
    
  
    const [email, setEmail] = useState('')
  
    return (
       <>
       <div class="forgot-container">
          <h2> Forgot Password </h2>
          <div class="forgot-form">
            <input type="email" placeholder="Email address" />
          </div>
          <button 
            class="signup-btn"
            onSubmit={async e => {
                e.preventDefault()
                // your login logic here
                try {
                  await forgotPassword(email)
                } catch (error) {
                  console.log(error.message)
                }
              }}> Send Reset Link
          </button>

          <p class="reset-text"> Log in to your email for reset link </p>

        </div>
       </>   
    )
  }