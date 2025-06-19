// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw6c5gqQ08HsR2WUkdGX-RBB-Jp5z2OF0",
  authDomain: "jiecep-website.firebaseapp.com",
  databaseURL: "https://jiecep-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jiecep-website",
  storageBucket: "jiecep-website.firebasestorage.app",
  messagingSenderId: "867186578529",
  appId: "1:867186578529:web:e0d1e579cf9837882fc620",
  measurementId: "G-3W5VX3M8LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);