// import React from 'react'
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from 'react'
import axios from 'axios';
import Package_data from '../components/Packages_SFSP/package_data';
import ReactPaginate from 'react-paginate';
// import Pagination from '../../components/Packages_SFSP/pagination';
import Sort from '../components/Packages_SFSP/sort';
import Packages_Form from '../components/Contact_Forms/packages_form';
import SearchData from "../components/SearchBar/searchbar.json";
import SearchBar from "../components/SearchBar/SearchBar";
import HomeModal from '../components/CommonModal'

export async function getServerSideProps(){
    const sort = { sort: "web_pack_price", order: "asc" }
    var pData = [];
    const url = `https://backend.tripzygo.in/packs?order_by=${sort.sort}&order_by_type=${sort.order}&q=`;
    const response = await axios.get(url);
    pData = response.data.data;
    // setObj(data.data);
    // pData = pData.filter(pack =>
    //     pack.destination_search.split(',').map(keyword => keyword.trim()).includes('Couple')
    //     );
    // pData = pData.filter(pack => pack.web_pack_price <= 15000);
    pData = pData.filter(pack => pack.web_pack_price >= 100001 && pack.web_pack_price <= 500000);
    console.log(pData);
    return {
        props: {
            pData,
        }
    }

}
export default function test({pData}) {
    const [obj, setObj] = useState(pData);
    const [sort, setSort] = useState({ sort: "web_pack_price", order: "asc" });
    
    return (
        <div>
            <Head>
                <title>50+ Tour Packages 𝗨𝗻𝗱𝗲𝗿 𝗜𝗡𝗥 𝟰 𝗟𝗮𝗸𝗵</title>
                <meta name="description" content="Explore 50+ captivating destinations with our tour packages under INR 4 lakhs. Uncover unique experiences and book your dream getaway today!" />
                <link rel="icon" href="/icon.png" />

            </Head>
            {/* <HomeModal ImageLink="/images/popup/Winter.webp" alt="Winter Tour Packages" /> */}

            <section className="breadcrumb-main pb-6 pt-10" style={{ backgroundImage: "url(/images/banner_images/5.jpg)" }}>
                <div className="breadcrumb-outer">
                    <div className="container" id="searchBarContainer">
                        <div className="breadcrumb-content text-center">
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb banner-content">

                                    <h1 className='text-white' id="tourPackagesHeading">Tour Packages Under 4 lakh</h1><br />


                                </ul>
                                {/* <SearchBar placeholder="Search Destination" data={SearchData} /> */}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>
            <footer class="footer resp" style={{ backgroundColor: "black", height: "50px" }}>
                        <div class="container">
                            <div class="row mb-2">
                                <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-center text-sm-start">
                                    <div class="information text-center">
                                        <p class="text-white" id="font-size-sm1"><img style={{ height: "20px" }} src='/homepageads.jpg' />&nbsp;4.5&nbsp;<span class="fa fa-star  checked" style={{ color: "#FFA500" }}></span>&nbsp;rated</p>
                                        {/* <p id="font-size-sm"><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;about</p> */}
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-center text-sm-start">
                                    <div class="resources text-center">
                                        <p class=" text-white " id="font-size-sm1"><i class="fa fa-check-circle" style={{ color: "#FFA500" }}></i>&nbsp;100% Customised Trips</p>
                                        {/* <p id="font-size-sm"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;about</p> */}
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-center text-sm-start">
                                    <div class="social text-center">
                                        <p class=" text-white " id="font-size-sm1"><i class="fa fa-check-circle" style={{ color: "#FFA500" }}></i>&nbsp;95% Visa Success Rate</p>
                                        {/* <p id="font-size-sm"><i class="fa fa-plane" aria-hidden="true"></i>&nbsp;&nbsp;INR about</p> */}
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-6 mt-2 col-lg-3 text-center text-sm-start">
                                    <div class="contact text-center">
                                        <p class=" text-white " id="font-size-sm1"><i class="fa fa-check-circle" style={{ color: "#FFA500" }}></i>&nbsp;24x7 Support</p>
                                        {/* <p id="font-size-sm">absolute</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className='my-content'  >
                        <div className=' animated.infinite'>
                            <footer class="footer " style={{ backgroundColor: "black", height: "50px" }}>
                                <div class="container">
                                    <div class="row mb-2">
                                        <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-sm-start">
                                            <div class="information text-center">
                                                <p class="text-white" id="font-size-sm1"><img style={{ height: "18px" }} src='/homepageads.jpg' />&nbsp;4.5&nbsp;<span class="fa fa-star  checked" style={{ color: "#FFA500" }}></span>&nbsp;rated</p>

                                                {/* <p id="font-size-sm"><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;about</p> */}
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-sm-start">
                                            <div class="resources">
                                                <p class=" text-white" style={{ marginLeft: "-30px" }} id="font-size-sm1"><i class="fa fa-check-circle" style={{ color: "#FFA500" }}></i>&nbsp;100% Customised Trips</p>
                                                {/* <p id="font-size-sm"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;about</p> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>

            <section className="trending pt-4 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-8">
                            {/* <Sort sort={sort} setSort={(sort) => setSort(sort)} obj = {obj} setObj = {(obj) => setObj(obj)}/> */}

                            <Package_data data={obj} />
                            <div className="container">
                                
                            </div>
                        </div>
                        <div className="col-lg-4 pe-lg-4"><Packages_Form label="Perfect Travel Starts Here!" ></Packages_Form></div>
                    </div>

                </div>

            </section>
           
            <script src="/js/jquery-3.5.1.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/particles.js"></script>
            <script src="/js/particlerun.js"></script>
            <script src="/js/plugin.js"></script>
            {/* <script src="/js/main.js"></script> */}
            <script src="/js/custom-accordian.js"></script>
            <script src="/js/custom-nav.js"></script>
            <script src="/js/custom-navscroll.js"></script>
        </div>
    )
}

