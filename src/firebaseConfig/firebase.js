import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDF1a7bk7gw6Tlr9i7YMIRB5noL138ezsI",
  authDomain: "react-crud-afef7.firebaseapp.com",
  databaseURL: "https://react-crud-afef7-default-rtdb.firebaseio.com",
  projectId: "react-crud-afef7",
  storageBucket: "react-crud-afef7.appspot.com",
  messagingSenderId: "94060473032",
  appId: "1:94060473032:web:5d67023eeec0f0159493fd",
  measurementId: "G-QB8QRK2BL0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)