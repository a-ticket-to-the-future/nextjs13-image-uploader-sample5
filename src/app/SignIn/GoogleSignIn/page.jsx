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