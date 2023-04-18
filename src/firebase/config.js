// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAA0SVQYkgmKmgtYfSunhhTV05ic5qac5M',
  authDomain: 'react-projects-fc4f2.firebaseapp.com',
  projectId: 'react-projects-fc4f2',
  storageBucket: 'react-projects-fc4f2.appspot.com',
  messagingSenderId: '98175551871',
  appId: '1:98175551871:web:4140be18bbc37db962324a'
};

// Initialize Firebase

 export const FirebaseApp   = initializeApp( firebaseConfig );
 export const FirebaseAuth  = getAuth( FirebaseApp );
 export const FirebaseDB    = getFirestore( FirebaseApp );