import React from 'react';

// import Router from 'next/dist/server/router';
import axios from 'axios';
import Packages_Form from '../../components/Contact_Forms/packages_form';
import Head from "next/dist/shared/lib/head";
import { useRef, useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import ShareButton from '../../components/Package_Description/shareButton';
// import PopularityWidget from '../../components/Package_Description/popularityWidget';
// SwiperCore.use([Pagination, Autoplay]);
import Carousel from '../../components/Package_Description/descriptionCarousel';
import LocationMap from '../../components/Package_Description/locationMap';
import { useRouter } from 'next/router';
import Ourblogs from "../../components/Blogs/ourblogs";
import Star from "../../components/Packages_SFSP/star_rating";
import SlickPackageSlider from '../../components/Slick_Sliders/SlickPackageSlider';
import LandingModal from "../../components/LandingModal";
import ModalpackageDesc from "../../components/ModalpackageDesc";
import PackageFormModal from "../../components/PackageformModal";
import ModalGroup from "../../components/Packages_SFSP/Modalgroup";
import Image from 'next/image'
import Script from 'next/script';
import dynamic from 'next/dynamic';
const MobileviewDestination = dynamic(() => import('../../components/MobileviewDestination'), {
    ssr: true,
});


const package_url = 'https://backend.tripzygo.in/package';
const package_url1 = "https://backend.tripzygo.in/packs";

export async function getServerSideProps(context) {
    try {
        // Retrieve the 'id' query parameter from the context
        // const startTime = Date.now();
        // console.log("start time "+startTime);
        const id = context.query.id.split('-')[0];
        console.log(id);
        // console.log("before fetching ", Date.now() - startTime);
        // Fetch data for the given package ID
        const response = await axios.get(package_url + '?id=' + id);
        const { data } = response;
        // console.log("after fetching ", Date.now() - startTime);
        // console.log(data);
        const packBaseURL = data.package_baseurl;
        const price = data.data.web_pack_price;
        const name = data.data.name;
        const packageData = data.data;
        const duration = data.data.duration;
        const location_package = data.data.location;
        const tour_type = data.data.tour_type;
        const keysToCopy = ['aboutPackage', 'package_rating', 'description', 'keywords', 'sliderPhoto1', 'sliderPhoto2', 'sliderPhoto3', 'sliderPhoto4', 'sliderPhoto5', 'sliderPhoto6', 'imgAlt1', 'imgAlt2', 'imgAlt3', 'imgAlt4', 'imgAlt5', 'imgAlt6', 'duration', 'price', 'mapURL', 'hotel_facility', 'id'];
        const selectPackageData = Object.fromEntries(Object.entries(packageData).filter(([key]) => keysToCopy.includes(key)));
        // console.log(selectPackageData);
        // Process other data (e.g., inclusions, exclusions, etc.)
        const inclusions = data.data.package_terms.find(element => element.title === "Inclusions")?.description || '';
        const exclusions = data.data.package_terms.find(element => element.title === "Exclusions")?.description || '';
        const thingsToDo = data.data.package_terms.find(element => element.title === "Things to Do")?.description || '';
        const bestTime = data.data.package_terms.find(element => element.title === "Best time to visit")?.description || '';
        const batchdate = data.data.package_terms.find(element => element.title === "Batch Dates")?.description || '';

        const packId = selectPackageData.id;
        const no_of_FAQ = data.data.package_FAQs.length;
        const faq = {};
        for (let i = 0; i < no_of_FAQ; i++) {
            faq[i + 1] = [data.data.package_FAQs[i].title, data.data.package_FAQs[i].description];
        }

        // Fetch related packages based on the relate_key
        const url = `${package_url1}?q=&order_by=web_pack_price&order_by_type=asc`;
        const place = data.data.relate_key;
        const response1 = await axios.get(url);
        var relatedPackages = response1.data.data || [];
        var similarPackages = response1.data.data || [];
        relatedPackages = relatedPackages.filter(pack =>
            pack.destination_search.split(',').map(keyword => keyword.trim()).includes(place) &&
            pack.tour_type.trim() === tour_type
        );
        similarPackages = similarPackages.filter(pack =>
            pack.tour_type.trim() === tour_type
        );

        const keysToCopy_related = ['cover_image', 'web_pack_price', 'relate_key', 'name', 'id', 'package_rating', 'duration', 'hotel_facility'];
        const selectPackageData_related = relatedPackages.map((pkg) => {
            // Create a new object with only the desired key-value pairs
            const selectedData = {};
            keysToCopy_related.forEach((key) => {
                if (pkg.hasOwnProperty(key)) {
                    selectedData[key] = pkg[key];
                }
            });
            return selectedData;
        });;
        const selectPackageData_similar = similarPackages.map((pkg) => {
            // Create a new object with only the desired key-value pairs
            const selectedData = {};
            keysToCopy_related.forEach((key) => {
                if (pkg.hasOwnProperty(key)) {
                    selectedData[key] = pkg[key];
                }
            });
            return selectedData;
        });;
        // console.log(selectPackageData_related);
        // Process days data
        // console.log("before returning ", Date.now() - startTime);
        // console.log(selectPackageData_related);
        const no_of_days = data.data.days_event.length;
        const day = {};
        for (let i = 0; i < no_of_days; i++) {
            day[i + 1] = [data.data.days_event[i][0].daySubject, data.data.days_event[i][0].dayDetails];
        }

        return {
            props: {
                packageData2: {
                    packBaseURL,
                    price,
                    name,
                    location_package,
                    inclusions,
                    exclusions,
                    thingsToDo,
                    bestTime,
                    batchdate,
                    faq,
                    selectPackageData_related,
                    selectPackageData_similar,
                    day,
                    selectPackageData,
                    duration,
                    place,
                    packId

                }
            },
        };
    } catch (error) {
        console.log('Error received:', error);
        return {
            props: {
                packageData2: {},
            },
        };
    }
}

export default function PackageId({ packageData2 }) {
    // Destructure the data from props
    const handleClick = (packageId, packageName) => {
        packageName = packageName.toLowerCase(); // Convert to lowercase
        packageName = packageName.replace(/[^a-z0-9\s-]/g, ''); // Remove special characters
        packageName = packageName.trim().replace(/\s+/g, '-'); // Replace spaces with dashes

        const newTabUrl = `/package/${packageId}-${packageName}`;
        window.open(newTabUrl, '_blank');
        // console.log(router.query);
    };
    const [isReadMoreChecked, setIsReadMoreChecked] = useState(false);
    // Inside your functional component
    const itineraryRef = useRef(null);
    const thingsToDoRef = useRef(null);
    const timeToVisitRef = useRef(null);
    const policiesRef = useRef(null);

    const isSectionInViewport = (ref) => {
        if (!ref.current) return false;

        const rect = ref.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const handleScroll = () => {
        if (isSectionInViewport(itineraryRef)) {
            setActiveElement(1);
        } else if (isSectionInViewport(thingsToDoRef)) {
            setActiveElement(2);
        } else if (isSectionInViewport(timeToVisitRef)) {
            setActiveElement(3);
        } else if (isSectionInViewport(policiesRef)) {
            setActiveElement(4);
        }
    };

    // Add the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleReadMoreToggle = () => {
        setIsReadMoreChecked(!isReadMoreChecked);
    };

    const router = useRouter();
    // console.log(router);
    // console.log("in function package id ", Date.now() - startTime);
    const currentUrl = router.asPath;
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [activeElement, setActiveElement] = useState(1);
    const handleAccordionClick = (dayNumber) => {
        setActiveAccordion((prevAccordion) => (prevAccordion === dayNumber ? null : dayNumber));
    };

    const handleElementClick = (element) => {
        setActiveElement(element);
    };

    const {
        packBaseURL,
        price,
        name,
        location_package,
        inclusions,
        exclusions,
        thingsToDo,
        bestTime,
        batchdate,
        faq,
        selectPackageData_related,
        selectPackageData_similar,
        day,
        duration,
        selectPackageData,
        place,
        packId
    } = packageData2;
    // const packageURL = window.location.href;

    const imageUrls = [
        `${packBaseURL}${selectPackageData.sliderPhoto1}`,
        `${packBaseURL}${selectPackageData.sliderPhoto2}`,
        `${packBaseURL}${selectPackageData.sliderPhoto3}`,
        `${packBaseURL}${selectPackageData.sliderPhoto4}`,
        `${packBaseURL}${selectPackageData.sliderPhoto5}`,
    ];

    // console.log(packageData2);
    // ... Rest of the JSX and code ...

    // console.log(packageURL);
    return (
        <div>
            <Head>
                <title>TripzyGo - Book {name} - Get Best Deals On Trips</title>
                <meta name="description" content={`${selectPackageData.aboutPackage}`} />
                <meta name="keywords" content={`${selectPackageData.keywords}`} />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href={`https://tripzygo.in${currentUrl}`} />
                <meta property="og:url" content={`https://tripzygo.in${currentUrl}`} />
                <meta property="og:title" content={name} />
                <meta property="og:description" content={`${selectPackageData.aboutPackage}`} />
                <meta property="og:image" content={`${packBaseURL}${selectPackageData.sliderPhoto1}`} />
            </Head>
            <PackageFormModal props1={location_package} props2={name} props3={`https://www.tripzygo.in${currentUrl}`}></PackageFormModal>
            <div className="enquiryBtn">
                <ModalpackageDesc props1={location_package} props2={name} buttonLabel="Send Enquiry" labelSize="20px" border="0" props3={`https://www.tripzygo.in${currentUrl}`}></ModalpackageDesc>
            </div>
            <ShareButton />
            {/* <PopularityWidget packageCount="75" progressBarPercentage="75%" /> */}
            {/* <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/about_us.webp)" }}>
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
            </section> */}
            {/* <section className="breadcrumb-main pb-1 pt-1" >

                <div className="container">
                   
                    <div className="single-full-title">

                        <div className="single-title">
                            <h2 className="mb-0" style={{ color: "black" , fontSize:"18px" }}>
                                {name}
                            </h2>


                            <h6 className="theme mb-0" style={{ fontSize: "10px" }}>
                                <i class="far fa-clock" style={{ fontSize: "11px" }}></i>
                                &nbsp;{duration - 1}N/{duration}D&nbsp;&nbsp;&nbsp;&nbsp;
                                <i
                                    className="fa fa-map-marker-alt"
                                    style={{ fontSize: "11px" }}
                                ></i>
                                &nbsp;{place}

                            </h6>
                        </div>
                    </div>
                </div>


            </section> */}

            <div class="gallery pb-0">
                <div class="container resp">

                    <div class="row row1">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="gallery-item mb-4 rounded overflow-hidden">
                                <div class="gallery-image">
                                    {/* <img src={`${packBaseURL}${selectPackageData.sliderPhoto1}`} alt={selectPackageData.imgAlt1} style={{ height: "auto" }} /> */}
                                    <Image src={`${packBaseURL}${selectPackageData.sliderPhoto1}`} alt={selectPackageData.imgAlt1} width={800} height={534} />

                                </div>
                                <div class="gallery-content">
                                    <h5 class="white text-center position-absolute bottom-0 pb-4 left-50 mb-0 w-100">{selectPackageData.imgAlt1}</h5>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                            <div class="gallery-item mb-1 rounded overflow-hidden">
                                <div class="gallery-image">
                                    {/* <img src={`${packBaseURL}${selectPackageData.sliderPhoto2}`} alt={selectPackageData.imgAlt2} style={{ height: "auto" }} /> */}
                                    <Image src={`${packBaseURL}${selectPackageData.sliderPhoto2}`} alt={selectPackageData.imgAlt2} width={800} height={534} />

                                </div>
                                <div class="gallery-content">
                                    <h5 class="white text-center position-absolute bottom-0 pb-4 left-50 mb-0 w-100">{selectPackageData.imgAlt2}</h5>

                                </div>
                            </div>
                            <div class="gallery-item mb-1 rounded overflow-hidden">
                                <div class="gallery-image">
                                    {/* <img src={`${packBaseURL}${selectPackageData.sliderPhoto3}`} alt={selectPackageData.imgAlt3} style={{ height: "auto" }}/> */}
                                    <Image src={`${packBaseURL}${selectPackageData.sliderPhoto3}`} alt={selectPackageData.imgAlt3} width={800} height={534} />

                                </div>
                                <div class="gallery-content">
                                    <h5 class="white text-center position-absolute bottom-0 pb-4 left-50 mb-0 w-100">{selectPackageData.imgAlt3}</h5>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                            <div class="gallery-item mb-1 rounded overflow-hidden">
                                <div class="gallery-image">
                                    {/* <img src={`${packBaseURL}${selectPackageData.sliderPhoto4}`} alt={selectPackageData.imgAlt4} style={{ height: "auto" }}/> */}
                                    <Image src={`${packBaseURL}${selectPackageData.sliderPhoto4}`} alt={selectPackageData.imgAlt4} width={800} height={534} />

                                </div>
                                <div class="gallery-content">
                                    <h5 class="white text-center position-absolute bottom-0 pb-4 left-50 mb-0 w-100">{selectPackageData.imgAlt4}</h5>

                                </div>
                            </div>
                            <div class="gallery-item mb-1 rounded overflow-hidden">
                                <div class="gallery-image">
                                    {/* <img src={`${packBaseURL}${selectPackageData.sliderPhoto5}`} alt={selectPackageData.imgAlt5} style={{ height: "auto" }}/> */}
                                    <Image src={`${packBaseURL}${selectPackageData.sliderPhoto5}`} alt={selectPackageData.imgAlt5} width={800} height={534} />

                                </div>
                                <div class="gallery-content">
                                    <h5 class="white text-center position-absolute bottom-0 pb-4 left-50 mb-0 w-100">{selectPackageData.imgAlt5}</h5>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='my-content'>
                    <div className='carouse_div animated.infinite'>
                        <SlickPackageSlider imageUrls={imageUrls}></SlickPackageSlider>
                    </div>
                </div>
            </div>
            <section className="trending pt-0 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-content">
                                {/* <div className="single-full-title mb-2 pb-2">
                                    <div className="single-title">
                                        <h2 className="mb-1">
                                            {name}
                                        </h2>


                                        <h6 className="theme mb-0" style={{ fontSize: "13px" }}>
                                            <i class="far fa-clock" style={{ fontSize: "15px" }}></i>
                                            &nbsp;{duration - 1}N/{duration}D&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i
                                                className="fa fa-map-marker-alt"
                                                style={{ fontSize: "15px" }}
                                            ></i>
                                            &nbsp;{place}

                                        </h6>
                                    </div>
                                </div> */}
                                {/* <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1={`${packBaseURL}${selectPackageData.sliderPhoto1}`}
                                                imageLink2={`${packBaseURL}${selectPackageData.sliderPhoto2}`}
                                                imageLink3={`${packBaseURL}${selectPackageData.sliderPhoto3}`}
                                                imageLink4={`${packBaseURL}${selectPackageData.sliderPhoto4}`}
                                                imageLink5={`${packBaseURL}${selectPackageData.sliderPhoto5}`}
                                                imageLink6={`${packBaseURL}${selectPackageData.sliderPhoto6}`}
                                                alt1={selectPackageData.imgAlt1}
                                                alt2={selectPackageData.imgAlt2}
                                                alt3={selectPackageData.imgAlt3}
                                                alt4={selectPackageData.imgAlt4}
                                                alt5={selectPackageData.imgAlt5}
                                                alt6={selectPackageData.imgAlt6}>
                                            </Carousel>
                                        </div>

                                    </div>
                                </div> */}
                                <h4 className="mb-1 mobileviewcenter " >{name} </h4>

                                <h6 className="theme mb-2 packagenameleft" style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                                    <Star stars={selectPackageData.package_rating} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="far fa-clock" style={{ fontSize: "14px" }}></i>&nbsp;
                                    {duration - 1}N/{duration}D&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-map-marker-alt" style={{ fontSize: "13px" }}></i>
                                    &nbsp;{place}&nbsp;&nbsp;&nbsp;&nbsp;
                                </h6>
                                <div class="shadow-none p-2 mb-1 bg-grey rounded">
                                    <div class="container">
                                        <div class="row">
                                            {selectPackageData.hotel_facility && selectPackageData.hotel_facility.trim() !== "" && (
                                                selectPackageData.hotel_facility.split(',').map((facility, index) => (
                                                    <div key={index} className="col text-center">
                                                        <img
                                                            src={`/images/${facility.trim()}`}
                                                            style={{ height: "50px" }}
                                                            alt={`${facility.trim()} Icon`}
                                                        />
                                                    </div>
                                                ))
                                            )}



                                            {/* <div class="col text-center"><img src='/images/pac1.webp' style={{ height: "60px" }}></img></div>
                                            <div class="col text-center"><img src='/images/pac2.webp' style={{ height: "60px" }}></img></div>
                                            <div class="col text-center"><img src='/images/pac3.webp' style={{ height: "60px" }}></img></div>
                                            <div class="col text-center"><img src='/images/pac4.webp' style={{ height: "60px" }}></img></div> */}
                                        </div>

                                    </div>
                                </div>
                                <div className='my-content mb-1'  >

                                    <div className="description">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 ">
                                                <div className="desc-box bg-grey p-2 rounded ">
                                                    <div class="container">
                                                        <div class="sidebar-item">
                                                            <div class="form-content rounded overflow-hidden" >
                                                                <div class="text-center ">Starting From&nbsp;&nbsp;&nbsp;
                                                                    <span className='text-center fs-6' style={{ textDecoration: "line-through", fontSize: "12px" }}>INR {(parseInt(Math.round(price * 1.2)).toLocaleString("en-IN"))}/-</span>
                                                                </div>
                                                                <div class="row">
                                                                    <div>
                                                                        <div className='text-center font-weight-bold fs-4' style={{ color: "#e73f32" }}>{(parseInt(price).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 })).replace("₹", "INR ")}/-*&nbsp;<span style={{ fontSize: "10px" }}>Per Adult</span> </div>
                                                                    </div>

                                                                </div><br></br>
                                                                {/* <button type="button" style={{ fontSize: "15px", borderRadius: "10px" }} class="btn btn-primary btn-lg btn-block">Send Enquiry</button> */}
                                                                <ModalpackageDesc props1={location_package} props2={name} buttonLabel="&nbsp;Send Enquiry" props3={`https://www.tripzygo.in${currentUrl}`}></ModalpackageDesc>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="description">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-2 rounded ">
                                                <div class="container">
                                                    {/* <h4 className="mb-1 pt-2" style={{ color:"black"}}>{name} </h4> */}
                                                    <h6 className="mb-1 pt-1" style={{ fontSize: "18px", }}>Highlights of this Package</h6>

                                                    <article>
                                                        <input type="checkbox" className="checkbox" id="read_more" role="button" />
                                                        <label for="read_more" onclick=""><span>Read More</span><span>Read Less</span></label>

                                                        <section className="set_padding" style={{ textAlign: 'justify', textJustify: 'inter-word', fontSize: "14.5px" }}>
                                                            <p>{selectPackageData.aboutPackage}</p>
                                                        </section>
                                                        <section className="set_padding" style={{ textAlign: 'justify', textJustify: 'inter-word', fontSize: "14.5px" }}>
                                                            <p>{selectPackageData.description}</p>
                                                            <h6 className="mb-1 pt-0" style={{ fontSize: "18px", }}>Inclusions</h6>

                                                            <div dangerouslySetInnerHTML={{ __html: inclusions }} />
                                                            <h6 className="mb-1 pt-1" style={{ fontSize: "18px", }}>Exclusions</h6>

                                                            <div dangerouslySetInnerHTML={{ __html: exclusions }} />
                                                            {batchdate ? (
                                                                <>
                                                                    <h6 className="mb-1 pt-1" style={{ fontSize: "18px" }}>Batch Dates</h6>
                                                                    <div dangerouslySetInnerHTML={{ __html: batchdate }} />
                                                                </>
                                                            ) : (
                                                                // Render something else or nothing if batchdate is not available
                                                                null
                                                            )}
                                                        </section>
                                                    </article>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="tabs-navbar bg-white sticky bordernone  sidebar-sticky sticky-md-top sticky-sm-top" style={{ zIndex: "9999" }}>
                                    <ul id="tabs" class="nav nav-tabs bordernone mb-0 overflow-visible ">
                                        <div class="scrollmenu container px-0 py-1">
                                            <a class={activeElement === 1 ? 'scroller-item2 col-lg-3 ac_tive py-1' : 'scroller-item2 col-lg-3 py-1'} onClick={() => handleElementClick(1)} href="#iternary">Itinerary</a>
                                            {/* <a class="scroller-item2 col-lg-2 py-1 " href="#exclusions">Exclusions</a> */}
                                            <a class={activeElement === 2 ? 'scroller-item2 col-lg-3 ac_tive py-1' : 'scroller-item2 col-lg-3 py-1'} onClick={() => handleElementClick(2)} href="#things-to-do">Things to Do</a>
                                            <a class={activeElement === 3 ? 'scroller-item2 col-lg-3 ac_tive py-1' : 'scroller-item2 col-lg-3 py-1'} onClick={() => handleElementClick(3)} href="#time-to-visit" >Time to Visit</a>
                                            {/* <a class="scroller-item2 col-lg-2 py-1 " href="#faq">FAQ’s</a> */}
                                            <a class={activeElement === 4 ? 'scroller-item2 col-lg-3 ac_tive py-1' : 'scroller-item2 col-lg-3 py-1'} onClick={() => handleElementClick(4)} href="#policies">Policies</a>


                                        </div>
                                    </ul>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">


                                        <div id="iternary" ref={itineraryRef} className="accrodion-grp faq-accrodion mb-1" data-grp-name="faq-accrodion" >
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


                                                                <h6 style={{ fontSize: "14px" }} className="mb-0"><span>Day {dayNumber} - {title}</span> <p style={{ float: "right", fontSize: "17px" }}>{isActive ? <><i class="fa fa-angle-up"></i></> : <><i class="fa fa-angle-down"></i></>}</p></h6>
                                                            </div>
                                                            <div className='gapitinerary'></div>
                                                            <div className={`accordion-content${isActive ? ' active' : ''}`}>
                                                                <div className="inner container" style={{ fontSize: "14.5px" }}>
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
                                        {/* <div id='policies'>
                                            <div className="col-lg-12 col-md-6 mb-2" >
                                                <div className="row">
                                                    <div className="desc-box bg-grey p-4 rounded">
                                                        <h5 className="mb-2">Inclusions</h5>
                                                        <div dangerouslySetInnerHTML={{ __html: inclusions }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6 mb-2" >
                                                <div className="row">
                                                    <div className="desc-box bg-grey p-4 rounded">
                                                        <h5 className="mb-2">Exclusions</h5>
                                                        <div dangerouslySetInnerHTML={{ __html: exclusions }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div class="col-lg-12 col-md-12 mb-2" id='things-to-do' ref={thingsToDoRef}>
                                            <div className="row">
                                                <div class="desc-box bg-grey p-4 rounded">
                                                    <h5 class="mb-2" style={{ fontSize: "18px", }}>Things To Do</h5>
                                                    <div style={{ fontSize: "14.5px" }} dangerouslySetInnerHTML={{ __html: thingsToDo }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 mb-2" id="time-to-visit" ref={timeToVisitRef}>
                                            <div className="row">
                                                <div className="desc-box bg-grey p-4 rounded">

                                                    <h5 className="mb-2" style={{ fontSize: "18px", }}>Best Time to Visit</h5>
                                                    <div style={{ fontSize: "14.5px" }} dangerouslySetInnerHTML={{ __html: bestTime }} />

                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="description mb-2" id="faq">
                                            <div className="row">
                                                <h4 style={{ fontSize: "18px", }}>FAQ’s</h4>

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
                                                                        <div className="inner container" style={{ fontSize: "14.5px" }}>

                                                                            {isActive && <ul className="mb-0">{answer}</ul>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}

                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div className="tour-includes mb-4">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : {selectPackageData.duration - 1} Nights/ {selectPackageData.duration} Days</td>
                                                        <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                                    </tr>
                                                    <tr>
                                                        <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : {(parseInt(price).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 })).replace("₹", "₹ ")}/-* </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div> */}

                                    </div>
                                </div>
                                {/* <LocationMap mapLink={selectPackageData.mapURL}></LocationMap> */}
                                {selectPackageData_related.length > 1 && (
                                    <section className="trending recent-articles pb-4 pt-1 " style={{ padding: "0px!important" }} >
                                        <div className="container delightfulContainer">
                                            <div className="section-title mb-6 w-75 mx-auto text-center">
                                                <h4 className="mb-1 theme1">Similar Packages</h4>

                                            </div>

                                            <div className="recent-articles-inner">
                                                <div className="row">
                                                    {selectPackageData_related?.filter((pack) => pack.id !== packId).slice(0, 3).map((pack) => (
                                                        <div className="col mb-4" >
                                                            <div className="trend-item rounded box-shadow h-100">
                                                                <div className="trend-image position-relative">
                                                                    {/* <a
                                                                  target="_blank"
                                                                  onClick={() => handleClick(pack?.id, pack?.name)}
                                                              > */}
                                                                    <div className="trend-item2 rounded">
                                                                        <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                                                            <div className="trend-item2 rounded">
                                                                                <Image
                                                                                    src={`https://packages.tripzygo.travel/package_image/${pack?.cover_image}`}
                                                                                    alt={pack?.name}
                                                                                    className="card-image" // Apply a CSS class
                                                                                    width={400} // Set the desired width
                                                                                    height={230} // Set the desired height
                                                                                />

                                                                                {/* <div className="color-overlay"></div> */}
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    {/* </a> */}
                                                                </div>
                                                                <div className="trend-content p-3 pt-0 position-relative">
                                                                    {/* <div className="trend-meta bg-theme white px-2 py-1 rounded">
                                                                <div className="entry-author">
                                                                    <i className="icon-calendar"></i>
                                                                         <span className="fw-bold" style={{ fontSize: "12px" }}> {pack.duration} Days Tours</span>
                                                                    </div>
                                                               </div> */}
                                                                    <h3 className="mb-1" style={{ fontSize: "15px" }}>
                                                                        <a
                                                                            target="_blank"
                                                                            onClick={() => handleClick(pack?.id, pack?.name)}

                                                                        >
                                                                            {pack?.name}
                                                                        </a>
                                                                    </h3>
                                                                    <a
                                                                        target="_blank"
                                                                        onClick={() => handleClick(pack?.id, pack?.name)}

                                                                    >
                                                                        <div className="theme mb-0" style={{ fontSize: "8px", display: "flex", alignItems: "center" }}>
                                                                            <i className="far fa-clock" style={{ fontSize: "7px", marginRight: "5px" }}></i>
                                                                            {pack.duration - 1}N/{pack.duration}D
                                                                            <i className="fa fa-map-marker-alt" style={{ fontSize: "7px", marginLeft: "15px", marginRight: "5px" }}></i>
                                                                            {pack.relate_key} &nbsp;&nbsp;&nbsp;
                                                                            <Star stars={pack?.package_rating} />
                                                                            {/* <div className="pt-1 ps-2" style={{ color: "black" }}>
                                                                          {pack?.package_rating}/5
                                                                      </div> */}
                                                                        </div>
                                                                    </a>
                                                                    <a
                                                                        target="_blank"
                                                                        onClick={() => handleClick(pack?.id, pack?.name)}

                                                                    >
                                                                        {/* <img src={`/images/${pack?.hotel_facility}`} style={{ height: "60px", marginLeft: "-15px" }} alt="Icon" /> */}
                                                                        {pack?.hotel_facility && pack.hotel_facility.trim() !== "" && (
                                                                            pack.hotel_facility.split(',').map((facility, index) => (
                                                                                <img
                                                                                    key={index}
                                                                                    src={`/images/${facility.trim()}`}
                                                                                    style={{ height: "35px" }}
                                                                                    alt={`${facility.trim()} Icon`}
                                                                                />
                                                                            ))
                                                                        )}

                                                                    </a>

                                                                    <hr className="grey-line" />
                                                                    {/* <div className="rating-main d-flex align-items-center pb-2"></div> */}
                                                                    <div className="entry-meta">
                                                                        <small style={{ fontSize: "8px" }}>Starting From/Person</small>&nbsp;&nbsp;
                                                                        <span
                                                                            style={{
                                                                                textDecoration: "line-through",
                                                                                fontSize: "8px",
                                                                            }}
                                                                        >
                                                                            <i
                                                                                className="fa fa-inr"
                                                                                style={{ fontSize: "8px" }}
                                                                                aria-hidden="true"
                                                                            ></i>
                                                                            &nbsp;{(parseInt(Math.round(pack?.web_pack_price * 1.2)).toLocaleString("en-IN"))}*
                                                                        </span>

                                                                        <div className="entry-author d-flex align-items-center">

                                                                            <p className="mb-0">
                                                                                <span className="theme fw-bold fs-6">
                                                                                    INR {(parseInt(Math.round(pack?.web_pack_price)).toLocaleString("en-IN"))}*
                                                                                </span>
                                                                            </p>
                                                                            &nbsp;&nbsp;

                                                                            <a
                                                                                //   style={{ left: "67px" }}
                                                                                style={{ fontSize: "10px" }}
                                                                                // target="_blank"
                                                                                id="view_package"
                                                                                className="nir-btn white"
                                                                                onClick={() => handleClick(pack?.id, pack?.name)}
                                                                            >
                                                                                View
                                                                            </a>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className='my-content'>
                                                                    <div className='animated.infinite'>
                                                                        {/* <div class="button-wrapper-cta">
                                                           <a class="button-cta cta-button  btn-lg btn-block" style={{textAlign:"center",fontSize:"1rem"}}>Click to get in touch</a>
                                                           
                                                         </div> */}
                                                                        <MobileviewDestination props1={pack?.relate_key} props2={pack?.name} props3={`https://www.tripzygo.in/package/${pack?.id}-${pack?.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}`}></MobileviewDestination>
                                                                    </div>
                                                                </div>


                                                            </div>

                                                        </div>
                                                    ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )}
                                <section className="trending recent-articles pb-4 pt-1 " style={{ padding: "0px!important" }} >
                                    <div className="container delightfulContainer">
                                        <div className="section-title mb-6 w-75 mx-auto text-center">
                                            <h4 className="mb-1 theme1">Related Packages</h4>

                                        </div>

                                        <div className="recent-articles-inner">
                                            <div className="row">
                                                {selectPackageData_similar?.filter((pack) => pack.id !== packId).slice(0, 3).map((pack) => (
                                                    <div className="col mb-4" >
                                                        <div className="trend-item rounded box-shadow h-100">
                                                            <div className="trend-image position-relative">
                                                                {/* <a
                                                                    target="_blank"
                                                                    onClick={() => handleClick(pack?.id, pack?.name)}
                                                                > */}
                                                                <div className="trend-item2 rounded">
                                                                    <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                                                        <div className="trend-item2 rounded">
                                                                            <Image
                                                                                src={`https://packages.tripzygo.travel/package_image/${pack?.cover_image}`}
                                                                                alt={pack?.name}
                                                                                className="card-image" // Apply a CSS class
                                                                                width={400} // Set the desired width
                                                                                height={230} // Set the desired height
                                                                            />

                                                                            {/* <div className="color-overlay"></div> */}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                {/* </a> */}
                                                            </div>
                                                            <div className="trend-content p-3 pt-0 position-relative">
                                                                {/* <div className="trend-meta bg-theme white px-2 py-1 rounded">
                                                                  <div className="entry-author">
                                                                      <i className="icon-calendar"></i>
                                                                           <span className="fw-bold" style={{ fontSize: "12px" }}> {pack.duration} Days Tours</span>
                                                                      </div>
                                                                 </div> */}
                                                                <h3 className="mb-1" style={{ fontSize: "15px" }}>
                                                                    <a
                                                                        target="_blank"
                                                                        onClick={() => handleClick(pack?.id, pack?.name)}

                                                                    >
                                                                        {pack?.name}
                                                                    </a>
                                                                </h3>
                                                                <a
                                                                    target="_blank"
                                                                    onClick={() => handleClick(pack?.id, pack?.name)}

                                                                >
                                                                    <div className="theme mb-0" style={{ fontSize: "8px", display: "flex", alignItems: "center" }}>
                                                                        <i className="far fa-clock" style={{ fontSize: "7px", marginRight: "5px" }}></i>
                                                                        {pack.duration - 1}N/{pack.duration}D
                                                                        <i className="fa fa-map-marker-alt" style={{ fontSize: "7px", marginLeft: "15px", marginRight: "5px" }}></i>
                                                                        {pack.relate_key} &nbsp;&nbsp;&nbsp;
                                                                        <Star stars={pack?.package_rating} />
                                                                        {/* <div className="pt-1 ps-2" style={{ color: "black" }}>
                                                                            {pack?.package_rating}/5
                                                                        </div> */}
                                                                    </div>
                                                                </a>
                                                                <a
                                                                    target="_blank"
                                                                    onClick={() => handleClick(pack?.id, pack?.name)}

                                                                >
                                                                    {/* <img src={`/images/${pack?.hotel_facility}`} style={{ height: "60px", marginLeft: "-15px" }} alt="Icon" /> */}
                                                                    {pack?.hotel_facility && pack.hotel_facility.trim() !== "" && (
                                                                        pack.hotel_facility.split(',').map((facility, index) => (
                                                                            <img
                                                                                key={index}
                                                                                src={`/images/${facility.trim()}`}
                                                                                style={{ height: "35px" }}
                                                                                alt={`${facility.trim()} Icon`}
                                                                            />
                                                                        ))
                                                                    )}

                                                                </a>

                                                                <hr className="grey-line" />
                                                                {/* <div className="rating-main d-flex align-items-center pb-2"></div> */}
                                                                <div className="entry-meta">
                                                                    <small style={{ fontSize: "8px" }}>Starting From/Person</small>&nbsp;&nbsp;
                                                                    <span
                                                                        style={{
                                                                            textDecoration: "line-through",
                                                                            fontSize: "8px",
                                                                        }}
                                                                    >
                                                                        <i
                                                                            className="fa fa-inr"
                                                                            style={{ fontSize: "8px" }}
                                                                            aria-hidden="true"
                                                                        ></i>
                                                                        &nbsp;{(parseInt(Math.round(pack?.web_pack_price * 1.2)).toLocaleString("en-IN"))}*
                                                                    </span>

                                                                    <div className="entry-author d-flex align-items-center">

                                                                        <p className="mb-0">
                                                                            <span className="theme fw-bold fs-6">
                                                                                INR {(parseInt(Math.round(pack?.web_pack_price)).toLocaleString("en-IN"))}*
                                                                            </span>
                                                                        </p>
                                                                        &nbsp;&nbsp;

                                                                        <a
                                                                            //   style={{ left: "67px" }}
                                                                            style={{ fontSize: "10px" }}
                                                                            // target="_blank"
                                                                            id="view_package"
                                                                            className="nir-btn white"
                                                                            onClick={() => handleClick(pack?.id, pack?.name)}
                                                                        >
                                                                            View
                                                                        </a>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className='my-content'>
                                                                <div className='animated.infinite'>
                                                                    {/* <div class="button-wrapper-cta">
                                                             <a class="button-cta cta-button  btn-lg btn-block" style={{textAlign:"center",fontSize:"1rem"}}>Click to get in touch</a>
                                                             
                                                           </div> */}
                                                                    <MobileviewDestination props1={pack?.relate_key} props2={pack?.name} props3={`https://www.tripzygo.in/package/${pack?.id}-${pack?.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}`}></MobileviewDestination>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>
                                                ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <Ourblogs page="packagePage" />
                            </div>

                        </div>
                        <div className="col-lg-4 pe-lg-4">
                            <div class="sidebar-sticky">
                                <div class="list-sidebar">
                                    <div class="sidebar-item">

                                        <div class="list-sidebar resp mb-2 shadow-sm rounded">
                                            <div class="sidebar-item">
                                                <div class="form-content rounded overflow-hidden" >
                                                    <div class="text-center ">Starting From&nbsp;&nbsp;&nbsp;
                                                        <span className='text-center fs-6' style={{ textDecoration: "line-through", fontSize: "12px" }}>INR {(parseInt(Math.round(price * 1.2)).toLocaleString("en-IN"))}/-</span>
                                                    </div>
                                                    <div class="row">
                                                        <div>
                                                            <div className='text-center font-weight-bold fs-4' style={{ color: "#e73f32" }}>{(parseInt(price).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 })).replace("₹", "INR ")}/-*&nbsp;<span style={{ fontSize: "10px" }}>Per Adult</span> </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Packages_Form props1={location_package} props2={name} props3={`https://www.tripzygo.in${currentUrl}`}></Packages_Form>

                                        <Packages_Form display="none" props1={location_package} props2={name} props3={`https://www.tripzygo.in${currentUrl}`}></Packages_Form>


                                        {/* <section className="trending pb-4 pt-4" >

                                            <div className="container1">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                                        <h3 class="mb-1 ">Related Packages</h3><br />
                                                        <div class="sidebar-item bg-white rounded box-shadow px-3 pb-2 mb-4 packagescrollbar" id="style-3" >
                                                            {selectPackageData_related?.map((pack) => (
                                                                <div class="trend-full border-b pt-4">
                                                                    <div class="row">
                                                                        <div className="col-lg-4 col-md-4">
                                                                            <a href={`https://tripzygo.in/package/${pack?.id}`}>
                                                                                <div className="trend-item3 rounded">
                                                                                    <a style={{ backgroundImage: `url(${packBaseURL}${pack?.cover_image})` }}></a>
                                                                                    <div className="color-overlay"></div>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="col-lg-8 col-md-8 ps-0">
                                                                            <div class="trend-content position-relative">
                                                                                <h5 class="mb-1 mobileviewheading"><a href={`https://tripzygo.in/package/${pack?.id}`}>{pack?.name}</a></h5>
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

                                        </section > */}
                                        <div class="list-sidebar pt-1">
                                            <div class="sidebar-item" style={{ color: "#e73f32", boxShadow: "0 0 5px 1px", borderRadius: "10px" }}>
                                                <div class="form-content rounded overflow-hidden" >
                                                    <div className='row'>

                                                        <div className='col-md-4 col-4' >
                                                            <img src="/images/grouptour.jpg" style={{ borderRadius: "8px", height: "75px" }}></img>
                                                        </div>
                                                        <div className='col-md-8 col-8'>
                                                            <div class="text-center font-weight-bold " style={{ fontSize: "14px" }}>Bigger Group? Get special offers upto 50% off!&nbsp;&nbsp;&nbsp;
                                                                {/* <span className='text-center fs-6' style={{ textDecoration: "line-through", fontSize: "12px" }}>INR {(parseInt(Math.round(price * 1.2)).toLocaleString("en-IN"))}/-</span> */}
                                                            </div>
                                                            <p class="text-center" style={{ fontSize: "10px" }}>We create unforgettable adventures, customised for your group.</p>
                                                        </div>

                                                    </div><br />
                                                    {/* <button type="button" style={{ fontSize: "15px" }} class="btn btn-primary btn-lg btn-block">Get a Callback</button> */}
                                                    <ModalGroup props1={location_package} props2={name} buttonLabel="&nbsp;Get a Callback"></ModalGroup>

                                                </div>
                                            </div>
                                        </div>
                                        <section className="trending pb-4 pt-0">

                                            <div className="container1 shadow-sm rounded">
                                                <div className="row align-items-center">
                                                    <div class="list-sidebar" >
                                                        <div class="sidebar-item">
                                                            <div class="form-content rounded overflow-hidden mt-2" style={{ backgroundColor: "#fcf3e9" }}>
                                                                <h4 class="text-center border-b pb-2 ">Why Tripzygo</h4>
                                                                <div class="row">
                                                                    <div>
                                                                        <div style={{ fontWeight: "500" }}><i class="fa fa-check" style={{ color: "green" }} aria-hidden="true"></i>&nbsp;&nbsp;Personalized Journeys, Tailored for You</div><br />
                                                                        <div><i class="fa fa-check" style={{ color: "green" }} aria-hidden="true"></i>&nbsp;&nbsp;Stress-Free Planning with Expert Guidance</div><br />
                                                                        <div><i class="fa fa-check" style={{ color: "green" }} aria-hidden="true"></i>&nbsp;&nbsp;Exclusive Access to Hidden Gems</div>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div >

                                        </section >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <section className="trending pt-0 pb-4 bg-lgrey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content">




                                <div className="description" id='policies' ref={policiesRef}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box p-2 rounded " style={{ backgroundColor: "#dbe9ee" }}>
                                                <div class="container">



                                                    <h6 className="mb-1 pt-1" style={{ fontSize: "22px", }}>{name} Policies</h6><br />

                                                    <div class="row">
                                                        {/* <div class="col-md-6" style={{borderRight:"1px solid #a0a4a45c"}}> */}
                                                        <div class="col-md-6">

                                                            <h4 style={{ fontSize: "19px", }}>Confirmation Policy</h4>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>The customer receives a confirmation voucher via email within 24 hours of successful booking.</p>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>In case the preferred slots are unavailable, an alternate schedule of the customer’s preference will be arranged and a new confirmation voucher will be sent via email.</p>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed.</p>

                                                            <h4 style={{ fontSize: "19px", }}>Refund Policy</h4>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>The applicable refund amount will be processed within 10 business days.</p>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>All applicable refunds will be done in the traveler's Bank Account.</p>


                                                        </div>
                                                        <div class="col-md-6">
                                                            <h4 style={{ fontSize: "19px", }}>Cancellation Policy</h4>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>If cancellation are made 30 days before the date of travel then 25.0% of total tour cost will be charged as cancellation fees</p>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>If cancellation are made 15 days to 30 days before the date of travel then 50.0% of total tour cost will be charged as cancellation fees</p>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>If cancellation are made 0 days to 15 days before the date of travel then 100.0% of total tour cost will be charged as cancellation fees</p>

                                                            <h4 style={{ fontSize: "19px", }}>Payment Terms Policy</h4>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>The applicable refund amount will be processed within 10 business days.</p>
                                                            <p className='mb-2' style={{ fontSize: "14px", }}>100.0% of total tour cost will have to be paid 0 days before the date of booking</p>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description" id='faq'>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box p-2 rounded " style={{ backgroundColor: "rgb(203 235 216)" }}>
                                                <div class="container">
                                                    <div className="description mb-2" id="faq">
                                                        <div className="row pt-2">
                                                            <h4 style={{ fontSize: "22px", }}>FAQ’s</h4>

                                                            <div className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                                <div className="accrodion">
                                                                    {Object.keys(faq).map((key) => {
                                                                        const qNumber = key;
                                                                        const question = faq[key][0];
                                                                        const answer = faq[key][1];
                                                                        const isActive = activeAccordion === qNumber;

                                                                        return (

                                                                            // <div key={qNumber} className="accrodion-grp faq-accrodion mb-1" data-grp-name="faq-accrodion">
                                                                            //     <div className="accrodion-title rounded" onClick={() => handleAccordionClick(qNumber)}>


                                                                            //         <h6 style={{ fontSize: "14px" }} className="mb-0"><span>{question}</span> <p style={{ float: "right", fontSize: "17px" }}>{isActive ? '–' : '+'}</p></h6>
                                                                            //     </div>
                                                                            //     <br />
                                                                            //     <div className={`accordion-content${isActive ? ' active' : ''}`}>
                                                                            //         <div className="inner container" style={{ fontSize: "14.5px" }}>

                                                                            //             {isActive && <ul className="mb-0">{answer}</ul>}
                                                                            //         </div>
                                                                            //     </div>
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
                </div>
                <br /><br />

                <Script src="/js/jquery-3.5.1.min.js"></Script>
                <Script src="/js/bootstrap.min.js"></Script>
                <Script src="/js/particles.js"></Script>
                <Script src="/js/particlerun.js"></Script>
                <Script src="/js/plugin.js"></Script>
                {/* <Script src="/js/main.js"></Script> */}
                <Script src="/js/custom-accordian.js"></Script>
                <Script src="/js/custom-nav.js"></Script>
                <Script src="/js/custom-navscroll.js"></Script>

            </section>
        </div>
    );
}

// Fetch data at build time (Static Generation) using ISR
