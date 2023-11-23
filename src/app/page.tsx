"use client"

import Image from 'next/image'
import ImageUploader from './ImageUploader/ImageUploder'
import VideoUploader from './VideoUploader/VideoUploader'
import ImageRandomView from './ImageRandomView/page'

export default function Home() {
  return (
    <div>
      <div>
        <ImageUploader />
        <ImageRandomView />
      </div>
      <div>
        <VideoUploader />
      </div>
    </div>
  )
}
