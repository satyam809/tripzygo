import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBarNew({ placeholder }) {
  const router = useRouter();
  const [cust_Destination, setCust_Destination] = useState('');

  function searchSelect(arg) {
    // Declare variables
    var input, filter, options, i, txtValue;
    input = document.getElementById(arg);
    filter = input.value.toUpperCase();
    datalist = document.getElementById("country_list");
    options = datalist.getElementsByTagName('option');
    dataList.style.display = 'block';
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < options.length; i++) {
      txtValue = options[i].text;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        options[i].style.display = "";
      } else {
        options[i].style.display = "none";
      }
    }
  };

  const clearInput = () => {
    setCust_Destination([]);
  };

  const handleSearch = () => {
    router.push(`/packs?search=${cust_Destination}`);
  };

  return (
    <div className="search d-flex">
      <table>
        <tr>
          <td style={{width:'600px'}}>
            <div className="searchInputs inputContainer">
              <input style={{ height: '45px', fontSize: '16px' }} type="text" name="cust_Destination" list="country_list" oninput="searchSelect(cust_Destination)" value={cust_Destination} className="form-control" id="cust_Destination" placeholder="Your destination" onChange={(e) => setCust_Destination(e.target.value)} />
              <datalist id="country_list" className="dropdownList">
                <option value="Amsterdam">Amsterdam</option>
                <option value="Andaman">Andaman</option>
                <option value="Auli">Auli</option>
                <option value="Austria">Austria</option>
                <option value="Bali">Bali</option>
                <option value="Bangkok">Bangkok</option>
                <option value="Cairo">Cairo</option>
                <option value="CZech%Republic">CZech Republic</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Dubai">Dubai</option>
                <option value="Egypt">Egypt</option>
                <option value="Europe">Europe</option>
                <option value="France">France</option>
                <option value="Gangtok">Gangtok</option>
                <option value="Germany">Germany</option>
                <option value="Goa">Goa</option>
                <option value="Greece">Greece</option>
                <option value="Himachal%Pradesh">Himachal Pradesh</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Italy">Italy</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Jaisalmer">Jaisalmer</option>
                <option value="Jim%Corbett">Jim Corbett</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Kedarnath">Kedarnath</option>
                <option value="Kerala">Kerala</option>
                <option value="Krabi">Krabi</option>
                <option value="Kullu">Kullu</option>
                <option value="Leh%Ladakh">Leh, Ladakh</option>
                <option value="London">London</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Manali">Manali</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mount%Abu">Mount Abu</option>
                <option value="Mussoorie">Mussoorie</option>
                <option value="Nainital">Nainital</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Norway">Norway</option>
                <option value="Paris">Paris</option>
                <option value="Pattaya">Pattaya</option>
                <option value="Phuket">Phuket</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Shimla">Shimla</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Singapore">Singapore</option>
                <option value="Spain">Spain</option>
                <option value="Srinagar">Srinagar</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Thailand">Thailand</option>
                <option value="Turkey">Turkey</option>
                <option value="Udaipur">Udaipur</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Luxury Tours">Luxury Tours</option>
                <option value="Hill Station">Hill Station</option>
                <option value="Beach">Beach</option>
                <option value="East%Europe">East Europe</option>
                <option value="Gulmarg">Gulmarg</option>
                <option value="Winter">Winter</option>
                <option value="Japan">Japan</option>
                <option value="Summer">Summer</option>
              </datalist>
            </div>
          </td>
          {/* <div className="searchIcon">
        {cust_Destination.length === 0 ? (
          <SearchIcon  />
        ) : (
          <CloseIcon id="clearBtn" onClick={clearInput} />
        )}
      </div> */}
          <td style={{width:'100px'}}>
            <div className="">
              <button id='searchnewbtn1' className="btn btn-light" style={{ height: '40px', width: '80px', marginLeft: '15px', border: '#d9d9d9', backgroundColor: 'white', display: 'grid', placeItems: 'right', position: 'relative'}} onClick={handleSearch} >Search</button>
            </div>
          </td>
          <td style={{width:'100px'}}>
            <div className="">
              <button id='searchnewbtn2' className="btn btn-light" style={{ height: '40px', width: '80px', marginLeft: '10px', border: '#d9d9d9', backgroundColor: 'white', display: 'grid', placeItems: 'right', position: 'relative'}} onClick={clearInput} >Clear</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SearchBarNew;
