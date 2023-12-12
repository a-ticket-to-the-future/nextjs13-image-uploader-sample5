import { useAuth } from '@/app/AuthContext/page';
import ImageRandomView from '@/app/ImageRandomView/page'
import ImageUploader from '@/app/ImageUploader/ImageUploader'
import VideoUploader from '@/app/VideoUploader/VideoUploader'
import { useRouter } from 'next/navigation';
import React from 'react'
import SignInUserView from '../../SignInUserView/page'

// const route = useRouter();



const SignInView = () => {

    

  return (
    <div>
       <div>
          {/* <SignInUserView /> */}
          <div>
          {/* <SignInUserView /> */}
          </div>
            <div>
              <ImageUploader />
              <ImageRandomView />
            </div>
            <div>
              <VideoUploader />
            </div>
          </div>
          
    </div>
  )
}

export default SignInView
