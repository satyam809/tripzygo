import React from 'react'
import Link from 'next/dist/client/link'
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from 'react'
import axios from 'axios';
import Package_data from '../../components/Packages_SFSP/package_data';
import FilterSearch from '../../components/Packages_SFSP/filterSearch';
// import FilterSearch from '../../components/Packages_SFSP/filterSearch';
import ReactPaginate from 'react-paginate';
import Sort from '../../components/Packages_SFSP/sort';
import Packages_Form from '../../components/Contact_Forms/packages_form';
import InternationalSlider from '../../components/Slick_Sliders/SlickDestinationsSlider';
import SearchData from "../../components/SearchBar/searchbar.json";
import SearchBar from "../../components/SearchBar/SearchBar";
import Ourpartners from "../../components/OurPartners";

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
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/international_tour.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container " id="searchBarContainer">
                        <div className="breadcrumb-content text-center">
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb banner-content">

                                    <h2 className='text-white'>Holiday Tour Packages</h2><br />


                                </ul>
                                <SearchBar placeholder="Search Destination" data={SearchData} />
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
