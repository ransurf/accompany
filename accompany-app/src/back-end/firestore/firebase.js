import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBNEsx_-7zVWw5A1HkEDG4pi7AeTihQGqc',
  authDomain: 'accompany-5f39b.firebaseapp.com',
  projectId: 'accompany-5f39b',
  storageBucket: 'accompany-5f39b.appspot.com',
  messagingSenderId: '1032710907386',
  appId: '1:1032710907386:web:0735af3c38a9564a68b043',
  measurementId: 'G-BBCVJ3X35Q',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, app, auth };
