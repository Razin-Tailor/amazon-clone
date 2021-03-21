import React from "react";
import "./SubHeader.css";
import MenuIcon from "@material-ui/icons/Menu";
import { subMenuItems } from "./constants";
function SubHeader() {
  return (
    <div className="subheader__container">
      <ul className="nav subheader__nav align-items-center">
        <li className="nav-item align-items-center align-self-center text-white">
          <span className="align-items-center align-self-center">
            <MenuIcon />
          </span>
          <span className="align-items-center align-self-center">All</span>
        </li>
        {subMenuItems.map((menuItem) => (
          <li className="nav-item">
            <a className="nav-link text-white f-sm" href="#">
              {menuItem}
            </a>
          </li>
        ))}
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            <img
              className="subheader__img"
              src="/imgs/DownloadApp.jpg"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SubHeader;
