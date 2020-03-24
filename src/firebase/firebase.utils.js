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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
