import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCElZOAfN_xRcjaT4NWmCIpQLpTfPsjMX4",
  authDomain: "web-clone-baea5.firebaseapp.com",
  databaseURL: "https://web-clone-baea5.firebaseio.com",
  projectId: "web-clone-baea5",
  storageBucket: "web-clone-baea5.appspot.com",
  messagingSenderId: "383063159477",
  appId: "1:383063159477:web:8f0c3dc56cc648cc4a04fc",
  measurementId: "G-JLYDNL75V6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
