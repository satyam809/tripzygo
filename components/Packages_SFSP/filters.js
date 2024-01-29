import React, { useEffect, useState } from "react";
// import SliderTabs from "./sliderTabs";
import { Modal, ModalBody } from "reactstrap";
import ModalpackageDesc from "../../components/ModalpackageDesc";
import MobileView from "../../components/Mobileview";



const Filters = (props) => {
  const { data22, obj, setObj } = props;

  //   console.log(data22);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    selectedDays: [],
    selectedBudget: [],
    selectedTripType: [],
  });

  function handleCheckboxChange(event, type) {
    const value = event.target.value;

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((filter) => filter !== value)
        : [...prevFilters[type], value],
    }));
  }
  useEffect(() => {
    console.log(selectedFilters); // This will log the selected filters whenever they change
  }, [selectedFilters]);

  const toggle = () => setModalOpen(!modalOpen);
  // const handleButtonClick = () => {
  //   setIsModalOpen(true);
  // }
  const priceFilters = [
    { "Below ₹ 25k": { minPrice: 0, maxPrice: 25000 } },
    { "₹ 25k - ₹ 75k": { minPrice: 25001, maxPrice: 75000 } },
    { "₹ 75k - ₹ 1L": { minPrice: 75001, maxPrice: 100000 } },
    // { "₹ 1L - ₹ 1.5L": { minPrice: 100001, maxPrice: 150000 } },
    // { "₹ 1.5L - ₹ 2L": { minPrice: 150001, maxPrice: 200000 } },
    { "₹ 1L Above": { minPrice: 100001, maxPrice: 500000 } },
  ];
  //   ["Below ₹ 50k", "₹ 50k - ₹ 75k", "₹ 75k - ₹ 1L", "₹ 1L - ₹ 1.5L", "₹ 1.5L - ₹ 2L", "₹ 2L Above"];
  const daysFilters = [
    // { "1-3": { minDays: 1, maxDays: 3 } },
    { "3-5": { minDays: 3, maxDays: 5 } },
    { "6-7": { minDays: 6, maxDays: 7 } },
    { "8+": { minDays: 8, maxDays: 15 } },
  ];
  //   ["1-3", "4-5", "6-7", "8+"];
  const tripTypeFilters = ["Friends", "Honeymoon", "Family"];
  //   const activityTypeFilters = ["Adventure", "City", "Self Drive", "Water Activities", "Cultural"];
  //   const landscapeTypeFilters = ["Beach","Mountain","City","Country Side"];
  //   const selectedPriceFilters = [];
  //   const selectedDaysFilters = [];
  //   const selectedTripTypeFilters = [];
  const applyFilters = () => {
    var data22_1 = [];
    var data22_2 = [];
    var data22_3 = [];
    var data22_4 = [];

    //looping for duration filtering
    if (selectedFilters.selectedDays.length == 0) {
      data22_2.push.apply(data22_2, data22);
    } else {
      selectedFilters.selectedDays.forEach((filter, index) => {
        const range = daysFilters.findIndex((dayFilter) => {
          return Object.keys(dayFilter)[0] === filter;
        });
        const minDays = daysFilters[range][filter].minDays;
        const maxDays = daysFilters[range][filter].maxDays;
        data22_1 = data22.filter(
          (pack) => pack.duration >= minDays && pack.duration <= maxDays
        );
        data22_2.push.apply(data22_2, data22_1);
      });
    }
    data22_1 = [];

    console.log(data22_2);

    //looping for budget filtering
    if (selectedFilters.selectedBudget.length == 0) {
      data22_3.push.apply(data22_3, data22_2);

      // data22_3 = JSON.parse(JSON.stringify(data22_2));
    } else {
      selectedFilters.selectedBudget.forEach((filter, index) => {
        const range = priceFilters.findIndex((priceFilter) => {
          return Object.keys(priceFilter)[0] === filter;
        });
        const minPrice = priceFilters[range][filter].minPrice;
        const maxPrice = priceFilters[range][filter].maxPrice;
        data22_1 = data22_2.filter(
          (pack) =>
            pack.web_pack_price >= minPrice && pack.web_pack_price <= maxPrice
        );
        data22_3.push.apply(data22_3, data22_1);
      });
    }
    data22_1 = [];
    console.log(data22_3);

    //looping for tour type filtering
    if (selectedFilters.selectedTripType.length === 0) {
      data22_4.push.apply(data22_4, data22_3);
      // data22_4 = data22_3;
    } else {
      selectedFilters.selectedTripType.forEach((filter, index) => {
        data22_1 = data22_3.filter((pack) => {
          return pack.tour_type === filter.trim().toLowerCase();
        });
        data22_4.push.apply(data22_4, data22_1);
      });
    }
    console.log(data22_4);
    setObj(data22_4);
    console.log(obj);
    toggle();
  };

  function handleClearAll() {
    setSelectedFilters({
      selectedDays: [],
      selectedBudget: [],
      selectedTripType: [],
    });
    const checkboxes = document.getElementsByClassName("checkedbox");

    // Loop through checkboxes and uncheck them
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
    setObj(data22);
  }

  return (
    <div className="shadow-sm shadow-sm1 paddingmobile bg-white"
      style={{
        zIndex: modalOpen ? "0" : "999",
        position: "sticky",
        top: "0", // Adjust this value to set the desired top position
      }}>

      <Modal
        size="sm"
        toggle={() => setModalOpen(!modalOpen)}
        isOpen={modalOpen}
      >
        <div className=" modal-header border-0">
          <h4 className=" modal-title" id="exampleModalLabel">
            All filters
          </h4>
          <button
            style={{ background: "transparent" }}
            aria-label="Close"
            className=" close"
            type="buFly high anytime, to anywhere for anythingtton"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>
              <i className="fa fa-close"></i>
            </span>
          </button>
        </div>
        <ModalBody>
          <div className="modal-content">
            {/* <h2>Filters</h2> */}

            <div className="container col-lg-12 col-md-12">
              {/* Price Range */}
              <div className="container row">
                <div className="col-md-4">
                  <h4>No. of Days</h4>
                  {daysFilters.map((filter, index) => (
                    <div
                      key={index}
                      className="column"
                      style={{ marginBottom: "10px" }}
                    >
                      <input
                        type="checkbox"
                        className="checkedbox"
                        value={Object.keys(filter)}
                        checked={selectedFilters.selectedDays.includes(Object.keys(filter)[0])}
                        onChange={(event) =>
                          handleCheckboxChange(event, "selectedDays")
                        }
                      />{" "}
                      {Object.keys(filter)} Days
                    </div>
                  ))}
                </div>
                <div className="col-md-4">
                  <h4>Budget</h4>
                  {priceFilters.map((filter, index) => (
                    <div
                      key={index}
                      className="column"
                      style={{ marginBottom: "10px" }}
                    >
                      <input
                        type="checkbox"
                        className="checkedbox"
                        value={Object.keys(filter)}
                        checked={selectedFilters.selectedBudget.includes(Object.keys(filter)[0])}
                        onChange={(event) =>
                          handleCheckboxChange(event, "selectedBudget")
                        }
                      />{" "}
                      {Object.keys(filter)}
                    </div>
                  ))}
                </div>
                <div className="col-md-4">
                  <h4>Tour Type</h4>
                  {tripTypeFilters.map((filter, index) => (
                    <div
                      key={index}
                      className="column"
                      style={{ marginBottom: "10px" }}
                    >
                      <input
                        type="checkbox"
                        className="checkedbox"
                        value={filter}
                        checked={selectedFilters.selectedTripType.includes(filter)}
                        onChange={(event) =>
                          handleCheckboxChange(event, "selectedTripType")
                        }
                      />{" "}
                      {filter}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="comment-btn text-center">
              <input
                type="submit"
                className="nir-btn2"
                data-callback="submit"
                id="submit2"
                value="Apply Filters"
                onClick={applyFilters}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="submit"
                className="nir-btn2"
                data-callback="submit"
                id="submit2"
                value="Clear All"
                onClick={handleClearAll}
              />
            </div>
            <br />
          </div>
        </ModalBody>
      </Modal>
      <div className="resp">
        <button
          type="button"
          className="btn btn-outline-secondary"
          style={{ borderRadius: "20px", fontSize: "12px" }}
          onClick={() => setModalOpen(!modalOpen)}
        >
          <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;No.
          of Days{" "}
          {selectedFilters.selectedDays.length > 0 && (
            <span
              class="badge badge-light"
              style={{ backgroundColor: "#d42727" }}
            >
              {selectedFilters.selectedDays.length}
            </span>
          )}
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-outline-secondary"
          style={{ borderRadius: "20px", fontSize: "12px" }}
          onClick={() => setModalOpen(!modalOpen)}
        >
          <i className="fa fa-money" aria-hidden="true"></i>&nbsp;&nbsp;Budget{" "}
          {selectedFilters.selectedBudget.length > 0 && (
            <span
              class="badge badge-light"
              style={{ backgroundColor: "#d42727" }}
            >
              {selectedFilters.selectedBudget.length}
            </span>
          )}
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-outline-secondary"
          style={{ borderRadius: "20px", fontSize: "12px" }}
          onClick={() => setModalOpen(!modalOpen)}
        >
          <i className="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;&nbsp;Type
          of Interest{" "}
          {selectedFilters.selectedTripType.length > 0 && (
            <span
              class="badge badge-light"
              style={{ backgroundColor: "#d42727" }}
            >
              {selectedFilters.selectedTripType.length}
            </span>
          )}
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <button
          type="button"
          className="btn btn-outline-success float-right"
          style={{ borderRadius: "20px", fontSize:"12px"}}
         
        >
          <i class="fa fa-phone-alt"></i>&nbsp;&nbsp;Need
          help? Talk to an expert
        </button> */}
        <div className="float-right"
          style={{ fontSize: "12px" }}>
          <ModalpackageDesc label="Perfect Travel Starts Here!"
            buttonLabel="&nbsp;Need
          help? Talk to an expert"  props3="Enquiry" props1="Packages"></ModalpackageDesc>
        </div>
      </div>
      <div className='my-content'  >


        <div class='frame'>
          <div class='bar'>
            <a onClick={() => setModalOpen(!modalOpen)}>
              {/* <div class='icon'>
              <i class="fas fa-calendar-alt"></i>
              </div>
              <p class='label'>No. of days</p> */}
              <div class='icon'>
              <i className="fas fa-calendar-alt" aria-hidden="true">{" "}</i>
              {selectedFilters.selectedDays.length > 0 && (
            <span
              class="badge badge-light"
              style={{ backgroundColor: "#d42727" }}
            >
              {selectedFilters.selectedDays.length}
            </span>
          )}
              </div>
              <p class='label'>No. of days</p>
         
     
            </a>
            <a onClick={() => setModalOpen(!modalOpen)} >
              <div class='icon'>
              <i class="fas fa-money">{" "}</i>
              {selectedFilters.selectedBudget.length > 0 && (
            <span
              class="badge badge-light"
              style={{ backgroundColor: "#d42727" }}
            >
              {selectedFilters.selectedBudget.length}
            </span>
          )}
              </div>
              <p class='label'>Budget</p>
         
            </a>
            <a  onClick={() => setModalOpen(!modalOpen)}>
              <div class='icon'>
                <i class="far fa-thumbs-up">{" "}</i>
                {selectedFilters.selectedTripType.length > 0 && (
            <span
              class="badge badge-light"
              style={{ backgroundColor: "#d42727" }}
            >
              {selectedFilters.selectedTripType.length}
            </span>
          )}
              </div>
              <p class='label'>Type of Interest</p>
             
            </a>
            
            <MobileView label="Perfect Travel Starts Here!" props3="Enquiry" props1="Packages"></MobileView>
          </div>
        </div>


      </div>



    </div>
  );
};

export default Filters;
