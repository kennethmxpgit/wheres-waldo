import {useState, useEffect} from 'react'
import { app, db } from "../firebase-config";
import {
  set,
  collection,
  doc,
  add,
  update,
  get,
  data,
  getDoc,getDocs,
  getFirestore,
} from "firebase/firestore";

// export default function FirebaseHandler(){
//     async function testFunc() {
//         const docRef = doc(db, "tests", "test");
//         const docSnap = await getDoc(docRef);
//         console.log(docSnap.data());
//       }

//       async function testFunc2(){
//         const docRef = await collection(db,"levels","1","records")
//         const docSnap = await getDocs(docRef); 
//         docSnap.forEach((doc)=>{
//             console.log(doc.data().name)
//         })
//       }
//       useEffect(() => {
//         testFunc();
//       }, []);
//       return null;
// }

export async function LeaderboardCall(){

  let docRef,docSnap
  const outputObject=[[],[],[]
  ]
  docRef = await collection(db,"levels","1","records")
  docSnap = await getDocs(docRef); 
  docSnap.forEach((doc)=>{
      outputObject[0].push({
        name:doc.data().name,
        time:doc.data().t
      })
  })
  docRef = await collection(db,"levels","2","records")
  docSnap = await getDocs(docRef); 
  docSnap.forEach((doc)=>{
      outputObject[1].push({
        name:doc.data().name,
        time:doc.data().t
      })
  })
  docRef = await collection(db,"levels","3","records")
  docSnap = await getDocs(docRef); 
  docSnap.forEach((doc)=>{
      outputObject[2].push({
        name:doc.data().name,
        time:doc.data().t
      })
  })
  

  return outputObject;






  console.log(outputObject)

}