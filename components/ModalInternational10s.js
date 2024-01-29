import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { useRouter } from 'next/router';
const url = 'https://backend.tripzygo.in/packagecontact';

function App(props) {
    const { asPath } = useRouter();                                    //add this line
    const url_destination = asPath.replace('/', '').split('-')[0];
    const [name, setName] = useState('');
    const [email_id, setEmail] = useState('');
    const [country_code, setCountry] = useState('+91');
    const [phone_no, setPhone] = useState('');
    const [next_destination, setDestination] = useState(props.props1);
    const [package_name, setPackageName] = useState(props.props3);
    const [no_of_passengers, setPassenger] = useState('');
    // const [preferred_destination, setDestination] = useState(props.props2);
    const [date_of_travel, setSdate] = useState('');
    // const [budget, setBudget] = useState('');
    const [opt, setOpt] = useState(true);
    const [modalOpen, setModalOpen] = React.useState(false);
    const currentDate = new Date().toISOString().split('T')[0];
    const [formValid, setFormValid] = useState(false);
    const toggle = () => setModalOpen(!modalOpen);
    const handlePassengerChange = (e) => {
        const inputPassengers = e.target.value;

        // Check if the input is a valid number within the range [1, 99]
        if (/^\d{1,2}$/.test(inputPassengers)) {
            const number = parseInt(inputPassengers, 10);
            if (!isNaN(number) && number >= 1 && number <= 99) {
                setPassenger(inputPassengers);
            } else {
                // Handle invalid input here, e.g., show an error message
                // and prevent setting an invalid value in the state.
            }
        } else {
            // Handle input that doesn't match the pattern (not 1 or 2 digits)
            // e.g., show an error message or take other appropriate actions.
        }
    };
    const handleOpen = () => {
        const timer = setTimeout(() => {
            toggle()
        }, 10000)
        return () => clearTimeout(timer);
    }
    useEffect(() => { handleOpen(); }, [])

    const handleContact = async (e) => {
        try {
            axios.post(url, { name, email_id, country_code, phone_no, next_destination, no_of_passengers, date_of_travel, package_name });

        } catch (error) { }
    };
    const validateForm = () => {
        // Check if all fields have values
        if (
            name !== '' &&
            email_id !== '' &&
            phone_no !== '' &&
            no_of_passengers !== '' &&
            date_of_travel !== ''
        ) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    };
    useEffect(() => {
        validateForm();
    }, [name, email_id, phone_no, no_of_passengers, date_of_travel]);
    const handleOpt = async (e) => {
        const optInUrl = `https://media.smsgupshup.com/GatewayAPI/rest?method=OPT_IN&format=json&userid=2000217680&password=ksrcbmxS&phone_number=91${phone_no}&v=1.1&auth_scheme=plain&channel=WHATSAPP`;
        const optOutUrl = `https://media.smsgupshup.com/GatewayAPI/rest?method=OPT_OUT&format=json&userid=2000217680&password=ksrcbmxS&phone_number=91${phone_no}&v=1.1&auth_scheme=plain&channel=WHATSAPP`;
        const thankUrl = `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000217680&password=ksrcbmxS&send_to=${phone_no}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+%2A${name}%2A%2C%0A%0A%2AThank+you+for+contacting+us%21%2A+Our+travel+expert+will+contact+you+shortly%21%F0%9F%98%87%0A%0ABe+Ready+To+Save+Huge+On+Flights+%E2%9C%88%EF%B8%8F%2C+Stays+%F0%9F%8F%A8%2C++Holiday+%F0%9F%9B%84%2C+%26+Cabs+for+your+next+trip+to+%2A${next_destination}%2A+%F0%9F%9A%95%0A%0APlan+Your+Trip+with+Us+Now%21%F0%9F%98%89`;

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
            toggle();
            // Router.push('/thank-you');

        } catch (error) { }
    };

    return (
        <div>
            {/* <div class="nir-btn col-lg-12 py-1 btn_responsive" onClick={toggle} style={{ fontSize: props.labelSize, marginLeft: props.Left, marginRight: props.Right, top: props.top, width: props.width, marginTop: props.Top }}>{props.buttonLabel}</div> */}
            <Modal toggle={toggle} isOpen={modalOpen} id="LandingPageModal">
                {/* <img className="homeModalImage" src="/images/popup/popup.jpg"></img> */}

                <div className=" modal-header border-0">
                    <h5 className=" modal-title" id="exampleModalLabel" style={{ fontWeight: "600", fontSize: "18px", margin: "auto" }}>
                        {props.props2}  {props.label}
                    </h5>
                    <button style={{ background: "transparent" }}
                        aria-label="Close"
                        className=" close"
                        type="buFly high anytime, to anywhere for anythingtton"
                        onClick={() => setModalOpen(!modalOpen)}>
                        <span aria-hidden={true}><i class="fa fa-close"></i></span>
                    </button>
                </div>
                <ModalBody >
                    <div class="sidebar-item px-4">
                        <div class="form-content rounded overflow-hidden" >
                            <form method="post" action="#" onSubmit={handleSubmit} name="contactform2" >
                              <div className="form-group mb-2">
                                        <input type="text" name="first_name" value={name} className="form-control" id="fullname" placeholder="Name" onChange={(e) => setName(e.target.value)} required />

                                    </div>

                                    <div className="form-group mb-2">
                                        <input type="email" name="email" value={email_id} className="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                    </div>

                                    <div className="form-group">
                                        <div className="row ">
                                            <div className='d-flex col-lg-12 col-sm-12 col-md-12'>
                                                <div className="col-lg-4 col-md-4 col-sm-2 px-0" style={{ width: "35%" }}>

                                                    <select name="countryCode" className='col-lg-12 px-0'
                                                        value={country_code} onChange={(e) => { setCountry(e.target.value) }} required >

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


                                                <div className="col-lg-8 col-md-8 col-sm-10 px-0 ps-2">

                                                    <input type="tel" pattern="[0-9][0-9]{9}" maxLength={10} name="phone" value={phone_no} className="form-control" id="phnumber" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="form-group mb-2">
                                        <input type="number" name="no_of_passengers" value={no_of_passengers} className="form-control" id="passangers" placeholder="No of Travellers" onChange={handlePassengerChange} min={1} max={99} required />
                                    </div>
                                    <div className="form-group mb-2">
                                        <select name="countryCode" className="col-lg-12 mb-0 px-0" value={date_of_travel} onChange={(e) => setSdate(e.target.value)} required>
                                            <option value="" disabled selected hidden>Month of Travel</option>
                                            <option value="This Month">This Month</option>
                                            <option value="Next Month">Next Month</option>
                                            <option value="In Three Months">In Three Months</option>
                                            <option value="In Six Months">In Six Months</option>
                                        </select>
                                    </div>
                                {/* <div class="form-group mb-2">
                                    <input type="number" name="budget" value={budget} class="form-control" pattern="[0-9]" id="budget" placeholder="Budget" min="1" onChange={(e) => setBudget(e.target.value)} required />
                                </div> */}
                                <div className="mb-2 whatsapp-optIn-container">
                                    {/* <input
                                        type="checkbox"
                                        name="whatsapp"
                                        value="whatsapp"
                                        checked={opt}
                                        onChange={(e) => setOpt(e.target.false)}
                                    />&nbsp;
                                    <span className="whatsapp-optIn" style={{ fontSize: "12px" }}>Let us send you updates on WhatsApp</span> */}
                                    {!formValid && <p style={{ color: 'red' }}>Please fill all fields.</p>}

                                </div>
                                <div class="comment-btn text-center">
                                    {/* <input type="submit" class="nir-btn2" data-callback='submit' id="international_pop_submit_10s" value="Send Enquiry" /> */}
                                    <input type="submit" style={{background:"#B3282F"}} className={`nir-btn2 btn_responsive ${!formValid ? 'disabledButton' : ''}`} data-callback='submit' id="international_pop_submit_10s" value="Send Enquiry" disabled={!formValid} />

                                </div><br />
                            </form>

                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div >
    );
}

export default App;
