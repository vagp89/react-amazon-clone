  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfiDKBM_35SkSI98YupD1yBILKKuGzwYs",
  authDomain: "amzon-clone-vagp.firebaseapp.com",
  projectId: "amzon-clone-vagp",
  storageBucket: "amzon-clone-vagp.appspot.com",
  messagingSenderId: "941129748752",
  appId: "1:941129748752:web:f69de15af4b1a9f4c95595",
  measurementId: "G-CTCSJE6HW2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

