// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrUyhzM8fSYU7es5xbNcZaa50j0qYritQ",
    authDomain: "protech-edu.firebaseapp.com",
    projectId: "protech-edu",
    storageBucket: "protech-edu.appspot.com",
    messagingSenderId: "632326376877",
    appId: "1:632326376877:web:e23fe2cb8856fd9762e524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;