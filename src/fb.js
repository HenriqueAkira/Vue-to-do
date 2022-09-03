import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVZhjPzKVrpmq859Spa4SL9zxnf7bq_Pw",
  authDomain: "to-do-vue-669cd.firebaseapp.com",
  projectId: "to-do-vue-669cd",
  storageBucket: "to-do-vue-669cd.appspot.com",
  messagingSenderId: "778645244366",
  appId: "1:778645244366:web:ee12f51a005137b1a4439f",
  measurementId: "G-CTEJW1NFG1"
};


firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db