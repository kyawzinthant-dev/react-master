import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCl4GQ8DjsWlMjcI1BI5qrkRToCsyIY9Q",
  authDomain: "revents-eb365.firebaseapp.com",
  databaseURL: "https://revents-eb365.firebaseio.com",
  projectId: "revents-eb365",
  storageBucket: "revents-eb365.appspot.com",
  messagingSenderId: "272480667329",
  appId: "1:272480667329:web:cebb68fa269af0b376f640",
  measurementId: "G-8V96X3GWZZ",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
