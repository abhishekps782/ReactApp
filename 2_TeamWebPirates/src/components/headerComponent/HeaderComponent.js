import IMAGES from '../../../utilities/image-exporter';
import { useState } from 'react';
import teamData from '../../appData';

const HeaderComponent = ({setFilteredMembers}) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
      filterTeamMembers(e.target.value);
      setSearchText(e.target.value);
    };

    const filterTeamMembers = (searchText) => {
      setFilteredMembers(
        teamData.filter(
          (member) =>
            member.name.toLowerCase().includes(searchText.toLowerCase()) ||
            member.designation.toLowerCase().includes(searchText.toLowerCase())
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
          <input
            className="nav--search"
            value={searchText}
            placeholder="type something here.."
            onChange={handleSearch}
          />
        </nav>
      </header>
    );
}

export default HeaderComponent;
