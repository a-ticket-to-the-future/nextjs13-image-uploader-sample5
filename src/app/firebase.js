// Import the functions you need from the SDKs you need

// import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from 'firebase/firestore';
import "firebase/auth"
import { EmailAuthCredential, EmailAuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCdyqGxWMmNF4AmVjFB-XwHpM9ubGVUT58",
    authDomain: "nextjs13-imageuploader-sample4.firebaseapp.com",
    projectId: "nextjs13-imageuploader-sample4",
    storageBucket: "nextjs13-imageuploader-sample4.appspot.com",
    messagingSenderId: "480176505176",
    appId: "1:480176505176:web:dfbaf77874ddc7ffe3e52d",
    
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,

    
};

// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }



const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
// const provider = {googleprovider,facebookProvider}
const emailProvider = new EmailAuthProvider();
const credentialProvider = new EmailAuthCredential();





export default storage  ;
export {auth,provider,facebookProvider,githubProvider,emailProvider,credentialProvider,db};
// export {auth,authProvider};
