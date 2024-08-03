// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.ITE_FIREBASE_API_KEY,
  authDomain: "real-estate-cfa82.firebaseapp.com",
  projectId: "real-estate-cfa82",
  storageBucket: "real-estate-cfa82.appspot.com",
  messagingSenderId: "904031203764",
  appId: "1:904031203764:web:c77ee930b73cda61e2c2e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
