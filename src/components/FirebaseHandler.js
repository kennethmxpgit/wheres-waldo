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
  getDoc,getDocs,addDoc,query,orderBy,limit,
  getFirestore,
  setDoc,
} from "firebase/firestore";


export async function LeaderboardCall(){
  //returns all the leaderboards into one array/object
  let docRef,docSnap
  const outputObject=[[],[],[]
  ]
  // docRef = await collection(db,"levels","1","records")
  docRef = await collection(db,"levels","1","records")
  docSnap = await getDocs(query(docRef, orderBy('t'),limit(10)))
  docSnap.forEach((doc)=>{
      outputObject[0].push({
        name:doc.data().name,
        time:doc.data().t
      })
  })
  docRef = await collection(db,"levels","2","records")
  docSnap = await getDocs(query(docRef, orderBy('t'),limit(10)))
  docSnap.forEach((doc)=>{
      outputObject[1].push({
        name:doc.data().name,
        time:doc.data().t
      })
  })
  docRef = await collection(db,"levels","3","records")
  docSnap = await getDocs(query(docRef, orderBy('t'),limit(10)))
  docSnap.forEach((doc)=>{
      outputObject[2].push({
        name:doc.data().name,
        time:doc.data().t
      })
  })

  return outputObject;
}

export async function HitChecker(levelID,target,x,y){
  //calls target coordinate. checks it with the input coordinate.returns true or false
  //props : levelID, target(0-2), x,y
  let docRef,docSnap,refX,refY
  const tol=3 // tolerance hitbox
  docRef = await doc(db, "levels",levelID,"targets",target);
  docSnap = await getDoc(docRef);
  refX=docSnap.data().x
  refY=docSnap.data().y
  // console.log(levelID, target,x,y)
  if((x<refX+tol&&x>refX-tol)&&(y<refY+tol&&y>refY-tol)){
     console.log("HIT")
     return true
  } else {
    console.log("MISS")
    return false
  }
}

export async function saveToLeaderboard(levelID,name,time){
  console.log("Adding to database : ",name," t:",time)
  await addDoc(collection(db, "levels", String(levelID),"records"), {
    name: name,
    t: time,
  });
}