import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { updateCartItemQty } from "../../redux/actions/cartActions";
import Text from "../Text";
import "./styles.scss";

const Counter = ({ value, handleIncrease, handleDecrease }) => {
  return (
    <div className="counterWrapper">
      <span onClick={handleDecrease} className="minus">
        -
      </span>
      <span className="value">{value}</span>
      <span onClick={handleIncrease} className="plus">
        +
      </span>
    </div>
  );
};

export default Counter;
