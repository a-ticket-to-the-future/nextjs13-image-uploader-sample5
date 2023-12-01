"use client"

import React, { createContext, useContext, useState } from 'react'
import { auth, emailProvider, facebookProvider, githubProvider, provider } from '../firebase';
import { FacebookAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut as signOutFromFirebase } from 'firebase/auth';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(undefined);
    const [authProvider , setAuthProvider] = useState(null);

    const signInWithPopupProvider = async (selectedAuthProvider) => {
        try{
            const result = await signInWithPopup(auth,selectedAuthProvider);
            const user = result.user;
            // console.log(user);
            setUser(user);
        }catch(error) {
            console.log(error);
        }
    }

    

    const signIn = async (selectedProvider,email,password) => {
1       
        
        try {
            let selectedAuthProvider ;
            if (selectedProvider === 'google') {
                selectedAuthProvider = provider;
            } else if (selectedProvider === 'facebook') {
                selectedAuthProvider = facebookProvider;
            } else if (selectedProvider === 'github') {
                selectedAuthProvider = githubProvider;
            } else if (selectedProvider === 'email') {
                selectedAuthProvider = emailProvider;

                // const auth = getAuth();
                const signInWithEmailAndPassword = async(email,password) => {

                    try{
                        const userCredential = await signInWithEmailAndPassword(auth,email,password);
                        console.log(userCredential)
                        const user = userCredential.user;
                        console.log(user);
                        console.log('Successfully signed in:', user);
                    }catch(error){
                        console.log('Error signing in:', error);
                    }
                }
                // console.log(signInWithEmailAndPassword);
            // }  else {
            //         authProvider = emailProvider;
                }else {
                    throw new Error("Please select a provider");
                }

                if(selectedAuthProvider){
                    setAuthProvider(selectedAuthProvider);
                    await signInWithPopupProvider(selectedAuthProvider);
                   
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
        <div>
            <div className=' ml-52'>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('google')}>Sign in with Google</button>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('facebook')}>Sign in wit FaceBook</button>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('github')}>Sign in with GitHub</button>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('email','email@example.com','password')}>Sign in with Email</button>
            
            </div>
            


        <AuthContext.Provider value={{user, signIn , signOut}}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};
