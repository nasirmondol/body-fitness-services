// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN3ly82Xe5IXTeBbKJ2ExKyDznAYv8s-g",
  authDomain: "body-fitness-service.firebaseapp.com",
  projectId: "body-fitness-service",
  storageBucket: "body-fitness-service.appspot.com",
  messagingSenderId: "320074760357",
  appId: "1:320074760357:web:453f731a4142b47e0ccd4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;