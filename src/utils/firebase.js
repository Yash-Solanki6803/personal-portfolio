// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "portfolio-ba10f.firebaseapp.com",
  projectId: "portfolio-ba10f",
  storageBucket: "portfolio-ba10f.appspot.com",
  messagingSenderId: "200496009132",
  appId: "1:200496009132:web:afd66b2a2b022954bef409",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
