import "./styles.scss";

const TextInput = ({ reg, className, ...otherProps }) => {
  return <input {...reg} className={`textInput ${className}`} {...otherProps} />;
};

export default TextInput;
