"use client"

import React, { createContext, useContext, useState } from 'react'
import { auth, facebookProvider, provider } from '../firebase';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup,signOut as signOutFromFirebase } from 'firebase/auth';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

//ここから修正する
export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const signIn = async () => {
        await signInWithPopup(auth ,provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            setUser(user); 

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log(error)
        })

        
            await signInWithPopup(auth,facebookProvider)
            .then((result) => {
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user =result.user;


                setUser(user);
            }).catch((error) => {
                const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = FacebookAuthProvider.credentialFromError(error);

                console.log(error);
            });
        
        
    };

    // const signOut = async () => {
    //     await signOutFromFirebase().then(() => {
    //         console.log(signOutFromFirebase);
    //     setUser(null);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // };




    const signOut = async () => {
        try {
            await signOutFromFirebase(auth);
            
            setUser(null);
            console.log(setUser);
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


