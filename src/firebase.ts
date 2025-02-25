import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHKjLVQv-ShqEjHD7c6Pr5SaaMxle1Zh8",
    authDomain: "padel-club-league.firebaseapp.com",
    projectId: "padel-club-league",
    storageBucket: "padel-club-league.firebasestorage.app",
    messagingSenderId: "550671216959",
    appId: "1:550671216959:web:7e665e0b515f893255e38a",
    measurementId: "G-S63V78TNE0"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };