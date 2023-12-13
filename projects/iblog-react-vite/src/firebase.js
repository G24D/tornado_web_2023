// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp1o3G3JlVhPXn1ScfH-aSrVQjK-qXlWU",
  authDomain: "tornado-web-ag.firebaseapp.com",
  projectId: "tornado-web-ag",
  storageBucket: "tornado-web-ag.appspot.com",
  messagingSenderId: "976876258916",
  appId: "1:976876258916:web:059c9e7efe22d9ecc78171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);