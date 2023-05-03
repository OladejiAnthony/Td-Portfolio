// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW0dv9r_2lAW3P26Dmu9Bbb712ffnzeuw",
  authDomain: "td-port.firebaseapp.com",
  projectId: "td-port",
  storageBucket: "td-port.appspot.com",
  messagingSenderId: "871765945957",
  appId: "1:871765945957:web:ad2dd7883fcabb76c9a08c",
  measurementId: "G-07E9NBZMST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

