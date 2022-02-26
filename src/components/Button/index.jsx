import Text from "../Text";
import "./styles.scss";

const Button = ({ children, icon, iconType, className, ...otherProps }) => {
  return (
    <button className={`btn ${className}`} {...otherProps}>
      <Text className="text s-sm w-500">{children}</Text>
      {icon && <box-icon  type={iconType} name={icon} />}
    </button>
  );
};

export default Button;
