"use client"

import React, { createContext, useContext, useState } from 'react'
import { auth, emailProvider, facebookProvider, githubProvider, provider } from '../firebase';
import { FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut as signOutFromFirebase } from 'firebase/auth';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(undefined);

    

    const signIn = async (selectedProvider,email,password) => {
1       

        try {
            let authProvider ;
            if (selectedProvider === 'google') {
                authProvider = provider;
            } else if (selectedProvider === 'facebook') {
                authProvider = facebookProvider;
            } else if (selectedProvider === 'github') {
                authProvider = githubProvider;
            } else if (selectedProvider === 'email') {
                authProvider = emailProvider;

                await signInWithEmailAndPassword(auth,email,password);
            // }  else {
            //         authProvider = emailProvider;
                }else {
                    throw new Error("Please select a provider");
                }

                if(authProvider){

                    const result = await signInWithPopup(auth,authProvider);
                    const user = result.user;
                    // console.log(user);
                    setUser(user);
                }

            
        } catch (error) {
            console.log(error);
            // エラーハンドリングのコードを追加する
        }
    };

    const signOut = async () => {
        try {
            await signOutFromFirebase(auth);
            setUser(undefined);
            // console.log(setUser);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{user, signIn , signOut}}>
            {children}
        </AuthContext.Provider>
    );
};
