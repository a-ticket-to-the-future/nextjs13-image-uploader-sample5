"use client"

import Image from 'next/image'
import ImageUploader from './ImageUploader/ImageUploader'
import VideoUploader from './VideoUploader/VideoUploader'
import ImageRandomView from './ImageRandomView/page'
import SignIn from "./SignIn/page";
import { AuthProvider, useAuth } from './AuthContext/page';
import App from './App/page';

export default function Home() {


  return (
     <AuthProvider>
      <App />
    {/* <div>
        <SignIn />
        {user && (
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
    </div> */}
    </AuthProvider>
  );
}
