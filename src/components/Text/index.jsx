import "./styles.scss";

const Text = ({ children, className, ...otherProps }) => {
  return (
    <span className={`text ${className}`} {...otherProps}>
      {children}
    </span>
  );
};

export default Text;
