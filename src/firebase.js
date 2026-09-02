// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ8NgpB0ypFiJejEorsfkXYfTYBtHpWPg",
  authDomain: "rishi-panneerselvam.firebaseapp.com",
  projectId: "rishi-panneerselvam",
  storageBucket: "rishi-panneerselvam.firebasestorage.app",
  messagingSenderId: "20604730181",
  appId: "1:20604730181:web:d98905e966cd7e28d09c2c",
  measurementId: "G-0HNNN8BLFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);