// "use client"

// import React, { createContext, useContext, useState } from 'react'
// import {AuthContext} from "../AuthContext/page";



// export const AuthProvider = ({children}) => {
//     const [user,setUser] = useState(null);

//     const signIn = async () => {
//         await signInWithPopup(auth ,provider)
//         .then((result) => {
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const user = result.user;

//             setUser({user}); 

//         }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.email;
//             const credential = GoogleAuthProvider.credentialFromError(error);

//             console.log(error)
//         })
        
//     };

//     const signOut = async () => {
//         await signOutFromFirebase().then(() => {

//             setUser(null);
//         }).catch((error) => {
//             console.log(error);
//         })
//     };

   

//     return (

//         <AuthContext.Provider value={{user, signIn , signOut}}>
//             {children}
//         </AuthContext.Provider>

//     );

// };