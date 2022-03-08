import Text from "../Text";
import "./styles.scss";

const Message = ({
  children,
  icon,
  iconType,
  error,
  className,
  ...otherProps
}) => {
  return (
    <div className={`${className} message ${error ? "error" : ""}`} {...otherProps}>
      <Text className="fs-sm">{children}</Text>
    </div>
  );
};

export default Message;
