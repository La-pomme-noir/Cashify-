// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCpzIn\_rvcq0WNqV7TAvtuelIaN914H-ak",
authDomain: "cashify-web.firebaseapp.com",
databaseURL: "[https://cashify-web-default-rtdb.firebaseio.com](https://cashify-web-default-rtdb.firebaseio.com)",
projectId: "cashify-web",
storageBucket: "cashify-web.firebasestorage.app",
messagingSenderId: "606152300455",
appId: "1:606152300455\:web:38d25887bd50b50761c882",
measurementId: "G-97J887BQCP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { functions, httpsCallable };

// Configurar la persistencia de la sesión para que expire al cerrar el navegador
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistencia de sesión configurada a 'session'");
  })
  .catch((error) => {
    console.error("Error al configurar la persistencia:", error);
  });