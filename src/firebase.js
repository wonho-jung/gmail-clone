import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbUjzHompZGF3dLEjuw-cZuDneao7Cweg",
  authDomain: "clone-a1e9b.firebaseapp.com",
  projectId: "clone-a1e9b",
  storageBucket: "clone-a1e9b.appspot.com",
  messagingSenderId: "602862731014",
  appId: "1:602862731014:web:ddc8bf48f6180b2737e887",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
