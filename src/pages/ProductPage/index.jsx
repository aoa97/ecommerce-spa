import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";
import { Card, Loader, Text, Counter, Button } from "../../components";
import ReviewListItem from "./ReviewListItem";
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
    <div className="container">
      {!loading ? (
        <div className="productPage d-grid g-50">
          <div className="productPage-imgWrapper">
            <img src={product.image} alt="Product Image" />
          </div>

          <Card className="productPage-details">
            <div className="productPage-title">
              <Text className="fs-lg">
                {product.brand} {product.model}
              </Text>

              <div className="productPage-title__reviewWrapper">
                <div>
                  <i
                    className="bx bxs-star"
                    style={{ color: "#DC3A1A", fontSize: 16 }}
                  />
                  <i
                    className="bx bxs-star"
                    style={{ color: "#DC3A1A", fontSize: 16 }}
                  />
                  <i
                    className="bx bxs-star"
                    style={{ color: "#DC3A1A", fontSize: 16 }}
                  />
                  <i
                    className="bx bxs-star"
                    style={{ color: "#DC3A1A", fontSize: 16 }}
                  />
                  <i
                    className="bx bx-star"
                    style={{ color: "#DC3A1A", fontSize: 16 }}
                  />
                </div>

                <a href="#reviews" className="primary fw-600 ">
                  246 Reviews
                </a>
              </div>
            </div>

            <ul className="productPage-specs">
              <Text className="fs-sm fw-400">Processor: {product.cpu}</Text>
              <Text className="fs-sm fw-400">RAM: {product.ram}</Text>
              <Text className="fs-sm fw-400">Storage: {product.storage}</Text>
              <Text className="fs-sm fw-400">Graphics: {product.vga}</Text>
              <Text className="fs-sm fw-400">
                Resolution: {product.resolution}
              </Text>
            </ul>

            <Text className="gray-d fs-lg fw-500">{product.price} EGP</Text>

            <div className="productPage-buttons">
              <Counter qty={qty} setQty={setQty} stock={product.countInStock} />
              <Button icon="shopping-bag" onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </div>
          </Card>

          <div className="productPage-reviews" id="reviews">
            <Text className="fs-lg mb-15">REVIEWS</Text>
            <Card>
              <ReviewListItem />
            </Card>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductPage;
