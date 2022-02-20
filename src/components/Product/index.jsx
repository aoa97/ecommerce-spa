import "./styles.scss";
import Button from "../Button";
import Text from "../Text";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img className="img-fluid" src={product.image} alt="Product Image" />
      
      <div className="product-details">
        <Text className="s-md w-500">{product.title}</Text>
        <Text className="gray-d s-xs">{product.desc}</Text>
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

      <Button icon="shopping-bag">Add to Cart</Button>
    </div>
  );
};

export default Product;
