"use client"

import React, { useState } from 'react';
import  {getAuth, signInWithEmailAndPassword}from 'firebase/auth';
import { auth } from '../../firebase';
import App from '@/app/App/page';

const EmailSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user , setUser] = useState(undefined);
  

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
      const authUser = userCredential.user
      setUser(authUser);
      console.log(user);
      console.log(authUser);
      console.log(authUser.uid)
      
      // if (authUser.uid)
      // ユーザーの処理を行う
    } catch (error) {
      console.log(error);
      // エラーハンドリングのコードを追加する
    }
  };

  return (
    <div>
      <div className=' ml-0 mr-96 mt-10 pr-0'>
        {/* 他のサインインボタン */}
      </div>
      <div className='  flex-col border-4 border-green-400 px-0'>
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
      <div>
     {user && (
      <App />
     )}
     </div>
      {/* <App uid={authUser} /> */}
    </div>
  );
};

export default EmailSignIn;