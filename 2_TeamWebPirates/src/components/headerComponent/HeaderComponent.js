import IMAGES from '../../../utilities/image-exporter';
import { useState } from 'react';


const HeaderComponent = ({membersList, setFilteredMembers, hideSearchEle}) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
      filterTeamMembers(e.target.value);
      setSearchText(e.target.value);
    };

    const filterTeamMembers = (searchText) => {
      setFilteredMembers(
        membersList.filter(
          (member) =>
            member?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
            member?.login?.toLowerCase().includes(searchText.toLowerCase()) ||
            member?.company?.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    };

    return (
      <header>
        <nav>
          <h1 className="nav--title">TEAM WEB PIRATES</h1>
          <img
            className="nav--image"
            src={IMAGES.teamLogo}
            alt="Web Pirates's Team Logo"
          />
          {
            !hideSearchEle && 
            <input
              className='nav--search'
              value={searchText}
              placeholder="type something here.."
              onChange={handleSearch}
          />
          }
          
        </nav>
      </header>
    );
}

export default HeaderComponent;
