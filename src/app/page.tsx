"use client"

import Image from 'next/image'
import ImageUploader from './ImageUploader/ImageUploder'
import VideoUploader from './VideoUploader/VideoUploader'

export default function Home() {
  return (
    <div>
      <div>
        <ImageUploader />
      </div>
      <div>
        <VideoUploader />
      </div>
    </div>
  )
}
