import React, { createContext, useContext, useEffect, useState } from "react"
import { auth } from "./utils/init-firebase"
import { CreateUserWithEmailAndPassword, SigninWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, confirmPaawordReset, } from "firebase/auth"

const AuthContext = createContext({
    currentUser: null,
    SigninWithEmailAndPassword: () => Promise,
    sendPasswordResetEmail: () => Promise,
    logout: () => Promise,
    forgotPassword: () => Promise,
    login: () => Promise,
    register: () => Promise,

})

export const useAuth = () => useContext(AuthContext)
export default function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth, user =>{
            setCurrentUser(user ? user : null)})
            return () =>{unsubscribe()}
    }, [])


    useEffect(() =>{

        function login(email, password){
            return SigninWithEmailAndPassword(auth, email, password)
        }

        function register(email, password){
            return CreateUserWithEmailAndPassword(auth, email, password)
        }

        function forgotPassword(email){
            return sendPasswordResetEmail(auth, email, { url: `http://localhost:3000/login`,})
        }

        function resetPassword(oobCode, newPassword){
            return confirmPaawordReset(auth, oobCode, newPassword)
        }

        function logout(){
            return signOut(auth)
        }

        function signInWithGoogle(){
            const provider = newGoogleAuthProvider()
            return signInWithPopup(auth, provider)
        }

        const value = { currentUser, signInWithGoogle, login, register, logout, forgotPassword, resetPassword, }


        return<AuthContext.Provider value = {value} { ...children }/>
    })
}