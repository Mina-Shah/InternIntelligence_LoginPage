// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIgg6ZFFc26ULbIQQvApcCUvihPKEJ_xk",
  authDomain: "login-page-dfdff.firebaseapp.com",
  projectId: "login-page-dfdff",
  storageBucket: "login-page-dfdff.firebasestorage.app",
  messagingSenderId: "497418934910",
  appId: "1:497418934910:web:45826c53cd1583bda1d62f",
  measurementId: "G-9Y3MQLTNES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get Firebase Auth instance

export { auth };