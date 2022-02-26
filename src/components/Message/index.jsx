import Text from "../Text";
import "./styles.scss";

const Message = ({ children, icon, iconType, className, ...otherProps }) => {
  return (
    <div className="message">
      <Text>{children}</Text>
    </div>
  );
};

export default Message;
