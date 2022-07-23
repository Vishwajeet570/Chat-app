import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA8n85oAgNetb6nAgRO8SFljjayLOfSppw',
  authDomain: 'chat-web-app-e7642.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-e7642-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-e7642',
  storageBucket: 'chat-web-app-e7642.appspot.com',
  messagingSenderId: '956929238582',
  appId: '1:956929238582:web:e3cc2055c78940db425a97',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
