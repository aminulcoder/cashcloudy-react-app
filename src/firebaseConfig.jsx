
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmlGwSqLi98tHQrfjcbEH3tPjkRazX1o0",
  authDomain: "react-app-aaeb2.firebaseapp.com",
  projectId: "react-app-aaeb2",
  storageBucket: "react-app-aaeb2.firebasestorage.app",
  messagingSenderId: "444204439203",
  appId: "1:444204439203:web:97db0258a7628a04395116",
  measurementId: "G-QNRJ7QCHDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;