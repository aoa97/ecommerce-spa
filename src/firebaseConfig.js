import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

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
connectAuthEmulator(auth, "http://localhost:3002"); // DevMode

// Firestore
const db = getFirestore(firebaseApp);
connectFirestoreEmulator(db, "localhost", 3003); // DevMode

// Storage
const storage = getStorage(firebaseApp);
connectStorageEmulator(storage, "localhost", 3004); // DevMode

export { auth, db, storage };
export default firebaseApp;
