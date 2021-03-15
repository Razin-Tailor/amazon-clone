import React from "react";
import "./Header.css";
import amazonLogo from "./assets/images/amazon-logo-white.png";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__leftLogo">
          <img src={amazonLogo} alt="Amazon Logo" />
          <p>.in</p>
        </div>

        <div className="header__leftAddress">
          <LocationOnOutlinedIcon className="header__leftAddressIcon" />
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Select your address</span>
          </div>
        </div>
      </div>
      <div className="header__center">
        <div className="input-group mb-3 pt-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            <input type="text" className="form-control" />
            <div className="input-group-append align-items-center align-self-center p-2 header__searchContainer">
              <SearchIcon className="header__centerSearchIcon" />
            </div>
          </div>
        </div>

        <div className="header_center_SearchContainer"></div>
      </div>
      <div className="header__right">
        {/* <div className="header__option">
          <span>Country</span>
        </div> */}
        <div className="header__option">
          <span className="header__optionLineOne">Hello, SignIn</span>
          <span className="header__optionLineTwo">Accounts &#38; Lists </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&#38; Orders</span>
        </div>
        <div className="header__rightCart">
          <ShoppingCartOutlinedIcon />
          <span className="header__optionLineTwo header__cartIcon">2</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
