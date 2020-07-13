import React from "react";
import "../css/BodyStyle.css";
import BodyContent from "./BodyContent";
import Header from "../components/Header";

export default () => {
  return (
    <React.Fragment>
      <div className="bodyContent">
        <Header />
        <BodyContent />
      </div>
    </React.Fragment>
  );
};
