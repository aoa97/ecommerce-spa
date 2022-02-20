import { useState } from "react";
import { Link } from "react-router-dom";

import Text from "./../Text/index";
import "./styles.scss";

const Header = () => {
  const [formDisplay, setFormDisplay] = useState(false);

  const handleFormClick = () => {
    setFormDisplay(!formDisplay);
  };

  return (
    <nav>
      <div className="navbar container">
        <Link className="brand" to="/">
          <box-icon name="doughnut-chart" color="#FFF" size="30px" />
          <Text className="white s-lg brand-text">LapShop</Text>
        </Link>

        <ul className="links">
          <li className="box box-1">
            <a href="#" onClick={handleFormClick}>
              <Text className='white s-xs w-400 box-text'>Search Lapshop</Text>
              <box-icon name="search" color="#FFF" size="20px" />
            </a>

            <form
              className="searchBox"
              style={{ display: formDisplay ? "flex" : "none" }}
            >
              <input placeholder="What you are looking for?" />
            </form>
          </li>

          <li className="box box-2">
            <a href="#"><Text className='white s-xs'>Sign In</Text></a>
          </li>

          <li className="icon">
            <Link to="/cart">
              <box-icon name="shopping-bag" type="solid" color="#FFF" />
              <div className="circle">
                <Text className='white s-xs'>0</Text>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
