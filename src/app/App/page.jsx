"use client"

import Image from 'next/image'
import ImageUploader from '../ImageUploader/ImageUploader';
import VideoUploader from '../VideoUploader/VideoUploader';
import ImageRandomView from '../ImageRandomView/page';
import SignIn from "../SignIn/page";
import { AuthProvider, useAuth } from '../AuthContext/page';
import { auth } from '../firebase';
import { useState } from 'react';

export default function App() {

  const { user } = useAuth();

  // const [mailUser,setMailUser] = useState(null);

  // useAuth((authUser) => {
  //   setMailUser(authUser);
  // })

  // const uid = {authUser};
  // const isLoggedIn = auth.currentUser != null;

  // 
  // const AuthConsumer = ({ children }) => {
  //   const { authUser } = useContext(AuthContext);
  
  // }
  return (
    <div>
        <SignIn />
        {user  &&   (
          <div>
            <div>
              <ImageUploader />
              <ImageRandomView />
            </div>
            <div>
              <VideoUploader />
            </div>
          </div>
        )}
    </div>
  );
}
