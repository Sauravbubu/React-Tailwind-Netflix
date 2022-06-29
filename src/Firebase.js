// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZI5owKfYnDax73cs44pURk2J0xHTOCnA",
  authDomain: "netflix-react-101.firebaseapp.com",
  projectId: "netflix-react-101",
  storageBucket: "netflix-react-101.appspot.com",
  messagingSenderId: "1034649986044",
  appId: "1:1034649986044:web:04c5bcadfa60e8b0efc879",
  measurementId: "G-MYVDBLC05E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);