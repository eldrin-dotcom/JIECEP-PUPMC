import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signupUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return sendEmailVerification(userCredential.user).then(() => userCredential);
    });
}
