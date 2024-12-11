// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAXDkpQnbWRWJWlO4fUyNt_yQX5SeIjYI",
  authDomain: "products-d5b5b.firebaseapp.com",
  projectId: "products-d5b5b",
  storageBucket: "productsy66-d5b5b.firebasestorage.app",
  messagingSenderId: "872084580205",
  appId: "1:872084580205:web:46c75220245b0b9de71c64",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
