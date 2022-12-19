// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw88Q91xTT-lUTThp6PDLs6ETo5xEMns4",
  authDomain: "clone-166ed.firebaseapp.com",
  projectId: "clone-166ed",
  storageBucket: "clone-166ed.appspot.com",
  messagingSenderId: "896959572255",
  appId: "1:896959572255:web:68512e5c480387512f282a",
  measurementId: "G-2TDX9FH3DG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);


export {
  db,
  auth,
  signOut,
};
