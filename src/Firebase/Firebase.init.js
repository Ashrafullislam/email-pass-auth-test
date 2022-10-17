// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZJrLnZ25O1wccKIxGRCBGx3E_zb-G9XA",
  authDomain: "email-verify-test.firebaseapp.com",
  projectId: "email-verify-test",
  storageBucket: "email-verify-test.appspot.com",
  messagingSenderId: "512524174037",
  appId: "1:512524174037:web:8794effc59fca74775585c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;