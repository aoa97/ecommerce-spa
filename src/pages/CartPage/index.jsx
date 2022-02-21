import { useSelector } from "react-redux";

import { Text, IconButton, Button } from "../../components";
import "./styles.scss";

const CartPage = () => {
  const cart = useSelector(state => state.cart);

  return (
    <>
      <Text className="s-lg w-500">SHOPPING CART</Text>

      {/* Cart Items */}
      <div className="cart__items">
        {cart.map((product, i) => (
          <div key={i} className="cart__item">
            <img src={product.image} alt="Product Image" />
            <Text className="s-sm w-600">{product.name}</Text>
            <span className="s-md w-600">{product.qty}</span>
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
