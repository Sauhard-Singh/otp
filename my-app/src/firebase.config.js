// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARirITSdxr-NVXbP-qmsB-ArO5cT714bg",
  authDomain: "otp-mobile-68826.firebaseapp.com",
  projectId: "otp-mobile-68826",
  storageBucket: "otp-mobile-68826.appspot.com",
  messagingSenderId: "17829821348",
  appId: "1:17829821348:web:31abc15f41520929b75f31",
  measurementId: "G-5JYY5D2DR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)