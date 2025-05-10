// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoMG3I_vVVjkxpVpI6ijbxbymVxIwarxk",
  authDomain: "magic-the-scattering.firebaseapp.com",
  projectId: "magic-the-scattering",
  storageBucket: "magic-the-scattering.firebasestorage.app",
  messagingSenderId: "627130647103",
  appId: "1:627130647103:web:441cecacc7e68d8f476e8a",
  measurementId: "G-5ZVD847MQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db}