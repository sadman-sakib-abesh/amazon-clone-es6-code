import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyAKpZfgaXW5Ir-h0EyGu00AoJiwLYDze7g",
    authDomain: "clone-a37a9.firebaseapp.com",
    projectId: "clone-a37a9",
    storageBucket: "clone-a37a9.appspot.com",
    messagingSenderId: "808758202207",
    appId: "1:808758202207:web:67fa61ae95cb5eb4ae30ea",
    measurementId: "G-PCLFF6HEHH"
  };


  const firebaseApp=firebase.initializeApp(Config)

  const db=firebaseApp.firestore()
  const auth=firebaseApp.auth()

  export {db,auth};