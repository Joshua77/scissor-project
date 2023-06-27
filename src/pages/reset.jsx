import React from "react";
import "./register.css";

import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast,
  } from '@chakra-ui/react'
  import React, { useState } from 'react'
  //import { Card } from '../components/Card'
  //import { Layout } from '../components/Layout'
  import { useHistory, useLocation } from 'react-router-dom'
  import { useAuth } from '../contexts/AuthContext'
  
  // A custom hook that builds on useLocation to parse
  // the query string for you.
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  
  export default function ResetPasswordPage() {
    const { resetPassword } = useAuth()
    const query = useQuery()
    const history = useHistory()
    const [password, setPassword] = useState('')
    const toast = useToast()
  
    console.log(query.get('mode'), query.get('oobCode'))

    return(
        <div className="forgot-container">
        <h2> Reset Password </h2>
        
        <div className="forgot-form">
            <input type="password" required value ="password" placeholder="New Password" />
        </div>
    
        <button onSubmit={async e => {
            e.preventDefault()
            try {
              await resetPassword(query.get('oobCode'), password)
              toast({
                description: 'Password has been changed, you can login now.',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              history.push('/login')
            } catch (error) {
              toast({
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              console.log(error.message)
            }
          }}
         className="signup-btn"> Set a New Password </button>

        <p className="reset-text"> Reset the Password and Login </p>
    </div>
    )



}