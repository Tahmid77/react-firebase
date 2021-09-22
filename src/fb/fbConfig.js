import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjW12leoKgaJuFaIENdwmHBQZbsNEDZXo",
  authDomain: "react-firebase-e332c.firebaseapp.com",
  projectId: "react-firebase-e332c",
  storageBucket: "react-firebase-e332c.appspot.com",
  messagingSenderId: "1088742132295",
  appId: "1:1088742132295:web:852ee6e782bdd932bc3f62",
  measurementId: "G-M4PQ187Y2X"
};
    

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;
