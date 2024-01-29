import React from 'react'
import Head from 'next/head'
import axios from 'axios';
import { useState } from 'react'
import Router from 'next/router'
import ReCAPTCHA from "react-google-recaptcha";

const url = 'https://backend.tripzygo.in/contact';

export default function contact() {
  const [name, setName] = useState('');
  const [email_id, setEmail] = useState('');
  const [country_code, setCountry] = useState('+91');
  const [phone_no, setPhone] = useState('');
  const [next_destination, setDestination] = useState('');
  const [no_of_passengers, setPassenger] = useState('');
  const [start_date, setSdate] = useState('');
  const [end_date, setEdate] = useState('');
  const [personalized_message, setMessage] = useState('');
  const [verified, setVerified] = useState(false);
  const [opt, setOpt] = useState(true);
  const currentDate = new Date().toISOString().split('T')[0];
  function onChange(value) {
    setVerified(true);
  }

  const handleContact = async (e) => {
    try {
      axios.post(url, { name, email_id, country_code, phone_no, next_destination, no_of_passengers, start_date, end_date, personalized_message });
    } catch (error) { }
  };

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
      Router.push('/');
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
  const handleSearchChange = (next_destination) => {
    setDestination(next_destination);
  };
  return (
    <div>
      <Head>
        <title>TripzyGo - Contact</title>
        <meta name="description" content="We provide travelers with unique and tailored travel experiences. So why wait? Contact us today and let us help you get the perfect package for your needs!" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(images/banner_images/contact_us.webp)" }}>
        <div className="breadcrumb-outer">
          <div className="container">
            <div className="breadcrumb-content text-center">
              <h1 className="mb-3">Contact Us</h1>
              <nav aria-label="breadcrumb" className="d-block">
                <ul className="breadcrumb">
                  <div className='text-white'>Get In Touch for Customised Travel Packages at Special Offers</div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="dot-overlay"></div>
      </section>
      <section className="contact-main pt-6 pb-60">
        <div className="container">
          <div className="contact-info-main mt-0">
            <div className="row">
              <div className="col-lg-10 col-offset-lg-1 mx-auto">
                <div className="contact-info bg-white">
                  <div className="contact-info-content row mb-1">
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="info-item bg-lgrey px-4 py-5 border-all text-center rounded">
                        <div className="info-icon mb-2">
                          <i className="fa fa-map-marker-alt theme"></i>
                        </div>
                        <div className="info-content">
                          <h3>Office Location</h3>
                          <div className="m-0">H.Q. - Office No. 336-37-38, Tricity Plaza, Peer Muchalla, Zirakpur, Punjab -140603</div><br />

                          <div className="m-0">4th floor Pratibha Tower,  South City 1,  Sector 41 Gurgaon, Haryana 122022</div>

                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="info-item bg-lgrey px-4 py-5 border-all text-center rounded">
                        <div className="info-icon mb-2">
                          <i className="fa fa-phone theme fa-rotate-90"></i>
                        </div>
                        <div className="info-content">
                          <h3>Phone Number</h3>
                          <div className="m-0">+91 99884-49074</div>
                          <div className="m-0">+91 74940-09400</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4">
                      <div className="info-item bg-lgrey px-4 py-5 border-all text-center rounded">
                        <div className="info-icon mb-2">
                          <i className="fa fa-envelope theme"></i>
                        </div>
                        <div className="info-content ps-4">
                          <h3>Email Address</h3>
                          <div className="m-0">Info@tripzygo.in</div>
                          <div className="m-0">Bookings@tripzygo.in</div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="contact-form1" className="contact-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="map rounded overflow-hiddenb rounded mb-md-4">
                          <div style={{ width: "100%" }}>
                            <iframe height="500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.0611543774658!2d76.8582862143364!3d30.66040639616749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f951eddd91561%3A0xaf1c0f09f87bcc48!2sTripzyGo%20International!5e0!3m2!1sen!2sin!4v1658747613877!5m2!1sen!2sin"></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div id="contactform-error-msg"></div>
                        <form method="post" action="#" onSubmit={handleSubmit} name="contactform2" id="contactform2">
                          <div className="form-group mb-2">
                            <input type="text" name="first_name" value={name} className="form-control" id="fullname" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                          </div>
                          <div className="form-group mb-2">
                            <input type="email" name="email" value={email_id} className="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                          </div>
                          <div className="form-group mb-2">
                            <div className="d-flex col-lg-12 px-0">
                              <div className="col-lg-2 col-md-2 col-sm-2 px-0" style={{ width: "35%" }}>
                                <select name="countryCode" className='col-lg-12 mb-0 px-0' value={country_code} id="country_code" onChange={(e) => { setCountry(e.target.value) }} required >
                                  <optgroup label="Other countries">
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
                                    <option data-countryCode="IN" selected value="+91">+91</option>
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

                                  </optgroup>
                                </select>
                              </div>
                              <div className="col-sm-10 col-lg-10 col-md-10 px-0 ps-2">
                                <input type="tel" maxLength={10} name="phone" value={phone_no} className="form-control" id="phnumber" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-2">
                            {/* <input type="text" name="next_destination" value={next_destination} className="form-control" id="destination" placeholder="Next Destination" onChange={(e) => setDestination(e.target.value)} required /> */}
                            <input type="text" oninput="searchSelect(next_destination)" name="next_destination" list="country_list" value={next_destination} className="form-control" id="next_destination" placeholder="Next Destination" onChange={(e) => setDestination(e.target.value)} required />
                            {/* <Autocomplete onSearchChange={handleSearchChange}></Autocomplete> */}
                            <datalist id="country_list">
                              <option value="Leh Ladakh">Leh Ladakh</option>
                              <option value="Kashmir">Kashmir</option>
                              <option value="Manali">Manali</option>
                              <option value="Rohtang pass">Rohtang pass</option>
                              <option value="Sissu">Sissu</option>
                              <option value="Tirthan valley">Tirthan valley</option>
                              <option value="Shimla">Shimla</option>
                              <option value="Dharmshalla">Dharmshalla</option>
                              <option value="Dalhousie">Dalhousie</option>
                              <option value="Kanatal">Kanatal</option>
                              <option value="Dhanaulti">Dhanaulti</option>
                              <option value="4Dham">4Dham</option>
                              <option value="3Dham">3Dham</option>
                              <option value="2Dham">2Dham</option>
                              <option value="Valley of flowers">Valley of flowers</option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="Rishikesh">Rishikesh</option>
                              <option value="Auli">Auli</option>
                              <option value="Nainital">Nainital</option>
                              <option value="Sattal">Sattal</option>
                              <option value="Chopta">Chopta</option>
                              <option value="Mussoorie">Mussoorie</option>
                              <option value="New Tehri">New Tehri</option>
                              <option value="Spiritual">Spiritual</option>
                              <option value="Char Dham">Char Dham</option>
                              <option value="Panch Kedar">Panch Kedar</option>
                              <option value="Panch Badri">Panch Badri</option>
                              <option value="Panch Prayag">Panch Prayag</option>
                              <option value="Hemkunth Sahib">Hemkunth Sahib</option>
                              <option value="Kartik swami Temple">Kartik swami Temple</option>
                              <option value="Dhari Devi temple">Dhari Devi temple</option>
                              <option value="Haridwar">Haridwar</option>
                              <option value="Nature">Nature</option>
                              <option value="Valley of flowers">Valley of flowers</option>
                              <option value="Chaukori">Chaukori</option>
                              <option value="Chakrata">Chakrata</option>
                              <option value="Kausani">Kausani</option>
                              <option value="Mukhteshwar">Mukhteshwar</option>
                              <option value="Ranikhet">Ranikhet</option>
                              <option value="Wildlife">Wildlife</option>
                              <option value="Jimcorbett National Park">Jimcorbett National Park</option>
                              <option value="Nanda devi National Park">Nanda devi National Park</option>
                              <option value="Rajaji National Park">Rajaji National Park</option>
                              <option value="Gangotri National Park">Gangotri National Park</option>
                              <option value="Binsar wildlife sanctuary">Binsar wildlife sanctuary</option>
                              <option value="Asan barrage">Asan barrage</option>
                              <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                              <option value="Srinagar">Srinagar</option>
                              <option value="Gulmarg">Gulmarg</option>
                              <option value="Gurlez Valley">Gurlez Valley</option>
                              <option value="Pahalgam">Pahalgam</option>
                              <option value="Sonmarg">Sonmarg</option>
                              <option value="Jammu">Jammu</option>
                              <option value="Patnitop">Patnitop</option>
                              <option value="Sanasar">Sanasar</option>
                              <option value="Katra/Vaishno Devi">Katra/Vaishno Devi</option>
                              <option value="Leh/Ladakh">Leh/Ladakh</option>
                              <option value="Kargil">Kargil</option>
                              <option value="Zanskar">Zanskar</option>
                              <option value="Nubra Valley">Nubra Valley</option>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Marine Drive">Marine Drive</option>
                              <option value="Juhu Beach">Juhu Beach</option>
                              <option value="Gateway of India">Gateway of India</option>
                              <option value="Elephanta caves">Elephanta caves</option>
                              <option value="Siddhivinayak Temple">Siddhivinayak Temple</option>
                              <option value="Haji Ali">Haji Ali</option>
                              <option value="Europe">Europe</option>
                              <option value="Amsterdam">Amsterdam</option>
                              <option value="Brussels">Brussels</option>
                              <option value="Paris">Paris</option>
                              <option value="Zurich">Zurich</option>
                              <option value="Italy">Italy</option>
                              <option value="Greece">Greece</option>
                              <option value="Czech Republic">Czech Republic</option>
                              <option value="Austria">Austria</option>
                              <option value="Budapest">Budapest</option>
                              <option value="Germany">Germany</option>
                              <option value="Iceland">Iceland</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Norway">Norway</option>
                              <option value="Finland">Finland</option>
                              <option value="Spain">Spain</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Croatia">Croatia</option>
                              <option value="Poland">Poland</option>
                              <option value="Denmark">Denmark</option>
                              <option value="UK">UK</option>
                              <option value="London">London</option>
                              <option value="Edinburgh">Edinburgh</option>
                              <option value="Glasgow">Glasgow</option>
                              <option value="Manchester">Manchester</option>
                              <option value="Australia">Australia</option>
                              <option value="Melbourne">Melbourne</option>
                              <option value="Sydney">Sydney</option>
                              <option value="Gold coast">Gold coast</option>
                              <option value="Brisbane">Brisbane</option>
                              <option value="Turkey">Turkey</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Auckland">Auckland</option>
                              <option value="Hamilton">Hamilton</option>
                              <option value="Rotorua">Rotorua</option>
                              <option value="Wellington">Wellington</option>
                              <option value="Christchurch">Christchurch</option>
                              <option value="Queenstown">Queenstown</option>
                              <option value="US">US</option>
                              <option value="New York">New York</option>
                              <option value="Philadelphia">Philadelphia</option>
                              <option value="Washington">Washington</option>
                              <option value="San Francisco">San Francisco</option>
                              <option value="Los Angeles">Los Angeles</option>
                              <option value="Las Vegas">Las Vegas</option>
                              <option value="Chicago">Chicago</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Mount Abu">Mount Abu</option>
                              <option value="Jaisalmer">Jaisalmer</option>
                              <option value="Rajasamand">Rajasamand</option>
                              <option value="Ajmer">Ajmer</option>
                              <option value="Alwar">Alwar</option>
                              <option value="Bikaner">Bikaner</option>
                              <option value="Banswara">Banswara</option>
                              <option value="Bundi">Bundi</option>
                              <option value="Chittorgarh">Chittorgarh</option>
                              <option value="Dungarpur">Dungarpur</option>
                              <option value="Jaipur">Jaipur</option>
                              <option value="Jodhpur">Jodhpur</option>
                              <option value="Jhalawar">Jhalawar</option>
                              <option value="Kota">Kota</option>
                              <option value="Pushkar">Pushkar</option>
                              <option value="Udaipur">Udaipur</option>
                              <option value="Bharatpur">Bharatpur</option>
                              <option value="Nagaur">Nagaur</option>
                              <option value="Sawaimadhopur">Sawaimadhopur</option>
                              <option value="Barmer">Barmer</option>
                              <option value="Jalore">Jalore</option>
                              <option value="Baran">Baran</option>
                              <option value="Pali">Pali</option>
                              <option value="Dholpur">Dholpur</option>
                              <option value="Dausa">Dausa</option>
                              <option value="Karauli">Karauli</option>
                              <option value="Tonk">Tonk</option>
                              <option value="Hanumangarh">Hanumangarh</option>
                              <option value="Bhilwara">Bhilwara</option>
                              <option value="Madhya Pradesh ">Madhya Pradesh </option>
                              <option value="Bhopal">Bhopal</option>
                              <option value="Jabalpur">Jabalpur</option>
                              <option value="Pachmarhi">Pachmarhi</option>
                              <option value="Hanuwantiya">Hanuwantiya</option>
                              <option value="Bhimbetka">Bhimbetka</option>
                              <option value="Chanderi">Chanderi</option>
                              <option value="Khajuraho">Khajuraho</option>
                              <option value="Gwalior">Gwalior</option>
                              <option value="Mandu">Mandu</option>
                              <option value="Orcha">Orcha</option>
                              <option value="Sanchi">Sanchi</option>
                              <option value="Indore">Indore</option>
                              <option value="Burhanpur">Burhanpur</option>
                              <option value="Rewa">Rewa</option>
                              <option value="Kanha">Kanha</option>
                              <option value="Tawa and Madai">Tawa and Madai</option>
                              <option value="Bandhavgarh">Bandhavgarh</option>
                              <option value="Parsili">Parsili</option>
                              <option value="Pench">Pench</option>
                              <option value="Ujjain">Ujjain</option>
                              <option value="Chitrakoot">Chitrakoot</option>
                              <option value="Amarkantak">Amarkantak</option>
                              <option value="Abode Maihar">Abode Maihar</option>
                              <option value="Maheshwar">Maheshwar</option>
                              <option value="Mandsaur">Mandsaur</option>
                              <option value="Omkareshwar">Omkareshwar</option>
                              <option value="Datia">Datia</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Zuluk">Zuluk</option>
                              <option value="Gangtok">Gangtok</option>
                              <option value="Namchi">Namchi</option>
                              <option value="Pelling">Pelling</option>
                              <option value="Yumthang">Yumthang</option>
                              <option value="Nathula pass">Nathula pass</option>
                              <option value="Baba Harbhajan Singh Temple">Baba Harbhajan Singh Temple</option>
                              <option value="Gurudongmar Lake">Gurudongmar Lake</option>
                              <option value="Khecheopalri Lake">Khecheopalri Lake</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Gandhinagar">Gandhinagar</option>
                              <option value="Ahmedabad">Ahmedabad</option>
                              <option value="Vadodara">Vadodara</option>
                              <option value="Rajkot">Rajkot</option>
                              <option value="Kutch">Kutch</option>
                              <option value="Junagadh">Junagadh</option>
                              <option value="Jamnagar">Jamnagar</option>
                              <option value="Surat">Surat</option>
                              <option value="Bhavnagar">Bhavnagar</option>
                              <option value="West Bengal">West Bengal</option>
                              <option value="Kalimpong">Kalimpong</option>
                              <option value="Sundarbans">Sundarbans</option>
                              <option value="Digha">Digha</option>
                              <option value="Darjeeling">Darjeeling</option>
                              <option value="Doors">Doors</option>
                              <option value="Kolkata">Kolkata</option>
                              <option value="Bishnupur">Bishnupur</option>
                              <option value="Howrah">Howrah</option>
                              <option value="Hooghly">Hooghly</option>
                              <option value="Nadia">Nadia</option>
                              <option value="Murshidabad">Murshidabad</option>
                              <option value="Telanagana">Telanagana</option>
                              <option value="Hyderabad">Hyderabad</option>
                              <option value="Adilabad">Adilabad</option>
                              <option value="Mahbubnagar">Mahbubnagar</option>
                              <option value="Karimnagar">Karimnagar</option>
                              <option value="Nazimabad">Nazimabad</option>
                              <option value="Warangal">Warangal</option>
                              <option value="Jangaon">Jangaon</option>
                              <option value="Bhuvanagiri">Bhuvanagiri</option>
                              <option value="Sangrareddy">Sangrareddy</option>
                              <option value="Andhra Pradesh">Andhra Pradesh</option>
                              <option value="Visakhapatnam">Visakhapatnam</option>
                              <option value="Vijayawada">Vijayawada</option>
                              <option value="Orvakalu">Orvakalu</option>
                              <option value="Chittor">Chittor</option>
                              <option value="Araku">Araku</option>
                              <option value="Konaseema">Konaseema</option>
                              <option value="Nellore">Nellore</option>
                              <option value="Dwarka Tirumala">Dwarka Tirumala</option>
                              <option value="Assam">Assam</option>
                              <option value="Guwahati">Guwahati</option>
                              <option value="Kaziranaga">Kaziranaga</option>
                              <option value="Nameri">Nameri</option>
                              <option value="Dirang">Dirang</option>
                              <option value="Tezpur">Tezpur</option>
                              <option value="Meghalaya ">Meghalaya </option>
                              <option value="Shillong">Shillong</option>
                              <option value="Khasi Hills">Khasi Hills</option>
                              <option value="Jaintia Hills">Jaintia Hills</option>
                              <option value="Garo Hills">Garo Hills</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Agartala">Agartala</option>
                              <option value="Dharmanagar">Dharmanagar</option>
                              <option value="Udaipur">Udaipur</option>
                              <option value="Kailashahar">Kailashahar</option>
                              <option value="West Tripura">West Tripura</option>
                              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                              <option value="Bhalukpong">Bhalukpong</option>
                              <option value="Bomdila">Bomdila</option>
                              <option value="Tawang">Tawang</option>
                              <option value="Itanagar">Itanagar</option>
                              <option value="Ziro">Ziro</option>
                              <option value="Daporijo">Daporijo</option>
                              <option value="Aalo">Aalo</option>
                              <option value="Pasighat">Pasighat</option>
                              <option value="Dibrugarh">Dibrugarh</option>
                              <option value="Doimukh">Doimukh</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Imphal">Imphal</option>
                              <option value="Tamenglong">Tamenglong</option>
                              <option value="Ukhrul">Ukhrul</option>
                              <option value="Moirang">Moirang</option>
                              <option value="Moreh">Moreh</option>
                              <option value="Thoubal">Thoubal</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Aizawl">Aizawl</option>
                              <option value="Lunglei">Lunglei</option>
                              <option value="Champhai">Champhai</option>
                              <option value="Kolasib">Kolasib</option>
                              <option value="Siaha">Siaha</option>
                              <option value="Mamit">Mamit</option>
                              <option value="Serchhip">Serchhip</option>
                              <option value="Uttar Pradesh">Uttar Pradesh</option>
                              <option value="Agra">Agra</option>
                              <option value="Fatehpur-Sikri">Fatehpur-Sikri</option>
                              <option value="Mathura- Vrindavan">Mathura- Vrindavan</option>
                              <option value="Lucknow">Lucknow</option>
                              <option value="Varanasi -Sarnath">Varanasi -Sarnath</option>
                              <option value="Ayodhya">Ayodhya</option>
                              <option value="Kushinagar">Kushinagar</option>
                              <option value="Shrivasti">Shrivasti</option>
                              <option value="Kapilvastu">Kapilvastu</option>
                              <option value="Prayagraj- chitrakoot">Prayagraj- chitrakoot</option>
                              <option value="Bareily">Bareily</option>
                              <option value="Jhansi-Deogarh">Jhansi-Deogarh</option>
                              <option value="Meerut- Sardhana">Meerut- Sardhana</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Aurangabad">Aurangabad</option>
                              <option value="Banka">Banka</option>
                              <option value="Begusarai">Begusarai</option>
                              <option value="Bhagalpur">Bhagalpur</option>
                              <option value="Bhojpur">Bhojpur</option>
                              <option value="Buxar">Buxar</option>
                              <option value="Darbhanga">Darbhanga</option>
                              <option value="East champaran">East champaran</option>
                              <option value="Gaya">Gaya</option>
                              <option value="Gopalganj">Gopalganj</option>
                              <option value="Jamui">Jamui</option>
                              <option value="Jehanabad">Jehanabad</option>
                              <option value="Kaimur">Kaimur</option>
                              <option value="Munger">Munger</option>
                              <option value="Nalanda">Nalanda</option>
                              <option value="Nawada">Nawada</option>
                              <option value="Patna">Patna</option>
                              <option value="Rohtas">Rohtas</option>
                              <option value="Saharsa">Saharsa</option>
                              <option value="Samastipur">Samastipur</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Amritsar">Amritsar</option>
                              <option value="Kapurthala">Kapurthala</option>
                              <option value="Gurdaspur">Gurdaspur</option>
                              <option value="Pathankot">Pathankot</option>
                              <option value="Jalandahar">Jalandahar</option>
                              <option value="Ludhiana">Ludhiana</option>
                              <option value="Patiala">Patiala</option>
                              <option value="Bathinda">Bathinda</option>
                              <option value="Anandpur sahib">Anandpur sahib</option>
                              <option value="Rupnagar">Rupnagar</option>
                              <option value="Hoshiarpur">Hoshiarpur</option>
                              <option value="Sangrur">Sangrur</option>
                              <option value="Fatehgarh sahib">Fatehgarh sahib</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Kurukshetra">Kurukshetra</option>
                              <option value="Rohtak">Rohtak</option>
                              <option value="Faridabad">Faridabad</option>
                              <option value="Gurugram">Gurugram</option>
                              <option value="Panchkula">Panchkula</option>
                              <option value="Ambala">Ambala</option>
                              <option value="Bhiwani">Bhiwani</option>
                              <option value="Fatehabad">Fatehabad</option>
                              <option value="Hisar">Hisar</option>
                              <option value="Jhajjar">Jhajjar</option>
                              <option value="Jind">Jind</option>
                              <option value="Kaithal">Kaithal</option>
                              <option value="Karnal">Karnal</option>
                              <option value="Sirsa">Sirsa</option>
                              <option value="Sonipat">Sonipat</option>
                              <option value="Panipat">Panipat</option>
                              <option value="Rewari">Rewari</option>
                              <option value="Yamunanagar">Yamunanagar</option>
                              <option value="Palwal">Palwal</option>
                              <option value="Mahendergarh">Mahendergarh</option>
                              <option value="Daman and Diu">Daman and Diu</option>
                              <option value="Silvassa">Silvassa</option>
                              <option value="Moti Daman jetty">Moti Daman jetty</option>
                              <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                              <option value="Silvassa">Silvassa</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Kochi">Kochi</option>
                              <option value="Munnar">Munnar</option>
                              <option value="Thekaddy">Thekaddy</option>
                              <option value="Alleppey">Alleppey</option>
                              <option value="Kumarakom">Kumarakom</option>
                              <option value="Kuttanad">Kuttanad</option>
                              <option value="Kumbalangi">Kumbalangi</option>
                              <option value="Kollam">Kollam</option>
                              <option value="Kannur">Kannur</option>
                              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                              <option value="Karnataka ">Karnataka </option>
                              <option value="Bengaluru">Bengaluru</option>
                              <option value="Chikkamangaluru">Chikkamangaluru</option>
                              <option value="Udupi">Udupi</option>
                              <option value="Madikeri">Madikeri</option>
                              <option value="Pattadakal">Pattadakal</option>
                              <option value="Mysuru">Mysuru</option>
                              <option value="Dandeli">Dandeli</option>
                              <option value="Gokarna">Gokarna</option>
                              <option value="Hampi">Hampi</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Chennai">Chennai</option>
                              <option value="Ooty">Ooty</option>
                              <option value="Madurai">Madurai</option>
                              <option value="Kodaikanal">Kodaikanal</option>
                              <option value="Kanyakumari">Kanyakumari</option>
                              <option value="Rameshwaram">Rameshwaram</option>
                              <option value="Coimbatore">Coimbatore</option>
                              <option value="Kanchipuram">Kanchipuram</option>
                              <option value="Tiruchirappalli">Tiruchirappalli</option>
                              <option value="Vellore">Vellore</option>
                              <option value="Kanchipuram">Kanchipuram</option>
                            </datalist>
                          </div>
                          <div className="form-group mb-2">
                            <input type="number" min={1} name="no_of_passengers" value={no_of_passengers} className="form-control" id="passangers" placeholder="No of Passengers" onChange={(e) => setPassenger(e.target.value)} required />
                          </div>
                          <div className="form-group mb-2">
                            <input type="date" name="start_date" min={currentDate} value={start_date} className="form-control c2" id="startdate" placeholder="Start Date:&nbsp;" onChange={(e) => setSdate(e.target.value)} required />
                          </div>
                          <div className="form-group mb-2">
                            <input type="date" name="end_date" min={currentDate} value={end_date} className="form-control c2" id="enddate" placeholder="End Date:&nbsp;" onChange={(e) => setEdate(e.target.value)} required />
                          </div>
                          <div className="textarea mb-2">
                            <textarea name="personalized_message" style={{ height: "50px" }} value={personalized_message} placeholder="Share your message (optional)" onChange={(e) => setMessage(e.target.value)} ></textarea>
                          </div>
                          {/* <div className="mb-2 whatsapp-optIn-container">
                            <input
                              type="checkbox"
                              name="whatsapp"
                              value="whatsapp"
                              checked={opt}
                              onChange={(e) => setOpt(e.target.false)}
                            />&nbsp;
                            <span className="whatsapp-optIn">Let us send you more updates on WhatsApp</span>
                          </div> */}
                          <div className="textarea mb-2 recaptcha">
                            <ReCAPTCHA
                              sitekey="6LcIrL4iAAAAAC25oRQtNyU2aBqKapKdFTt8P5Rg"
                              onChange={onChange}
                            />
                          </div>
                          <div className="comment-btn text-center pt-2">
                            <button type="submit" className="nir-btn" data-callback='submit' id="submit2" value="Send Enquiry" disabled={!verified}>Send Enquiry</button>
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
      </section>
    </div>
  )
}






