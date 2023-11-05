// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVJwT6ywAXmDwVXBlaQbljWidm02T3ti0",
    authDomain: "shelf2borrow.firebaseapp.com",
    projectId: "shelf2borrow",
    storageBucket: "shelf2borrow.appspot.com",
    messagingSenderId: "633416728156",
    appId: "1:633416728156:web:11fafc73f85866fd83f099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;