import React from "react";
import "../css/BodyStyle.css";
import UserList from "../components/UserList";
import UserProfile from "../components/UserProfile";

export default () => {
  return (
    <div className="container-fluid">
      <div className="row body-text">
        <div className="col-md-12">
          <h5 className="pageTitle">User Management</h5>
        </div>
      </div>

      <div className="row tabContent">
        <div className="col-md-12">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="first-tab"
                data-toggle="tab"
                href="#first"
                role="tab"
                aria-controls="first"
                aria-selected="true"
              >
                User List
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                id="second-tab"
                data-toggle="tab"
                href="#second"
                role="tab"
                aria-controls="second"
                aria-selected="false"
              >
                User Profile
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active in"
              id="first"
              role="tabpanel"
              aria-labelledby="first-tab"
            >
              <UserList />
            </div>

            <div
              className="tab-pane fade"
              id="second"
              role="tabpanel"
              aria-labelledby="second-tab"
            >
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
