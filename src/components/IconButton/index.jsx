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
            type={type || "solid"}
            color={selColor(color)}
            size={size  || "md"}
            border="square"
          />
        </button>
      )}
    </>
  );
};

export default IconButton;
