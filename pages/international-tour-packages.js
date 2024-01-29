// import React from 'react'
// import Link from 'next/dist/client/link'
// import Head from "next/dist/shared/lib/head";
// import { useEffect, useState } from 'react'
// import axios from 'axios';
// // import Package_data from '../components/Packages_SFSP/package_data';
// import Package_data_dest from '../components/Packages_SFSP/package_data_int';
// import ModalInternational10s from "../components/ModalInternational10s";
// import ModalInternationalTour from "../components/ModalInternationalTour";

// // import Pagination from '../components/Packages_SFSP/pagination';
// // import ReactPaginate from 'react-paginate';
// import Sort from '../components/Packages_SFSP/sort';
// // import Packages_Form from '../components/Contact_Forms/packages_form';
// import InternationalSlider from '../components/Slick_Sliders/SlickDestinationsSlider';
// // import SearchData from "../components/SearchBar/searchbar.json";
// // import SearchBar from "../components/SearchBar/SearchBar";
// import Ourpartners from "../components/OurPartners";
// import Filters from "../components/Packages_SFSP/filters"


// export async function getServerSideProps(context) {
//     var data22 = [];
//     var place = 'International';
//     try {
//         const sort = { sort: "web_pack_price", order: "asc" }
//         const url = `https://backend.tripzygo.in/packs?&order_by=${sort.sort}&order_by_type=${sort.order}&q=`;
//         const response = await axios.get(url);
//         data22 = response.data.data;
//         data22 = data22.filter(pack =>
//             pack.destination_search.split(',').map(keyword => keyword.trim()).includes(place)
//           );
//         console.log(data22);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     return {
//         props: {
//             data22,
//         }
//     }
// }

// export default function test({ data22 }) {
//     const [obj, setObj] = useState(data22);
//     const [sort, setSort] = useState({ sort: "web_pack_price", order: "asc" });
//     const [page, setPage] = useState(1);

//     return (
//         <div>
//             <Head>
//                 <title>TripzyGo - Book The Best International Holiday Tour Packages From India</title>
//                 <meta name="description" content="Book your International Holiday Tour Package with Tri[pzyGo to experience a new country and culture. We offer the best holiday packages at affordable prices." />
//                 <meta name="keywords" content="best international tour packages from india, international holiday tour packages" />
//                 <link rel="icon" href="/icon.png" />
//                 <meta property="og:url" content="https://www.tripzygo.in/international-tour-packages" />
//                 <meta property="og:title" content="Book The Best International Holiday Tour Packages From India" />
//                 <meta property="og:description" content="Get excited with Vietnam vacation packages from India. Book your 6 days Vietnam trip with us and enjoy your Vietnam vacation from India now. Contact us today!" />
//                 <meta property="og:image" content="https://www.tripzygo.in/images/banner_images/international_tour.webp" />
//             </Head>
//             <div className="enquiryBtn">
//                 <ModalInternationalTour buttonLabel="Need Help? Talk To An Expert" label="Perfect Travel Starts Here!" labelSize="20px" border="0"></ModalInternationalTour>
//             </div>
//             <ModalInternational10s label="Perfect Travel Starts Here!"></ModalInternational10s>

//             <section className="breadcrumb-main pb-10 pt-14" style={{ backgroundImage: "url(/images/banner_images/international_tour.webp)" }}>
//                 <div className="breadcrumb-outer">
//                     <div className="container " id="searchBarContainer">
//                         <div className="breadcrumb-content text-center">
//                             <nav aria-label="breadcrumb" className="d-block">
//                                 <ul className="breadcrumb banner-content">

//                                     <h2 className='text-white'>International Tour Packages</h2><br />


//                                 </ul>
//                                 {/* <SearchBar placeholder="Search Destination" data={SearchData} /> */}
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="dot-overlay"></div>
//             </section>
//             <Filters data22={data22} obj = {obj} setObj={(obj) => setObj(obj)}/>

//             <section className="trending mt-6 pt-6 pb-0 bg-lgrey">
//                 <div className="container">
//                     <div className="row flex-row-reverse">
//                         <div className="col-lg-12">
//                             {/* <Sort sort={sort} setSort={(sort) => setSort(sort)} obj = {obj} setObj = {(obj) => setObj(obj)}/> */}

//                             <Package_data_dest data={obj} />
//                             {/* <div className="container">
//                                 <ReactPaginate
//                                     previousLabel={"<<"}
//                                     nextLabel={">>"}
//                                     breakLabel={"..."}
//                                     pageCount={pageCount}
//                                     marginPagesDisplayed={0}
//                                     pageRangeDisplayed={4}
//                                     onPageChange={changePage}
//                                     containerClassName={"pagination pagination-sm justify-content-center"}
//                                     pageClassName={"page-item"}
//                                     pageLinkClassName={"page-link"}
//                                     previousClassName={"page-item"}
//                                     previousLinkClassName={"page-link"}
//                                     nextClassName={"page-item"}
//                                     nextLinkClassName={"page-link"}
//                                     breakClassName={"page-item"}
//                                     breakLinkClassName={"page-link"}
//                                     activeClassName={"active"}
//                                     disabledClassName={"pagination_next-prevDisabled"}
//                                 />
//                             </div> */}

//                             {/* <Pagination page={page} limit={obj.limit ? obj.limit : 0}
//                                 total={obj.total ? obj.total : 0}
//                                 setPage={(page) => setPage(page)}
//                             /> */}
//                         </div>
//                         {/* <div className="col-lg-4 pe-lg-4"><Packages_Form></Packages_Form></div> */}
//                     </div>

//                 </div>

//             </section>
//             <section className="trending pb-4 pt-6 tourPackage" style={{ padding: "10px" }}>
//                 <div className="container" >
//                     <div className="col-lg-12 ">
//                         <InternationalSlider
//                             package1Image="/images/sliders/Italy.webp"
//                             package2Image="/images/sliders/France.webp"
//                             package3Image="/images/sliders/Turkey.webp"
//                             package4Image="/images/sliders/Malaysia.webp"
//                             package5Image="/images/sliders/Eastern Europe.webp"
//                             package6Image="/images/sliders/Switzerland.webp"
//                             package1Name="Italy"
//                             package2Name="France"
//                             package3Name="Turkey"
//                             package4Name="Malaysia"
//                             package5Name="Eastern Europe"
//                             package6Name="Switzerland"
//                             package1Link="/international-tour-packages/italy-tour-packages"
//                             package2Link="/international-tour-packages/france-tour-packages"
//                             package3Link="/international-tour-packages/turkey-tour-packages"
//                             package4Link="/international-tour-packages/malaysia-tour-packages"
//                             package5Link="/international-tour-packages/east-europe-tour-packages"
//                             package6Link="/international-tour-packages/switzerland-tour-packages" />



//                     </div>



//                 </div>
//             </section>
//             <div className="pt-10">
//                 <Ourpartners />
//             </div>

//             <div className='my-content'>
//                     <div className='carouse_div animated.infinite'>
//                     <a href="#" class="floatfilter">
// {/* <i class="fa fa-sort my-floatfilter" style={{fontSize:"25px"}} aria-hidden="true"></i> */}
// <Sort sort={sort} setSort={(sort) => setSort(sort)} obj = {obj} setObj = {(obj) => setObj(obj)}/>

// </a>
//                     </div>
//                 </div>
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import PackageDataDest from '../components/Packages_SFSP/package_data_int';
import ModalInternational10s from '../components/ModalInternational10s';
import ModalInternationalTour from '../components/ModalInternationalTour';
import InternationalSlider from '../components/Slick_Sliders/SlickDestinationsSlider';
import Ourpartners from '../components/OurPartners';
import Filters from '../components/Packages_SFSP/filters';
import Sort from '../components/Packages_SFSP/sort';

const API_URL = 'https://backend.tripzygo.in/packs';

export async function getServerSideProps(context) {
    try {
        const sort = { sort: 'web_pack_price', order: 'asc' };
        const response = await axios.get(`${API_URL}?&order_by=${sort.sort}&order_by_type=${sort.order}&q=`);
        const data = response.data.data.filter(pack =>
            pack.destination_search.split(',').map(keyword => keyword.trim()).includes('International')
        );
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                data: [],
            },
        };
    }
}

export default function Test({ data }) {
    const [obj, setObj] = useState(data);
    const [sort, setSort] = useState({ sort: 'web_pack_price', order: 'asc' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}?&order_by=${sort.sort}&order_by_type=${sort.order}&q=`);
                const filteredData = response.data.data.filter(pack =>
                    pack.destination_search.split(',').map(keyword => keyword.trim()).includes('International')
                );
                setObj(filteredData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [sort]);

    return (
        <div>
            <Head>
                <title>TripzyGo - Book The Best International Holiday Tour Packages From India</title>
                <meta name="description" content="Book your International Holiday Tour Package with Tri[pzyGo to experience a new country and culture. We offer the best holiday packages at affordable prices." />
                <meta name="keywords" content="best international tour packages from india, international holiday tour packages" />
                <link rel="icon" href="/icon.png" />
                <meta property="og:url" content="https://www.tripzygo.in/international-tour-packages" />
                <meta property="og:title" content="Book The Best International Holiday Tour Packages From India" />
                <meta property="og:description" content="Get excited with Vietnam vacation packages from India. Book your 6 days Vietnam trip with us and enjoy your Vietnam vacation from India now. Contact us today!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/banner_images/international_tour.webp" />
            </Head>
            <div className="enquiryBtn">
                <ModalInternationalTour buttonLabel="Need Help? Talk To An Expert" label="Perfect Travel Starts Here!" labelSize="20px" border="0"></ModalInternationalTour>
            </div>
            <ModalInternational10s label="Perfect Travel Starts Here!"></ModalInternational10s>

            <section className="breadcrumb-main pb-10 pt-14" style={{ backgroundImage: "url(/images/banner_images/international_tour.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container " id="searchBarContainer">
                        <div className="breadcrumb-content text-center">
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb banner-content">

                                    <h2 className='text-white'>International Tour Packages</h2><br />


                                </ul>

                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>
            <Filters data22={data} obj={obj} setObj={setObj} />
            <section className="trending mt-6 pt-6 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-12">
                            <PackageDataDest data={obj} />
                        </div>
                    </div>

                </div>
            </section>
            <section className="trending pb-4 pt-6 tourPackage" style={{ padding: '10px' }}>
                <div className="container" >
                    <div className="col-lg-12 ">
                        <InternationalSlider
                            package1Image="/images/sliders/Italy.webp"
                            package2Image="/images/sliders/France.webp"
                            package3Image="/images/sliders/Turkey.webp"
                            package4Image="/images/sliders/Malaysia.webp"
                            package5Image="/images/sliders/Eastern Europe.webp"
                            package6Image="/images/sliders/Switzerland.webp"
                            package1Name="Italy"
                            package2Name="France"
                            package3Name="Turkey"
                            package4Name="Malaysia"
                            package5Name="Eastern Europe"
                            package6Name="Switzerland"
                            package1Link="/international-tour-packages/italy-tour-packages"
                            package2Link="/international-tour-packages/france-tour-packages"
                            package3Link="/international-tour-packages/turkey-tour-packages"
                            package4Link="/international-tour-packages/malaysia-tour-packages"
                            package5Link="/international-tour-packages/east-europe-tour-packages"
                            package6Link="/international-tour-packages/switzerland-tour-packages" />



                    </div>



                </div>
            </section>
            <div className="pt-10">
                <Ourpartners />
            </div>
            <div className="my-content">
                <div className="carouse_div animated.infinite">
                    <a href="#" className="floatfilter">
                        <Sort sort={sort} setSort={setSort} obj={obj} setObj={setObj} />
                    </a>
                </div>
            </div>
        </div>
    );
}
