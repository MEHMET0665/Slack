import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAxMnfT9Oy9yoG9bRkTEmMVkvUtRB6vHN8",
  authDomain: "slack-c4b39.firebaseapp.com",
  projectId: "slack-c4b39",
  storageBucket: "slack-c4b39.appspot.com",
  messagingSenderId: "741318599866",
  appId: "1:741318599866:web:bab1a4e6af536a414c8e83",
  measurementId: "G-JBGQ6N29L3"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;
