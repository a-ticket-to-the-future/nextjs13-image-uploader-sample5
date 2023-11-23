

import { getDownloadURL, ref,listAll } from 'firebase/storage';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import storage from "../firebase";
import { setTimeout } from 'timers';



// import firebase from "firebase/compat/app";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   projectId: "my-project-id",
//   storageBucket: "my-bucket-name",
// });

// firebase.storage = {
//   bucket: firebase.storage().bucket("my-bucket-name"),
// };



const ImageRandomView =  () => {

    const [randomUrl , setRandomUrl] = useState("");

    const getRandomImage = async () => {

      const urls = [];

        listAll(ref(storage,"image/"))
       .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url)=>{
            urls.push(url);
            // console.log(url);
            // console.log(urls);
    
            const randomIndex = Math.floor(Math.random() * urls.length);
            // console.log(randomIndex);
    
            const randomUrl = urls[randomIndex];
            // console.log(randomUrl);
            setTimeout(() => {
    
              setRandomUrl(randomUrl);
            },0);
          });
        });

        
      }
      )
      ;

      
      


      // const listRef = ref(storage, `image/`)
      
      // listAll(listRef).then((res) => {
      //   res.prefixes.forEach((folderRef) =>{
      //     // console.log(folderRef);
      //   });
      //   res.items.forEach((itemRef) => {
      //     // console.log(itemRef);

          


      //     getDownloadURL(ref(storage, itemRef)).then((urls) => {
      //         // console.log(urls);


              
              
      //         // const randomIndex = Math.floor(Math.random() * urls.length);
      //         // console.log(randomIndex);
      //         // const url = urls[randomIndex];
      //         // console.log(url);
      //         // setUrl(url);
        // })
        

      // });
    // })

      // const files  = listAll();
      // console.log(listAll());
        // const randomIndex =  Math.floor(Math.random() * files.length);
        // const selectedFile =  files[randomIndex];
        // console.log(selectedFile);
        // 

      // const folderRef = ref(storage,'nextjs13-imageuploader-sample4.appspot.com');
      // const listResult = await folderRef.listAll();
      // console.log(listResult);

        // const files = bucket.list();
        //ここね
        // const storage = firebase.storage();
        // const bucekt = storage.bucket("nextjs13-imageuploader-sample4.appspot.com");
        // const files = await storage.bucket("nextjs13-imageuploader-sample4.appspot.com").getFiles();
        // console.log(getRandomImage);

        
        // }
        // )

    };
  
        

    useEffect ( () => {
        getDownloadURL(ref(storage, `image/licensed-image.jpeg`)).then((randomUrl) => {
          // console.log(url);
          setRandomUrl(randomUrl);
        }
  
        )
      },[]);
    

  

  return (
    <div className=' ml-80 pl-60'>
        <div className='ml-20'>
          ランダム表示させよう  

        </div>
        <div>
            <button className=' my-2 ml-24 px-2 border border-blue-600 hover:scale-105 active:scale-95' onClick={getRandomImage} >
                ランダム画像
            </button>
            <Image src={randomUrl} alt='' width={300} height={300} className='mb-5' />
        </div>
    </div>
  );
  
}

export default ImageRandomView
