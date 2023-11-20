// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdyqGxWMmNF4AmVjFB-XwHpM9ubGVUT58",
  authDomain: "nextjs13-imageuploader-sample4.firebaseapp.com",
  projectId: "nextjs13-imageuploader-sample4",
  storageBucket: "nextjs13-imageuploader-sample4.appspot.com",
  messagingSenderId: "480176505176",
  appId: "1:480176505176:web:dfbaf77874ddc7ffe3e52d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export default storage;