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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubcribe = auth.onAuthStateChanged(userAuth => {
      unsubcribe();
      resolve(userAuth);
    }, reject);
  })
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (err) {
      console.log('Error to create user', userAuth.displayName, err.message);
    }
  }

  return userRef;
}

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollections = collectionsSnapshot.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const addCollection = async (collectionKey, collectionObjArray) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  collectionObjArray.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })
  return await batch.commit();
}

export default firebase;