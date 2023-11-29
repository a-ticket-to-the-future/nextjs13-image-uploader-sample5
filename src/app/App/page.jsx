"use client"

import Image from 'next/image'
import ImageUploader from '../ImageUploader/ImageUploader';
import VideoUploader from '../VideoUploader/VideoUploader';
import ImageRandomView from '../ImageRandomView/page';
import SignIn from "../SignIn/page";
import { AuthProvider, useAuth } from '../AuthContext/page';

export default function App() {

  const { user } = useAuth();

  return (
    <div>
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
    </div>
  );
}
