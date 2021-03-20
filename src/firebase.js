// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD67x9JA2fEPsN1rQPzdJWmGAsXk9Q16aw",
  authDomain: "clone-308219.firebaseapp.com",
  projectId: "amazon-clone-308219",
  storageBucket: "amazon-clone-308219.appspot.com",
  messagingSenderId: "722572124475",
  appId: "1:722572124475:web:95543b41f548823332d71e",
  measurementId: "G-FVTMKX10GH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log("Auth", auth);
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
