"use client"

import React from 'react'
import GoogleSignIn from "./GoogleSignIn/page";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth,provider} from "../firebase";
import {useState} from "react";


const SignIn = () => {

    const [user,loading,error] = useAuthState(auth);

    const handleSignOut = async () => {
        await auth.signOut();
    }; 

    if(loading){
        return <div className='ml-28 mt-5'>Loding....</div>
    }

    if(error){
        return <div>Error:{error.message}</div>
    }

  return (
    <div className=' ml-80 pl-60'>
    <div className='ml-28 mt-5'>SignIn機能</div>
    {user ? 
        <div className='ml-28 mt-5'>ログイン中</div> : 
    <GoogleSignIn />}
    {user && <button onClick={handleSignOut}
                     className=' ml-24 mt-5 my-5 border-4 border-red-600 bg-red-400 text-slate-50 rounded-md hover:scale-110 active:scale-95'
             >
                    GoogleSignOut
             </button>}
    </div>
  )
}

export default SignIn;