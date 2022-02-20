import { Text, IconButton, Button } from "../../components";
import "./styles.scss";

const product = {
  id: 1,
  image: "https://m.media-amazon.com/images/I/51LuwUh9SES._AC_SL1000_.jpg",
  title: "DELL INSPIRON 3558",
  price: 88,
  desc: "Core I5, 8GB RAM, 500GB HDD, GeForce920M",
};
const products = Array(3).fill(product);

const CartPage = () => {
  return (
    <>
      <Text className="s-lg w-500">SHOPPING CART</Text>

      {/* Cart Items */}
      <div className="cart__items">
        {products.map((product) => (
          <div className="cart__item">
            <img src={product.image} alt="Product Image" />
            <Text className="s-sm w-600">{product.title}</Text>
            <span>Counter</span>
            <Text className="gray-d s-md w-500">${product.price}</Text>
            <IconButton name="trash" color="primary" type="regular" />
          </div>
        ))}

        {/* Total & Payment */}
        <div className="total-pay">
          <Text className="s-lg">TOTAL: $2000</Text>
          <Button className="pay-btn" icon="credit-card">
            Pay with
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
