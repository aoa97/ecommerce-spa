import app from "./firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import products from './static/productData';

const db = getFirestore(app)
const collRef = collection(db, 'products')
const addProducts = async () => {
  products.forEach(async p => await addDoc(collRef, p))
}
addProducts()