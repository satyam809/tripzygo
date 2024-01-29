import React from 'react'
import Link from 'next/dist/client/link'
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from 'react'
import axios from 'axios';
import Package_data from '../components/Packages_SFSP/package_data';
import FilterSearch from '../components/Packages_SFSP/filterSearch';
// import FilterSearch from '../../components/Packages_SFSP/filterSearch';
import ReactPaginate from 'react-paginate';
import Sort from '../components/Packages_SFSP/sort';
import Packages_Form from '../components/Contact_Forms/packages_form';
import InternationalSlider from '../components/Slick_Sliders/SlickDestinationsSlider';
// import SearchData from "../components/SearchBar/searchbar.json";
// import SearchBar from "../components/SearchBar/SearchBar";
import Ourpartners from "../components/OurPartners";

export async function getServerSideProps(context) {
    var data22 = [];
    var place = '';
    try {
        const sort = { sort: "total_price", order: "asc" }
        const url = `https://backend.tripzygo.in/packs?&order_by=${sort.sort}&order_by_type=${sort.order}&q=${place}`;
        const response = await axios.get(url);
        data22 = response.data.data;
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
    const [sort, setSort] = useState({ sort: "total_price", order: "asc" });
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('');
    const [place, setPlace] = useState('');

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
            <section className="breadcrumb-main pb-10 pt-14" style={{ backgroundImage: "url(/images/banner_images/international_tour.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container " id="searchBarContainer">
                        <div className="breadcrumb-content text-center">
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb banner-content">

                                    <h2 className='text-white'>Get Customized Tour Packages</h2><br />


                                </ul>
                                
                                {/* <SearchBar placeholder="Search Destination" data={SearchData} /> */}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>
            {/* <section className="trending pb-4 pt-6 tourPackage" style={{ padding: "10px" }}>
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
            </section> */}
            <section className="trending mt-6 pt-6 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-8">

                            <Sort sort={sort} setSort={(sort) => setSort(sort)} obj = {obj} setObj = {(obj) => setObj(obj)}/>
                            <FilterSearch data22={data22} obj = {obj} setObj={(obj) => setObj(obj)}/>
                            <Package_data data={obj} />
                            
                        </div>
                        <div className="col-lg-4 pe-lg-4"><Packages_Form></Packages_Form></div>
                    </div>

                </div>

            </section>
            <div className="pt-7">
                <Ourpartners />
            </div>
        </div>
    )
}








///////// old packages




// import React from 'react'
// import Head from "next/dist/shared/lib/head";
// import { useEffect, useState } from 'react'
// import axios from 'axios';
// // import Search from './search';
// import Package_data from '../components/Packages_SFSP/package_data';
// import Package_data_Mobile from '../components/Packages_SFSP/package_data_mobile';
// // import Pagination from '../components/Packages_SFSP/pagination';
// import ReactPaginate from 'react-paginate';
// import Sort from '../components/Packages_SFSP/sort';
// import Mobile_Filter from '../components/Packages_SFSP/mobile_filter';
// import Destination_search from '../components/Packages_SFSP/filter_by_destination';
// import SearchData from "../components/SearchBar/searchbar.json";
// import SearchBar from "../components/SearchBar/SearchBar";
// import HomeModal from '../components/CommonModal';
// import Ourpartners from "../components/OurPartners";

// const base_url = process.env.NEXT_PUBLIC_BASE_URL;

// function App() {
//     const [obj, setObj] = useState({});
//     const [sort, setSort] = useState({ sort: "price", order: "asc" });
//     const [filterDestination, setFilterDestination] = useState([]);
//     const [page, setPage] = useState(1);
//     const [search, setSearch] = useState("");


//     const getAllPackages = async () => {
//         try {
//             const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order
//                 }&destination_search=${filterDestination.toString()}&search=${search}`;
//             const { data } = await axios.get(url);
//             setObj(data);
//         } catch (err) {
//         }
//     };

//     useEffect(() => {
//         getAllPackages();
//     }, [sort, filterDestination, page]);

//     useEffect(() => {
//         if (search === '') {
//             getAllPackages();
//         }
//     }, [search])

//     // const handleEnterClick = (e) => {

//     //     if (e.keyCode === 13) {
//     //         e.preventDefault();
//     //         getAllPackages();
//     //     }
//     // }

//     const pageCount = Math.ceil(obj.total / 8);

//     const changePage = ({ selected }) => {
//         setPage(selected + 1);
//     };

//     return (

//         <div>
//             <Head>
//                 <title>TripzyGo - Packages</title>
//                 <meta name="description" content="Generated by create next app" />
//                 <link rel="icon" href="/icon.png" />
//                 <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
//                 <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
//                 <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//             </Head>
//             <section className="breadcrumb-main pb-20 pt-16" style={{ backgroundImage: "url(images/banner_images/packages.webp)" }}>
//                 <HomeModal ImageLink="/images/popup/Loviest Honeymoon.webp" alt="best travel agency in gurgaon" />
//                 <div className="breadcrumb-outer">
//                     <div className="container" id="searchBarContainer">
//                         <div className="breadcrumb-content text-center">
//                             <nav aria-label="breadcrumb" className="d-block">
//                                 <ul className="breadcrumb banner-content">

//                                     <h2 className='text-white'>Get Customized Tour Packages</h2>
//                                     <div className='text-white mb-2'> Exciting Offers Customised for The Best Travel Packages</div><br />
//                                     {/* <Search setSearch={(search) => setSearch(search)} onPressEnter={handleEnterClick} getAllPackages={getAllPackages} /> */}

//                                 </ul>
//                                 <SearchBar placeholder="Search Destination" data={SearchData} />
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="dot-overlay"></div>
//             </section>


//             <section className="trending pt-6 pb-0 bg-lgrey">
//                 <div className="container">
//                     <div className="row flex-row-reverse">
//                         <div className="col-lg-8">
//                             <div className="container align-items-center">
//                                 <div className="filter">
//                                     <button className="btn btn-default filterButton" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span className="fa fa-filter filter-logo"></span></button>
//                                 </div>

//                                 <div id="mobile-filter" className="collapse">


//                                     <Mobile_Filter filterDestination={filterDestination}
//                                         destinations={obj.destination_search ? obj.destination_search : []}
//                                         setFilterDestination={(destinations) => setFilterDestination(destinations)}
//                                         reset={() => setFilterDestination([])}
//                                     />

//                                 </div>

//                                 <Sort sort={sort} setSort={(sort) => setSort(sort)}  />

//                             </div>

//                             {/*Desktop & Tab View*/}
//                             <div className='package-data-desktop-tab-view'>
//                             <Package_data packages={obj.packages ? obj.packages : []} />
//                             </div>

//                             {/*Mobile View*/}
//                             <div className='package-data-mobile-view'>
//                                 <Package_data_Mobile packages={obj.packages ? obj.packages : []}/>
//                             </div>

//                             <div className="container">
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
//                             </div>

//                             {/* <Pagination page={page} limit={obj.limit ? obj.limit : 0}
//                                 total={obj.total ? obj.total : 0}
//                                 setPage={(page) => setPage(page)}
//                             /> */}
//                         </div>
//                         <Destination_search
//                             filterDestination={filterDestination}
//                             destinations={obj.destination_search ? obj.destination_search : []}
//                             setFilterDestination={(destinations) => setFilterDestination(destinations)}
//                             reset={() => setFilterDestination([])}

//                         />
//                     </div>

//                 </div>

//             </section>
//             <div className="pt-7">
//                 <Ourpartners />
//             </div>
//         </div>
//     );
// }

// export default App;


