import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWZpkV2ry6HslImnLOPxGTsd9phf9EazA',
  authDomain: 'clone-instagram-jg.firebaseapp.com',
  projectId: 'clone-instagram-jg',
  storageBucket: 'clone-instagram-jg.appspot.com',
  messagingSenderId: '885406196423',
  appId: '1:885406196423:web:27a0d9ae1f33ff934794e2',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
