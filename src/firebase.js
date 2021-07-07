import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1sEj3dJVvodntZYlxKGROH1BjUeM-kHo",
  authDomain: "clone-925d9.firebaseapp.com",
  projectId: "clone-925d9",
  storageBucket: "clone-925d9.appspot.com",
  messagingSenderId: "57661159792",
  appId: "1:57661159792:web:c78fca6d52e6c41e2d37b5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
