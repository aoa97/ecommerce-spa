import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/actions/productActions";
import { Loader, Text, Message } from "../../components";
import ProductListItem from "./components/ProductListItem";
import "./styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => dispatch(getProducts()), [dispatch]);

  // Loading
  if (loading) return <Loader />;

  // Error Case
  if (error) return <Message>There's something wrong!</Message>;

  // Done Deal :D
  return (
    <>
      <Text className="s-lg mb-15">LATEST PRODUCTS</Text>
     
      <div className="products">
        {products.map((product) => (
          <ProductListItem
            key={product.id}
            product={{ ...product.data(), id: product.id }}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
