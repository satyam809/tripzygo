import React from 'react'
import Link from 'next/dist/client/link'
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from 'react'
import axios from 'axios';
import Package_data from '../components/Packages_SFSP/package_data';
// import Pagination from '../components/Packages_SFSP/pagination';
import ReactPaginate from 'react-paginate';
import Sort from '../components/Packages_SFSP/sort';
import Packages_Form from '../components/Contact_Forms/packages_form';
import DomesticSlider from '../components/Slick_Sliders/SlickDestinationsSlider';
import SearchData from "../components/SearchBar/searchbar.json";
import SearchBar from "../components/SearchBar/SearchBar";
import Ourpartners from "../components/OurPartners";


export default function test() {
    const [obj, setObj] = useState({});
    const [sort, setSort] = useState({ sort: "price", order: "desc" });
    const [page, setPage] = useState(1);

    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?page=${page}&sort=${sort.sort},${sort.order}&destination_search=India`;
            const { data } = await axios.get(url);

            setObj(data);



        } catch (err) {

        }
    };
    useEffect(() => {
        getAllPackages();
    }, [sort, page]);

    const pageCount = Math.ceil(obj.total / 8);

    const changePage = ({ selected }) => {
        setPage(selected + 1);
    };
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
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/india_tour.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container" id="searchBarContainer">
                        <div className="breadcrumb-content text-center">
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb banner-content">

                                    <h2 className='text-white'>India Holiday Tour Packages</h2><br />

                                </ul>
                                <SearchBar placeholder="Search Destination" data={SearchData} />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
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
            <section className="trending mt-6 pt-6 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-8">
                            <Sort sort={sort} setSort={(sort) => setSort(sort)} />

                            <Package_data packages={obj.packages ? obj.packages : []} />
                            <div className="container">
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
                            </div>

                            {/* <Pagination page={page} limit={obj.limit ? obj.limit : 0}
                                total={obj.total ? obj.total : 0}
                                setPage={(page) => setPage(page)}
                            /> */}
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
