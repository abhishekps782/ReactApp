import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../public/assets/images/logo.png"
import userImg from "../public/assets/images/user.png"
import "./styles/style.css"
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

/*header element without using JSX*/
const headerElement = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Tech Talks@Google 0"),
  React.createElement("h2", {}, "How to React"),
  React.createElement("h3", {}, "by Clark Kent"),
]);

/* Header element using JSX */
const HeaderElement = (
  <div className="title">
    <h1>Tech Talks@Google 1</h1>
    <h2>How to React</h2>
    <h3>by Clark Kent</h3>
  </div>
);

const TitleComponent = () => {
    return <h1> Tech Talks @Google 2</h1>
}

/* Header element as functional component */
const NewHeaderElement = () => {
  return (
    <div className="title">
      <TitleComponent/>
      <h2>How to React</h2>
      <h3>by Clark Kent</h3>
    </div>
  );
};

const HeaderComponent = () => {
    return (
        <header className="header-container">
            <img src={logo}></img>
            <form>
                <input className="search" placeholder="type something here.."/>
                <button type="submit">Search</button>
            </form>
            <img src={userImg}></img>
        </header>   
    )
}

// This is to render Part1: Assignment
/*
rootElement.render(
  <>
    {headerElement}
    {HeaderElement}
    <NewHeaderElement />
  </>
);
*/

rootElement.render(<HeaderComponent/>);
