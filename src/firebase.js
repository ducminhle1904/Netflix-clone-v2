import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1XhPdTnr5zaNYUIOdYP0iQKU_E2-YPuY",
  authDomain: "netflix-production-50f10.firebaseapp.com",
  projectId: "netflix-production-50f10",
  storageBucket: "netflix-production-50f10.appspot.com",
  messagingSenderId: "609655895539",
  appId: "1:609655895539:web:fa49ea81bf187c40620e86",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
