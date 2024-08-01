// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXpKRu1xD05kAah8E__W14Ih_J90dOMj0",
  authDomain: "pantry-tracker-5b16c.firebaseapp.com",
  projectId: "pantry-tracker-5b16c",
  storageBucket: "pantry-tracker-5b16c.appspot.com",
  messagingSenderId: "84881024388",
  appId: "1:84881024388:web:bf34af6a4917ec383ce9d1",
  measurementId: "G-MHKM2ZMN72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);