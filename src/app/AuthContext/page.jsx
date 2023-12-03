"use client"

import React, { createContext, useContext, useState } from 'react'
import { auth, credentialProvider, emailProvider, facebookProvider, githubProvider, provider } from '../firebase';
import { EmailAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut as signOutFromFirebase } from 'firebase/auth';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(undefined);
    const [authProvider , setAuthProvider] = useState(null);
    const  [uid , setUID] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInWithPopupProvider = async (selectedAuthProvider) => {
        try{
            const result = await signInWithPopup(auth,selectedAuthProvider);
            const authUser = result.user;
            // console.log(user);
            setUser(authUser);
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


                const result = await signInWithEmailAndPassword(auth,email,password);
                const user = result.user;
                setUser(user);
                // user の uid を取得する
                const id = user.uid;
                // uid を state にセットする
                setUid(id);

                

            } else {
                // どのプロバイダも選択されていない場合は、エラーを表示する
                throw new Error("Please select a provider");
                // const credential = firebase.auth.EmailAuthProvider.credential('email@example.com', 'password');
                // const result = await firebase.auth().signInWithPopup(credential);
                //     const user = result.user;
                //     setUser(user);
                // setAuthProvider(selectedAuthProvider);
                // await signInWithPopupProvider(selectedAuthProvider);
                // const auth = getAuth();
                // const signInWithEmailAndPassword = async(auth,email,password) => {
                //     try{
                //         // const userCredential = await signInWithEmailAndPassword(auth,email,password);
                //         const userCredential = await firebase.auth().signInWithPopup(emailProvider);
                //         console.log(userCredential)
                //         setUser(userCredential.user);
                //         console.log(user);
                    
                //         console.log('Successfully signed in:', user);
                //     }catch(error){
                //         console.log('Error signing in:', error);
                //     }
                //     console.log(signInWithEmailAndPassword);
                // }
                // console.log(signInWithEmailAndPassword);
            // }  else {
            //         authProvider = emailProvider;
                // }else {
                //     throw new Error("Please select a provider");
                // }
            
        }
            //このif文消すと動かなくなるからけさないで！！
                if(selectedAuthProvider){
                    setAuthProvider(selectedAuthProvider);
                    await signInWithPopupProvider(authProvider);
                    console.log(authProvider);

                    
                   
                }

            
        } catch (error) {
            console.log(error);
            // エラーハンドリングのコードを追加する
        }

//ここかな？
        

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

    const handleChangeEmail = (e) => {
        e.preventDefault();
                const inputEmail = e.target.value;
        
                setEmail(inputEmail);
            };
        
            const handleChangePassword = (e) => {
                e.preventDefault();
                const inputPassword = e.target.value;
        
                setPassword(inputPassword);
            };
    

    return (
        <div>
            <div className=' ml-20 mr-96'>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('google')}>Sign in with Google</button>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('facebook')}>Sign in wit FaceBook</button>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('github')}>Sign in with GitHub</button>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('email','email@example.com','password')}>Sign in with Email</button>
            
            <div className='  flex-col border-4 border-green-400 px-10'>
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    signIn('email',email,password);
                }}>
                    <div className=' mx-5 my-2'>
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" id='email' value={email} onChange={handleChangeEmail} required className=' border-2 border-gray-400 bg-slate-50'/>
                    </div>
                    <div className=' mx-5 my-2'>
                        <label htmlFor="password" >パスワード</label>
                        <input type="password" id='password' value={password} onChange={handleChangePassword} required className=' border-2 border-gray-400 bg-slate-50' />
                    </div>
                    <button type='submit' className=' mx-5 my-2 px-5 border-2 border-green-600 bg-green-500 rounded-md text-slate-50 hover:scale-105 active:scale-95'>メールアドレスでログイン</button>
                </form>
                <div>
                    
                </div>
                
            </div>
            </div>
            <div className='ml-80'>
                <button className='border-2 border-red-600 mx-5 my-20 px-4 py-1 bg-red-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95'>
                    ログアウト
                </button>
            </div>

            
            


        <AuthContext.Provider value={{user, signIn , signOut}}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};
