import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Text, Button, Message } from "../../components";
import CartItem from "./components/CartItem";
import "./styles.scss";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const calcTotalPrice = () => {
    const totalPrice = cartItems.reduce((a, x) => a.qty + x);
    console.log(totalPrice);
    return "$3000";
  };

  return (
    <div className="container">
      <Text className="fs-lg mb-15">SHOPPING CART</Text>

      {/* Empty Cart */}
      {cartItems.length == 0 && (
        <div className="w-50">
          <Message>Your Cart Is Empty</Message>
          <Button className="dark w-50 mt-15" onClick={() => navigate("/")}>
            Shop Now
          </Button>
        </div>
      )}

      {/* Cart with Items */}
      {cartItems.length > 0 && (
        <div className="w-50">
          <div className="cart__items">
            {/* Display Cart Items */}
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}

            {/* Total Price & Payment Button */}
            <div className="total-pay">
              <Text className="fs-lg">TOTAL: {calcTotalPrice()}</Text>
              <Button className="pay-btn" icon="credit-card">
                Pay with
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
