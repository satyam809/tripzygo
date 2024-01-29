import Head from 'next/head'
import Link from 'next/dist/client/link'
import React from "react";
import { Modal, ModalBody } from "reactstrap";
// import HomeModal from '../components/CommonModal'
import SearchData from "../components/SearchBar/searchbar.json";
import SearchBar from "../components/SearchBar/SearchBar";
import SlickHoneymoonSlider from '../components/Slick_Sliders/SlickDestinationsSlider';
import SlickTestimonialSlider from '../components/Slick_Sliders/SlickTestimonialSlider';
import SlickLastMinuteSlider from '../components/Slick_Sliders/SlickLastMinuteSlider';
import SlickCommitmentSlider from '../components/Slick_Sliders/SlickCommitmentSlider';
import SlickTrendingSlider from '../components/Slick_Sliders/SlickTrendingSlider';
import SlickPartnerSlider from '../components/Slick_Sliders/slickPartnerSlider';
import Ourblogs from "../components/Blogs/ourblogs";
import Ourpartners from "../components/OurPartners";
// import LandingModal from "../components/LandingModal";
import { useState } from 'react'

const url = 'https://backend.tripzygo.in/landing_Contact';

export default function Home() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalOpen1, setModalOpen1] = React.useState(false);
    const [modalOpen2, setModalOpen2] = React.useState(false);

    const [name, setName] = useState('');
    const [email_id, setEmail] = useState('');
    const [country_code, setCountry] = useState('+91');
    const [phone_no, setPhone] = useState('');
    const [no_of_passengers, setPassenger] = useState('');
    const [preferred_destination, setDestination] = useState('');
    const [date_of_travel, setDeparture] = useState('');
    const [budget, setBudget] = useState('');
    const [opt, setOpt] = useState(true);
   

    const toggle = () => setModalOpen(!modalOpen);

    const handleContact = async (e) => {
        try {
            axios.post(url, { name, email_id, country_code, phone_no, no_of_passengers, preferred_destination, date_of_travel, budget });
        } catch (error) { }
    };

    const handleOpt = async (e) => {
        const optInUrl = `https://media.smsgupshup.com/GatewayAPI/rest?method=OPT_IN&format=json&userid=2000217680&password=ksrcbmxS&phone_number=91${phone_no}&v=1.1&auth_scheme=plain&channel=WHATSAPP`;
        const optOutUrl = `https://media.smsgupshup.com/GatewayAPI/rest?method=OPT_OUT&format=json&userid=2000217680&password=ksrcbmxS&phone_number=91${phone_no}&v=1.1&auth_scheme=plain&channel=WHATSAPP`;
        const thankUrl = `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000217680&password=ksrcbmxS&send_to=${phone_no}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+%2A${name}%2A%2C%0A%0A%2AThank+you+for+contacting+us%21%2A+Our+travel+expert+will+contact+you+shortly%21%F0%9F%98%87%0A%0ABe+Ready+To+Save+Huge+On+Flights+%E2%9C%88%EF%B8%8F%2C+Stays+%F0%9F%8F%A8%2C++Holiday+%F0%9F%9B%84%2C+%26+Cabs+for+your+next+trip+to+%2A${preferred_destination}%2A+%F0%9F%9A%95%0A%0APlan+Your+Trip+with+Us+Now%21%F0%9F%98%89`;

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
            Router.push('/thank-you');

        } catch (error) {
        }
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
                <title>TripzyGo - Best Travel Agency in Gurgaon for the Best Holiday Package</title>
                <meta name="description" content="TripzyGo International is the Best Travel Agency in Gurgaon that offers the best holiday packages at affordable prices. Book your customized best tour packages." />
                <meta name="keywords" content="best tour packages, best travel agency in gurgaon, best holiday packages" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="canonical" href="https://www.tripzygo.in" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <div>

                {/* <HomeModal ImageLink="/images/popup/Loviest Honeymoon.webp" alt="best travel agency in gurgaon" /> */}
                <section class="search-banner landing_landingpage  align-items-center pt-5 pb-10">
                <div class="container">
                    <div class="search-banner-in">
                        <div class="row align-items-center">
                            <div class="col-lg-9 col-md-5">
                                <div class="section-title mb-10 text-lg-start text-center">
                                    <h1 class=" white" style={{fontSize:"53px"}}>Exclusive Deals On International Tour Packages!</h1>
                                    <h5 class=" white" style={{fontSize:"20px"}}>Dream, explore, and save: TripzyGo presents exciting discounts on vacation packages. Don't miss out- Limited Period offer</h5>
                                    {/* <div class="register-login d-flex align-items-center">
                                        <LandingModal buttonLabel="Get Free Quote" labelSize="16px"></LandingModal>
                                    </div> */}
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
                                                            style={{ textAlign: "center", fontWeight: "500", fontSize: "17px", marginBottom: "10px" }}>
                                                            Perfect Travel Starts Here!</p>
                                                        <div class="form-group mb-2">
                                                            <input type="text" name="first_name" value={name} className="form-control" id="fullname" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                                                        </div>
                                                        <div class="form-group mb-2">
                                                            <input type="email" name="email" value={email_id} className="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                                        </div>
                                                        <div class="form-group mb-1">
                                                            <div className='d-flex col-lg-12 col-sm-12 col-md-12 px-0'>
                                                                <div className="col-lg-4 col-md-4 col-sm-2 px-1" style={{ width: "35%" }}>
                                                                    <select name="countryCode" className='col-lg-12 mb-0 px-0'
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
                                                                <div className="col-lg-8 col-md-8 col-sm-10 mb-1 px-1">
                                                                    <input type="tel" pattern="[0-9][0-9]{9}" maxLength={10} name="phone" value={phone_no} className="form-control" id="phnumber" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group mb-2">
                                                            <input type="number" min={1} name="no_of_passengers" value={no_of_passengers} className="form-control" id="passangers" placeholder="No of Passengers" onChange={(e) => setPassenger(e.target.value)} required />
                                                        </div>
                                                        <div class="form-group mb-2">
                                                            {/* <input type="text" name="preferred_destination" value={preferred_destination} className="form-control" id="passangers" placeholder="Preferred Destinations" onChange={(e) => setDestination(e.target.value)} required /> */}
                                                            <input type="text" oninput="searchSelect(preferred_destination)" name="preferred_destination" list="country_list" value={preferred_destination} className="form-control" id="preferred_destination" placeholder="Preferred Destination" onChange={(e) => setDestination(e.target.value)} required />
                                                            <datalist id="country_list">
                                                                <option value="Amsterdam">Amsterdam</option>
                                                                <option value="Andaman">Andaman</option>
                                                                {/* <option value="Auli">Auli</option> */}
                                                                <option value="Austria">Austria</option>
                                                                <option value="Bali">Bali</option>
                                                                <option value="Budapest">Budapest</option>
                                                                <option value="Bangkok">Bangkok</option>
                                                                <option value="Cairo">Cairo</option>
                                                                <option value="CZech Republic">CZech Republic</option>
                                                                {/* <option value="Dehradun">Dehradun</option> */}
                                                                <option value="Dubai">Dubai</option>
                                                                <option value="Egypt">Egypt</option>
                                                                <option value="Europe">Europe</option>
                                                                <option value="France">France</option>
                                                                {/* <option value="Gangtok">Gangtok</option> */}
                                                                <option value="Germany">Germany</option>
                                                                {/* <option value="Goa">Goa</option> */}
                                                                <option value="Greece">Greece</option>
                                                                {/* <option value="Himachal Pradesh">Himachal Pradesh</option> */}
                                                                <option value="Hungary">Hungary</option>
                                                                <option value="Iceland">Iceland</option>
                                                                <option value="Italy">Italy</option>
                                                                {/* <option value="Jaipur">Jaipur</option> */}
                                                                {/* <option value="Jaisalmer">Jaisalmer</option> */}
                                                                {/* <option value="Jim Corbett">Jim Corbett</option> */}
                                                                {/* <option value="Jodhpur">Jodhpur</option> */}
                                                                {/* <option value="Kashmir">Kashmir</option> */}
                                                                {/* <option value="Kedarnath">Kedarnath</option> */}
                                                                {/* <option value="Kerala">Kerala</option> */}
                                                                <option value="Krabi">Krabi</option>
                                                                {/* <option value="Kullu">Kullu</option> */}
                                                                {/* <option value="Leh, Ladakh">Leh, Ladakh</option> */}
                                                                <option value="London">London</option>
                                                                <option value="Malaysia">Malaysia</option>
                                                                {/* <option value="Maldives">Maldives</option> */}
                                                                {/* <option value="Manali">Manali</option> */}
                                                                {/* <option value="Meghalaya">Meghalaya</option> */}
                                                                {/* <option value="Mount Abu">Mount Abu</option> */}
                                                                {/* <option value="Mussoorie">Mussoorie</option> */}
                                                                {/* <option value="Nainital">Nainital</option> */}
                                                                <option value="Netherlands">Netherlands</option>
                                                                <option value="Norway">Norway</option>
                                                                <option value="Paris">Paris</option>
                                                                <option value="Pattaya">Pattaya</option>
                                                                <option value="Phuket">Phuket</option>
                                                                {/* <option value="Rajasthan">Rajasthan</option> */}
                                                                {/* <option value="Shimla">Shimla</option> */}
                                                                {/* <option value="Sikkim">Sikkim</option> */}
                                                                <option value="Singapore">Singapore</option>
                                                                <option value="Spain">Spain</option>
                                                                {/* <option value="Srinagar">Srinagar</option> */}
                                                                <option value="Switzerland">Switzerland</option>
                                                                <option value="Thailand">Thailand</option>
                                                                <option value="Turkey">Turkey</option>
                                                                {/* <option value="Udaipur">Udaipur</option> */}
                                                                <option value="United Kingdom">United Kingdom</option>
                                                                {/* <option value="Uttarakhand">Uttarakhand</option> */}
                                                                <option value="Vietnam">Vietnam</option>
                                                                {/* <option value="Luxury Tours">Luxury Tours</option>
                                                                <option value="Hill Station">Hill Station</option> */}
                                                                <option value="Prague">Prague</option>
                                                                <option value="East Europe">East Europe</option>
                                                                {/* <option value="Gulmarg">Gulmarg</option> */}
                                                                <option value="Vienna">Vienna</option>
                                                                <option value="Japan">Japan</option>
                                                            </datalist>
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <input type="date" name="date_of_travel" value={date_of_travel} className="form-control c2" id="startdate" placeholder="Date of Travel:&nbsp;" onChange={(e) => setDeparture(e.target.value)} required />
                                                        </div>
                                                        <div class="form-group mb-2">
                                                            <input type="number" name="budget" value={budget} class="form-control" pattern="[0-9]" id="budget" placeholder="Budget" min="1" onChange={(e) => setBudget(e.target.value)} required />
                                                        </div>
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
                <section className="our-team pb-4 pt-6">
                    <div className="container delightfulContainer">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="section-title text-lg-start text-center">
                                    <h4 className="mb-1 theme1">Delightful Destinations</h4>
                                    <h2>India's Best <span className="theme">
                                        Travel Experiences</span></h2>
                                    <div className="mb-4">Have the most fun filled travel experiences with the best travel packages to the most perfect holiday destinations.<br />
                                        Book our customized tour packages now and enroute to a journey full of enchanting moments and memories.</div>
                                </div>
                            </div>
                            <div className="col-lg-7 ">
                                <div className="row team-main">
                                    <div className='my-content'  >
                                        <div className='carouse_div'>
                                            <SlickPartnerSlider></SlickPartnerSlider>
                                        </div>
                                    </div>
                                    <Link href="/beach-tour-packages">
                                        <div className="col-lg-4 col-md-6 mb-4 resp travel-card">
                                            <div className="team-list bg-white rounded">
                                                <div className="team-image">
                                                    <img src="images/team/beach.webp" alt="beach tour packages" />
                                                </div>
                                                <div className="team-content text-center p-2 bg-theme">
                                                    <h5 className="mb-0 white">Beaches</h5>
                                                    {/* <div className="mb-0 white">Quality Assurance</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/hill-station-tour-packages">
                                        <div className="col-lg-4 col-md-6 mb-4 resp travel-card">
                                            <div className="team-list bg-white rounded">
                                                <div className="team-image">
                                                    <img src="images/team/hill-station.webp" alt="hill station tour packages" />
                                                </div>
                                                <div className="team-content text-center p-2 bg-theme">
                                                    <h5 className="mb-0 white">Hill Station</h5>
                                                    {/* <div className="mb-0 white">Senior Agent</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/luxury-tour-packages">
                                        <div className="col-lg-4 col-md-6 mb-4 resp travel-card">
                                            <div className="team-list bg-white rounded">
                                                <div className="team-image">
                                                    <img src="images/team/luxury.webp" alt="luxury tour packages" />
                                                </div>
                                                <div className="team-content text-center p-2 bg-theme">
                                                    <h5 className="mb-0 white">Luxury Vacation</h5>
                                                    {/* <div className="mb-0 white">Head Officer</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer">
                        <div className="section-title mb-6 w-100 mx-auto text-center">
                            <h4 className="mb-1 theme1">Popular and Trending</h4>
                            <h2 className="mb-1">Best <span className="theme">Travel Packages</span></h2>
                            <div> Enroute a delightful journey to trending destinations with our customized tour packages</div>

                        </div>

                        <div className="row align-items-center">
                            <Link href="/international-tour-packages/japan-tour-packages">
                                <div className="col-lg-5 mb-4 resp">
                                    <div className="trend-item1">
                                        <div className="trend-image itemswiper position-relative rounded">
                                            <img className="trend-banner" src="images/destination/japan_home.webp" alt="Japan" />
                                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                                <div className="trend-content-title">
                                                    {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">England</a></h5> */}
                                                    <h4 className="mb-0 white">Japan</h4>
                                                </div>
                                                <span className="white bg-theme p-1 px-2 rounded">10 Packages</span>
                                            </div>
                                            <div className="color-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="col-lg-7 resp">
                                <div className="row">
                                    <Link href="/international-tour-packages/italy-tour-packages">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                            <div className="trend-item1">
                                                <div className="trend-image position-relative rounded">
                                                    <img src="images/destination/Italy.webp" alt="Italy" />
                                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                                        <div className="trend-content-title">
                                                            {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Florida</a></h5> */}
                                                            <h4 className="mb-0 white">Italy</h4>
                                                        </div>
                                                        <span className="white bg-theme p-1 px-2 rounded">6 Packages</span>
                                                    </div>
                                                    <div className="color-overlay"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/international-tour-packages/thailand-tour-packages">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                            <div className="trend-item1">
                                                <div className="trend-image position-relative rounded">
                                                    <img src="images/destination/Thailand.webp" alt="Thailand" />
                                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                                        <div className="trend-content-title">
                                                            {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Tokyo</a></h5> */}
                                                            <h4 className="mb-0 white">Thailand</h4>
                                                        </div>
                                                        <span className="white bg-theme p-1 px-2 rounded">15 Packages</span>
                                                    </div>
                                                    <div className="color-overlay"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/international-tour-packages/paris-tour-packages">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                            <div className="trend-item1">
                                                <div className="trend-image position-relative rounded">
                                                    <img src="images/destination/Paris.webp" alt="Paris" />
                                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                                        <div className="trend-content-title">
                                                            {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Moscow</a></h5> */}
                                                            <h4 className="mb-0 white">Paris</h4>
                                                        </div>
                                                        <span className="white bg-theme p-1 px-2 rounded">6 Packages</span>
                                                    </div>
                                                    <div className="color-overlay"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="/international-tour-packages/vietnam-tour-packages">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                            <div className="trend-item1">
                                                <div className="trend-image position-relative rounded">
                                                    <img src="images/destination/vietnam.webp" alt="vietnam"/>
                                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                                        <div className="trend-content-title">
                                                            {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Italy</a></h5> */}
                                                            <h4 className="mb-0 white">Vietnam</h4>
                                                        </div>
                                                        <span className="white bg-theme p-1 px-2 rounded">8 Packages</span>
                                                    </div>
                                                    <div className="color-overlay"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='my-content'  >
                                <div className='carouse_div animated.infinite'>
                                    <SlickTrendingSlider></SlickTrendingSlider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6  mx-auto text-center">
                            <h4 className="mb-1 theme1">Soulmate Special</h4>
                            <h3 className="mb-1" style={{ fontSize: "35px" }}>Top Romantic <span className="theme"> Honeymoon Destinations</span></h3>
                            <div>For the perfect start to your new life together, we have you covered with the<br /> best romantic honeymoon destinations</div>
                        </div>
                        <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickHoneymoonSlider
                                    package1Image="/images/landing/Dubai.webp"
                                    package2Image="/images/landing/Maldives.webp"
                                    package3Image="/images/landing/Bali.webp"
                                    package4Image="/images/landing/Europe.webp"
                                    package5Image="/images/landing/Shimla.webp"
                                    package6Image="/images/landing/Kerala.webp"
                                    package1Name="Dubai"
                                    package2Name="Maldives"
                                    package3Name="Bali"
                                    package4Name="Europe"
                                    package5Name="Shimla"
                                    package6Name="Kerala"
                                    package1Link="/international-tour-packages/dubai-tour-packages"
                                    package2Link="/international-tour-packages/maldives-tour-packages"
                                    package3Link="/international-tour-packages/bali-tour-packages"
                                    package4Link="/international-tour-packages/europe-tour-packages"
                                    package5Link="/india-tour-packages/shimla-tour-packages"
                                    package6Link="/india-tour-packages/kerala-tour-packages" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="trending pb-4 pt-1" id="swiper-container" style={{ backgroundImage: "url(images/shape4.png)" }}>
                    <div className="container delightfulContainer">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-12 mb-4">
                                <div className="banner-content w-75 mx-auto">
                                    <div className="banner-content-in text-center">
                                        <h4 className="mb-1 theme1 mt-4">Delightful Discounts</h4>
                                        <h2 className="mb-1">Last <span className="theme">Minute Deals</span></h2>
                                        <div>Leverage great discount on the best travel packages by grabbing out special last minute deals. Book your dream vacation with our customized tour packages available at discounted prices</div>
                                    </div>

                                </div>
                            </div>
                            <div className='my-content'>
                                <div className='carouse_div'>
                                    <SlickLastMinuteSlider></SlickLastMinuteSlider>
                                </div>
                            </div>
                            <div className="col-lg-5">
                            </div>
                        </div>
                        <div className="trend-box resp">
                            <div class="row">
                                <div class="col-lg-4 mb-4">
                                    <div class="trend-item1 rounded box-shadow bg-white">
                                        <div class="trend-image position-relative">
                                            <img src="images\flights\flight.webp" alt="flight booking" onClick={() => setModalOpen(!modalOpen)} class="" />
                                            <Modal size="sm" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                                <div className=" modal-header border-0">
                                                    <h4 className=" modal-title" id="exampleModalLabel">
                                                        Fly high anytime, to anywhere for anything
                                                    </h4>
                                                    <button style={{ background: "transparent" }}
                                                        aria-label="Close"
                                                        className=" close"
                                                        type="buFly high anytime, to anywhere for anythingtton"
                                                        onClick={() => setModalOpen(!modalOpen)}
                                                    >
                                                        <span aria-hidden={true}><i class="fa fa-close"></i></span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <h5 className=" modal-title mx-4" id="exampleModalLabel">
                                                        Save Upto 25% Off

                                                    </h5><br />
                                                    <p className="mx-4">Handling flight costs for your trips is a bit of a headache. You book ahead of time, look for last minute deals, and find million other ways to save on your flight bookings. Well, there’s no need for any such hassle or flight booking drama at all. You just need to reach out to TripzyGo for cheap domestic flights.</p>
                                                    <p className="mx-4">At TripzyGo, we have exclusive benefits on domestic flight bookings. With us, you get up to 40% discounts on your flight bookings. Could there be a better deal than this? Stop the hassles and start the savings with TripzyGo.</p><br />
                                                    <div class="col-lg-12 text-center">
                                                        <a href="contact" class="nir-btn">Grab Deal</a>


                                                    </div>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-4">
                                    <div class="trend-item1 rounded box-shadow">
                                        <div class="trend-image position-relative">
                                            <img src="images\flights\maldives.webp" alt="honeymoon in maldives" class="" onClick={() => setModalOpen1(!modalOpen1)} />
                                            <Modal size="sm" toggle={() => setModalOpen1(!modalOpen1)} isOpen={modalOpen1}>
                                                <div className=" modal-header border-0">
                                                    <h4 className=" modal-title" id="exampleModalLabel">
                                                        Maldives Honeymoon
                                                    </h4>
                                                    <button style={{ background: "transparent" }}
                                                        aria-label="Close"
                                                        className=" close"
                                                        type="button"
                                                        onClick={() => setModalOpen1(!modalOpen1)}
                                                    >
                                                        <span aria-hidden={true}><i class="fa fa-close"></i></span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <h5 className=" modal-title mx-4" id="exampleModalLabel">
                                                        Up to 25% Off
                                                    </h5><br />
                                                    <p className="mx-4">Maldives and Honeymoon are synonyms to each other. You talk about your honeymoon, you think about the Maldives. It’s such a beautiful place after all. It’s one of the best honeymoon destinations you can ever find. So, having offers to visit this enchanting and hot island on your honeymoon are a treat.</p>
                                                    <p className="mx-4">We offer you that treat with amazing offers on Maldives honeymoon packages. Get up to 25% off on any Maldives honeymoon package that you pick out for a romantic and special honeymoon with your partner.</p>
                                                    <br />
                                                    <div class="col-lg-12 text-center">
                                                        <a href="contact" class="nir-btn">Grab Deal</a>
                                                    </div>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-4">
                                    <div class="trend-item1 rounded box-shadow">
                                        <div class="trend-image position-relative">
                                            <img src="images\flights\europe.webp" alt="Europe trip" onClick={() => setModalOpen2(!modalOpen2)} class="" />
                                            <Modal size="sm" toggle={() => setModalOpen2(!modalOpen2)} isOpen={modalOpen2}>
                                                <div className=" modal-header border-0">
                                                    <h4 className=" modal-title" id="exampleModalLabel">
                                                        Trip to Europe
                                                    </h4>
                                                    <button style={{ background: "transparent" }}
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={() => setModalOpen2(!modalOpen2)}
                                                    >
                                                        <span aria-hidden={true}><i class="fa fa-close"></i></span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <h5 className=" modal-title mx-4" id="exampleModalLabel">
                                                        Up to 25% Off

                                                    </h5><br />
                                                    <p className="mx-4">A trip to Europe is a fascinating adventure, whether you plan it with family, friends, or partner. However, you don’t want to burn a hole in your pocket while fulfilling your fantasy of a Europe trip. Well, we have got you covered.</p>
                                                    <p className="mx-4">Enjoy the best of your days in Europe with the best of the offers on Europe tour package designed and customised especially for you by travel experts and specialists at TripzyGo. Book the offer before it expires. Europe, after all, is calling out to you.</p>
                                                    <br />
                                                    <div class="col-lg-12 text-center">
                                                        <a href="contact" class="nir-btn">Grab Deal</a>
                                                    </div>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 text-center">
                                    <a href="contact" class="nir-btn">Grab Deals</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="about-us pb-4 pt-1" style={{ backgroundImage: "url(images/shape4.png)", backgroundPosition: "center" }}>
                    <div className="container">

                        <div className="section-title mb-6 w-50 mx-auto text-center">
                            <h4 className="mb-1 theme1">Our Commitment</h4>
                            <h2 className="mb-1">Why <span className="theme">Choose Us</span></h2>
                            <div>We are amazing to travel with and through multiple commitments we make your trips the most memorable experience of your life
                            </div>
                        </div>

                        <div className='my-content'  >
                            <div className='carouse_div animated.infinite'>
                                <SlickCommitmentSlider></SlickCommitmentSlider>
                            </div>
                        </div>

                        <div className="why-us resp" >
                            <div className="why-us-box">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="why-us-item text-center p-4 py-5 border rounded bg-white">
                                            <div className="why-us-content">
                                                <div className="why-us-icon">
                                                    {/* <i className="icon-flag theme"></i> */}
                                                    <img src="images/web icons 32/customized-tour-packages.png" alt="customised tour packages" />

                                                </div><br />
                                                <h4><a>Customised Tour Packages</a></h4>
                                                <p className="mb-0">With us, you will have best travel packages that are perfectly catered to your specific travel needs and requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="why-us-item text-center p-4 py-5 border rounded bg-white">
                                            <div className="why-us-content">
                                                <div className="why-us-icon">
                                                    {/* <i className="fa fa-inr  theme"></i> */}
                                                    <img src="images/web icons 32/budgeted-tours.png" alt="budget holiday tour packages" />

                                                </div><br />
                                                <h4><a>Budgeted Tours</a></h4>
                                                <p className="mb-0">Our customized tour packages take care of your budget and do not burn a hole in your pocket.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="why-us-item text-center p-4 py-5 border rounded bg-white">
                                            <div className="why-us-content">
                                                <div className="why-us-icon">
                                                    {/* <i className="icon-support theme"></i> */}
                                                    <img src="images/web icons 32/dedicated-support.png" alt="best tour packages" />

                                                </div><br />
                                                <h4><a>Dedicated Support</a></h4>
                                                <p className="mb-0">Our travel executive will be with you every step of the way to assist with your touring needs and requirements.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="why-us-item text-center p-4 py-5 border rounded bg-white">
                                            <div className="why-us-content">
                                                <div className="why-us-icon">
                                                    {/* <i className="icon-globe theme"></i> */}
                                                    <img src="images/web icons 32/World-wide-touring.png" alt="best tour operators in gurgaon" />
                                                </div><br />
                                                <h4><a>World-wide Touring</a></h4>
                                                <p className="mb-0">With us, you can travel domestically and internationally with all the convenience, comfort, and planning.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="white-overlay"></div>
                </section>
                <Ourpartners />
                <Ourblogs />

                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6 w-75 mx-auto text-center">
                            <h4 className="mb-1 theme1">Happy Travellers </h4>
                            <h2 className="mb-1">Client's <span className="theme">Testimonials</span></h2>
                            <div>We offer the very finest cultural tours and holidays but we are always trying to improve
                            </div>
                        </div>
                        <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickTestimonialSlider />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>

    )
}
