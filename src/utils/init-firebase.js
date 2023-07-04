// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwNkkgtwqfKj2m16ZM3Hsg2dnkqWqeZnY",
  authDomain: "scissors-url-shortener.firebaseapp.com",
  projectId: "scissors-url-shortener",
  storageBucket: "scissors-url-shortener.appspot.com",
  messagingSenderId: "658742541342",
  appId: "1:658742541342:web:119ea0596b87ca417f020f"
};

/// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const firestore = getFirestore(app);
//export default app;