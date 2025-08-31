// import { initializeApp,getApp,getApps } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import {  getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyACwyU5dIzZlIRREnoeMInS7h-btgII_Js",
//   authDomain: "intelliview-a0a02.firebaseapp.com",
//   projectId: "intelliview-a0a02",
//   storageBucket: "intelliview-a0a02.firebasestorage.app",
//   messagingSenderId: "781296796231",
//   appId: "1:781296796231:web:2cc9ae009e88eaebece762",
//   measurementId: "G-99Z28FT6JB"
// };

// // Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

// export const auth = getAuth(app)
// export const db = getFirestore(app)


// firebase/client.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACwyU5dIzZlIRREnoeMInS7h-btgII_Js",
  authDomain: "intelliview-a0a02.firebaseapp.com",
  projectId: "intelliview-a0a02",
  storageBucket: "intelliview-a0a02.firebasestorage.app",
  messagingSenderId: "781296796231",
  appId: "1:781296796231:web:2cc9ae009e88eaebece762",
  measurementId: "G-99Z28FT6JB",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
