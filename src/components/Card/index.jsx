import "./styles.scss";

const Card = ({children, className, ...otherProps}) => {
  return (
    <div className={`card ${className}`}>{children}</div>
  );
};

export default Card;
