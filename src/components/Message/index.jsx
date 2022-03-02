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
    <div className={`message ${error ? "error" : ""}`} {...otherProps}>
      <Text className="s-sm">{children}</Text>
    </div>
  );
};

export default Message;
