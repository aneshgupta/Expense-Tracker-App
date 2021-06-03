import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCTObDnN2e02zgT4ItFqkxy7DiSDuf-qG4",
  authDomain: "expense-app-auth.firebaseapp.com",
  projectId: "expense-app-auth",
  storageBucket: "expense-app-auth.appspot.com",
  messagingSenderId: "926377792345",
  appId: "1:926377792345:web:44400ce52e050d70503248",
  measurementId: "G-Q1RWSTNP9M",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const db = firebase.firestore();
