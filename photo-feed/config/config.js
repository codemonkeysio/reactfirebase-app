import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCG0tVzQ6x-kAh3ifNBAeAPv7XE69Wa4XY",
  authDomain: "photo-feed-d1b8c.firebaseapp.com",
  databaseURL: "https://photo-feed-d1b8c.firebaseio.com",
  projectId: "photo-feed-d1b8c",
  storageBucket: "photo-feed-d1b8c.appspot.com",
  messagingSenderId: "222130251697",
  appId: "1:222130251697:web:8fd32fe6789bdac5ff7f90",
  measurementId: "G-HQ3QN0RF6Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
