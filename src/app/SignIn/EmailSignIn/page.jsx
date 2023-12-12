"use client"

import React, { useEffect, useState } from 'react';
import  {getAuth, signInWithEmailAndPassword}from 'firebase/auth';
import { auth, db } from '../../firebase';
import App from '@/app/App/page';
import SignInView from '@/app/App/SignInView/page';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/AuthContext/page';
import SignInUserView from '../../SignInUserView/page';
import { addDoc, collection } from 'firebase/firestore';
// import bcrypt from "bcrypt";


const EmailSignIn = () => {
  const [signInUser , setSignInUser] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const route = useRouter();
  

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

  const FormEvent = async (e) => {
    e.preventDefault();
    try {
      // const userCredential = await signInWithEmail( email, password);
      // const authUser = userCredential.user;
      // const auth = getAuth();
      // await signInWithEmailAndPassword(auth,email,password).then((userCredential) =>{
      //   const authUser = userCredential.user;
      //   setUser(authUser);
      //   console.log(user);
      //   console.log(authUser);
      // })
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const authUser = userCredential.user;
      setSignInUser(authUser);
      // console.log(setUser);
      // console.log(signInUser);
      console.log(authUser);
      console.log(authUser.uid)

      //  route.refresh();

      // useEffect( async() => {
      //     if(authUser){
      
          const saveSignInUserData = async () => {
            const dogRef = await addDoc(collection(db,"users"),{
              displayName: authUser.uid,
              email: authUser.email,
              // hashedPassword:await bcrypt.hash(password,10),
              // password: authUser.passwordHash,
            });
            // const authUserData = {
            //   displayName: authUser.uid,
            //   email: authUser.email,
            //   password: auth().currentUser.passwordHash,
            // };
            // console.log(authUserData);
            // await db.collection("users").doc(authUser.uid).set(authUserData);
            // console.log(saveSignInUserData);
            console.log("Document written with ID",dogRef.id)
          };
      //     await saveSignInUserData();

      //       // const res = auth().currentUser;
      //       // console.log(res);
      //       // setSignInUser(res);

      //       // saveSignInUserData();
            
      //       }
  
      //     },[authUser]);
    
    if(authUser.uid){
      await saveSignInUserData();
    }
      
      
             
               // if (authUser.uid)
               // ユーザーの処理を行う
             } catch (error) {
               console.log(error);
               // エラーハンドリングのコードを追加する
             }
            //  useEffect(async() => {
            //   if(signInUser){
          
            //   const saveSignInUserData = async () => {
            //     const dogRef = await addDoc(collection(db,"users"),{
            //       displayName: signInUser.uid,
            //       email: signInUser.email,
            //       password: signInUser.passwordHash,
            //     });
            //     // const authUserData = {
            //     //   displayName: authUser.uid,
            //     //   email: authUser.email,
            //     //   password: auth().currentUser.passwordHash,
            //     // };
            //     // console.log(authUserData);
            //     // await db.collection("users").doc(authUser.uid).set(authUserData);
            //     // console.log(saveSignInUserData);
            //     console.log("Document written with ID",dogRef.id)
            //   };
              
            //   // const res = auth().currentUser;
            //   // console.log(res);
            //   // setSignInUser(res);
              
            //   // saveSignInUserData();
              
            //   await saveSignInUserData();
            //     }
          
            //   },[signInUser]);
  };

  

  // console.log(signInUser);

  const {signIn,signOut} = useAuth();

    const handleSignOut = async () => {
        await signOut().then(() => {
            console.log(signInUser);
             setSignInUser(null);
            // route.push("/");
        })
        
        // setSignInUser(null);
        // user = signInUser;
        // console.log(handleSignOut);
    }; 

  return (
    <div className='mr-96'>
      <div className='  ml-0 mr-96 mt-10 pr-0'>
        {/* 他のサインインボタン */}
      </div>
      {!signInUser && 
      <div className='  flex-col border-4 border-green-400 pr-80'>
        <form action="" onSubmit={FormEvent}>
          <div className=' mx-5 my-2'>
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id='email' value={email} onChange={handleChangeEmail} required className=' border-2 border-gray-400 bg-slate-50'/>
          </div>
          <div className=' mx-5 my-2'>
            <label htmlFor="password" >パスワード</label>
            <input type="password" id='password' value={password} onChange={handleChangePassword} required className=' border-2 border-gray-400 bg-slate-50' />
          </div>
          <button type='submit' className=' mx-5 my-2 px-5 border-2 border-green-600 bg-green-500 rounded-md text-slate-50 hover:scale-105 active:scale-95' onClick={FormEvent}>メールアドレスでログイン</button>
        </form>
      </div>
      }
      <div>
     {signInUser && (
     
      <div>
        
        {/* <SignInUserView /> */}
        <div>
       <div>ようこそ、{signInUser.uid}さん</div>
       {/* {console.log(signInUser)} */}
       {/* {console.log(res)} */}
    </div>
      <SignInView/>
      <button onClick={handleSignOut}
                     className=' ml-24 mt-5 my-5 border-4 border-red-600 bg-red-400 text-slate-50 rounded-md hover:scale-110 active:scale-95' >
            サインアウト
      </button>
      </div>
     )}
     </div>
      {/* <App uid={authUser} /> */}
    </div>
  );
};

export default EmailSignIn;