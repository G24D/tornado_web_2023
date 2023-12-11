// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPgWrtjDAh6Hn7KuF17WLZ0hYax2hDKRs",
  authDomain: "ag-firstproject.firebaseapp.com",
  projectId: "ag-firstproject",
  storageBucket: "ag-firstproject.appspot.com",
  messagingSenderId: "806362537012",
  appId: "1:806362537012:web:4e6c7b8adea860ba317e61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);