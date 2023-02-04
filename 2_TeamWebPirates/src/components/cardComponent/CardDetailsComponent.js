import { useParams } from "react-router-dom";
import CardComponent from "./CardComponent";
import {useState, useEffect} from "react";

const CardDetailsComponent = () => { 
  const params = useParams();
  [memberDetail, setMemberDetail] = useState({});

  async function getUser(id) {
    if(!id) return;
    
    let user = fetch(`https://api.github.com/user/${id}`).then(
      (data) => {
        if (data.status != 200) {
          return null;
        } else {
          return data.json();
        }
      },
      (error) => {
        return null;
      }
    );
    let userDetails = await user;
    console.log(userDetails);
    setMemberDetail(userDetails);
  }

  useEffect(() => {
    getUser(params?.id);    
  }, []);

  return <CardComponent details={memberDetail}/>
}

export default CardDetailsComponent;