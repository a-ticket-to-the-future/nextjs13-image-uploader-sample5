import React, { useState } from 'react'
import { Button } from "@mui/material";
import "./VideoUpload.css";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import storage from '../firebase';
import Image from 'next/image';

const VideoUploader = () => {

    const [videoUrl , setVideoUrl ] = useState("");

const OnVideoUploadToFirebase = (e) => {
    // console.log(e.target.files[0].name);

    const file = e.target.files[0]

    const storageRef2 = ref(storage,"video/" + file.name);

    uploadBytes(storageRef2,file).then((snapshot) => {
        console.log('Uploaded a blog or file!');
        // console.log(snapshot);
    

    getDownloadURL(ref(storage,`video/${file.name}`))
    .then((videoUrl) => {
        console.log(videoUrl);
        setVideoUrl(videoUrl);
        
    }) 

    })

}

  return (
    <div className="outerBox">
    <div className="title">
      <h2>Videoアップローダー</h2>
      <p>動画ファイル</p>
    </div>
    <div className="imageUplodeBox">
      <div className="imageLogoAndText">
        <p>ここにドラッグ＆ドロップしてね</p>
      </div>
      <input className="imageUploadInput"
             multiple name="imageURL"
             type='file'
             aria-label='VideoUpload'
             accept='.mp4'
             onChange={OnVideoUploadToFirebase}
             />
    </div>
    <p>または</p>
    <Button variant="contained">
      ファイルを選択
      <input className="imageUploadInput"
             type='file'
             aria-label='VideoUpload'
             accept='.mp4'
             onChange={OnVideoUploadToFirebase}
      />
    </Button>
    <div>
        <video src={videoUrl} alt='' width={400} height={400} controls />
    </div>
  </div>
);

  
}

export default VideoUploader
