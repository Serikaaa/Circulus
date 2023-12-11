// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRQCu648B3BLugbij9dcFKu4PCpEwTckM",
  authDomain: "circulus-62fea.firebaseapp.com",
  projectId: "circulus-62fea",
  storageBucket: "circulus-62fea.appspot.com",
  messagingSenderId: "808430566832",
  appId: "1:808430566832:web:40d8a39b03c7ce7cbb6a75",
  measurementId: "G-BY020KSN93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;