import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmyzCpxf-qoAtpG6_G3ppWPz-oND2fuFU",
  authDomain: "scissor-link-app.firebaseapp.com",
  projectId: "scissor-link-app",
  storageBucket: "scissor-link-app.appspot.com",
  messagingSenderId: "659882761875",
  appId: "1:659882761875:web:119d37a268793d5ac1b766"
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
