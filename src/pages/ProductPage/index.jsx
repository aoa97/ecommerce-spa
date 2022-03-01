import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";
import { Product, Loader, Text, Counter, Button } from "../../components";
import "./styles.scss";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const [qty, setQty] = useState(1);

  useEffect(() => dispatch(getProductDetails(id)), [dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(product, qty));
  };

  return (
    <>
      {!loading ? (
        <div className="productPage d-grid g-50">
          <div className="productPage-imgWrapper">
            <img src={product.image} alt="Product Image" />
          </div>

          <div className="productPage-details">
            <Text className="s-lg">
              {product.brand} {product.model}
            </Text>

            <ul className="productPage-specs">
              <Text className="s-sm w-400">Processor: {product.cpu}</Text>
              <Text className="s-sm w-400">RAM: {product.ram}</Text>
              <Text className="s-sm w-400">Storage: {product.storage}</Text>
              <Text className="s-sm w-400">Graphics: {product.vga}</Text>
              <Text className="s-sm w-400">
                Resolution: {product.resolution}
              </Text>
            </ul>

            <Text className="s-lg w-500">${product.price}</Text>

            <div className="productPage-buttons">
              <Counter qty={qty} setQty={setQty} stock={product.countInStock} />
              <Button icon="shopping-bag" onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductPage;
