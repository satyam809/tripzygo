import React, { useEffect, useState } from "react";
// import SliderTabs from "./sliderTabs";

const FilterSearch = (props) => {
  const { data22, obj, setObj } = props;
  // const [filteredPackages, setFilteredPackages] = useState("");
  const [searchDest, setSearchDest] = useState('');
  const [showChips2, setShowChips2] = useState(false);
  const [showChips3, setShowChips3] = useState(false);
  const [selectedCategory1, setSelectedCategory1] = useState("All");
  const [selectedCategory2, setSelectedCategory2] = useState("");
  const [selectedCategory3, setSelectedCategory3] = useState("");

  const [isScrollableLeft2, setIsScrollableLeft2] = useState(false);
  const [isScrollableRight2, setIsScrollableRight2] = useState(true);

  const [isScrollableLeft3, setIsScrollableLeft3] = useState(false);
  const [isScrollableRight3, setIsScrollableRight3] = useState(true);

  const [container2, setContainer2] = useState("");
  const [container3, setContainer3] = useState("");

  const scrollTabsLeft2 = () => {
    container2.scrollLeft -= 400; // Adjust the scroll amount as needed
  };

  const scrollTabsLeft3 = () => {
    container3.scrollLeft -= 400; // Adjust the scroll amount as needed
  };

  const scrollTabsRight2 = () => {
    container2.scrollLeft += 400; // Adjust the scroll amount as needed
  };

  const scrollTabsRight3 = () => {
    container3.scrollLeft += 400;
  };

  useEffect(() => {
    setContainer2(document.querySelector("#chips2"));
    setContainer3(document.querySelector("#chips3"));
    // console.log(container2);
    // console.log(container3);
    setIsScrollableLeft2(container2.scrollLeft > 0);
    setIsScrollableRight2(
      container2.scrollLeft + container2.offsetWidth < container2.scrollWidth
    );
    setIsScrollableLeft3(container3.scrollLeft > 0);
    setIsScrollableRight3(
      container3.scrollLeft + container3.offsetWidth < container3.scrollWidth
    );
  }, [
    showChips2,
    showChips3,
    isScrollableLeft2,
    isScrollableRight2,
    isScrollableLeft3,
    isScrollableRight3,
  ]);

  const onSelect = (filter) => {
    if (filter === "All") {
      setObj(data22);
    } else {
      // const searchKeywords = data22.destination_search.split(',').map(keyword => keyword.trim());
      // const filteredPackages = data22.filter(pack => pack.tags.includes(filter));
      const filteredPackages = data22.filter(pack =>
        pack.destination_search.split(',').map(keyword => keyword.trim()).includes(filter)
      );
      // const filteredPackages = data22.filter(
      //   (pack) => pack.destination_type === filter
      // );
      setObj(filteredPackages);
    }
  };

  const handleCategoryClick1 = (category) => {
    setSelectedCategory1(category);
    setShowChips2(category === "India");
    setShowChips3(category === "International");
    setSelectedCategory2("");
    setSelectedCategory3("");
    onSelect(category);
  };
  const handleCategoryClick2 = (category) => {
    setSelectedCategory2(category);
    onSelect(category);
  };
  const handleCategoryClick3 = (category) => {
    setSelectedCategory3(category);
    onSelect(category);
  };
  const filterCat1 = ["All", "India", "International"];
  const filterIndiaCat2 = [
    "Kerala",
    "Shimla",
    "Rajasthan",
    "Uttarakhand",
    "Kashmir",
    "Goa",
    "Manali",
    "Jaipur",
    "Meghalaya",
    "Andaman",
    "Himachal",
    "Jodhpur",
    "Kullu",
    "Leh-Ladakh",
    "Dehradun",
    "Jaisalmer",
    "Jim Corbett",
    "Mount Abu",
    "Mussoorie",
    "Nainital",
    "Udaipur",
   

  ];
  const filterIntlCat2 = [
    "Japan",
    "Dubai",
    "Europe",
    "Amsterdam",
    "Maldives",
    "Bali",
    "Thailand",
    "France",
    "Paris",
    "Vietnam",
    "London",
    "Italy",
    "Malaysia",
    "Switzerland",
    "Turkey",
    "Greece",
    "Austria",
    "Krabi",
    "Netherland",
    "Czech Republic",
    "United Kingdom",
    "Cairo",
    "Egypt",
    "Hungary",
    "Iceland",
    "Norway",
    "Pattaya",
    "Phuket",
    "Singapore",

  ];

  const filteredIntCategories2 = filterIntlCat2.filter(category =>
    category.toLowerCase().includes(searchDest.toLowerCase())
  );

  const filteredIndiaCategories2 = filterIndiaCat2.filter(category =>
    category.toLowerCase().includes(searchDest.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchDest(event.target.value);
  };

  return (
    <div>
      <div className="chips" id="chips1">
        {" "}
        {/* for chip set 1*/}
        {filterCat1.map((category, index) => (
          <button
            key={index}
            className={`chips__item ${
              selectedCategory1 === category ? "chips__item--selected" : ""
            }`}
            onClick={() => handleCategoryClick1(category)}
          >
            {category}
          </button>
        ))}
          <label class="labelsearchdestination" style={{marginTop:"8px"}}>
            <input style={{width:"250px"}} type="search" class="search-field" placeholder="Search destination..." value={searchDest} onChange={handleSearchInputChange} name="s" title="" />
          </label>
        {/* <input type="submit" class="search-submit button" value="&#xf002" /> */}
      </div>

      {/* separator */}

      <div className="chips" style={{ display: showChips2 ? "flex" : "none" }}>
        {" "}
        {/* for chip set 2 slider - to be retained */}
        <div style={{ width: "35px" }}>
          <img
            src="/images/arrow-left.png"
            className="arrow-button left-arrow"
            onClick={scrollTabsLeft2}
            style={{ display: isScrollableRight2 ? "flex" : "flex" }} // Use "none" to hide the image initially
            alt="Left Arrow" // Provide an alt text for accessibility
          />
        </div>
        <div  class="sliderWidth" >
          <div style={{ overflowX: "scroll" }} className="chips" id="chips2">
            {" "}
            {/* chip set 2 options */}
            {filteredIndiaCategories2.length === 0 && searchDest !== '' && (
              <div className="chips__item">No results found</div>
            )}
            {filteredIndiaCategories2.map((category, index) => (
              <button
                key={index}
                className={`chips__item ${
                  selectedCategory2 === category ? "chips__item--selected" : ""
                }`}
                onClick={() => handleCategoryClick2(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div style={{ width: "0px", paddingLeft: "5px" }}>
          <img
            src="/images/arrow-right.png"
            className="arrow-button right-arrow"
            onClick={scrollTabsRight2}
            style={{ display: isScrollableRight2 ? "flex" : "flex" }} // Use "none" to hide the image initially
            alt="Right Arrow" // Provide an alt text for accessibility
          />
        </div>
      </div>

      {/* separator */}

      <div className="chips" style={{ display: showChips3 ? "flex" : "none" }}>
        {/* for chip set 3 slider - to be retained */}
        <div style={{ width: "35px" }}>
          <img
            src="/images/arrow-left.png"
            className="arrow-button left-arrow"
            onClick={scrollTabsLeft3}
            style={{ display: isScrollableRight3 ? "flex" : "flex" }} // Use "none" to hide the image initially
            alt="Left Arrow" // Provide an alt text for accessibility
          />
        </div>
        <div class="sliderWidth">
          <div style={{ overflowX: "scroll" }} className="chips" id="chips3">
            {" "}
            {/* chip set 3 options */}
            {filteredIntCategories2.length === 0 && searchDest !== '' && (
              <div className="chips__item">No results found</div>
            )}
            {filteredIntCategories2.map((category, index) => (
              <button
                key={index}
                className={`chips__item ${
                  selectedCategory3 === category ? "chips__item--selected" : ""
                }`}
                onClick={() => handleCategoryClick3(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div style={{ width: "0px", paddingLeft: "5px" }}>
          <img
            src="/images/arrow-right.png"
            className="arrow-button right-arrow"
            onClick={scrollTabsRight3}
            style={{ display: isScrollableRight3 ? "flex" : "flex" }} // Use "none" to hide the image initially
            alt="Right Arrow" // Provide an alt text for accessibility
          />
        </div>
      </div>

      {/* <div
        style={{ display: showChips3 ? "block" : "none" }}
        className="chips"
        id="chips3"
      >                                                         {/* for chip set 3 slider - to be deleted *
        <SliderTabs
          hook={showChips3}
          tabs={filterIntlCat2}
          selectedCategory={selectedCategory3}
          handleCategoryClick={handleCategoryClick3}
        ></SliderTabs>
      </div> */}
       <br/>
    </div>
   
  );
};

export default FilterSearch;
