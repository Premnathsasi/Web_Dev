// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUpWsYmwcXWaEZ4kWhy1yszGF6KPfVymk",
  authDomain: "react-chat-5b7b5.firebaseapp.com",
  projectId: "react-chat-5b7b5",
  storageBucket: "react-chat-5b7b5.appspot.com",
  messagingSenderId: "172028213172",
  appId: "1:172028213172:web:356aa45e44807f4989a4e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();