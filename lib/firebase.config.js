// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0GSSE66XM1uDoyMzr2WA1csb76D1ec1o",
  authDomain: "homepetguardians-2cdfe.firebaseapp.com",
  projectId: "homepetguardians-2cdfe",
  storageBucket: "homepetguardians-2cdfe.appspot.com",
  messagingSenderId: "257009605776",
  appId: "1:257009605776:web:5e95f08d57f643945c0c15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Użyj getAuth zamiast app.auth

export { app, auth, db };