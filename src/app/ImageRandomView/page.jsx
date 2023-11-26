

import { getDownloadURL, ref,listAll } from 'firebase/storage';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import storage from "../firebase";
import { setTimeout } from 'timers';
import Modal from 'react-modal';



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
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [imageUrls, setImageUrls] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);

    
}

  const afterOpenModal = async () => {
    const urls = [];

    try{
      const res = await listAll(ref(storage,"image/"));
      for (const itemRef of res.items){
        const url = await getDownloadURL(itemRef);
        urls.push(url);
        
        setImageUrls(urls);
       console.log(urls);
      }
  }catch(err){
    console.error("Error fetching random image:" , error);
  }

  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleImageClick =  (url) => {
   setSelectedImage(url);
    openModal();
  }

  const renderImages = () => {
    return  imageUrls.map((url,index) => (
      <div key={index}
           onClick={() => handleImageClick(url)}
           style={{width:'100px',height:'100px',margin:'5px'}}
           className='my-5 flex w-fit'
      >
        <Image 
          src={url}
          alt={`Image ${index}`}
          width={100}
          height={100}
        />
      </div>
    ));
  }

  


    const getRandomImage = async () => {

      const urls = [];
      console.log(urls);

      try{
        const res = await listAll(ref(storage,"image/"));
        for (const itemRef of res.items){
          const url = await getDownloadURL(itemRef);
          urls.push(url);
          setImageUrls(urls);
          console.log(urls);
        }
        const randomIndex = Math.floor(Math.random() * urls.length);
            // console.log(randomIndex);
    
            const randomUrl = urls[randomIndex];
            setRandomUrl(randomUrl);
      }catch(err){
        console.error("Error fetching random image:" , error);
      }
        
      //  .then((res) => {
      //   res.items.forEach((itemRef) => {
      //     getDownloadURL(itemRef).then((url)=>{
      //       urls.push(url);
            // console.log(url);
            // console.log(urls);
    
            
            // console.log(randomUrl);
            
          }
        

        
      
      
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
        <div>
          <button className=' border border-blue-700 my-5 ml-24' onClick={openModal}>画像を表示</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            >
          <div className=' flex flex-col'>
            <div className=' flex'>
           {renderImages()}
           </div>
           <button onClick={closeModal}
                   className='my-5 bg-red-600 border border-red-600 text-slate-50 rounded-md hover:scale-105 active:scale-95'
           >
            モーダルを閉じる
            </button> 
           <Image src={selectedImage} alt='' width={300} height={300}
                  className='mb-5'
                  />
          </div>
          </Modal>
        </div>
    </div>
  );
  
}

export default ImageRandomView
