// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
