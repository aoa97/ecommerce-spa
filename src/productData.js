const img = require('./img.png')
const products = [
  {
    id: 1,
    image: img,
    price: 200,
    brand: "HP",
    model: "15-DY1076NR",
    cpu: "Intel Core I5",
    vga: "Intel UHD vga",
    ram: "8GB",
    storage: "256GB SSD",
    resolution: "1366X768",
    countInStock: 2,
  },
  {
    id: 2,
    image: img,
    price: 150,
    brand: "Lenovo",
    model: "V155",
    cpu: "AMD Ryzen R5",
    vga: "AMD Radeon RX Vega 8",
    ram: "4GB",
    storage: "1TB HDD",
    resolution: "1366X768",
    countInStock: 6,
  },
  {
    id: 3,
    image: img,
    price: 400,
    brand: "Asus",
    model: "GA401II-HE194T",
    cpu: "AMD Ryzen R7",
    vga: "NVIDIA GeForce GTX 1650",
    ram: "16GB",
    storage: "1TB SSD",
    resolution: "1920X1080",
    countInStock: 7,
  },
];

export default products;
