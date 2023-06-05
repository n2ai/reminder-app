// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1swJ_TTqXKOAGE7JvBUOy3wzemtsl9vo",
  authDomain: "note-app-haitrinh.firebaseapp.com",
  projectId: "note-app-haitrinh",
  storageBucket: "note-app-haitrinh.appspot.com",
  messagingSenderId: "634206943116",
  appId: "1:634206943116:web:04a3ce1fb716ce1b48c8a9",
  measurementId: "G-5S5B6FP77P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);