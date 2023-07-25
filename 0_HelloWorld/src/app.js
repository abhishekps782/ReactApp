import React from "react";
import ReactDOM from "react-dom";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", {}, "Hello World");
rootElement.render(heading);