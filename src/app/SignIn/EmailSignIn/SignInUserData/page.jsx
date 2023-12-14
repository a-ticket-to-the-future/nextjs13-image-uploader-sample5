"use client"

import { db } from '../../../firebase';
import React, { useEffect, useState } from 'react'
import { collection, getDoc, getDocs, query,doc, where, limit } from 'firebase/firestore';
import Link from 'next/link';

const SignInUserData = async () => {

    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    // const usersRef = collection(db,"users");
    // console.log(usersRef);

    // const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    const q = query(collection(db,"users"))
    const querySnapshot = await getDocs(q);

    const users = [];
    querySnapshot.forEach((doc) => {
        users.push(doc.data());
        console.log(doc.id, "=>",doc.data());


        // useEffect(() => {
        //     const token = localStorage.getItem('token');
        //     if (token) {
        //       setIsLoggedIn(true);
        //     }
        //   }, []);
    })

    
    // console.log(users);

  return (
    <div className=' flex  bg-slate-400 h-[400px] w-3/4 justify-center ml-40 mt-10 '>
    <div className=' w-[1000px] bg-yellow-200 text-slate-400 text-3xl my-4 '>
        <div className=' justify-items-center'>
                現在のユーザー情報
            <div className=' flex flex-wrap bg-slate-50 my-1 ml-24 w-[800px] h-[320px]'>
                {users.map((user) => (
                    <div className='  border-2 border-orange-400 text-xs my-1 ml-1 pl-2 w-[230px] h-[40px]'>
                        <div key={user.id}>{user.displayName}</div>
                        <div>{user.email}</div>
                    </div>
                ))}
            </div>
        </div>
        <div>
          <button className=' mx-5 my-3 px-5 py-2 mt-10 bg-blue-300 text-slate-50 border-2 border-blue-700 font-bold rounded-lg hover:scale-105 active:scale-95'>
          <Link href="/" state={ isLoggedIn} onclick = {() => setIsLoggedIn(true) }  >戻る</Link>
          </button>
       </div>
    </div>
    
    </div>
  )
}

export default SignInUserData;
