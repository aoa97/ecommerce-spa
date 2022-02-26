import { Link } from "react-router-dom";

import "./styles.scss";
import { selColor } from '../helpers';

const IconButton = ({
  children,
  name,
  type,
  color,
  size,
  link,
  animation,
  ...otherProps
}) => {
  return (
    <>
      {link && (
        <Link to="/cart">
          <box-icon name="shopping-bag" type="solid" color="#FFF" />
        </Link>
      )}
      {!link && (
        <button className="btnico" {...otherProps}>
          <box-icon
            name={name}
            type={type || "regular"}
            color={selColor(color)}
            size={size  || "lg"}
            border="square"
            animation={animation} // tada-hover | spin-hover | flashing-hover | burst-hover | fade-left-hover | fade-right-hover
          />
        </button>
      )}
    </>
  );
};

export default IconButton;
