import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";  


const firebaseConfig = {
  apiKey: "AIzaSyCaSxYvnoo-LdOIS98MLzr3Yua5bWVt4vA",
  authDomain: "react-netflix-clone-85968.firebaseapp.com",
  projectId: "react-netflix-clone-85968",
  storageBucket: "react-netflix-clone-85968.appspot.com",
  messagingSenderId: "260389909028",
  appId: "1:260389909028:web:b4b52ec1a11270c0e19eb1",
  measurementId: "G-5CC4RBLXX8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
