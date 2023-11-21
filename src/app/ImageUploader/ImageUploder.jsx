"use client"

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ImageUpload.css";
import Image from "next/image";
import storage from "../firebase";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";





const ImageUploader =   () => {

    const [url , setUrl] =  useState("");

     const OnFileUploadToFirebase =  (e ) => {
        // console.log(e.target.files);
//e.target.files[0].nameはnullの可能性があるのでif文を書いてみた
        // if(e.target.files === null){
        //     alert("ファイルを選択してください。");
        // }else{
            const file = e.target.files[0] ;//ここではfiles[0]までのが正解らしい
            // console.log(imageUrl); //ここまでで、画像のnameは取得できている
            // SetFileImage(imageUrl);
            // const file = new Blob(["Hello, world!"]);

            // const blob: Blob = file.toBlob();
            
            const storageRef =  ref(storage , "image/" + file.name );//ここで.nameをつけるのが正解らしい

            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                // console.log(snapshot);
                // console.log(snapshot.metadata.bucket + snapshot.metadata.fullPath);
                const fileImage = "https://"+ snapshot.metadata.bucket + "/" + snapshot.metadata.fullPath
                // const fileImage2 = fileImage.getDownloadURL();
                console.log(fileImage);

                 getDownloadURL(ref(storage, `image/${file.name}`))
                .then((url) => {
                  console.log(url);
                  setUrl(url);
                })
                // SetFileImage(fileImage);
                // const fileImage = storageRef.getDownloadURL();
                // console.log(fileImage);
                // const gsReference = ref(storage, `gs://bucket/images/${file.name}`);
                // console.log(gsReference);
              });
              // SetFileImage(storageRef.getDownloadURL());
            //  const fileImage = firebase.storage().ref(file.name);
            //  const imageUrl = fileImage.getDownloadURL();
            //  console.log(imageUrl);

        }

        // const file = e.target.files[0].name
        

          

        // const imageUrl = e.target.files[0].name;
        // SetFileImage(imageUrl)
        // const fileImage = e.target.files[]

        //ここの下から！！
        
        
    
    useEffect (() => {
      getDownloadURL(ref(storage, `image/licensed-image.jpeg`)).then((url) => {
        // console.log(url);
        setUrl(url);
      }

      )
    },[]);
    
    

  return (
    <div className="outerBox h-screen w-screen">
      <div className="title">
        <h2>画像アップローダー</h2>
        <p>JpegかPngの画像ファイル</p>
      </div>
      <div className="imageUplodeBox">
        <div className="imageLogoAndText">
          <p>ここにドラッグ＆ドロップしてね</p>
        </div>
        <input
             type="file"
             aria-label="画像アップロード"
             className="imageUploadInput"
             multiple name="imageURL"
             accept=".jpeg, .jpg, .png"
             onChange={OnFileUploadToFirebase} />
      </div>
      <p>または</p>
      <Button variant="contained">
        ファイルを選択
        <input
             type="file"
             aria-label="画像アップロード"
             className="imageUploadInput"
             accept=".jpeg, .jpg, .png"
             onChange={OnFileUploadToFirebase} />
      </Button>
      <div className=" mt-5">
        <Image src={url} alt="" width={300} height={300} />
      </div>
    </div>
  );
};

export default ImageUploader;