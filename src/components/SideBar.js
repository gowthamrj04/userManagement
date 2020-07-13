import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <NavLink to="/home">
              <span className="glyphicon glyphicon-home"></span>
            </NavLink>
          </li>
          <li className="sidebar-brand">
            <NavLink to="/about">
              <span className="glyphicon glyphicon-leaf"></span>
            </NavLink>
          </li>
          <li className="sidebar-brand">
            <NavLink to="/service">
              <span className="glyphicon glyphicon-eye-close"></span>
            </NavLink>
          </li>
          <li className="sidebar-brand">
            <NavLink to="/contact">
              <span className="glyphicon glyphicon-bell"></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
