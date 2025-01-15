// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3gjd5vj8OIS72aJhAcVPRfBW01MBJ8CI",
  authDomain: "netflixgpt-a9b19.firebaseapp.com",
  projectId: "netflixgpt-a9b19",
  storageBucket: "netflixgpt-a9b19.firebasestorage.app",
  messagingSenderId: "366379339954",
  appId: "1:366379339954:web:e8f67b4d1f2d0a5b9439ab",
  measurementId: "G-QMXVD3XSCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();