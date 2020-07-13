import React from "react";
import "../css/HeaderStyle.css";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className="container-fluid">
      <div className="row logo">
        <div className="col-md-4">
          <span className="logoname">
            <NavLink to="/home">
              USER <span className="glyphicon glyphicon-user"></span>
            </NavLink>
          </span>
        </div>
        <div className="col-md-8">
          <h6 className="username">GowthamRaj</h6>
        </div>
      </div>
    </div>
  );
};
