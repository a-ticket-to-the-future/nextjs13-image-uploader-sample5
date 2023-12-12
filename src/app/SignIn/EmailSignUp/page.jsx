"use client";

import SignInView from "@/app/App/SignInView/page";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuth } from "@/app/AuthContext/page";
import { useRouter } from "next/navigation";

const EmailSignUp = () => {
  
  const [user , setUser] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");


  

  const handleChangeEmail =  (e) => {
    const inputEmail = e.target.value;
     console.log(inputEmail)
     setEmail(inputEmail);
 };
 
    const handleChangePassword = (e) => {
      const inputPassword = e.target.value;
 
     setPassword(inputPassword);
 };

 const FormEvent = async (e) => {
  e.preventDefault();
  try{
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    const authUser = userCredential.user;
    console.log(authUser);
    setUser(authUser);

    

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.Message;
    console.log(errorCode,errorMessage);
  }




 }


 const {signIn,signOut} = useAuth();
 

    const handleSignOut = async () => {
        await signOut().then(() => {
            // console.log(signInUser);
             setUser(null);
            setEmail("")
            setPassword("")
        })
        
        // setSignInUser(null);
        // user = signInUser;
        // console.log(handleSignOut);
    }; 

  //クライアントSDKを使用してユーザーが自身で
  //アカウントを作成する（公式ドキュメント:https://firebase.google.com/docs/auth/web/password-auth?authuser=0&hl=ja）
  
//  createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
// console.log(auth,email,password);
//     const authUser = userCredential.user;
//       e.preventDefault();
//       console.log(authUser);
//       setUser(authUser);
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.Message;
    
     
//   })

  






  //これはサーバーサイドでのユーザー管理になるのでユーザーやその動きをこちらで限定したいときにやろうかな
  // createUser(auth, {
  //   email:'grandemilan2011@gmail.com',
  //   password:"grandemilan2007"
  // }).then((userRecord) => {

  // })

  return (
    <div>
      {!user && (
      <div className='  flex-col border-4 border-blue-400 px-10 ml-0  my-2 py-16 mr-96 '>

      <div className='  flex-col border-4 border-green-400 px-10'>
             

             
              <div>
                <form action="" onSubmit={FormEvent}>
                    <div className=' mx-5 my-2'>
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" id='email' value={email} onChange={handleChangeEmail} required className=' border-2 border-gray-400 bg-slate-50'/>
                    </div>
                    <div className=' mx-5 my-2'>
                        <label htmlFor="password" >パスワード</label>
                        <input type="password" id='password' value={password} onChange={handleChangePassword} required className=' border-2 border-gray-400 bg-slate-50' />
                    </div>
                    <button type='submit' className=' mx-5 my-2 px-5 border-2 border-green-600 bg-green-500 rounded-md text-slate-50 hover:scale-105 active:scale-95' onClick={FormEvent}>メールアドレスでサインアップ</button>
                </form>

                </div>
                </div>    
                
            </div>
                )}
                <div>
                    {user && (
                      <div>
                        
                      <div>
                          <div>ようこそ、{user.uid}さん</div>
                          {/* {console.log(signInUser)} */}
                          {/* {console.log(res)} */}
                       </div>
                
                        <div>
        {/* <SignInUserView /> */}
        
                    <SignInView/>

                    </div>
                    <button onClick={handleSignOut}
                     className=' ml-24 mt-5 my-5 border-4 border-red-600 bg-red-400 text-slate-50 rounded-md hover:scale-110 active:scale-95' >
                           サインアウト
                     </button>
                
            </div>
                     )}
       
                {/* <form action="" onSubmit={(e) => {
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
                </form> */}
                
                    
                </div>
            
    </div>
  )
}

export default EmailSignUp
















// import React from 'react'
// import {auth , provider} from "../../firebase"
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

// const GoogleSignIn = () => {

    


//     const handleSignIn =async () => {

//         await signInWithPopup(auth ,provider)
//         .then((result) => {
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const user = result.user;

//         }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.email;
//             const credential = GoogleAuthProvider.credentialFromError(error);
//         })
        

//     };

//   return (
//     <div className='ml-24 my-5'>
        
//         <button 
//                 className=' border-4 border-green-600 bg-green-400 text-slate-50 rounded-md hover:scale-110 active:scale-95'
//                 onClick={handleSignIn}
//                 >
//             GoogleSignIn
//         </button>
//     </div>
//   )
// }

// export default GoogleSignIn