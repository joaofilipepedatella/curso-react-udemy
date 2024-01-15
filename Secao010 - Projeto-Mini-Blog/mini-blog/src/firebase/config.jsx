// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvHjQbl3iNVEUH8_TqgRaSpli0DHtm74E",
  authDomain: "miniblog-98d5c.firebaseapp.com",
  projectId: "miniblog-98d5c",
  storageBucket: "miniblog-98d5c.appspot.com",
  messagingSenderId: "433335778180",
  appId: "1:433335778180:web:a6e7ff595bba372fadbbd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };