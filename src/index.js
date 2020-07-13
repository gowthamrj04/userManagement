import React, { Fragment as Fr } from "react";
import { render } from "react-dom";
import Navigation from "./components/Navigation";
import "./css/NavigationStyle.css";
import "./css/style.css";

function App() {
  return (
    <Fr>
      <Navigation />
    </Fr>
  );
}

render(<App />, document.getElementById("root"));
