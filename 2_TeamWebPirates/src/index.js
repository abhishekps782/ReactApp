import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import AppComponent, { MainContainer } from "./components/AppComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import CardDetailsComponent from "./components/cardComponent/CardDetailsComponent";
import AboutUsComponent from "./components/AboutUsComponent";

const AppLayout = () => {
  <>
    {/* <HeaderComponent/>
    <Outlet/> */}
    <AppComponent />
  </>;
};

const routerConfig = [
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/aboutUs",
    element: <AboutUsComponent/>
  },
  {
    path: "/memberDetails/:id",
    element: (
      <div className="container">
        <HeaderComponent hideSearchEle={true} />
        <CardDetailsComponent />
      </div>
    ),
  },
];

const appRouter = createBrowserRouter(routerConfig);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<RouterProvider router={appRouter} />);
