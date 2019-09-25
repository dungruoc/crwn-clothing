import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQPvAMdMUYBrdAXVbYvVgFs8K7LQW-7b4",
  authDomain: "crwn-db-242f8.firebaseapp.com",
  databaseURL: "https://crwn-db-242f8.firebaseio.com",
  projectId: "crwn-db-242f8",
  storageBucket: "",
  messagingSenderId: "162038528500",
  appId: "1:162038528500:web:d1208d8a935b57ea5a21a1",
  measurementId: "G-NJ3JYJHYWC"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;