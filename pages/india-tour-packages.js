import React from 'react'
import Link from 'next/dist/client/link'
import Head from "next/dist/shared/lib/head";
import { useState } from 'react'
import axios from 'axios';
import dynamic from 'next/dynamic';
const Sort = dynamic(() => import('../components/Packages_SFSP/sort'), {
    ssr: false,
});
const Package_data_dest = dynamic(() => import('../components/Packages_SFSP/package_data_int'), {
    ssr: true,
});
const Ourpartners = dynamic(() => import('../components/OurPartners'), {
    ssr: true,
}); 
const ModalIndia10s = dynamic(() => import('../components/ModalIndia10s'), {
    ssr: true,
}); 
const ModalIndiaTour = dynamic(() => import('../components/ModalIndiaTour'), {
    ssr: true,
}); 
const Filters = dynamic(() => import('../components/Packages_SFSP/filters'), {
    ssr: true,
}); 
const DomesticSlider = dynamic(() => import('../components/Slick_Sliders/SlickDestinationsSlider'), {
    ssr: true,
});
// import Package_data_dest from '../components/Packages_SFSP/package_data_dest';
// import Ourpartners from "../components/OurPartners";
// import ModalIndia10s from "../components/ModalIndia10s";
// import ModalIndiaTour from "../components/ModalIndiaTour";
// import Filters from "../components/Packages_SFSP/filters"
// import Pagination from '../components/Packages_SFSP/pagination';
// import ReactPaginate from 'react-paginate';
// import Package_data from '../components/Packages_SFSP/package_data';
// import Sort from '../components/Packages_SFSP/sort';
// import Packages_Form from '../components/Contact_Forms/packages_form';
// import DomesticSlider from '../components/Slick_Sliders/SlickDestinationsSlider';
// import SearchData from "../components/SearchBar/searchbar.json";
// import SearchBar from "../components/SearchBar/SearchBar";

export async function getServerSideProps(context) {
    var data22 = [];
    var place = 'India';
    try {
        const sort = { sort: "web_pack_price", order: "asc" }
        const url = `https://backend.tripzygo.in/packs?&order_by=${sort.sort}&order_by_type=${sort.order}&q=`;
        const response = await axios.get(url);
        data22 = response.data.data;
        data22 = data22.filter(pack =>
            pack.destination_search.split(',').map(keyword => keyword.trim()).includes(place)
        );
        console.log(data22);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
    return {
        props: {
            data22,
        }
    }
}

export default function test({ data22 }) {
    const [obj, setObj] = useState(data22);
    const [sort, setSort] = useState({ sort: "web_pack_price", order: "asc" });
    const [page, setPage] = useState(1);
    // const name = data22.name;
    // const location_package = data22.location;
    return (
        <div>
            <Head>
                <title>TripzyGo - Book The Best India Domestic Holiday Tour Packages</title>
                <meta name="description" content="Get the best India holiday tour packages that suit your budget. Book an affordable & best India travel with our domestic holiday tour packages. Contact us!" />
                <meta name="keywords" content="best india holiday tour packages, domestic holiday tour packages, best india travel tour packages" />
                <link rel="icon" href="/icon.png" />
                <meta property="og:url" content="https://www.tripzygo.in/india-tour-packages" />
                <meta property="og:title" content="Book The Best India Domestic Holiday Tour Packages" />
                <meta property="og:description" content="Get the best India holiday tour packages that suit your budget. Book an affordable & best India travel with our domestic holiday tour packages. Contact us!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/banner_images/india_tour.webp" />
            </Head>
            <div className="enquiryBtn">
                <ModalIndiaTour buttonLabel="Need Help? Talk To An Expert" label="Perfect Travel Starts Here!" labelSize="20px" border="0"></ModalIndiaTour>
            </div>
            <ModalIndia10s label="Perfect Travel Starts Here!"></ModalIndia10s>
            <section className="breadcrumb-main pb-10 pt-14" style={{ backgroundImage: "url(/images/banner_images/india_tour.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container" id="searchBarContainer">
                        <div className="breadcrumb-content text-center">
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb banner-content">

                                    <h2 className='text-white'>India Tour Packages</h2><br />

                                </ul>
                                {/* <SearchBar placeholder="Search Destination" data={SearchData} /> */}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>

            {/* <div class="shadow-sm p-3 mb-2 bg-white rounded sticky-md-top sticky-sm-top" style={{ zIndex: "9999" }}>
  <button type="button" class="btn btn-outline-secondary" style={{borderRadius:"20px"}}><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;No. of Days</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <button type="button" class="btn btn-outline-secondary" style={{borderRadius:"20px"}}><i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;&nbsp;Type of Interest</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <button type="button" class="btn btn-outline-secondary" style={{borderRadius:"20px"}}><i class="fa fa-money" aria-hidden="true"></i>&nbsp;&nbsp;Budget</button>
  <button type="button" class="btn btn-outline-success float-right" style={{borderRadius:"20px"}}><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;Need help? Talk to an expert</button>
</div> */}
            <Filters data22={data22} obj={obj} setObj={(obj) => setObj(obj)} />
            <section className="trending mt-6 pt-3 pb-0 bg-lgrey">

                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-12">
                            {/* <Sort sort={sort} setSort={(sort) => setSort(sort)} obj = {obj} setObj = {(obj) => setObj(obj)}/> */}

                            <Package_data_dest data={obj} />
                            {/* <div className="container">
                                <ReactPaginate
                                    previousLabel={"<<"}
                                    nextLabel={">>"}
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={0}
                                    pageRangeDisplayed={4}
                                    onPageChange={changePage}
                                    containerClassName={"pagination pagination-sm justify-content-center"}
                                    pageClassName={"page-item"}
                                    pageLinkClassName={"page-link"}
                                    previousClassName={"page-item"}
                                    previousLinkClassName={"page-link"}
                                    nextClassName={"page-item"}
                                    nextLinkClassName={"page-link"}
                                    breakClassName={"page-item"}
                                    breakLinkClassName={"page-link"}
                                    activeClassName={"active"}
                                    disabledClassName={"pagination_next-prevDisabled"}
                                />
                            </div> */}

                            {/* <Pagination page={page} limit={obj.limit ? obj.limit : 0}
                                total={obj.total ? obj.total : 0}
                                setPage={(page) => setPage(page)}
                            /> */}
                        </div>
                        {/* <div className="col-lg-4 pe-lg-4"><Packages_Form></Packages_Form></div> */}
                    </div>

                </div>

            </section>
            <section className="trending pb-4 pt-6 tourPackage" style={{ padding: "10px" }}>
                <div className="container" >
                    {/* <div className="section-title mb-6  mx-auto text-center">
                        <h4 className="mb-1 theme1">Soulmate Special</h4>

                        <h3 className="mb-1" style={{ fontSize: "35px" }}>Top Romantic <span className="theme"> Honeymoon Destinations</span></h3>
                        <div>For the perfect start to your new life together, we have you covered with the<br /> best romantic honeymoon destinations</div>
                    </div> */}


                    <div className="col-lg-12 ">

                        <DomesticSlider
                            package1Image="/images/sliders/Uttarakhand.webp"
                            package2Image="/images/sliders/Sikkim.webp"
                            package3Image="/images/sliders/Kashmir.webp"
                            package4Image="/images/sliders/Andaman.webp"
                            package5Image="/images/sliders/Ladakh.webp"
                            package6Image="/images/landing/Kerala.webp"
                            package1Name="Uttarakhand"
                            package2Name="Sikkim"
                            package3Name="Kashmir"
                            package4Name="Andaman"
                            package5Name="Ladakh"
                            package6Name="Kerala"
                            package2Link="/india-tour-packages/sikkim-tour-packages"
                            package3Link="/india-tour-packages/kashmir-tour-packages"
                            package4Link="/india-tour-packages/andaman-tour-packages"
                            package5Link="/india-tour-packages/leh-ladakh-tour-packages"
                            package1Link="/india-tour-packages/uttarakhand-tour-packages"
                            package6Link="/india-tour-packages/kerala-tour-packages" />


                    </div>

                </div>

            </section>

            <div className="pt-10">
                <Ourpartners />
            </div>
            <div className='my-content'>
                <div className='carouse_div animated.infinite'>
                    <a href="#" class="floatfilter">
                        {/* <i class="fa fa-sort my-floatfilter" style={{fontSize:"25px"}} aria-hidden="true"></i> */}
                        <Sort sort={sort} setSort={(sort) => setSort(sort)} obj={obj} setObj={(obj) => setObj(obj)} />

                    </a>
                </div>
            </div>

        </div>
    )
}

