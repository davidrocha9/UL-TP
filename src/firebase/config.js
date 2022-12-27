import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9cWWrDo3Zre1PmSE8b3ZfmEDxOGO8F5w",
    authDomain: "e-medicare-e28b9.firebaseapp.com",
    projectId: "e-medicare-e28b9",
    storageBucket: "e-medicare-e28b9.appspot.com",
    messagingSenderId: "4555462817",
    appId: "1:4555462817:web:0366c6ac441dd8eb8938e0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();
const storage = app.storage();

export {app, firestore, storage}