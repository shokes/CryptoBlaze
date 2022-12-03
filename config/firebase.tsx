// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDfrJqUyq91TMisGOtNfo-3fcIAW0TJTXg',
  authDomain: 'cryptoblaze-18952.firebaseapp.com',
  projectId: 'cryptoblaze-18952',
  storageBucket: 'cryptoblaze-18952.appspot.com',
  messagingSenderId: '579807160933',
  appId: '1:579807160933:web:d9baa7ed5c7cc4c9fcb48c',
  measurementId: 'G-157WRNQS7Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
