// Import the functions you need from the SDKs you need

// import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {Firestore, getFirestore} from 'firebase/firestore';
import "firebase/auth"
import { EmailAuthCredential, EmailAuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//2023年12月初旬にテストモードの期限が切れる方
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

  //   //2023年12月から使い出したテストモードの方
  //   apiKey: "AIzaSyDR7mLEEeEpJHxNRqBvv8PpOa7IbbiR1UM",
  // authDomain: "nextjs13-imageuploader-sample5.firebaseapp.com",
  // projectId: "nextjs13-imageuploader-sample5",
  // storageBucket: "nextjs13-imageuploader-sample5.appspot.com",
  // messagingSenderId: "665717399228",
  // appId: "1:665717399228:web:30990f43935d7c166cfab9"




    
};

// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }



const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);
// const db = Firestore(app); 


const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
// const provider = {googleprovider,facebookProvider}
const emailProvider = new EmailAuthProvider();
const credentialProvider = new EmailAuthCredential();





export default storage  ;
export {auth,provider,facebookProvider,githubProvider,emailProvider,credentialProvider,db};
// export {auth,authProvider};
