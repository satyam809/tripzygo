import React from 'react'
import Head from 'next/head'
import axios from 'axios';
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import SlickHoneymoonSlider from '../components/Slick_Sliders/SlickDestinationsSlider';
import VisaModal from "../components/VisaModal";

const url = 'https://backend.tripzygo.in/visa';

export default function visa() {
    const [cust_destination, setCust_Destination] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residence, setResidence] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [country_code, setCountryCode] = useState('+91');
    const [phone_no, setPhone] = useState('');

    const [opt, setOpt] = useState(true);

    const handleContact = async (e) => {
        try {
            axios.post(url, { cust_destination, citizenship, residence, country_code, phone_no, departureDate, returnDate });
        } catch (error) { }
    };

    const handleOpt = async (e) => {
        const optInUrl = `https://media.smsgupshup.com/GatewayAPI/rest?method=OPT_IN&format=json&userid=2000217680&password=ksrcbmxS&phone_number=91${phone_no}&v=1.1&auth_scheme=plain&channel=WHATSAPP`;
        const optOutUrl = `https://media.smsgupshup.com/GatewayAPI/rest?method=OPT_OUT&format=json&userid=2000217680&password=ksrcbmxS&phone_number=91${phone_no}&v=1.1&auth_scheme=plain&channel=WHATSAPP`;
        const thankUrl = `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000217680&password=ksrcbmxS&send_to=${phone_no}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+%2A${phone_no}%2A%2C%0A%0A%2AThank+you+for+contacting+us%21%2A+Our+travel+expert+will+contact+you+shortly%21%F0%9F%98%87%0A%0ABe+Ready+To+Save+Huge+On+Flights+%E2%9C%88%EF%B8%8F%2C+Stays+%F0%9F%8F%A8%2C++Holiday+%F0%9F%9B%84%2C+%26+Cabs+for+your+next+trip+to+%2A${cust_destination}%2A+%F0%9F%9A%95%0A%0APlan+Your+Trip+with+Us+Now%21%F0%9F%98%89`;

        if (opt) {
            try {
                axios.post(optInUrl, { phone_no });
                axios.post(thankUrl, { phone_no });
            } catch (error) { }
        }
        else {
            try {
                axios.post(optOutUrl, { phone_no });
            } catch (error) { }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            handleContact();
            // handleOpt();
            alert("Submit Successfully");
            Router.push('/');
            toggle();
        } catch (error) { }
    };

    function searchSelect(arg) {
        // Declare variables
        var input, filter, options, i, txtValue;
        input = document.getElementById(arg);
        filter = input.value.toUpperCase();
        datalist = document.getElementById("country_list");
        options = datalist.getElementsByTagName('option');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < options.length; i++) {
            txtValue = options[i].text;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                options[i].style.display = "";
            } else {
                options[i].style.display = "none";
            }
        }
    }

    return (

        <div>
            <Head>
                <title>TripzyGo - Visa</title>
                <meta name="description" content="TripzyGo International is the Best Travel Agency in Gurgaon that offers the best holiday packages at affordable prices. Book your customized best tour packages." />
                <meta name="keywords" content="best tour packages, best travel agency in gurgaon, best holiday packages" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/icon.png" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            </Head>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <script>
                AOS.init();
            </script>

            {/* <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(images/visa/visa.jpg)" }}>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content" style={{textAlign:"left"}}>
                            <h1 className="mb-3">Visa Application Process</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">
                                    

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section> */}


            <section class="search-banner landing_bannervisa  align-items-center pt-5 pb-0">
                <div class="container">
                    <div class="search-banner-in">
                        <div class="row align-items-center">
                            <div class="col-lg-9 col-md-5">
                                <div class="section-title mb-10 text-lg-start text-center">
                                    {/* <h1 class=" white" style={{fontSize:"70px"}}>Want Visa Quickly ?</h1> */}
                                    <h3 class=" white" style={{fontSize:"44px"}}>Get Your Visa With Our Quick and Easy Application Process</h3>
                                </div>
                            </div>
                            <div class="col-sm-3 col-10 col-lg-3 ps-4 mb-4 col-md-6" id="formresp">
                                <div class="search-banner-list">
                                    <div aria-labelledby="tour-tab" class="tab-pane fade active show" id="tour" role="tabpanel">
                                        <div class="book-form">
                                            <div class="row d-flex align-items-center justify-content-between">
                                                <div class="row" style={{ padding: "0px 0px 0px 10px" }}>
                                                    <form method="post" id="frmSubmit" onSubmit={handleSubmit}>
                                                        <p
                                                            style={{ textAlign: "center", fontWeight: "500", fontSize: "14px", marginBottom: "10px" }}>
                                                            The Fastest & Easiest Way To Get Your Visa!</p>
                                                        <div class="form-group mb-2">
                                                            <input type="text" oninput="searchSelect(cust_destination)" name="cust_destination" list = "country_list" value={cust_destination} className="form-control" id="cust_destination" placeholder="Your Destination"  onChange={(e) => setCust_Destination(e.target.value)} required />
                                                                <datalist id = "country_list">
                                                                <option value="India">India</option>
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                                <option value="Cameroon">Cameroon</option>
                                                                <option value="Canada">Canada</option>
                                                                <option value="Cape Verde">Cape Verde</option>
                                                                <option value="Cayman Islands">Cayman Islands</option>
                                                                <option value="Central African Republic">Central African Republic</option>
                                                                <option value="Chad">Chad</option>
                                                                <option value="Chile">Chile</option>
                                                                <option value="China">China</option>
                                                                <option value="Christmas Island">Christmas Island</option>
                                                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                                <option value="Colombia">Colombia</option>
                                                                <option value="Comoros">Comoros</option>
                                                                <option value="Congo">Congo</option>
                                                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                                                <option value="Cook Islands">Cook Islands</option>
                                                                <option value="Costa Rica">Costa Rica</option>
                                                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                                <option value="Croatia">Croatia</option>
                                                                <option value="Cuba">Cuba</option>
                                                                <option value="Cyprus">Cyprus</option>
                                                                <option value="Czech Republic">Czech Republic</option>
                                                                <option value="Denmark">Denmark</option>
                                                                <option value="Djibouti">Djibouti</option>
                                                                <option value="Dominica">Dominica</option>
                                                                <option value="Dominican Republic">Dominican Republic</option>
                                                                <option value="Ecuador">Ecuador</option>
                                                                <option value="Egypt">Egypt</option>
                                                                <option value="El Salvador">El Salvador</option>
                                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                <option value="Eritrea">Eritrea</option>
                                                                <option value="Estonia">Estonia</option>
                                                                <option value="Ethiopia">Ethiopia</option>
                                                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                                <option value="Faroe Islands">Faroe Islands</option>
                                                                <option value="Fiji">Fiji</option>
                                                                <option value="Finland">Finland</option>
                                                                <option value="France">France</option>
                                                                <option value="French Guiana">French Guiana</option>
                                                                <option value="French Polynesia">French Polynesia</option>
                                                                <option value="French Southern Territories">French Southern Territories</option>
                                                                <option value="Gabon">Gabon</option>
                                                                <option value="Gambia">Gambia</option>
                                                                <option value="Georgia">Georgia</option>
                                                                <option value="Germany">Germany</option>
                                                                <option value="Ghana">Ghana</option>
                                                                <option value="Gibraltar">Gibraltar</option>
                                                                <option value="Greece">Greece</option>
                                                                <option value="Greenland">Greenland</option>
                                                                <option value="Grenada">Grenada</option>
                                                                <option value="Guadeloupe">Guadeloupe</option>
                                                                <option value="Guam">Guam</option>
                                                                <option value="Guatemala">Guatemala</option>
                                                                <option value="Guernsey">Guernsey</option>
                                                                <option value="Guinea">Guinea</option>
                                                                <option value="Guinea-bissau">Guinea-bissau</option>
                                                                <option value="Guyana">Guyana</option>
                                                                <option value="Haiti">Haiti</option>
                                                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                                                <option value="Honduras">Honduras</option>
                                                                <option value="Hong Kong">Hong Kong</option>
                                                                <option value="Hungary">Hungary</option>
                                                                <option value="Iceland">Iceland</option>
                                                                <option value="Indonesia">Indonesia</option>
                                                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                                <option value="Iraq">Iraq</option>
                                                                <option value="Ireland">Ireland</option>
                                                                <option value="Isle of Man">Isle of Man</option>
                                                                <option value="Israel">Israel</option>
                                                                <option value="Italy">Italy</option>
                                                                <option value="Jamaica">Jamaica</option>
                                                                <option value="Japan">Japan</option>
                                                                <option value="Jersey">Jersey</option>
                                                                <option value="Jordan">Jordan</option>
                                                                <option value="Kazakhstan">Kazakhstan</option>
                                                                <option value="Kenya">Kenya</option>
                                                                <option value="Kiribati">Kiribati</option>
                                                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                                                <option value="Korea, Republic of">Korea, Republic of</option>
                                                                <option value="Kuwait">Kuwait</option>
                                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                                <option value="Latvia">Latvia</option>
                                                                <option value="Lebanon">Lebanon</option>
                                                                <option value="Lesotho">Lesotho</option>
                                                                <option value="Liberia">Liberia</option>
                                                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                                <option value="Liechtenstein">Liechtenstein</option>
                                                                <option value="Lithuania">Lithuania</option>
                                                                <option value="Luxembourg">Luxembourg</option>
                                                                <option value="Macao">Macao</option>
                                                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                                                <option value="Madagascar">Madagascar</option>
                                                                <option value="Malawi">Malawi</option>
                                                                <option value="Malaysia">Malaysia</option>
                                                                <option value="Maldives">Maldives</option>
                                                                <option value="Mali">Mali</option>
                                                                <option value="Malta">Malta</option>
                                                                <option value="Marshall Islands">Marshall Islands</option>
                                                                <option value="Martinique">Martinique</option>
                                                                <option value="Mauritania">Mauritania</option>
                                                                <option value="Mauritius">Mauritius</option>
                                                                <option value="Mayotte">Mayotte</option>
                                                                <option value="Mexico">Mexico</option>
                                                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                                <option value="Monaco">Monaco</option>
                                                                <option value="Mongolia">Mongolia</option>
                                                                <option value="Montenegro">Montenegro</option>
                                                                <option value="Montserrat">Montserrat</option>
                                                                <option value="Morocco">Morocco</option>
                                                                <option value="Mozambique">Mozambique</option>
                                                                <option value="Myanmar">Myanmar</option>
                                                                <option value="Namibia">Namibia</option>
                                                                <option value="Nauru">Nauru</option>
                                                                <option value="Nepal">Nepal</option>
                                                                <option value="Netherlands">Netherlands</option>
                                                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                                <option value="New Caledonia">New Caledonia</option>
                                                                <option value="New Zealand">New Zealand</option>
                                                                <option value="Nicaragua">Nicaragua</option>
                                                                <option value="Niger">Niger</option>
                                                                <option value="Nigeria">Nigeria</option>
                                                                <option value="Niue">Niue</option>
                                                                <option value="Norfolk Island">Norfolk Island</option>
                                                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                <option value="Norway">Norway</option>
                                                                <option value="Oman">Oman</option>
                                                                <option value="Pakistan">Pakistan</option>
                                                                <option value="Palau">Palau</option>
                                                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                                                <option value="Panama">Panama</option>
                                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                                <option value="Paraguay">Paraguay</option>
                                                                <option value="Peru">Peru</option>
                                                                <option value="Philippines">Philippines</option>
                                                                <option value="Pitcairn">Pitcairn</option>
                                                                <option value="Poland">Poland</option>
                                                                <option value="Portugal">Portugal</option>
                                                                <option value="Puerto Rico">Puerto Rico</option>
                                                                <option value="Qatar">Qatar</option>
                                                                <option value="Reunion">Reunion</option>
                                                                <option value="Romania">Romania</option>
                                                                <option value="Russian Federation">Russian Federation</option>
                                                                <option value="Rwanda">Rwanda</option>
                                                                <option value="Saint Helena">Saint Helena</option>
                                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                                <option value="Saint Lucia">Saint Lucia</option>
                                                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                                                <option value="Samoa">Samoa</option>
                                                                <option value="San Marino">San Marino</option>
                                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                                <option value="Senegal">Senegal</option>
                                                                <option value="Serbia">Serbia</option>
                                                                <option value="Seychelles">Seychelles</option>
                                                                <option value="Sierra Leone">Sierra Leone</option>
                                                                <option value="Singapore">Singapore</option>
                                                                <option value="Slovakia">Slovakia</option>
                                                                <option value="Slovenia">Slovenia</option>
                                                                <option value="Solomon Islands">Solomon Islands</option>
                                                                <option value="Somalia">Somalia</option>
                                                                <option value="South Africa">South Africa</option>
                                                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                                                <option value="Spain">Spain</option>
                                                                <option value="Sri Lanka">Sri Lanka</option>
                                                                <option value="Sudan">Sudan</option>
                                                                <option value="Suriname">Suriname</option>
                                                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                                <option value="Swaziland">Swaziland</option>
                                                                <option value="Sweden">Sweden</option>
                                                                <option value="Switzerland">Switzerland</option>
                                                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                                <option value="Taiwan">Taiwan</option>
                                                                <option value="Tajikistan">Tajikistan</option>
                                                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                                <option value="Thailand">Thailand</option>
                                                                <option value="Timor-leste">Timor-leste</option>
                                                                <option value="Togo">Togo</option>
                                                                <option value="Tokelau">Tokelau</option>
                                                                <option value="Tonga">Tonga</option>
                                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                                <option value="Tunisia">Tunisia</option>
                                                                <option value="Turkey">Turkey</option>
                                                                <option value="Turkmenistan">Turkmenistan</option>
                                                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                                <option value="Tuvalu">Tuvalu</option>
                                                                <option value="Uganda">Uganda</option>
                                                                <option value="Ukraine">Ukraine</option>
                                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                                <option value="United Kingdom">United Kingdom</option>
                                                                <option value="United States">United States</option>
                                                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                                <option value="Uruguay">Uruguay</option>
                                                                <option value="Uzbekistan">Uzbekistan</option>
                                                                <option value="Vanuatu">Vanuatu</option>
                                                                <option value="Venezuela">Venezuela</option>
                                                                <option value="Viet Nam">Viet Nam</option>
                                                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                                <option value="Western Sahara">Western Sahara</option>
                                                                <option value="Yemen">Yemen</option>
                                                                <option value="Zambia">Zambia</option>
                                                                <option value="Zimbabwe">Zimbabwe</option>
                                                            </datalist>
                                                        </div>
                                                        <div class="form-group mb-2">
                                                            <input type="text" oninput="searchSelect(citizenship)" list = "country_list" name="citizenship" value={citizenship} className="form-control" id="citizenship" placeholder="Your Citizenship"  onChange={(e) => setCitizenship(e.target.value)} required />
                                                        </div>
                                                        <div class="form-group mb-1">
                                                            <div className='d-flex col-lg-12 col-sm-12 col-md-12 px-0'>
                                                                <div className="col-lg-4 col-md-4 col-sm-2 px-1" style={{ width: "35%" }}>
                                                                    <select name="countryCode" className='col-lg-12 mb-0 px-0'
                                                                        value={country_code} onChange={(e) => { setCountryCode(e.target.value) }} required >

                                                                        <option data-countryCode="DZ" value="+213">+213</option>
                                                                        <option data-countryCode="AD" value="+376">+376</option>
                                                                        <option data-countryCode="AO" value="+244">+244</option>
                                                                        <option data-countryCode="AI" value="+1264">+1264</option>
                                                                        <option data-countryCode="AG" value="+1268">+1268</option>
                                                                        <option data-countryCode="AR" value="+54">+54</option>
                                                                        <option data-countryCode="AM" value="+374">+374</option>
                                                                        <option data-countryCode="AW" value="+297">+297</option>
                                                                        <option data-countryCode="AU" value="+61">+61</option>
                                                                        <option data-countryCode="AT" value="+43">+43</option>
                                                                        <option data-countryCode="AZ" value="+994">+994</option>
                                                                        <option data-countryCode="BS" value="+1242">+1242</option>
                                                                        <option data-countryCode="BH" value="+973">+973</option>
                                                                        <option data-countryCode="BD" value="+880">+880</option>
                                                                        <option data-countryCode="BB" value="+1246">+1246</option>
                                                                        <option data-countryCode="BY" value="+375">+375</option>
                                                                        <option data-countryCode="BE" value="+32">+32</option>
                                                                        <option data-countryCode="BZ" value="+501">+501</option>
                                                                        <option data-countryCode="BJ" value="+229">+229</option>
                                                                        <option data-countryCode="BM" value="+1441">+1441</option>
                                                                        <option data-countryCode="BT" value="+975">+975</option>
                                                                        <option data-countryCode="BO" value="+591">+591</option>
                                                                        <option data-countryCode="BA" value="+387">+387</option>
                                                                        <option data-countryCode="BW" value="+267">+267</option>
                                                                        <option data-countryCode="BR" value="+55">+55</option>
                                                                        <option data-countryCode="BN" value="+673">+673</option>
                                                                        <option data-countryCode="BG" value="+359">+359</option>
                                                                        <option data-countryCode="BF" value="+226">+226</option>
                                                                        <option data-countryCode="BI" value="+257">+257</option>
                                                                        <option data-countryCode="KH" value="+855">+855</option>
                                                                        <option data-countryCode="CM" value="+237">+237</option>
                                                                        <option data-countryCode="CA" value="+1">+1</option>
                                                                        <option data-countryCode="CV" value="+238">+238</option>
                                                                        <option data-countryCode="KY" value="+1345">+1345</option>
                                                                        <option data-countryCode="CF" value="+236">+236</option>
                                                                        <option data-countryCode="CL" value="+56">+56</option>
                                                                        <option data-countryCode="CN" value="+86">+86</option>
                                                                        <option data-countryCode="CO" value="+57">+57</option>
                                                                        <option data-countryCode="KM" value="+269">+269</option>
                                                                        <option data-countryCode="CG" value="+242">+242</option>
                                                                        <option data-countryCode="CK" value="+682">+682</option>
                                                                        <option data-countryCode="CR" value="+506">+506</option>
                                                                        <option data-countryCode="HR" value="+385">+385</option>
                                                                        <option data-countryCode="CU" value="+53">+53</option>
                                                                        <option data-countryCode="CY" value="+90392">+90392</option>
                                                                        <option data-countryCode="CY" value="+357">+357</option>
                                                                        <option data-countryCode="CZ" value="+42">+42</option>
                                                                        <option data-countryCode="DK" value="+45">+45</option>
                                                                        <option data-countryCode="DJ" value="+253">+253</option>
                                                                        <option data-countryCode="DM" value="+1809">+1809</option>
                                                                        <option data-countryCode="DO" value="+1809">+1809</option>
                                                                        <option data-countryCode="EC" value="+593">+593</option>
                                                                        <option data-countryCode="EG" value="+20">+20</option>
                                                                        <option data-countryCode="SV" value="+503">+503</option>
                                                                        <option data-countryCode="GQ" value="+240">+240</option>
                                                                        <option data-countryCode="ER" value="+291">+291</option>
                                                                        <option data-countryCode="EE" value="+372">+372</option>
                                                                        <option data-countryCode="ET" value="+251">+251</option>
                                                                        <option data-countryCode="FK" value="+500">+500</option>
                                                                        <option data-countryCode="FO" value="+298">+298</option>
                                                                        <option data-countryCode="FJ" value="+679">+679</option>
                                                                        <option data-countryCode="FI" value="+358">+358</option>
                                                                        <option data-countryCode="FR" value="+33">+33</option>
                                                                        <option data-countryCode="GF" value="+594">+594</option>
                                                                        <option data-countryCode="PF" value="+689">+689</option>
                                                                        <option data-countryCode="GA" value="+241">+241</option>
                                                                        <option data-countryCode="GM" value="+220">+220</option>
                                                                        <option data-countryCode="GE" value="+7880">+7880</option>
                                                                        <option data-countryCode="DE" value="+49">+49</option>
                                                                        <option data-countryCode="GH" value="+233">+233</option>
                                                                        <option data-countryCode="GI" value="+350">+350</option>
                                                                        <option data-countryCode="GR" value="+30">+30</option>
                                                                        <option data-countryCode="GL" value="+299">+299</option>
                                                                        <option data-countryCode="GD" value="+1473">+1473</option>
                                                                        <option data-countryCode="GP" value="+590">+590</option>
                                                                        <option data-countryCode="GU" value="+671">+671</option>
                                                                        <option data-countryCode="GT" value="+502">+502</option>
                                                                        <option data-countryCode="GN" value="+224">+224</option>
                                                                        <option data-countryCode="GW" value="+245">+245</option>
                                                                        <option data-countryCode="GY" value="+592">+592</option>
                                                                        <option data-countryCode="HT" value="+509">+509</option>
                                                                        <option data-countryCode="HN" value="+504">+504</option>
                                                                        <option data-countryCode="HK" value="+852">+852</option>
                                                                        <option data-countryCode="HU" value="+36">+36</option>
                                                                        <option data-countryCode="IS" value="+354">+354</option>
                                                                        <option selected value="+91">+91</option>
                                                                        <option data-countryCode="ID" value="+62">+62</option>
                                                                        <option data-countryCode="IR" value="+98">+98</option>
                                                                        <option data-countryCode="IQ" value="+964">+964</option>
                                                                        <option data-countryCode="IE" value="+353">+353</option>
                                                                        <option data-countryCode="IL" value="+972">+972</option>
                                                                        <option data-countryCode="IT" value="+39">+39</option>
                                                                        <option data-countryCode="JM" value="+1876">+1876</option>
                                                                        <option data-countryCode="JP" value="+81">+81</option>
                                                                        <option data-countryCode="JO" value="+962">+962</option>
                                                                        <option data-countryCode="KZ" value="+7">+7</option>
                                                                        <option data-countryCode="KE" value="+254">+254</option>
                                                                        <option data-countryCode="KI" value="+686">+686</option>
                                                                        <option data-countryCode="KP" value="+850">+850</option>
                                                                        <option data-countryCode="KR" value="+82">+82</option>
                                                                        <option data-countryCode="KW" value="+965">+965</option>
                                                                        <option data-countryCode="KG" value="+996">+996</option>
                                                                        <option data-countryCode="LA" value="+856">+856</option>
                                                                        <option data-countryCode="LV" value="+371">+371</option>
                                                                        <option data-countryCode="LB" value="+961">+961</option>
                                                                        <option data-countryCode="LS" value="+266">+266</option>
                                                                        <option data-countryCode="LR" value="+231">+231</option>
                                                                        <option data-countryCode="LY" value="+218">+218</option>
                                                                        <option data-countryCode="LI" value="+417">+417</option>
                                                                        <option data-countryCode="LT" value="+370">+370</option>
                                                                        <option data-countryCode="LU" value="+352">+352</option>
                                                                        <option data-countryCode="MO" value="+853">+853</option>
                                                                        <option data-countryCode="MK" value="+389">+389</option>
                                                                        <option data-countryCode="MG" value="+261">+261</option>
                                                                        <option data-countryCode="MW" value="+265">+265</option>
                                                                        <option data-countryCode="MY" value="+60">+60</option>
                                                                        <option data-countryCode="MV" value="+960">+960</option>
                                                                        <option data-countryCode="ML" value="+223">+223</option>
                                                                        <option data-countryCode="MT" value="+356">+356</option>
                                                                        <option data-countryCode="MH" value="+692">+692</option>
                                                                        <option data-countryCode="MQ" value="+596">+596</option>
                                                                        <option data-countryCode="MR" value="+222">+222</option>
                                                                        <option data-countryCode="YT" value="+269">+269</option>
                                                                        <option data-countryCode="MX" value="+52">+52</option>
                                                                        <option data-countryCode="FM" value="+691">+691</option>
                                                                        <option data-countryCode="MD" value="+373">+373</option>
                                                                        <option data-countryCode="MC" value="+377">+377</option>
                                                                        <option data-countryCode="MN" value="+976">+976</option>
                                                                        <option data-countryCode="MS" value="+1664">+1664</option>
                                                                        <option data-countryCode="MA" value="+212">+212</option>
                                                                        <option data-countryCode="MZ" value="+258">+258</option>
                                                                        <option data-countryCode="MN" value="+95">+95</option>
                                                                        <option data-countryCode="NA" value="+264">+264</option>
                                                                        <option data-countryCode="NR" value="+674">+674</option>
                                                                        <option data-countryCode="NP" value="+977">+977</option>
                                                                        <option data-countryCode="NL" value="+31">+31</option>
                                                                        <option data-countryCode="NC" value="+687">+687</option>
                                                                        <option data-countryCode="NZ" value="+64">+64</option>
                                                                        <option data-countryCode="NI" value="+505">+505</option>
                                                                        <option data-countryCode="NE" value="+227">+227</option>
                                                                        <option data-countryCode="NG" value="+234">+234</option>
                                                                        <option data-countryCode="NU" value="+683">+683</option>
                                                                        <option data-countryCode="NF" value="+672">+672</option>
                                                                        <option data-countryCode="NP" value="+670">+670</option>
                                                                        <option data-countryCode="NO" value="+47">+47</option>
                                                                        <option data-countryCode="OM" value="+968">+968</option>
                                                                        <option data-countryCode="PW" value="+680">+680</option>
                                                                        <option data-countryCode="PA" value="+507">+507</option>
                                                                        <option data-countryCode="PG" value="+675">+675</option>
                                                                        <option data-countryCode="PY" value="+595">+595</option>
                                                                        <option data-countryCode="PE" value="+51">+51</option>
                                                                        <option data-countryCode="PH" value="+63">+63</option>
                                                                        <option data-countryCode="PL" value="+48">+48</option>
                                                                        <option data-countryCode="PT" value="+351">+351</option>
                                                                        <option data-countryCode="PR" value="+1787">+1787</option>
                                                                        <option data-countryCode="QA" value="+974">+974</option>
                                                                        <option data-countryCode="RE" value="+262">+262</option>
                                                                        <option data-countryCode="RO" value="+40">+40</option>
                                                                        <option data-countryCode="RU" value="+7">+7</option>
                                                                        <option data-countryCode="RW" value="+250">+250</option>
                                                                        <option data-countryCode="SM" value="+378">+378</option>
                                                                        <option data-countryCode="ST" value="+239">+239</option>
                                                                        <option data-countryCode="SA" value="+966">+966</option>
                                                                        <option data-countryCode="SN" value="+221">+221</option>
                                                                        <option data-countryCode="CS" value="+381">+381</option>
                                                                        <option data-countryCode="SC" value="+248">+248</option>
                                                                        <option data-countryCode="SL" value="+232">+232</option>
                                                                        <option data-countryCode="SG" value="+65">+65</option>
                                                                        <option data-countryCode="SK" value="+421">+421</option>
                                                                        <option data-countryCode="SI" value="+386">+386</option>
                                                                        <option data-countryCode="SB" value="+677">+677</option>
                                                                        <option data-countryCode="SO" value="+252">+252</option>
                                                                        <option data-countryCode="ZA" value="+27">+27</option>
                                                                        <option data-countryCode="ES" value="+34">+34</option>
                                                                        <option data-countryCode="LK" value="+94">+94</option>
                                                                        <option data-countryCode="SH" value="+290">+290</option>
                                                                        <option data-countryCode="KN" value="+1869">+1869</option>
                                                                        <option data-countryCode="SC" value="+1758">+1758</option>
                                                                        <option data-countryCode="SD" value="+249">+249</option>
                                                                        <option data-countryCode="SR" value="+597">+597</option>
                                                                        <option data-countryCode="SZ" value="+268">+268</option>
                                                                        <option data-countryCode="SE" value="+46">+46</option>
                                                                        <option data-countryCode="CH" value="+41">+41</option>
                                                                        <option data-countryCode="SI" value="+963">+963</option>
                                                                        <option data-countryCode="TW" value="+886">+886</option>
                                                                        <option data-countryCode="TJ" value="+7">+7</option>
                                                                        <option data-countryCode="TH" value="+66">+66</option>
                                                                        <option data-countryCode="TG" value="+228">+228</option>
                                                                        <option data-countryCode="TO" value="+676">+676</option>
                                                                        <option data-countryCode="TT" value="+1868">+1868</option>
                                                                        <option data-countryCode="TN" value="+216">+216</option>
                                                                        <option data-countryCode="TR" value="+90">+90</option>
                                                                        <option data-countryCode="TM" value="+7"> +7</option>
                                                                        <option data-countryCode="TM" value="+993">+993</option>
                                                                        <option data-countryCode="TC" value="+1649">+1649</option>
                                                                        <option data-countryCode="TV" value="+688">+688</option>
                                                                        <option data-countryCode="UG" value="+256">+256</option>
                                                                        <option data-countryCode="GB" value="+44">+44</option>
                                                                        <option data-countryCode="UA" value="+380">+380</option>
                                                                        <option data-countryCode="AE" value="+971">+971</option>
                                                                        <option data-countryCode="UY" value="+598">598</option>
                                                                        <option data-countryCode="US" value="+1">+1</option>
                                                                        <option data-countryCode="UZ" value="+7">+7</option>
                                                                        <option data-countryCode="VU" value="+678">+678</option>
                                                                        <option data-countryCode="VA" value="+379">+379</option>
                                                                        <option data-countryCode="VE" value="+58">+58</option>
                                                                        <option data-countryCode="VN" value="+84">+84</option>
                                                                        <option data-countryCode="VG" value="+84">+1284</option>
                                                                        <option data-countryCode="VI" value="+84">+1340</option>
                                                                        <option data-countryCode="WF" value="+681">+681</option>
                                                                        <option data-countryCode="YE" value="+969">+969</option>
                                                                        <option data-countryCode="YE" value="+967">+967</option>
                                                                        <option data-countryCode="ZM" value="+260">+260</option>
                                                                        <option data-countryCode="ZW" value="+263">+263</option>

                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-8 col-md-8 col-sm-10 mb-1 px-1">
                                                                    <input type="tel" pattern="[0-9][0-9]{9}" maxLength={10} name="phone_no" value={phone_no} className="form-control" id="phone_no" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group mb-2">
                                                            <input type="text" oninput="searchSelect(citizenship)" list = "country_list" name="residence" value={residence} className="form-control" id="residence" placeholder="Your Residence" onChange={(e) => setResidence(e.target.value)} required />
                                                        </div>
                                                        {/* <div class="form-group mb-2">
                                                            <input type="text" name="preferred_destination" value={preferred_destination} className="form-control" id="passangers" placeholder="Preferred Destinations" onChange={(e) => setDestination(e.target.value)} required />
                                                        </div> */}
                                                        <div className="form-group mb-2">
                                                            <input type="date" name="departureDate"  className="form-control c2" id="departureDate" value={departureDate} placeholder="Departure Date:&nbsp;" onChange={(e) => setDepartureDate(e.target.value)} required />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <input type="date" name="returnDate" className="form-control c2" id="returnDate" value={returnDate} placeholder="Return Date:&nbsp;" onChange={(e) => setReturnDate(e.target.value)} required />
                                                        </div>
                                                        {/* <div class="form-group mb-2">
                                                            <input type="number" name="budget" value={budget} class="form-control" pattern="[0-9]" id="budget" placeholder="Budget" min="1" onChange={(e) => setBudget(e.target.value)} required />
                                                        </div> */}
                                                        <div className="mb-2 whatsapp-optIn-container">
                                                            <input
                                                                type="checkbox"
                                                                name="whatsapp"
                                                                value="whatsapp"
                                                                checked={opt}
                                                                onChange={(e) => setOpt(e.target.false)}
                                                            />&nbsp;
                                                            <span className="whatsapp-optIn" style={{ fontSize: "11px" }}>Let us send you updates on WhatsApp</span>
                                                        </div>
                                                        <div class="comment-btn text-center">
                                                            <input type="submit" class="nir-btn2" data-callback='submit' id="submit2" value="I'm Interested" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="landing-overlay"></div>
                <div id="particles-js" class="zindex3"></div>
            </section >


           
                <section className='container align-items-center pt-5 pb-4'>
                <div className="section-title mb-6  mx-auto text-center">
                            {/* <h4 className="mb-1 theme1">Soulmate Special</h4> */}
                            <h3 className="mb-1 linehr" style={{ fontSize: "35px" }}>&nbsp;How To<span className="theme"> Apply&nbsp;</span></h3>
                            {/* <div>For the perfect start to your new life together, we have you covered with the<br /> best romantic honeymoon destinations</div> */}
                        </div>
                    <div class="row">
                        <div class="col-md-4 my-4 ">
                            <a class="stretched-link text-dark">
                                <div>
                                    <div class="font-weight-bold circle rounded-circle d-flex align-items-center justify-content-center mx-auto my-3"
                                        style={{ width: "20%", height: "10%" }}>
                                        <img src='/images/visa/customer-ser.png'></img>
                                    </div>
                                    <div class="px-3 text-center pb-3">
                                        <h4 style={{ fontWeight: "500" }}>Expert Will Call You</h4>
                                        <p class="text-muted my-3">We will give you a call to gather all the necessary document details.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 my-4 ">
                            <a class="stretched-link text-dark">
                                <div >
                                    <div class="font-weight-bold circle rounded-circle d-flex align-items-center justify-content-center mx-auto my-3"
                                        style={{ width: "20%", height: "10%" }}>
                                        <img src='/images/visa/application.png'></img>

                                    </div>
                                    <div class="px-3 text-center pb-3">
                                        <h4 style={{ fontWeight: "500" }}>Submit Application</h4>
                                        <p class="text-muted my-3">With your approved visa in hand, you're ready to explore the world.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 my-4 ">
                            <a  class="stretched-link text-dark">
                                <div>
                                    <div class="font-weight-bold circle rounded-circle d-flex align-items-center justify-content-center mx-auto my-3"
                                        style={{ width: "20%", height: "10%" }}>
                                        <img src='/images/visa/boarding-pass.png'></img>

                                    </div>
                                    <div class="px-3 text-center pb-3">
                                        <h4 style={{ fontWeight: "500" }}>Get Your Visa</h4>
                                        <p class="text-muted my-3">Download your approved visa, and you're ready to go!</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
          

            <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6  mx-auto text-center ">
                            {/* <h4 className="mb-1 theme1">Soulmate Special</h4> */}
                            <h3 className="mb-1 linehr" style={{ fontSize: "35px" }}>&nbsp;On-Arrival Visas <span className="theme"> for Indians&nbsp;</span></h3>
                            {/* <div>Simplify your next international trip with Visa on Arrival - a stress-free entry authorization issued by the destination country's consulate or immigration department upon your arrival.</div> */}
                        </div>
                        <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickHoneymoonSlider
                                    package1Image="/images/visa/thailand.jpg"
                                    package2Image="/images/visa/maldives.jpg"
                                    package3Image="/images/visa/bali.jpg"
                                    package4Image="/images/visa/jordan.jpg"
                                    package5Image="/images/visa/cambodia.jpg"
                                    package6Image="/images/visa/srilanka.jpg"
                                    package1Name="Thailand"
                                    package2Name="Maldives"
                                    package3Name="Bali"
                                    package4Name="Jordan"
                                    package5Name="Cambodia"
                                    package6Name="Sri Lanka"
                                    // package1Link="/international-tour-packages/dubai-tour-packages"
                                    // package2Link="/international-tour-packages/maldives-tour-packages"
                                    // package3Link="/international-tour-packages/bali-tour-packages"
                                    // package4Link="/international-tour-packages/europe-tour-packages"
                                    // package5Link="/india-tour-packages/shimla-tour-packages"
                                    // package6Link="/india-tour-packages/kerala-tour-packages" 
                                    />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trending recent-articles pb-4 pt-4 "  >
                <div className="container delightfulContainer">
                    <div className="section-title mb-6 w-75 mx-auto text-center">
                        <h2 className="mb-1 linehr" style={{ fontSize: "35px" }}>&nbsp;Trending <span className="theme">Destinations&nbsp;</span></h2>
                        {/* <div>Let us plan that Dubai Holiday you&#39;ve always dreamed of!</div> */}
                    </div>
                    <div className="recent-articles-inner">
                        <div className="row">
                            <div className="col-lg-2 col-md-6">
                                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                                    <div className="trend-image">
                                        <img src="/images/visa/trending/dubai.jpg" />
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content">
                                            <h4 style={{ fontSize: "18px" }}>Dubai</h4>
                                            <p style={{fontWeight:"500",color:"black"}}>Price : <span>$80 USD</span></p>
                                            <p style={{fontWeight:"500" ,color:"black"}}>Duration : <span>2 Working Days</span></p>

                                            <div className="entry-meta d-flex align-items-center justify-content-between">
                                                <div className="entry-button d-flex align-items-center mb-2">
                                                    {/* <a href="/packages/fantastic-travel-package-to-dubai-from-india" target="_blank" className="nir-btn2">Apply Now</a> */}
                                                    <VisaModal buttonLabel="Apply Now" labelSize="12px"></VisaModal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                                    <div className="trend-image">
                                        <img src="/images/visa/trending/singapore.jpg" />
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content">
                                            <h4 style={{ fontSize: "18px" }}>Singapore</h4>
                                            <p style={{fontWeight:"500",color:"black"}}>Price : <span>$35 USD</span></p>
                                            <p style={{fontWeight:"500" ,color:"black"}}>Duration : <span>2 Working Days</span></p>

                                            <div className="entry-meta d-flex align-items-center justify-content-between">
                                                <div className="entry-button d-flex align-items-center mb-2">
                                                <VisaModal buttonLabel="Apply Now" labelSize="12px"></VisaModal>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                                    <div className="trend-image">
                                        <img src="/images/visa/trending/malaysia.jpg" />
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content">
                                            <h4 style={{ fontSize: "18px" }}>Malaysia</h4>
                                            <p style={{fontWeight:"500",color:"black"}}>Price : <span>$42 USD</span></p>
                                            <p style={{fontWeight:"500" ,color:"black"}}>Duration : <span>2 Working Days</span></p>

                                            <div className="entry-meta d-flex align-items-center justify-content-between">
                                                <div className="entry-button d-flex align-items-center mb-2">
                                                <VisaModal buttonLabel="Apply Now" labelSize="12px"></VisaModal>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                                    <div className="trend-image">
                                        <img src="/images/visa/trending/vietnam.jpg" />
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content">
                                            <h4 style={{ fontSize: "18px" }}>Vietnam</h4>
                                            <p style={{fontWeight:"500",color:"black"}}>Price : <span>$27 USD</span></p>
                                            <p style={{fontWeight:"500" ,color:"black"}}>Duration : <span>4 Working Days</span></p>

                                            <div className="entry-meta d-flex align-items-center justify-content-between">
                                                <div className="entry-button d-flex align-items-center mb-2">
                                                <VisaModal buttonLabel="Apply Now" labelSize="12px"></VisaModal>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                                    <div className="trend-image">
                                        <img src="/images/visa/trending/egypt.jpg" />
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content">
                                            <h4 style={{ fontSize: "18px" }}>Egypt</h4>
                                            <p style={{fontWeight:"500" ,color:"black"}}>Price : <span>$30 USD</span></p>
                                            <p style={{fontWeight:"500" ,color:"black"}}>Duration : <span>2 Working Days</span></p>

                                            <div className="entry-meta d-flex align-items-center justify-content-between">
                                                <div className="entry-button d-flex align-items-center mb-2">
                                                <VisaModal buttonLabel="Apply Now" labelSize="12px"></VisaModal>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                                    <div className="trend-image">
                                        <img src="/images/visa/trending/sri lanka.jpg" />
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content">
                                            <h4 style={{ fontSize: "18px" }}>Sri Lanka</h4>
                                            <p style={{fontWeight:"500",color:"black"}}>Price : <span>$23 USD</span></p>
                                            <p style={{fontWeight:"500" ,color:"black"}}>Duration : <span>4 Working Days</span></p>

                                            <div className="entry-meta d-flex align-items-center justify-content-between">
                                                <div className="entry-button d-flex align-items-center mb-2">
                                                <VisaModal buttonLabel="Apply Now" labelSize="12px"></VisaModal>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="trending pt-0 pb-0 bg-lgrey" style={{ marginTop: "15px" }} >
            <div className="section-title mb-6 w-75 mx-auto text-center">
                        <h2 className="mb-1 linehr" style={{ fontSize: "35px" }}>&nbsp;FAQ's <span className="theme">for Visa&nbsp;</span></h2>
                        {/* <div>Let us plan that Dubai Holiday you&#39;ve always dreamed of!</div> */}
                    </div>
                <div class="container">
                    <div class="row">
                       
                        <div class="col-lg-12">
                            <div class="single-content">

                                <div class="description mb-2">
                                    <div class="row">
                                      

                                        <div className="description mb-2" >
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        {/* <h4 class="mb-2">FAQ's for Visa </h4> */}
                                                        <div className="row">
                                                        <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What is a visa and why do I need it?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">To travel to a foreign country, you need a visa. This is an official document that grants you permission to enter and remain in the country of your choice for a specific period. It's important to obtain it as it adheres to the immigration rules and regulations of the host nation.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What are the common requirements for visa application?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Obtaining a visa requires you to submit several documents and fulfill certain conditions. This includes a valid passport, an accurately filled visa form, a passport-sized photograph, evidence of financial capability, travel plan & other relevant paperwork depending on the purpose of your journey.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">How long does it take to process a visa application?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">The processing time for a visa can vary drastically depending on the country you're visiting. To avoid any issues, it's best to apply for the visa much earlier than your intended travel dates – it could take anywhere from a few days to several weeks.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What happens if my visa application is denied?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">If your visa application is rejected, you have the option to challenge the decision or start again with a new one. It's important to understand why it was denied and address any problems before reapplying. </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">How can we help you with your visa application? </h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">We can fully assist you with your visa application. All you have to do is follow the instructions provided on our website, and if you have any questions or concerns, our customer support team is available to help you.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            
                                                            </div>
                                                            {/* <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What is a visa, and why is it necessary?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Visa is an official certificate of endorsement on your passport that grants you permission to enter, stay, and leave a specific country, either permanently or temporarily. The immigration authorities of the country to which you intend to travel issue you a visa after verifying your credentials, the accuracy of your submitted visa form, and other necessary documents. Many countries, including the United Kingdom and the United States, only issue visas after an in-person interview with immigration officers. Tourist visas are the easiest to obtain of all types of visas. A visa is even emailed to you if no physical interview is required. Despite the fact that the visa is a grant of entry, your actual entry into a foreign country is subject to approval from the immigration officer at the point of entry.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Is a visa required for travel?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Yes, you certainly do for every international trip you take. Even if you have a passport, the lack of a visa to your destination country may prevent you from even boarding a flight, let alone reaching your destination. To travel to any foreign country, you must have a valid visa and now you can go for online visa application. Although some countries, such as Thailand, Cambodia, and Indonesia, offer visa-on-arrival. In this case, you must bring all necessary documents, such as proof of your hotel stay, return flight tickets, and the presence of a pre-determined amount in your bank account; only then will you be granted a visa-on-arrival. As a result, you cannot avoid the visa rules for any international travel.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">How much does it cost to process a visa?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Yes, the government of the country to which you intend to travel charges a visa processing fee. The amount varies from country to country. This fee is applicable to both regular and e-visas. If you plan to get your visa through an agent, the agent will charge a commission on top of the pre-set processing fee, which includes taxes and other fees.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What exactly is a visa on arrival?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Visa on Arrival is an authorization document issued by the consulate or immigration department of the country you are visiting only after you arrive. This saves you the time and effort of filling out a lengthy visa application form. When applying for a visa-on-arrival, keep all necessary identification documents and photographs on hand so that the immigration desk can quickly put it together and hand you over your visa. Without the necessary identification, you will be denied a visa-on-arrival. In Asia, visa-on-arrival is available to Indian citizens in Thailand, Cambodia, Maldives, Bhutan, Sri Lanka, Indonesia, Myanmar, Laos, and Macau. Serbia is in Europe, Bolivia and El Salvador are in America, Jordan and Armenia are in the Middle East, and Kenya, Mauritius, Seychelles, and Tanzania are in Africa.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">How can I check the status of my visa?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">To check your visa status online, go to the enquiry tab on the consulate website of the country you intend to visit. You may be asked to enter your application ID and passport number. In addition, if you submitted your visa forms through an agent website, you must enter your date of birth and passport number there to receive an update on its status.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What are the various types of visas?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Tourist visa is valid for 180 days and allows multiple entries, whereas a transit visa allows only one entry and is typically valid for 15 days. A business visa can be granted for a maximum of five years, allowing you to enter the country multiple times. An employment visa is typically valid for two years or until your employment contract expires. This is another multiple-entry visa. A student visa is valid for 5 years or until the end of your course, whichever is shorter. This allows you three entries per academic year.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What documents are required to obtain a tourist visa?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0"> To obtain a tourist visa, you must have a valid Indian passport with at least 6 months remaining validity. A photo identification document, such as a PAN card or voter id issued by the Indian government, proof of your financial standing, flight return tickets, and a voucher confirming your hotel stay during your tenure, among other documents. If you are staying with a friend, you must obtain an official letter of invitation from them establishing your residence for the duration of your trip.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Which countries do Indian citizens not require a visa to enter?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">They are documents issued by a government that grant permission to foreigners who wish to visit the country. Unlike passports, which serve as proof of your country of origin, visas serve as markers that specify the length of time you will be permitted to stay in the foreign country. There are several countries where Indians do not need a visa and can travel without going through the visa application process are Bhutan, Nepal, Indonesia, Seychelles (permit on arrival), Jamaica, Senegal, Serbia, Trinidad and Tobago, Haiti (for up to 90 days), Micronesia, Ecuador, Dominica, Vanuatu, Svalbard, and many more</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <br /><br />
            <script src="/js/jquery-3.5.1.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/particles.js"></script>
            <script src="/js/particlerun.js"></script>
            <script src="/js/plugin.js"></script>
            <script src="/js/custom-accordian.js"></script>
            <script src="/js/custom-nav.js"></script>
            <script src="/js/custom-navscroll.js"></script>
        </div>
    )
}
