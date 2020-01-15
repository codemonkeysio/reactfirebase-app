import firebase from "firebase";

// API details

const firebaseConfig = {
  apiKey: "AIzaSyAutpRZrZn6qJLACwKCXcHvTAymeKqj8aw",
  authDomain: "myfirstproject-98428.firebaseapp.com",
  databaseURL: "https://myfirstproject-98428.firebaseio.com",
  projectId: "myfirstproject-98428",
  storageBucket: "myfirstproject-98428.appspot.com",
  messagingSenderId: "466961002675",
  appId: "1:466961002675:web:ebc6f195da110c8eb100c6",
  measurementId: "G-CR91LVJW6E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
