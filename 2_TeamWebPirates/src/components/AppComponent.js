import React, {useState, useEffect} from "react";
import "../styles/style.css"
import CardComponent from "./cardComponent/CardComponent";
import HeaderComponent from "./headerComponent/HeaderComponent";
import teamData from "../appData";

const CardContainer = ({filteredMembers}) => {
  console.log(filteredMembers)

  const cards = filteredMembers.map((cardData) => <CardComponent key={cardData?.id} {...cardData}/>);
  return (
    <main>
      {cards}
    </main> 
  )
}

const MainContainer = () => {
  const [membersList, setMembersList] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  
  async function getUsers(teamData) {
    let membersList = [];

    for(const member of teamData) {
      let user = fetch(`https://api.github.com/membersList/${member.username}`).then(
        data => {
          if (data.status != 200) {
            return null;
          } else {
            return data.json();
          }
        },
        error => {
          return null;
        }
      );
      membersList.push(user);
    }

    let results = await Promise.all(membersList);
    setMembersList(results);
    setFilteredMembers(results);
  }

  useEffect(() => {
    getUsers(teamData);
  }, [])
  
  return (
    <>
     <HeaderComponent membersList={membersList} setFilteredMembers={setFilteredMembers}/>
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

export default AppComponent;
