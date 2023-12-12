import React, { useEffect, useState } from 'react'
import {useAuth} from 'firebase/auth';
import {auth, db} from "../firebase";

const SignInUserView =  () => {

    const  [signInUser, setSignInUser] = useState(null);

    const saveSignInUserData = async () => {
      const signInUserData = {
        displayName: signInUser.uid,
        email: signInUser.email,
        password: firebase.auth().currentUser.passwordHash,
      };
      await db.collection("users").doc(setSignInUser.uid).set(signInUserData);
    }
    
    useEffect(() => {
      const res = auth().currentUser;
      console.log(res);
      setSignInUser(res);
      
      
      if (signInUser){
        saveSignInUserData();
      }

    },[]);

  return (
    <div>
      <div>ようこそ、{signInUser.displayName}さん</div>
    </div>
  )
}

export default SignInUserView
