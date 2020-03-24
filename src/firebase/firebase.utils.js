import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCpQPjS7UCYuA8O44J69NL1ggjvKaVDCw8',
  authDomain: 'crwn-db-8a6a4.firebaseapp.com',
  databaseURL: 'https://crwn-db-8a6a4.firebaseio.com',
  projectId: 'crwn-db-8a6a4',
  storageBucket: 'crwn-db-8a6a4.appspot.com',
  messagingSenderId: '16783664577',
  appId: '1:16783664577:web:8d741cb8acd580f0c0fb40',
  measurementId: 'G-0P3CKXWGJF'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error('error creating user:', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
