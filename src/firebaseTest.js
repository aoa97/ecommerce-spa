import { db, storage } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, uploadString } from "firebase/storage";

const products = [
  {
    id: 1,
    image: require("./assets/images/laptop/laptop-hp-1.png"),
    price: 200,
    brand: "HP",
    model: "15-DY1076NR",
    cpu: "Intel Core I5",
    vga: "Intel UHD vga",
    ram: "8GB",
    storage: "256GB SSD",
    // resolution: "1366X768",
    countInStock: 2,
  },
  {
    id: 2,
    image: require("./assets/images/laptop/laptop-general-1.png"),
    price: 150,
    brand: "Lenovo",
    model: "V155",
    cpu: "AMD Ryzen R5",
    vga: "AMD Radeon RX Vega 8",
    ram: "4GB",
    storage: "1TB HDD",
    // resolution: "1366X768",
    countInStock: 6,
  },
  {
    id: 3,
    image: require("./assets/images/laptop/laptop-asus-1.png"),
    price: 400,
    brand: "Asus",
    model: "GA401II-HE194T",
    cpu: "AMD Ryzen R7",
    vga: "NVIDIA GeForce GTX 1650",
    ram: "16GB",
    storage: "1TB SSD",
    // resolution: "1920X1080",
    countInStock: 7,
  },
];

const addProducts = async () => {
  products.forEach(async (product) => {
    try {
      // Upload image to storage
      const { image: imageFile } = product;
      const imageRef = ref(storage, `products/1.png`);
      await uploadBytes(imageRef, `http://localhost:3000${imageFile}`);
      const imageUrl = await getDownloadURL(imageRef);

      // Insert into firestore
      const productsRef = collection(db, "products");
      product.image = imageUrl;
      product.price = Number(product.price);
      product.countInStock = Number(product.countInStock);
      await addDoc(productsRef, product);

      alert("Product added successfully.");
    } catch (e) {
      alert("Something went wrong");
    }
  });
};
addProducts();
