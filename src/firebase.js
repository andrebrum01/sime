// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUNRFR-DsquEBm4DVkCkDqfULEPy0V08c",
  authDomain: "sime-1dcf1.firebaseapp.com",
  projectId: "sime-1dcf1",
  storageBucket: "sime-1dcf1.appspot.com",
  messagingSenderId: "405340725378",
  appId: "1:405340725378:web:6ac3becd8c0f677331149b",
  measurementId: "G-09G70D1802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);