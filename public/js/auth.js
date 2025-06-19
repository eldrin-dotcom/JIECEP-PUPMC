import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
