import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "../components/Body";
import SideBar from "../components/SideBar";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import ErrorPage from "../components/404";

export default () => {
  return (
    <React.Fragment>
      <Router>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Body}></Route>
          <Route exact path="/home" component={Body}></Route>
          <Route exact path="/about" component={AboutUs}></Route>
          <Route exact path="/service" component={Services}></Route>
          <Route exact path="/contact" component={ContactUs}></Route>
          <Route exact path="/*" component={ErrorPage}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
