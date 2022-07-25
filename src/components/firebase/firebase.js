import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA5yoJNsZKA24aV4nJUhCbFuz3nMf_-DiQ",
    authDomain: "binance-d38e3.firebaseapp.com",
    projectId: "binance-d38e3",
    storageBucket: "binance-d38e3.appspot.com",
    messagingSenderId: "492843326434",
    appId: "1:492843326434:web:fdc5e28bdc6428879577bb"
  };

// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth(app);

export default database;  