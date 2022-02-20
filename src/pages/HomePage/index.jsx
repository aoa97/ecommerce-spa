import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../../components/Product";
import { getProducts } from "./../../redux/actions/productActions";
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
  const dispatch = useDispatch();
  const {
    loading,
    products: ps,
    error,
  } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products">
      {ps.map((product) => (
        <Product key={product.id} product={product.data()} />
      ))}
    </div>
  );
};

export default HomePage;
