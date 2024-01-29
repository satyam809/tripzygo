import React from 'react'
import Head from 'next/head'
import axios from 'axios';
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router from 'next/router'

const url = 'https://backend.tripzygo.in/visaholidayplan';

export default function visa() {
    const [name, setName] = useState('');
    const [email_id, setEmail] = useState('');
    const [country_code, setCountry] = useState('+91');
    const [phone_no, setPhone] = useState('');
    const [month_of_travel, setTravel] = useState('');
 
    const [opt, setOpt] = useState(true);

    const handleContact = async (e) => {
        try {
            axios.post(url, { name, email_id, country_code, phone_no, month_of_travel });
        } catch (error) { }
    };

    const handleOpt = async (e) => {
        const optInUrl = `https://media.smsgupshup.com/GatewayAPI/rest?method=OPT_IN&format=json&userid=2000217680&password=ksrcbmxS&phone_number=91${phone_no}&v=1.1&auth_scheme=plain&channel=WHATSAPP`;
        const optOutUrl = `https://media.smsgupshup.com/GatewayAPI/rest?method=OPT_OUT&format=json&userid=2000217680&password=ksrcbmxS&phone_number=91${phone_no}&v=1.1&auth_scheme=plain&channel=WHATSAPP`;
        const thankUrl = `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000217680&password=ksrcbmxS&send_to=${phone_no}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+%2A${name}%2A%2C%0A%0A%2AThank+you+for+contacting+us%21%2A+Our+travel+expert+will+contact+you+shortly%21%F0%9F%98%87%0A%0ABe+Ready+To+Save+Huge+On+Flights+%E2%9C%88%EF%B8%8F%2C+Stays+%F0%9F%8F%A8%2C++Holiday+%F0%9F%9B%84%2C+%26+Cabs+for+your+next+trip+to+%2A${month_of_travel}%2A+%F0%9F%9A%95%0A%0APlan+Your+Trip+with+Us+Now%21%F0%9F%98%89`;

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

    return (

        <div>
            <Head>
                <title>TripzyGo - Visa</title>
                <meta name="description" content="TripzyGo International is the Best Travel Agency in Gurgaon that offers the best holiday packages at affordable prices. Book your customized best tour packages." />
                <meta name="keywords" content="best tour packages, best travel agency in gurgaon, best holiday packages" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/icon.png" />
            </Head>


            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/dubai.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Dubai Travel Guide</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">

                                    {/* <div className='text-white'>Customised Travel Partners for Most Experiential Touring Experiences</div><br /> */}

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>


         
            <section class="about-us p-0">
                <div class="container">
                    <div class="about-image-box">
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-lg-12 mb-0 pe-lg-4">
                                <div class="form-main mt-minus">
                                    <div class="form-content rounded overflow-hidden">
                                        <h3 class="form-title text-center p-3 white bg-theme mb-0 rounded-top">Get best holiday plans for Dubai</h3>

                                        <form method="post" action="#" onSubmit={handleSubmit} name="contactform2" >
                                            <div className='row mx-2 mt-2'>
                                                <div className="col-lg-2 col-md-4 col-sm-12 mb-1 px-1">
                                                    <input type="text" name="first_name" value={name} className="form-control" id="fullname" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                                                </div>
                                                <div className="col-lg-2 col-md-4 col-sm-12 mb-1 px-1">
                                                    <input type="email" name="email" value={email_id} className="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                                </div>
                                                <div className='d-flex col-lg-3 col-sm-12 col-md-4 px-0'>
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
                                                <div className="col-lg-2 col-md-3 mb-1 px-1">
                                                <select name="month_of_travel" value={month_of_travel} id="travel" placeholder="Month of travel" onChange={(e) => setTravel(e.target.value)} required >
                                                        <option value="Visa" selected>Month of travel</option>
                                                        <option value="Feb 2023">Feb 2023</option>
                                                        <option value="Mar 2023">Mar 2023</option>
                                                        <option value="Apr 2023">Apr 2023</option>
                                                        <option value="May 2023">May 2023</option>
                                                        <option value="Jun 2023">Jun 2023</option>
                                                        <option value="Jul 2023">Jul 2023</option>
                                                        <option value="Aug 2023">Aug 2023</option>
                                                        <option value="Sep 2023">Sep 2023</option>
                                                        <option value="Oct 2023">Oct 2023</option>
                                                        <option value="Nov 2023">Nov 2023</option>
                                                        <option value="Dec 2023">Dec 2023</option>
                                                        <option value="Jan 2024">Jan 2024</option>




                                                    </select>

                                                </div>
                                                <div className="col-lg-3 col-md-4 mb-1 px-1" >
                                                    <button type="submit" className="nir-btn2" data-callback='submit' id="submit2" value="Send Enquiry" style={{padding: "8px 92px"}} >Send Enquiry</button>
                                                </div>
                                            </div>
                                            
                                            <div className="row px-2">

                                                <div className="mb-2 whatsapp-optIn-container ms-1">
                                                    <input
                                                        type="checkbox"
                                                        name="whatsapp"
                                                        value="whatsapp"
                                                        checked={opt}
                                                        onChange={(e) => setOpt(e.target.false)}
                                                    />&nbsp;
                                                    <span className="whatsapp-optIn" style={{ fontSize: "12px" }}>Let us send you updates on WhatsApp</span>
                                                </div>
                                             
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="white-overlay"></div>
            </section>
            <div class="tabs-navbar bg-white sticky bordernone py-2">
                <ul id="tabs" class="nav nav-tabs bordernone mb-0 overflow-visible ">
                    <div class="scrollmenu container px-0 py-1">
                        <a class="scroller-item2 col-lg-2  py-1" href="#aboutdubai">About Dubai</a>
                        <a class="scroller-item2 col-lg-2 py-1 " href="#things-to-do">Things to do </a>
                        <a class="scroller-item2 col-lg-2 py-1 " href="#places-to-visit">Places to visit</a>
                        <a class="scroller-item2 col-lg-2 py-1 " href="#places-to-eat">Places to eat</a>
                        <a class="scroller-item2 col-lg-2 py-1 " href="#plan-to-travel" >Plan your travel</a>
                        <a class="scroller-item2 col-lg-2 py-1 " href="#faq">FAQ’s</a>

                    </div>
                </ul>
            </div>
            <section class="trending pt-0 pb-0 bg-lgrey">
                <div class="container">
                    <div class="row">


                        <div class="col-lg-12">
                            <div class="single-content">

                                <div class="description mb-2">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-6 mb-2" id='aboutdubai'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4 class="mb-2">About Dubai</h4>
                                                <p class="mb-0">The glamorous city of Dubai, glittering like a desert jewel, is a land of dreams. The gleaming skyline of this cosmopolitan city is made up of ultramodern skyscrapers rising against an azure sky. As night falls on Dubai, the city comes to life with twinkling lights adorning these tall structures. A nighttime drive through Downtown Dubai will leave you mesmerised by the fantasy land of lights and colours that surrounds you. The world's tallest building, the Burj Khalifa, will leave you speechless. The Dubai Fountain, the world's largest dancing fountain, will take your breath away. Swim with sharks in the massive aquarium at Dubai Mall and get lost in a world of make-believe at Mall of the Emirates. Every corner of Dubai reveals an intriguing blend of traditions and modernization. Al Fahidi Fort, Dubai's oldest building surrounded by a fast-paced metropolis, is a prime example of this. The sprawling Miracle Garden and Dubai Creek Park are testaments to the people of Dubai's determination to overcome the odds and grow vibrant blooms in the middle of the desert.</p>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 col-md-6 mb-2" id='places-to-visit'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4 class="mb-2">Places to visit in Dubai</h4>
                                                <h5>Dubai is a modern metropolis with a rich cultural heritage and an array of tourist attractions. Some famous  places to visit in Dubai include:</h5>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_visit_dubai_visa_page_image/burj khalifa.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Burj Khalifa</h4>
                                                                <p class="mb-1">The tallest building in the world, offering stunning views from its observation deck.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                             
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_visit_dubai_visa_page_image/The Dubai Mall.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">The Dubai Mall </h4>
                                                                <p class="mb-1">One of the largest shopping centers in the world, offering a range of shopping, dining, and entertainment options.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_visit_dubai_visa_page_image/Palm Jumeirah.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Palm Jumeirah</h4>
                                                                <p class="mb-1"> An artificial island in the shape of a palm tree, offering luxury hotels, beaches, and attractions.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_visit_dubai_visa_page_image/Dubai Miracle Garden.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Dubai Miracle Garden</h4>
                                                                <p class="mb-1"> The world's largest flower garden, featuring over 45 million blooming flowers in a variety of designs and themes.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_visit_dubai_visa_page_image/Dubai Museum.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Dubai Museum</h4>
                                                                <p class="mb-1">A museum housed in an 200-year-old fort, showcasing the history and culture of Dubai.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_visit_dubai_visa_page_image/Ski Dubai.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Ski Dubai</h4>
                                                                <p class="mb-1">An indoor ski resort, offering skiing and snowboarding in the desert.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div class="mb-1">The Dubai Fountain Boardwalk is a walkway that provides views of the fountain as well as dining and shopping options.</div>

                                                <div class="mb-1">These are just a few of the many sights and attractions in Dubai which you can witness with  <a href='/international-tour-packages/dubai-tour-packages' style={{ color: "red" }}>Dubai tour packages</a> , making it a destination for travelers of all interests.</div>

                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='places-to-eat'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4 class="mb-2">Places to eat in Dubai</h4>
                                                <h5>Dubai is known for its diverse culinary scene, offering a range of options for food lovers. Some popular dining options include:</h5>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_eat_in_dubai/At.mosphere Restaurant & Lounge.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Atmosphere Restaurant & Lounge</h4>
                                                                <p class="mb-1">Located in the Burj Khalifa, it offers a 360-degree view of the city with fine dining.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_eat_in_dubai/Al Bahou.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Al Bahou</h4>
                                                                <p class="mb-1">Offers traditional Middle Eastern cuisine in a contemporary setting.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_eat_in_dubai/Tomo.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Tomo</h4>
                                                                <p class="mb-1">A contemporary Japanese restaurant with a fusion twist.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_eat_in_dubai/BB Social Dining.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">BB Social Dining</h4>
                                                                <p class="mb-1">A contemporary European restaurant known for its innovative menu and stunning views of the Dubai Fountain.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_eat_in_dubai/STK Dubai.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">STK Dubai</h4>
                                                                <p class="mb-1">A chic steakhouse with an extensive menu of premium cuts and cocktails.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_eat_in_dubai/La Petite Maison.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">La Petite Maison</h4>
                                                                <p class="mb-1">Offers French Mediterranean cuisine in a stylish and intimate setting.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_eat_in_dubai/Zuma.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Zuma</h4>
                                                                <p class="mb-1">A contemporary Japanese restaurant with a lively atmosphere and a menu of sushi and robatayaki dishes.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container my-5">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <img class="w-100 shadow" src="/images/visa/places_to_eat_in_dubai/Pavilion Downtown Dubai.webp" />
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <div class="p-0 mt-1">
                                                                <h4 class="mb-1">Pavilion Downtown Dubai </h4>
                                                                <p class="mb-1">A chic rooftop restaurant offering international cuisine and panoramic views of the city.</p>
                                                                {/* <a href="#" class="btn btn-outline-dark">Read More</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5>These are just a few of the many options available in Dubai, each offering its own unique dining experience.</h5>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4 class="mb-2">Things to do in Dubai</h4>
                                                <p class="mb-0">Dubai is an exciting destination with a vibrant atmosphere and extravagant amenities. It's a city of shining skyscrapers, towering malls, buzzing beachside resorts, action-centering theme parks & impressive souks. Dubai has so much to see and explore that it's almost as though you need a vacation from all the work. So, before you get overwhelmed with what to do in Dubai and start checking out what Dubai has to offer.</p>
                                                <p class="mb-0">It is a massive and popular tourist destination with bustling beaches, swanky malls, and lively districts. It's full of life and the city looks pretty from every angle. Amazing is the best way to describe how tourists feel about touring this city and experiencing some of the best things it has to offer. Malls, restaurants, attractions; there's something for everyone here.</p>
                                                <p class="mb-0">Dubai is home to some truly spectacular experiences that are perfect for tourists of all ages. Skydiving at the Palm Jumeirah, riding a boat on the Burj Khalifa waterfront, and taking a desert safari with BBQ dinner are among the top tourist sites to explore. This means there's always something exciting to explore, whether it's an escape from the heat or an opportunity for another activity during your stay. Tourists love coming to Dubai because there are so many <a href='/blogs/five-things-to-do-in-dubai-in-man-made-installations' style={{ color: "red" }}> things to do in Dubai</a> all around the year.</p>

                                            </div>
                                        </div>
                                        <div className="description mb-2" id='faq'>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        <h4 class="mb-2">FAQ’s </h4>
                                                        <div className="row">
                                                            <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Why choose Dubai Holiday Tour Packages?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Tripzygo International presents various tour packages from India to Dubai, which works like a tour guide. The team suggests the best package according to your needs and requirements. It is also customized as and when required, through which you enjoy a flawless journey.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Can I need a visa to travel to Dubai?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0"> It depends on your nationality. In some countries, you don’t need visas, such as Bahrain, Oman, Kuwait, Saudi Arabia, and Qatar, while countries such as the UK, USA, Australia, and India, need a visa on arrival.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Is alcohol prohibited in Dubai?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Law of Dubai firmly resists the consumption of alcohol in public places and while driving. Though, it is allowed in authorised bars attached to hotels, clubs, restaurants, and private celebrations.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What are the must do things in Dubai?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-1">There are many things to discover in Dubai, such as </div>
                                                                            <div class="mb-1"><strong className='strongfont'> <strong className='strongfont'> • Desert Safari</strong></strong> </div>
                                                                            <div class="mb-1"><strong className='strongfont'> <strong className='strongfont'> • Quad Bike</strong></strong> </div>
                                                                            <div class="mb-1"><strong className='strongfont'> <strong className='strongfont'> • Camel Ride</strong></strong> </div>
                                                                            <div class="mb-1"><strong className='strongfont'> <strong className='strongfont'> • Visit Burj Khalifa</strong></strong> </div>
                                                                            <div class="mb-1"><strong className='strongfont'> <strong className='strongfont'> • Tour of Dubai Aquarium and Underwater Zoo</strong></strong> </div>
                                                                            <div class="mb-1"><strong className='strongfont'> <strong className='strongfont'> • Trip of Palm Jumeirah</strong></strong> </div>
                                                                            <div class="mb-1"><strong className='strongfont'> <strong className='strongfont'> • To discover all these things, pick the best Dubai holiday tour packages. </strong></strong> </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Can I travel to Dubai after September?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Yes, it is the perfect time to travel to Dubai as it is start of winter season, during this period the weather is also pleasant and healthy. Explore best <a href='/international-tour-packages/dubai-tour-packages' style={{ color: "red" }}>Dubai tour packages</a></div>
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
