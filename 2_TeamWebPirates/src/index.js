import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css"
import AppComponent from "./components/AppComponent";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<AppComponent/>);
