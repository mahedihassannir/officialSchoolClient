// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM47zArrcznThMW8Ma3y33J6G66PDK1Ik",
    authDomain: "rbbsschoolweb.firebaseapp.com",
    projectId: "rbbsschoolweb",
    storageBucket: "rbbsschoolweb.appspot.com",
    messagingSenderId: "807629573220",
    appId: "1:807629573220:web:db9f23759bd9c2de33a371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app