import Product from "../../components/Product";
import "./styles.scss";

// Fake products
const product = {
  id: 1,
  image: "https://m.media-amazon.com/images/I/51LuwUh9SES._AC_SL1000_.jpg",
  title: "DELL 3558",
  price: 88,
  desc: "Core I5, 8GB RAM, 500GB HDD, GeForce920M",
};
const products = Array(5).fill(product);

const HomePage = () => {
  return (
    <div className="products">
      {products.map((item, i) => (
        <Product key={i} product={item} />
      ))}
    </div>
  );
};

export default HomePage;

// const product = {
//   id: 1,
//   image: "https://m.media-amazon.com/images/I/51LuwUh9SES._AC_SL1000_.jpg",
//   title: "DELL INSPIRON 3558",
//   price: 88,
//   desc: {
//     processor: "Intel Core I5",
//     ram: "8GB",
//     storage: "500GB HDD",
//     vga: "NVIDIA GEFORCE 920M"
//   },
// };
