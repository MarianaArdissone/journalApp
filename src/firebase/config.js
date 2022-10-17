// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1aJiY_mAgnab90YRdvjVdaRTrA0TGxZI",
  authDomain: "react-cursos-dcd10.firebaseapp.com",
  projectId: "react-cursos-dcd10",
  storageBucket: "react-cursos-dcd10.appspot.com",
  messagingSenderId: "19620685823",
  appId: "1:19620685823:web:7c0fd75ecfbc4d59b029ca"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );