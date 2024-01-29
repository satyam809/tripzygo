import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";


function SearchBar({ data }) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [placeholder, setPlaceholder] = useState('Search destinations');
  const inputRef = useRef();
  const resultsRef = useRef();
  const hasResults = filteredData && filteredData.length > 0;

  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.destination.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  function onKeyDown(event) {
    const isUp = event.key === 'ArrowUp';
    const isDown = event.key === 'ArrowDown';
    const inputIsFocused = document.activeElement === inputRef.current;
    const resultsItem = Array.from(resultsRef.current.children)
    const activeResultIndex = resultsItem.findIndex(child => {
      return child.querySelector('a') === document.activeElement;
    })
    if (isUp) {
      event.preventDefault();
      console.log("ITS UP");
      if (inputIsFocused) {
        resultsItem[resultsItem.length - 1].querySelector('a').focus();
      }
      else if (resultsItem[activeResultIndex - 1]) {
        resultsItem[activeResultIndex - 1].querySelector('a').focus();
      }
      else {
        inputRef.current.focus();
      }
    }

    if (isDown) {
      event.preventDefault();
      console.log("ITS DOWN")
      if (inputIsFocused) {
        resultsItem[0].querySelector('a').focus();
      }
      else if (resultsItem[activeResultIndex + 1]) {
        resultsItem[activeResultIndex + 1].querySelector('a').focus();
      }
      else {
        inputRef.current.focus();
      }
    }

  }

  useEffect(() => {

    if (hasResults) {
      document.body.addEventListener('keydown', onKeyDown);
    }
    else {
      document.body.removeEventListener('keydown', onKeyDown);
    }
    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
    }
  }, [hasResults])
  useEffect(() => {
    // An array of destination names for demonstration
    const destinations = ['Singapore', 'Switzerland', 'Bali', 'Thailand', 'Kerala', 'Kashmir', 'Andaman', 'Paris', 'Vietnam', 'Rajasthan'];

    // Function to cycle through destinations with a delay
    const cycleDestinations = () => {
      let index = 0;

      setInterval(() => {
        setPlaceholder(`Search destinations "${destinations[index]}"`);
        index = (index + 1) % destinations.length;
      }, 4000); // Change every 3 seconds (3000 milliseconds)

      // Initial placeholder setting
      setPlaceholder(`Search destinations "${destinations[index]}"`);
    };

    // Start the animation when the component mounts
    cycleDestinations();
  }, []); // Empty dependency array ensures that the effect runs only once on mount
  return (
    <>
      {/* <div class="containerser">
        <div class="searchInputser">
          <input type="text" placeholder="Search Destination" />
          <div class="resultBox">

          </div>
          <div class="icon"><i class="fas fa-search"></i></div>
        </div>
      </div> */}
      <div className="search d-flex">
        <div className="searchInputs">
          <input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
            className="searchbox"

          />
          {filteredData.length != 0 && (

            <ul ref={resultsRef} className="resultContainer">
              {filteredData.slice(0, 5).map((value) => {
                return (
                  <li className="searchTerm">
                    <a href={value.link}>
                      {value.destination}
                    </a>
                  </li>
                );
              })}
            </ul>

          )}
        </div>
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBar;

