import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBVnJSC_TZQ8NkcNJNfJ3FkB_I8SaeOnnQ",
  authDomain: "ecommerce-2f6e4.firebaseapp.com",
  projectId: "ecommerce-2f6e4",
  storageBucket: "ecommerce-2f6e4.appspot.com",
  messagingSenderId: "719099048003",
  appId: "1:719099048003:web:f585fce551d69ea491a4f6",
  measurementId: "G-MJG1LQ7WVW",
};
const firebaseApp = initializeApp(config);

// Authentication
const auth = getAuth(firebaseApp);

// Firestore
const db = getFirestore(firebaseApp);

// Storage
const storage = getStorage(firebaseApp);

export { auth, db, storage };
export default firebaseApp;
