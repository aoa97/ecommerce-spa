import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Text, IconButton, Counter } from "../../../../components";
import {
  deleteCartItem,
  updateCartItemQty,
} from "../../../../redux/actions/cartActions";
import "./styles.scss";

const CartItem = ({ product }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(product.qty);

  useEffect(() => {
    if (qty !== product.qty) {
      dispatch(updateCartItemQty(product.id, qty));
    }
  }, [qty]);

  const handleNav = () => {
    nav(`/product/${product.id}`);
  };

  return (
    <div className="cart__item">
      <div className="cartItem-imgWrapper" onClick={handleNav}>
        <img src={product.image} alt="Product Image" />
      </div>
      
      <Text className="cartItem-title s-sm w-600" onClick={handleNav}>
        {product.name}
      </Text>
      <Counter qty={qty} setQty={setQty} stock={product.countInStock} />
      <Text className="my-15 gray-d s-sm w-500">
        ${product.price * product.qty}
      </Text>
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
