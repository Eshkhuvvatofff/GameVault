import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClLyI2Frlxc6Pez5iSCXVT8gDthz_Nyv4",
  authDomain: "gamevault-2ffbb.firebaseapp.com",
  projectId: "gamevault-2ffbb",
  storageBucket: "gamevault-2ffbb.firebasestorage.app",
  messagingSenderId: "510289152291",
  appId: "1:510289152291:web:fa0a2e899b035c0079a496"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
