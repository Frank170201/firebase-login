// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCYmJAgUYMuxGHG0W_AaXayHouoNdpG6XY",
  authDomain: "vue-3-2023-frank.firebaseapp.com",
  projectId: "vue-3-2023-frank",
  storageBucket: "vue-3-2023-frank.appspot.com",
  messagingSenderId: "1094457441576",
  appId: "1:1094457441576:web:16a43d08bb1bd7cb93e41d"
};

initializeApp(firebaseConfig);

const auth=getAuth()
const db=getFirestore()
export {auth,db}