import Text from "../Text";
import "./styles.scss";

const Button = ({
  children,
  icon,
  iconType,
  className,
  loading,
  ...otherProps
}) => {
  return (
    <>
      {!loading && (
        <button className={`btn ${className}`} {...otherProps}>
          <Text className="text fs-sm fw-500">{children}</Text>
          {icon && <box-icon type={iconType} name={icon} />}
        </button>
      )}
      {loading && (
        <button disabled className={`btn ${className}`} {...otherProps}>
          {/* <i className="bx bx-loader bx-spin bx-md" style={{ color: "#FFF" }} /> */}
          <box-icon name="loader" animation="spin" size="md" />
        </button>
      )}
    </>
  );
};

export default Button;
