import React from 'react'
import Packages_Form from '../components/Contact_Forms/packages_form';
import Head from "next/dist/shared/lib/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import 'swiper/css';
import { Navigation, Pagination, A11y,Autoplay } from 'swiper/modules';
import { FreeMode, Thumbs } from "swiper/modules";
import { useRef, useState } from "react";
import ShareButton from '../components/Package_Description/shareButton';
// import PopularityWidget from '../components/Package_Description/popularityWidget';
SwiperCore.use([Pagination, Autoplay]);
import Carousel from '../components/Package_Description/descriptionCarousel';
import LocationMap from '../components/Package_Description/locationMap';

import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const package_url = 'https://backend.tripzygo.in/package';
const package_url1 = "https://backend.tripzygo.in/packs";
const backend_url = '';
export default function PackageId() {

    const router = useRouter();
    const currentURL = typeof window !== "undefined" ? window.location.href.split("?")[0] : "";
    var pack_Id = 1;
    const [obj, setObj] = useState('');

    const [kwords, setKwords] = useState([]);
    const [packBaseURL, setPackBaseURL] = useState([]);
    const [packageData, setPackageData] = useState([]);
    const [price, setPrice] = useState([]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [name, setName] = useState('');
    const [inclusions, setInclusions] = useState([]);
    const [exclusions, setExclusions] = useState([]);
    const [thingsToDo, setThingsToDo] = useState([]);
    const [bestTime, setBestTime] = useState([]);
    const [faq, setFAQ] = useState({});
    const [amenities, setAmenities] = useState([]);
    const [day, setDay] = useState({});
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [packages, setPackages] = useState([]);
    const [mainEntity, setRecords] = useState([]);
    const handleAccordionClick = (dayNumber) => {
        setActiveAccordion((prevAccordion) => (prevAccordion === dayNumber ? null : dayNumber));
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                // console.log('url params: ' + urlParams);
                const id = parseInt(urlParams.get('id'));
                pack_Id = id;
                // console.log('window pack id: ' + pack_Id);
                // const tagNames = records.map(tag => tag.name).join(', ');
                const response = await axios.get(package_url + '?id=' + pack_Id);
                const { data } = response;
                setPackBaseURL(data.package_baseurl);
                setPackageData(data.data);
                setObj(data.data.relate_key);
                setName(data.data.name);
                setKwords(data.data.keywords);

                // console.log("name is "+data.data.name);
                setPrice(data.data.web_pack_price);
                data.data.package_terms.forEach(element => {
                    if (element.title == "Inclusions") {
                        // console.log(element);
                        const elmt = element.description;
                        const sanitizedInclusions = elmt.replace(/<ul/g, '<div').replace(/<\/ul>/g, '</div>');
                        setInclusions(sanitizedInclusions);
                    }
                    else if (element.title == "Exclusions") {
                        const elmt = element.description;
                        const sanitizedExclusions = elmt.replace(/<ul/g, '<div').replace(/<\/ul>/g, '</div>');
                        setExclusions(sanitizedExclusions);
                    }
                    else if (element.title == "Things to Do") {
                        const elmt = element.description;
                        const sanitizedThingsToDo = elmt.replace(/<ul/g, '<div').replace(/<\/ul>/g, '</div>');
                        setThingsToDo(sanitizedThingsToDo);
                    }
                    else if (element.title == "Best time to visit") {
                        const elmt = element.description;
                        const sanitizedBestTime = elmt.replace(/<ul/g, '<div').replace(/<\/ul>/g, '</div>');
                        setBestTime(sanitizedBestTime);
                    }
                });

                // console.log(inclusions);
                // console.log(exclusions);

                const no_of_FAQ = data.data.package_FAQs.length;
                const FAQ = {};
                for (let i = 0; i < no_of_FAQ; i++) {
                    FAQ[i + 1] = [];
                    FAQ[i + 1][0] = data.data.package_FAQs[i].title;
                    FAQ[i + 1][1] = data.data.package_FAQs[i].description;
                }
                setFAQ(FAQ);
                // setObj(data.data.relate_key);
                const url = `${package_url1}?q=${data.data.relate_key}&order_by=web_pack_price&order_by_type=desc`;
                console.log(url);
                try {
                    const response1 = await axios.get(url);
                    const data1 = await response1.data.data;
                    console.log("checking")
                    setPackages(data1);
                    // console.log(data1);

                } catch (error) {
                    console.log("Error received:", error);
                }

                const no_of_days = data.data.days_event.length;
                const days = {};
                for (let i = 0; i < no_of_days; i++) {
                    days[i + 1] = [];
                    days[i + 1][0] = data.data.days_event[i][0].daySubject;
                    days[i + 1][1] = data.data.days_event[i][0].dayDetails;
                }
                setDay(days);
                // console.log(day);
                // window.history.replaceState({}, '', name.replace(/\s+/g, "-"));
                const faqSchema = data.data.package_FAQs.map(faq => ({
                    "@type": "Question",
                    "name": faq.title,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.description
                    }
                }));
                setRecords(faqSchema);
            } catch (error) {
                console.log('Error received:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <Head>

                <title>TripzyGo - Book {name} - Get Best Deals On Trips</title>
                <meta name="description" content={`${packageData.aboutPackage}`} />
                <meta name="keywords" content={`${kwords}`} />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href={`${currentURL}/${name.replace(/\s+/g, "-")}`} />
                <meta property="og:url" content={`${currentURL}/${name.replace(/\s+/g, "-")}`} />
                <meta property="og:title" content={name} />
                <meta property="og:description" content={`${packageData.aboutPackage}`} />
                <meta property="og:image" content={`${packBaseURL}${packageData.sliderPhoto1}`} />
                {/* Article Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity

                        })
                    }}
                />
            </Head>
            <ShareButton />
            {/* <PopularityWidget packageCount="75" progressBarPercentage="75%" /> */}
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/about_us.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Package Details</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">Get Ready For A  Trip Around The World</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>

            <section className="trending pt-6 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-content">
                                <div className="single-full-title mb-2 pb-2">
                                    <div className="single-title">
                                        <h2 className="mb-1">
                                            {name}</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1={`${packBaseURL}${packageData.sliderPhoto1}`}
                                                imageLink2={`${packBaseURL}${packageData.sliderPhoto2}`}
                                                imageLink3={`${packBaseURL}${packageData.sliderPhoto3}`}
                                                imageLink4={`${packBaseURL}${packageData.sliderPhoto4}`}
                                                imageLink5={`${packBaseURL}${packageData.sliderPhoto5}`}
                                                imageLink6={`${packBaseURL}${packageData.sliderPhoto6}`}
                                                alt1={`${packageData.imgAlt1}`}
                                                alt2={`${packageData.imgAlt2}`}
                                                alt3={`${packageData.imgAlt3}`}
                                                alt4={`${packageData.imgAlt4}`}
                                                alt5={`${packageData.imgAlt5}`}
                                                alt6={`${packageData.imgAlt6}`}>
                                            </Carousel>
                                        </div>

                                    </div>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-2 rounded ">
                                                <div class="container">

                                                    <h5 className="mb-2">About this package</h5>
                                                    <article>
                                                        <input type="checkbox" className="checkbox" id="read_more" role="button" />
                                                        <label for="read_more" onclick=""><span>Read More</span><span>Read Less</span></label>

                                                        <section className="set_padding" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                            <p>{packageData.aboutPackage}</p>
                                                        </section>
                                                        <section className="set_padding">
                                                            <p>{packageData.description}</p>
                                                        </section>
                                                    </article>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="tabs-navbar bg-white sticky bordernone py-2">
                                    <ul id="tabs" class="nav nav-tabs bordernone mb-0 overflow-visible ">
                                        <div class="scrollmenu container px-0 py-1">
                                            <a class="scroller-item2 col-lg-2  py-1" href="#iternary">Itinerary</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#inclusions">Inclusions</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#exclusions">Exclusions</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#things-to-do">Things to Do</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#time-to-visit" >Time to Visit</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#faq">FAQ’s</a>

                                        </div>
                                    </ul>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">


                                        <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div className="accrodion">
                                                {Object.keys(day).map((key) => {
                                                    const dayNumber = key;
                                                    const title = day[key][0];
                                                    const details = day[key][1].split('\n').map((line, index) => (
                                                        <li key={index}>{line.replace('●', '')}</li>
                                                    ));
                                                    // const divId = `iternary-${dayNumber}`; // Generate a unique id
                                                    // Check if the accordion should be active (open) or not
                                                    const isActive = activeAccordion === dayNumber;
                                                    return (
                                                        <div key={dayNumber} className="accrodion-grp faq-accrodion mb-1" data-grp-name="faq-accrodion">
                                                            <div className="accrodion-title rounded" onClick={() => handleAccordionClick(dayNumber)}>


                                                                <h6 style={{ fontSize: "14px" }} className="mb-0"><span>Day {dayNumber} - {title}</span> <p style={{ float: "right", fontSize: "17px" }}>{isActive ? '–' : '+'}</p></h6>
                                                            </div>
                                                            <br />
                                                            <div className={`accordion-content${isActive ? ' active' : ''}`}>
                                                                <div className="container" style={{ textIndent: '-21px', marginLeft: '1em' }} >
                                                                    {/* <div className="mb-0">{details}</div> */}
                                                                    {isActive && <div className="mb-0">{details}</div>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div className="row">
                                                <div className="desc-box bg-grey p-4 rounded">
                                                    <h5 className="mb-2">Inclusions</h5>
                                                    <div style={{ textIndent: '-21px', marginLeft: '2em' }} dangerouslySetInnerHTML={{ __html: inclusions }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div className="row">
                                                <div className="desc-box bg-grey p-4 rounded">
                                                    <h5 className="mb-2">Exclusions</h5>
                                                    <div style={{ textIndent: '-21px', marginLeft: '2em' }} dangerouslySetInnerHTML={{ __html: exclusions }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 mb-2" id='things-to-do'>
                                            <div className="row">
                                                <div class="desc-box bg-grey p-4 rounded">
                                                    <h5 class="mb-2">Things To Do</h5>
                                                    <div style={{ textIndent: '-21px', marginLeft: '2em' }} dangerouslySetInnerHTML={{ __html: thingsToDo }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 mb-2" id="time-to-visit">
                                            <div className="row">
                                                <div className="desc-box bg-grey p-4 rounded">

                                                    <h5 className="mb-2">Best Time to Visit</h5>
                                                    <div style={{ textIndent: '-21px', marginLeft: '2em' }} dangerouslySetInnerHTML={{ __html: bestTime }} />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="description mb-2" id="faq">
                                            <div className="row">
                                                <h4>FAQ’s</h4>

                                                <div className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                    <div className="accrodion">
                                                        {Object.keys(faq).map((key) => {
                                                            const qNumber = key;
                                                            const question = faq[key][0];
                                                            const answer = faq[key][1];
                                                            const isActive = activeAccordion === qNumber;

                                                            return (
                                                                <div key={qNumber} className="accrodion-grp faq-accrodion mb-1" data-grp-name="faq-accrodion">
                                                                    <div className="accrodion-title rounded" onClick={() => handleAccordionClick(qNumber)}>


                                                                        <h6 style={{ fontSize: "14px" }} className="mb-0"><span>{question}</span> <p style={{ float: "right", fontSize: "17px" }}>{isActive ? '–' : '+'}</p></h6>
                                                                    </div>
                                                                    <br />
                                                                    <div className={`accordion-content${isActive ? ' active' : ''}`}>
                                                                        <div className="container" >

                                                                            {isActive && <ul className="mb-0">{answer}</ul>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tour-includes mb-4">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : {packageData.duration - 1} Nights/ {packageData.duration} Days</td>
                                                        <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                                    </tr>
                                                    <tr>
                                                        <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : {(parseInt(price).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 })).replace("₹", "₹ ")}/-* </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                                <LocationMap mapLink={packageData.mapURL}></LocationMap>



                            </div>

                        </div>
                        <div className="col-lg-4 pe-lg-4">
                            <div class="sidebar-sticky">
                                <div class="list-sidebar">
                                    <div class="sidebar-item">
                                        <Packages_Form></Packages_Form>
                                        <section className="trending pb-4 pt-4" >
                                            <div className="container1">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                                        <h3 class="mb-1 ">Related Packages</h3><br />
                                                        <div class="sidebar-item bg-white rounded box-shadow px-3 pb-2 mb-4 packagescrollbar" id="style-3" >
                                                            {packages?.map((pack) => (
                                                                <div class="trend-full border-b pt-4">
                                                                    <div class="row">
                                                                        <div className="col-lg-4 col-md-4">
                                                                            <a href={`https://tripzygo.in/package?id=${pack?.id}`}>
                                                                                <div className="trend-item3 rounded">
                                                                                    <a style={{ backgroundImage: `url(${packBaseURL}${pack?.cover_image})` }}></a>
                                                                                    <div className="color-overlay"></div>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="col-lg-8 col-md-8 ps-0">
                                                                            <div class="trend-content position-relative">
                                                                                <h5 class="mb-1 mobileviewheading"><a href={`https://tripzygo.in/package5?id=${pack?.id}`}>{pack?.name}</a></h5>
                                                                                <h6 className='mobileviewheading' style={{ fontSize: "12px" }}> <span className="mb-0" style={{ color: "#0d4980", fontWeight: "500" }}><i className="fa fa-inr" style={{ fontSize: "12px" }} aria-hidden="true"></i>&nbsp;{(parseInt(pack?.web_pack_price).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 })).replace("₹", " ")}/-*</span>&nbsp; &nbsp; <span class="theme mb-0"><i className="fa fa-map-marker-alt"></i>&nbsp;{pack.relate_key}</span></h6>

                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            ))
                                                            }
                                                        </div>

                                                    </div >
                                                </div >
                                            </div >

                                        </section >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />

                <script src="/js/jquery-3.5.1.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/particles.js"></script>
                <script src="/js/particlerun.js"></script>
                <script src="/js/plugin.js"></script>
                {/* <script src="/js/main.js"></script> */}
                <script src="/js/custom-accordian.js"></script>
                <script src="/js/custom-nav.js"></script>
                <script src="/js/custom-navscroll.js"></script>

            </section>
        </div>

    )
}
