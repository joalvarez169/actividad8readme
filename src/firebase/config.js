import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChONKnIgewb7C2WcCi7e2s5VS5lyEt2YI",
  authDomain: "ecoconnect-ed437.firebaseapp.com",
  projectId: "ecoconnect-ed437",
  storageBucket: "ecoconnect-ed437.firebasestorage.app",
  messagingSenderId: "566836976228",
  appId: "1:566836976228:web:d0d176972cd301aa309d71",
  measurementId: "G-1YNNQKJ8JZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);