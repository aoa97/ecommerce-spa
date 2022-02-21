import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/actions/cartActions";
import Button from "../Button";
import Text from "../Text";
import "./styles.scss";

const Product = ({ product }) => {
  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product">
      <div className="product-img">
        <img className="img-fluid" src={product.image} alt="Product Image" />
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
          <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
          <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
          <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
          <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
          <box-icon name="star" type="solid" size="16px" color="#DC3A1A" />
          <box-icon name="star" size="16px" color="#DC3A1A" />
        </div>
        <Text className="gray-d s-lg w-500">${product.price}</Text>
      </div>

      <Button icon="shopping-bag" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
