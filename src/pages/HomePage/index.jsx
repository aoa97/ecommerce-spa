import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/actions/productActions";
import { Loader, Text, Message } from "../../components";
import ProductListItem from "./components/ProductListItem";
import Carousel from "./components/Carousel";
import BrandsMenu from "./components/BrandsMenu";
import "./styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState("Hot");
  const { loading, products, error } = useSelector(state => state.productList);

  // Fetch Products
  useEffect(() => dispatch(getProducts(brand)), [dispatch, brand]);

  // Loading
  if (loading) return <Loader />;

  // Done Deal :D
  return (
    <>
      <Carousel />

      <BrandsMenu brand={brand} setBrand={setBrand} />

      <div className="container">
        {brand === 'Hot' 
          ? <Text className="fs-lg my-15">What's Hot</Text>
          : <Text className="fs-lg my-15">{brand}</Text>
        }

        {error || products.length === 0 && <Message>There's something wrong!</Message>}

        <div className="products">
          {products.map((product) => (
            <ProductListItem
              key={product.id}
              product={{ ...product.data(), id: product.id }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
