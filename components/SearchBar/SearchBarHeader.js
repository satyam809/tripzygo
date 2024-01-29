import SearchData from "../SearchBar/searchbar.json";
import React, { useState } from 'react';

const SearchComponent = ({toggleVisibility}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [destinations, setDestinations] = useState(SearchData);
    // Add more destinations as needed

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setDestinations(SearchData.filter(destination => destination.destination.toLowerCase().includes(searchTerm.toLowerCase())))
  };

  const matchHref = () => {
    const matchingDestinations = destinations.filter(destination => destination.destination.toLowerCase().includes(searchTerm.toLowerCase()));
    if(matchingDestinations.length !== 0){
        window.open(matchingDestinations[0].link,"_self");
    } else {
        console.error("No such location");
    }
  }

  return (
    <div style={{display:"flex", width:"110%"}}>
      <input
        type="text"
        className='form-control' 
        value={searchTerm}
        onChange={handleInputChange}
        autoFocus
        list="country_list"
        id="search_click"
        placeholder="Search destinations..."
      />&nbsp;&nbsp;
      <a className="pt-1" onClick={matchHref}><i className="fa fa-search" style={{fontSize:"125%"}}></i></a>
      {/* <ul>
        {matchingDestinations.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.destination}</a>
          </li>
        ))}
      </ul> */}
      <datalist id="country_list">
        {destinations.slice(0,5).map(item => (
          <option>
            {item.destination}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default SearchComponent;
