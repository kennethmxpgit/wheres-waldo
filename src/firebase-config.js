import {
  initializeApp
} from "firebase/app";
import {
  getFirestore
} from '@firebase/firestore'

export const app = initializeApp({
  apiKey: "AIzaSyA0kSf1oCYNbfyTsTlPQ9_sujmubNkzdZw",
  authDomain: "wheres-waldo-74d8d.firebaseapp.com",
  projectId: "wheres-waldo-74d8d",
  storageBucket: "wheres-waldo-74d8d.appspot.com",
  messagingSenderId: "914745395303",
  appId: "1:914745395303:web:88c5cefd060adfcd246cc2",
  measurementId: "G-MZBJ3KQB9H"
});
export const db = getFirestore();
