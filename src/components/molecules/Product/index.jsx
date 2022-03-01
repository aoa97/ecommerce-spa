import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../../redux/actions/cartActions";
import { Button, Text } from "../../atoms";
import "./styles.scss";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product, 1));
  };

  return (
    <div className="product">
      <div onClick={() => nav(`/product/${product.id}`)}>
        <div className="product-imgWrapper">
          <img src={product.image} alt="Product Image" />
        </div>

        <div className="product-details">
          <Text className="s-md w-500">
            {product.brand} {product.model}
          </Text>
          <Text className="gray-d s-xs">
            {product.ram}RAM, {product.cpu}, {product.storage}
          </Text>
        </div>

        {/* Hard Coded till creating the database */}
        <div className="product-stars-price">
          <div className="product-stars">
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
            {/* <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
            <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
            <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
            <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
            <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
            <box-icon name="star" size="16px" color="#DC3A1A" /> */}
          </div>
          <Text className="gray-d s-lg w-500">${product.price}</Text>
        </div>
      </div>

      <Button icon="shopping-bag" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
