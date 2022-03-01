import { initializeApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  serverTimestamp,
  Timestamp,
  SnapshotOptions,
  connectFirestoreEmulator,
} from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

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

// Firestore
const database = getFirestore(firebaseApp);
connectFirestoreEmulator(database, "localhost", 3003);

// Storage
const storage = getStorage(firebaseApp);
connectStorageEmulator(storage, "localhost", 3004);

export { database, storage };
export default firebaseApp;
