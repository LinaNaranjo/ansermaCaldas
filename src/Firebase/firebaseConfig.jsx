// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3wnrxYKCTegBwOKu5NUgNTojnnbSpNCU",
  authDomain: "ansermacaldas-39420.firebaseapp.com",
  projectId: "ansermacaldas-39420",
  storageBucket: "ansermacaldas-39420.appspot.com",
  messagingSenderId: "536438070007",
  appId: "1:536438070007:web:35d9ef03dfc40f122911f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);
export const dataBase= getFirestore(app); //para agregar datos a la base
//export const googleProvider = new GoogleAuthProvider()