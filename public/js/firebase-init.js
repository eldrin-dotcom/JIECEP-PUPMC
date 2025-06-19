// js/firebase-init.js

// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase configuration provided by the user
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

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Attempt initial sign-in (anonymous or with custom token)
// This is typically done to establish a session for Canvas environment
// or to handle anonymous users before they explicitly sign up/in.
async function initializeAuth() {
    try {
        // Since a hardcoded config is provided, we won't rely on __initial_auth_token
        // for initial login in this setup. Instead, we can sign in anonymously
        // or remove this block if all users are expected to explicitly sign in/up.
        await signInAnonymously(auth);
        console.log("Firebase initialized: Signed in anonymously.");
    } catch (error) {
        console.error("Error during Firebase initial authentication:", error);
        // In a real app, you might want to show a more user-friendly error
    }
}

// Call the initialization function
initializeAuth();

// Export initialized services
export { app, auth, db };
