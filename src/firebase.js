// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfOSmu9fZDFZDzvtEb2md9WUB0ET8ckkc",
  authDomain: "ecommerceapp-e8463.firebaseapp.com",
  projectId: "ecommerceapp-e8463",
  storageBucket: "ecommerceapp-e8463.firebasestorage.app",
  messagingSenderId: "283569929038",
  appId: "1:283569929038:web:9b897b5ff4087b6e25fc1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
