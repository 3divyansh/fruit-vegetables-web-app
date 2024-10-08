// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyCMXrasXd_6dOP7zUOomsbjYqjP8wPo5vY",
  authDomain: "freshfruit-e86d7.firebaseapp.com",
  projectId: "freshfruit-e86d7",
  storageBucket: "freshfruit-e86d7.appspot.com",
  messagingSenderId: "907415961678",
  appId: "1:907415961678:web:0bb21e7a15981c38ae831f",
  measurementId: "G-VFQ6SWD268"
=======
  apiKey: "AIzaSyD3sjRQdC0SSwb860CUwRXBKwGlXkYFsJ0",
  authDomain: "awdfruitproject.firebaseapp.com",
  projectId: "awdfruitproject",
  storageBucket: "awdfruitproject.appspot.com",
  messagingSenderId: "711173803225",
  appId: "1:711173803225:web:08f83916a93a905d1342c8"
>>>>>>> f5c974781e72d21a6b0ee7902cccf7dddbed5f2d
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const storage = getStorage(app);