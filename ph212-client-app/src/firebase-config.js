import firebase from "firebase/app";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPv8bo2aRQk4whWDRUJTXrcoE_Hy17Xv4",
  authDomain: "ph212-iot.firebaseapp.com",
  databaseURL: "https://ph212-iot-default-rtdb.firebaseio.com",
  projectId: "ph212-iot",
  storageBucket: "ph212-iot.appspot.com",
  messagingSenderId: "1011601210207",
  appId: "1:1011601210207:web:b1a9cad3289b411cca54ea",
  measurementId: "G-0QLM8WQCTE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create db reference
const db = firebase.database();

export default db;