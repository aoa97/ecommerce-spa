import { useLayoutEffect } from "react";
import Lottie from "lottie-react";

import "./styles.scss";
import loader from "../../static/loader.json";

const Loader = ({ children, ...otherProps }) => {
  useLayoutEffect(() => {
    document.querySelector("nav").style.display = "none";
    return () => document.querySelector("nav").style.display = "block";
  }, []);

  return (
    <div className="loaderWrapper" {...otherProps}>
      <Lottie animationData={loader} loop className="loader" />
    </div>
  );
};

export default Loader;
