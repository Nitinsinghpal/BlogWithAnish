// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjSAC6JaIlMizk926bOo9ExP-cmkxneQ",
  authDomain: "blogwithanish.firebaseapp.com",
  projectId: "blogwithanish",
  storageBucket: "blogwithanish.appspot.com",
  messagingSenderId: "300284203383",
  appId: "1:300284203383:web:c3b2ed299be26e208b9172",
  measurementId: "G-DZZPH8S9V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);