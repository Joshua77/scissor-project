
import {
    Button,
    Center,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast,
  } from '@chakra-ui/react'
  import React, { useState } from 'react'
  import { useHistory } from 'react-router-dom'
  import { Card } from '../components/Card'
  import DividerWithText from '../components/DividerWithText'
  import { Layout } from '../components/Layout'
  import { useAuth } from '../contexts/AuthContext'
  import "./register.css";
  
  export default function ForgotPasswordPage() {
    const history = useHistory()
    const { forgotPassword } = useAuth()
    const toast = useToast()
  
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
                  toast({
                    description: `An email is sent to ${email} for password reset instructions.`,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                } catch (error) {
                  console.log(error.message)
                  toast({
                    description: error.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
                }
              }}> Send Reset Link
          </button>

          <p class="reset-text"> Log in to your email for reset link </p>

        </div>
       </>   
    )
  }