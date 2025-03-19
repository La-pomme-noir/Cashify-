// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzIn_rvcq0WNqV7TAvtuelIaN914H-ak",
  authDomain: "cashify-web.firebaseapp.com",
  projectId: "cashify-web",
  storageBucket: "cashify-web.firebasestorage.app",
  messagingSenderId: "606152300455",
  appId: "1:606152300455:web:38d25887bd50b50761c882",
  measurementId: "G-97J887BQCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);