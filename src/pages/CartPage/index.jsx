import { useSelector } from "react-redux";

import { Text, Button, Message, CartItem } from "../../components";
import "./styles.scss";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Text className="s-lg w-500">SHOPPING CART</Text>

      <div className="d-grid g-50">
        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="cart__items">
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}

            {/* Total & Payment */}
            <div className="total-pay">
              <Text className="s-lg">TOTAL: $2000</Text>
              <Button className="pay-btn" icon="credit-card">
                Pay with
              </Button>
            </div>
          </div>
        ) : (
          <Message>Your Cart Is Empty</Message>
        )}
      </div>
    </>
  );
};

export default CartPage;
