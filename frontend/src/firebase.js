// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSR_gfG35JkJpkRLjzrKieLxB9WWhYzf0",
  authDomain: "walmart-914e9.firebaseapp.com",
  projectId: "walmart-914e9",
  storageBucket: "walmart-914e9.appspot.com",
  messagingSenderId: "224255569399",
  appId: "1:224255569399:web:d8d4b25f0e055779d312f2",
  measurementId: "G-4DGW6KYJCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}