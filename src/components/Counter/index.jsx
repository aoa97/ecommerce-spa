import "./styles.scss";

const Counter = ({ qty, setQty, stock }) => {
  const handleDecrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleIncrease = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  return (
    <div className="counterWrapper">
      <span onClick={handleDecrease} className="minus">
        -
      </span>
      <span className="value">{qty}</span>
      <span onClick={handleIncrease} className="plus">
        +
      </span>
    </div>
  );
};

export default Counter;
