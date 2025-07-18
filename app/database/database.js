import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Paste your Firebase web config here
const firebaseConfig = {
    apiKey: "AIzaSyBHxLpmm1SN0xQ2RGKnUpn931FZPPjQ2W8",
    authDomain: "scoring-matches.firebaseapp.com",
    databaseURL: "https://scoring-matches-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "scoring-matches",
    storageBucket: "scoring-matches.firebasestorage.app",
    messagingSenderId: "665488883098",
    appId: "1:665488883098:web:6f8f4d084b3e6f8e160e23",
    measurementId: "G-5RBED9WB7N"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);