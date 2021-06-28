import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtBeb97uGRAN08DHuPLxBxCQrrJzHgdqY",
    authDomain: "twitter-clone-b6c92.firebaseapp.com",
    projectId: "twitter-clone-b6c92",
    storageBucket: "twitter-clone-b6c92.appspot.com",
    messagingSenderId: "225206990598",
    appId: "1:225206990598:web:7e356de9821fece5455087",
    measurementId: "G-DP71KEPCVZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;