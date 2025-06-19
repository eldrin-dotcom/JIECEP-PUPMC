import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signupUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
