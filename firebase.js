// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2NROA7W1urNmdvlyDnMaM6ks25l-OG4s",
    authDomain: "twitter-clone-b4b4b.firebaseapp.com",
    projectId: "twitter-clone-b4b4b",
    storageBucket: "twitter-clone-b4b4b.appspot.com",
    messagingSenderId: "478335124207",
    appId: "1:478335124207:web:e1e38547b07435980fd11a"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };