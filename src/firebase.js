// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvdTm-qplPH_1-L25_qH0a1CnpFZgt_eU",
  authDomain: "twitter-clone-a44f0.firebaseapp.com",
  projectId: "twitter-clone-a44f0",
  storageBucket: "twitter-clone-a44f0.appspot.com",
  messagingSenderId: "97623980363",
  appId: "1:97623980363:web:fefec5205b9f248bb7d0ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.getFirestore();
export default db;
