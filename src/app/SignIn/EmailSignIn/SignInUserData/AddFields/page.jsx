import { db } from '@/app/firebase';
import { FieldValue, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useRef } from 'react'

const AddFields = () => {

    //firestoreへのフィールド追加の記述
     const addFields = async () => {

        const docId = "5fOWoqvNpFcESdGRsXMU" ; //doc.idは仮置き

        const updates = {
            "age" : FieldValue.arrayUnion(["新しい項目の要素"]),
            //入力された情報を取得して[]の中へ。の処理がまだか書いてなる
            
        };

        db.collection("users").doc(docId).update(updates);
        
     };


    //handleSubmitを使って入力された情報の処理

    const addRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(addRef.current?.value);

        await addFields(addRef.current?.value);
    };

  return (
    <div className=' flex  bg-slate-400 h-[400px] w-[500px] justify-center ml-5 mt-10 '>
                    <div className=' w-[480px] bg-blue-400 text-slate-50 text-3xl my-4 '>
                        <div className=' justify-items-center'>
                            ユーザー情報変更
                                <div className=' flex flex-wrap bg-slate-50 my-1 ml-4 w-[450px] h-[320px]'>
                                    <form action="" onSubmit={handleSubmit}>
                                        <input
                                             ref={addRef}
                                             type="text"
                                             className=' bg-slate-500 border border-black h-7 mt-5 ml-3 w-auto text-slate-50' 
                                             
                                             />
                                        
                                        <button className=' mx-5 my-3 px-5 py-2 mt-10 bg-blue-300 text-slate-50 border-2 border-blue-700 font-bold rounded-lg hover:scale-105 active:scale-95'
                                                onClick={handleSubmit}
                                        >
                                            追加する
                                        </button>
                                    </form>
                                </div>

                        </div>
                    </div>
            </div>
  )
}

export default AddFields;
