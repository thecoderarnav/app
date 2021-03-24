import * as firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyDDvcAGlNcO2XTF1WM8vSANtfkoTHw7NFE",
    authDomain: "medihelp-a1749.firebaseapp.com",
    projectId: "medihelp-a1749",
    storageBucket: "medihelp-a1749.appspot.com",
    messagingSenderId: "405318077169",
    appId: "1:405318077169:web:16032cd737052fa390b750",
    measurementId: "G-WQZCQQ5EZR"
  };

let Firebase = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();
//export const db = firebase.firestore()