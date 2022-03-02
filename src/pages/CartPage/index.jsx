import { useSelector } from "react-redux";

import { Text, Button, Message } from "../../components";
import CartItem from "./components/CartItem";
import "./styles.scss";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const calcTotalPrice = () => {
    const totalPrice = cartItems.reduce((a, x) => a.qty + x)
    console.log(totalPrice);
    return "$3000"
  }

  return (
    <>
      <Text className="s-lg mb-15">SHOPPING CART</Text>

      {/* Empty Cart */}
      {cartItems.length == 0 && <Message>Your Cart Is Empty</Message>}

      {/* Cart with Items */}
      {cartItems.length > 0 && (
        <div className="d-grid g-50">
          <div className="cart__items">
            {/* Display Cart Items */}
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}

            {/* Total Price & Payment Button */}
            <div className="total-pay">
              <Text className="s-lg">TOTAL: {calcTotalPrice()}</Text>
              <Button className="pay-btn" icon="credit-card">
                Pay with
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
