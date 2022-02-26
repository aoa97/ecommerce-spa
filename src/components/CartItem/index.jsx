import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Text, IconButton, Counter } from "../../components";
import {
  deleteCartItem,
  updateCartItemQty,
} from "../../redux/actions/cartActions";
import "./styles.scss";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(product.qty);

  useEffect(() => {
    if (qty !== product.qty) {
      dispatch(updateCartItemQty(product.id, qty));
    }
  }, [qty]);

  const handleDecrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleIncrease = () => {
    setQty(qty + 1);
  };

  return (
    <div key={product.id} className="cart__item">
      <img src={product.image} alt="Product Image" />
      <Text className="title s-sm w-600">{product.name}</Text>
      <Counter
        value={qty}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <Text className="gray-d s-sm w-500">${product.price * product.qty}</Text>
      <IconButton
        name="trash"
        color="primary"
        type="regular"
        onClick={() => dispatch(deleteCartItem(product.id))}
      />
    </div>
  );
};

export default CartItem;
