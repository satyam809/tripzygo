
import React from 'react'
import Link from 'next/dist/client/link'
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from 'react'
import axios from 'axios';
import Package_data from '../../components/Packages_SFSP/package_data';
// import Pagination from '../../components/Packages_SFSP/pagination';
import ReactPaginate from 'react-paginate';
import Sort from '../../components/Packages_SFSP/sort';
import Packages_Form from '../../components/Contact_Forms/packages_form';
// import SearchData from "../../components/SearchBar/searchbar.json";
// import SearchBar from "../../components/SearchBar/SearchBar";
import SlickSlider from '../../components/Slick_Sliders/SlickDestinationsSlider'
import Ourblogs from "../../components/Blogs/ourblogs";
import HomeModal from '../../components/CommonModal';
import PackageFormModal from "../../components/PackageformModal";
import ModalpackageDesc from "../../components/ModalpackageDesc";
import path from 'path';
// const fs = require('fs');
import jsonData from "./output.json"
import Script from 'next/script';
import Filters from "../../components/Packages_SFSP/filters"


// import Sort from '../../public/output.json';


export async function getServerSideProps(context) {
    // const startTime = Date.now();
    // console.log("start time"+startTime);
    const title = context.query.tour;
    console.log(title);
    const formattedTitle = title.replace(/-/g, ' ').toLowerCase();
    var tourData = jsonData.find(tour => tour.title.toLowerCase() === formattedTitle) || {};
    const words = title.split('-');
    var place = words.slice(0, words.indexOf('tour')).join('-');
    // var place = title.split('-')[0];
    function toTitleCase(word) {
        return word.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
            return $1.toUpperCase();
        });
    }
    var data22 = [];
    place = toTitleCase(place);
    // console.log("before fetching", Date.now() - startTime);
    try {
        const sort = { sort: "web_pack_price", order: "asc" }
        const url = `https://backend.tripzygo.in/packs?order_by=${sort.sort}&order_by_type=${sort.order}&q=`;
        const response = await axios.get(url);
        data22 = response.data.data;
        data22 = data22.filter(pack =>
            pack.destination_search.split(',').map(keyword => keyword.trim()).includes(place)
        );
        console.log(data22);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
    // console.log(formattedTitle);
    // console.log("after fetching", Date.now() - startTime);
    return {
        props: {
            data22,
            tourData,
            place,
        }
    }
}

export default function test({ data22, tourData, place }) {
    const [obj, setObj] = useState(data22);
    const [sort, setSort] = useState({ sort: "web_pack_price", order: "asc" });

    console.log(place);
    // console.log("after passing params", Date.now() - startTime);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const handleAccordionClick = (dayNumber) => {
        setActiveAccordion((prevAccordion) => (prevAccordion === dayNumber ? null : dayNumber));
    };
    return (
        <div>
            <Head>
                <title>{tourData.maintitle}</title>
                <meta name="description" content={tourData.description} />
                <meta name="keywords" content={tourData.keywords} />
                <link rel="icon" href={tourData.icon} />
                <link rel="canonical" href={tourData.ogUrl} />
                <meta property="og:url" content={tourData.ogUrl} />
                <meta property="og:title" content={tourData.ogTitle} />
                <meta property="og:description" content={tourData.ogDescription} />
                <meta property="og:image" content={tourData.ogImage} />

                {/* Product Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "Product",
                            "name": `${tourData.title}`,
                            "image": `${tourData.ogImage}`,
                            "description": `${tourData.ogDescription}`,
                            "brand": {
                                "@type": "Brand",
                                "name": "TripzyGo"
                            },
                            "offers": {
                                "@type": "AggregateOffer",
                                "url": `${tourData.ogUrl}`,
                                "priceCurrency": "INR",
                                "lowPrice": `${tourData.lowPrice}`,
                                "highPrice": `${tourData.highPrice}`,
                                "offerCount": `${tourData.offerCount}`
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": `${tourData.ratingValue}`,
                                "bestRating": `${tourData.bestRating}`,
                                "worstRating": `${tourData.worstRating}`,
                                "ratingCount": `${tourData.ratingCount}`,
                                "reviewCount": `${tourData.reviewCount}`
                            },
                            "review": {
                                "@type": "Review",
                                "name": `${tourData.reviewName}`,
                                "reviewBody": `${tourData.reviewBody}`,
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": `${tourData.ratingValue}`,
                                    "bestRating": `${tourData.bestRating}`,
                                    "worstRating": `${tourData.worstRating}`
                                },
                                "datePublished": `${tourData.datePublished}`,
                                "author": { "@type": "Person", "name": `${tourData.author}` }
                            }




                        })
                    }}
                />

            </Head>
            {/* <HomeModal ImageLink={`/images/popup/${place}.webp`} alt={`${place} Tour Packages`} /> */}
            <div className="enquiryBtn">
                <ModalpackageDesc buttonLabel="Need Help? Talk To An Expert" label={`Your Perfect Travel to ${place} Starts Here!`} props1={place} labelSize="20px" border="0"></ModalpackageDesc>
            </div>
            <PackageFormModal props2={`Your Perfect Travel to ${place} Starts Here!`} props1={place}></PackageFormModal>
            <section className="breadcrumb-main pb-6 pt-10"  style={{ backgroundImage: `url(/images/banner_images/${place.toLowerCase()}.webp)` }} alt={`${place} Tour Packages`}>
       <div className="breadcrumb-outer">
        <div className="container" id="searchBarContainer">
            <div className="breadcrumb-content text-center">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb banner-content">
                        <h1 className='text-white' id="tourPackagesHeading">{place} Tour Packages</h1><br />
                    </ul>
                    {/* <SearchBar placeholder="Search Destination" data={SearchData} /> */}
                </nav>
            </div>
        </div>
    </div>
    <div className="dot-overlay"></div>
</section>

            <footer class="footer" style={{ backgroundColor: "black" }}>
    <div class="container">
        <div class="row mb-2">
            <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-center text-sm-start">
                <div class="information">
                    <p class="footer-heading text-uppercase text-white fw-bold" id="font-size-sm1">Ideal Duration</p>
                    <p id="font-size-sm"><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;{tourData.ideal_duration}</p>
                </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-center text-sm-start">
                <div class="resources">
                    <p class="footer-heading text-uppercase text-white fw-bold" id="font-size-sm1">BEST TIME</p>
                    <p id="font-size-sm"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;{tourData.ideal_time}</p>
                </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-center text-sm-start">
                <div class="social">
                    <p class="footer-heading text-uppercase text-white fw-bold" id="font-size-sm1">PRICES STARTS AT</p>
                    <p id="font-size-sm"><i class="fa fa-plane" aria-hidden="true"></i>&nbsp;&nbsp;INR {tourData.price_starts}/-*</p>
                </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 mt-2 col-lg-3 text-center text-sm-start">
                <div class="contact">
                    <p class="footer-heading text-uppercase text-white fw-bold" id="font-size-sm1">Top Attractions</p>
                    <p id="font-size-sm">{tourData.best_attraction}</p>
                </div>
            </div>
        </div>
    </div>
</footer>
<Filters data22={data22} obj = {obj} setObj={(obj) => setObj(obj)}/>

            <section className="trending pt-0 pb-0">
                <div className="container bg-grey">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content"></div>
                            <div className="description mb-0">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 mb-0 ">
                                        <div className="desc-box rounded ">

                                            <article>
                                                <input type="checkbox" className='checkbox' id="read_more" role="button" />
                                                <label for="read_more" onclick=""><span>Read More</span><span>Read Less</span></label>

                                                <section className='set_padding' id="content" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: tourData.shortpackagedesc }}>
                                                </section>
                                                <section className='set_padding' style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: tourData.longpackagedesc }}>
                                                </section>
                                            </article>


                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trending pt-3 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-8">
                            {/* <Sort sort={sort} setSort={(sort) => setSort(sort)} obj = {obj} setObj = {(obj) => setObj(obj)}/> */}

                            <Package_data data={obj} />

                        </div>
                        <div className="col-lg-4 pe-lg-4"><Packages_Form label="Perfect Travel Starts Here!" props1={place}></Packages_Form></div>
                    </div>

                </div>

            </section>
            <section className="trending pb-4 pt-1" style={{ padding: "10px" }}>
                <div className="container mt-2" >
                    <div className="section-title mb-6  mx-auto text-center">
                        <h3 className="mb-1" style={{ fontSize: "35px" }}>Discover Your <span className="theme">Dream Destination</span></h3>
                        <div>Plan your dream vacation with us! We'll help you find the perfect destination for you</div>
                    </div>

                    <div>

                        <div className="col-lg-12 ">
                            <div>
                                <SlickSlider
                                    package1Image="/images/tour_package_slider/Bali/East_Europe.webp"
                                    package2Image="/images/tour_package_slider/Bali/Europe.webp"
                                    package3Image="/images/tour_package_slider/Bali/Malaysia.webp"
                                    package4Image="/images/tour_package_slider/Bali/Maldives.webp"
                                    package5Image="/images/tour_package_slider/Bali/Thailand.webp"
                                    package6Image="/images/tour_package_slider/Bali/Vietnam.webp"
                                    package1Name="East Europe"
                                    package2Name="Europe"
                                    package3Name="Malaysia"
                                    package4Name="Maldives"
                                    package5Name="Thailand"
                                    package6Name="Vietnam"
                                    package1Link="/international-tour-packages/east-europe-tour-packages"
                                    package2Link="/international-tour-packages/europe-tour-packages"
                                    package3Link="/international-tour-packages/malaysia-tour-packages"
                                    package4Link="/international-tour-packages/maldives-tour-packages"
                                    package5Link="/international-tour-packages/thailand-tour-packages"
                                    package6Link="/international-tour-packages/vietnam-tour-packages" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="trending pt-6 pb-0 bg-lgrey">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content">
                                <div className="description mb-2" id="faq">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h3 className="mb-2">FAQs</h3>
                                                <div className="row">


                                                    <div id="iternary" className="accrodion-grp faq-accrodion" data-grp-name="faq-accrodion" >
                                                        <div className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                            <div className="accrodion">
                                                                {tourData.ldJsonArray.map((item, index) => {
                                                                    const qNumber = `question${index + 1}`;
                                                                    const question = item[qNumber];
                                                                    const aNumber = `answer${index + 1}`
                                                                    const answer = item[aNumber];
                                                                    const isActive = activeAccordion === qNumber;
                                                                    console.log(item);
                                                                    return (

                                                                        // <div key={qNumber} className="accrodion-grp faq-accrodion mb-1" data-grp-name="faq-accrodion">
                                                                        //     <div className="accrodion-title rounded" onClick={() => handleAccordionClick(qNumber)}>


                                                                        //         <h6 style={{ fontSize: "14px" }} className="mb-0"><span>{question}</span> <p style={{ float: "right", fontSize: "17px" }}>{isActive ? '–' : '+'}</p></h6>
                                                                        //     </div>
                                                                        //     <br />
                                                                        //     <div className={`accordion-content${isActive ? ' active' : ''}`}>
                                                                        //         <div className="inner">

                                                                        //             {isActive && <ul className="mb-0">{answer}</ul>}
                                                                        //         </div>
                                                                        //     </div>
                                                                        //     <br />
                                                                        // </div>
                                                                        <div><h6 style={{ margin: "0 0 7px" }}>{question}</h6><p>{answer}</p><br /></div>

                                                                    )
                                                                })}

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
            <div className='my-content'>
                <div className='carouse_div animated.infinite'>
                    <a href="#" class="floatfilter">
                        {/* <i class="fa fa-sort my-floatfilter" style={{fontSize:"25px"}} aria-hidden="true"></i> */}
                        <Sort sort={sort} setSort={(sort) => setSort(sort)} obj={obj} setObj={(obj) => setObj(obj)} />

                    </a>
                </div>
            </div>

            <Ourblogs></Ourblogs>
            <Script src="/js/jquery-3.5.1.min.js"></Script>
            <Script src="/js/bootstrap.min.js"></Script>
            <Script src="/js/particles.js"></Script>
            <Script src="/js/particlerun.js"></Script>
            <Script src="/js/plugin.js"></Script>

            <Script src="/js/custom-accordian.js"></Script>
            <Script src="/js/custom-nav.js"></Script>
            <Script src="/js/custom-navscroll.js"></Script>

        </div>
    )
}

