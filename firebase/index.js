// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

//
const config = {
  apiKey: "AIzaSyDcV6xhVV1D6jv6yjQ4Tnc8q5BS4xPVIvQ",
  appId: "1:815656493029:web:593d18324b0ab30cb5d90c",
  authDomain: "jfejcxjyujx.firebaseapp.com",
  databaseURL:
    "https://jfejcxjyujx-default-rtdb.europe-west1.firebasedatabase.app",
  measurementId: "G-LB96JH1BJY",
  messagingSenderId: "815656493029",
  projectId: "jfejcxjyujx",
  storageBucket: "jfejcxjyujx.appspot.com",
};

//
// Initialize Firebase
const app = 0 < getApps().length ? getApp() : initializeApp(config);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const dbRealtime = getDatabase(app);
////
export { app, db, dbRealtime, auth, storage, config };
