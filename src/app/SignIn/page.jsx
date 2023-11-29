"use client"

import React, { useContext } from 'react'
import GoogleSignIn from "./GoogleSignIn/page";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth,provider} from "../firebase";
import {useState} from "react";
import {useAuth} from "../AuthContext/page";
import { AuthProvider } from '../AuthContext/page';



const SignIn = () => {

    const {user,signIn,signOut} = useAuth();

    const handleSignIn = async () => {
        await signIn();
    }

    const handleSignOut = async () => {
        await signOut().then(() => {
            console.log(user);
        })
        
        // setSignInUser(null);
        // user = signInUser;
        // console.log(handleSignOut);
    }; 

    // if(loading){
    //     return <div className='ml-28 mt-5'>Loding....</div>
    // }

    // if(error){
    //     return <div>Error:{error.message}</div>
    // }
if (!user) {

    return(
    <div className=' ml-80 pl-60'>
        <div className='ml-10 mt-5'>ログインしていません</div>
        <button 
                className=' ml-14 border-4 border-green-600 bg-green-400 text-slate-50 rounded-md hover:scale-110 active:scale-95'
                onClick={handleSignIn}
                >
            GoogleSignIn
        </button>
    </div>
    );
}else{

  return (
    <div className=' ml-80 pl-60'>
        <div className='ml-28 mt-5'>SignIn機能</div>
   
        <div className='ml-28 mt-5'>ログイン中</div>  
        
         <button onClick={handleSignOut}
                     className=' ml-24 mt-5 my-5 border-4 border-red-600 bg-red-400 text-slate-50 rounded-md hover:scale-110 active:scale-95'
             >
                    GoogleSignOut
        </button>
    </div>
  )
  }
}

export default SignIn;