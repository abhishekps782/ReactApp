import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css"
import CardComponent from "./components/cardComponent/CardComponent";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import teamData from "./appData";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const CardContainer = ({filteredMembers}) => {
  const cards = filteredMembers.map((cardData) => <CardComponent key={cardData.id} {...cardData}/>);
  return (
      <main>
        {cards}
      </main> 
  )
}

const MainContainer = () => {
  const [filteredMembers, setFilteredMembers] = useState(teamData);
  return (
    <>
     <HeaderComponent setFilteredMembers={setFilteredMembers}/>
     <CardContainer filteredMembers={filteredMembers}/>
    </>
  )
}

const AppComponent = () => {
    return (
     <div className="main-container">
        <MainContainer/>
     </div>
    )
}

rootElement.render(<AppComponent/>);
