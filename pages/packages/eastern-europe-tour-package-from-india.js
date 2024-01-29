import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import Head from "next/dist/shared/lib/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import { FreeMode, Thumbs } from "swiper";
import { useRef, useState } from "react";
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';
SwiperCore.use([Pagination, Autoplay]);

export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Head>

                <title>TripzyGo - Eastern Europe Tours - Hungary Austria Czech Republic Tour</title>
                <meta name="description" content="Looking for an Eastern Europe tours? Here's the best eastern Europe holiday package from India for you for an exciting Hungary Austria Czech Republic tour." />
                <meta name="keywords" content="Eastern Europe Tours, Hungary Austria Czech Republic tour, eastern europe holiday package from india" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/eastern-europe-tour-package-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/eastern-europe-tour-package-from-india" />
                <meta property="og:title" content="Eastern Europe Tours - Hungary Austria Czech Republic Tour" />
                <meta property="og:description" content="Looking for an Eastern Europe tours? Here's the best eastern Europe holiday package from India for you for an exciting Hungary Austria Czech Republic tour." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="85" progressBarPercentage="85%"/>
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
                                        <h2 className="mb-1">Eastern Europe Tour Package From India</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Swiper
                                                style={{
                                                    "--swiper-navigation-color": "#fff",
                                                    "--swiper-pagination-color": "#fff",
                                                }}
                                                autoplay={{
                                                    delay: 2000,
                                                    disableOnInteraction: false,
                                                }}
                                                loop={true}
                                                spaceBetween={10}
                                                // navigation={true}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper2"
                                            >
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\1.webp" alt="Eastern Europe Tours" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\2.webp" alt="Eastern Europe Tours" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\3.webp" alt="Hungary Austria Czech Republic tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\4.webp" alt="Hungary Austria Czech Republic tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\5.webp" alt="eastern europe holiday package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\6.webp" alt="eastern europe holiday package from india" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className='gap'></div>
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                loop={true}
                                                autoplay={{
                                                    delay: 2000,
                                                    disableOnInteraction: false,
                                                }}
                                                spaceBetween={0}
                                                slidesPerView={6}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\1.webp" alt="Eastern Europe Tours" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\2.webp" alt="Eastern Europe Tours" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\3.webp" alt="Hungary Austria Czech Republic tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\4.webp" alt="Hungary Austria Czech Republic tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\5.webp" alt="eastern europe holiday package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/czech_republic_austria_and_hungary_eastern_europe_package\6.webp" alt="eastern europe holiday package from india" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div class="description mb-2">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-6 mb-2 ">
                                            <div class="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>Eastern Europe Tours are a dream for many.</div>
                                                <div class="mb-0">Well, this package is a dream come true. </div>
                                                <div> Designed for a budgeted travel, this amazing package to the Eastern Europe is all you need for an elating and blissful time in one of the most amazing continents in the world.</div>
                                                <div>Have a learning experience on a heritage tour to Czech Republic, Austria, and Hungary. </div>
                                                <div> The amazing things to know about people and places in these cities as well as the breathtaking architecture of different castles, forts, and palaces is a sight you’ll cherish forever.</div>
                                                <div>You can’t find a better package for a heritage tour to the best and most historic places of Eastern Europe.</div>
                                                <div>What are you waiting for? Get in touch now and book your package for Hungary, Austria, Czech Republic tour soon!</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 07 nights & 08 days </td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 66,600/-* </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival in Prague</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: " block;" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Meet and greet at Prague airport transfers to hotel rest of the day free fo Leisure.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Prague city tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: " none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  After breakfast proceed for Prague city tour followed by Vlatava River cruise.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Overnight stay at Prague hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Prague Castle tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: " none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  After breakfast proceed for Prague Castle tour, Evening free for leisure, Overnight stay at Prague hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Vienna </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: " none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakast proceed for Vienna check in at hotel rest of the day free for leisure.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Vienna city tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: " none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  After breakfast proceed for Vienna City Tour with Schoenbrunn Palace, Overnight stay at Vienna hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Budapest</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: " none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  After breakfast proceed for Budapest check at hotel rest of the day free for leisure</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Budapest city tour </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: " none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast proceed for Budapest city tour followed by Dabube river cruise, Overnight stay at Budapest hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 8</span> -  Transfers to airport </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: " none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  After breakfast transfers to airport to board your flight and fly back to India.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Prague airport to hotel transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Budapest hotel to airport transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Prageu - Vienna train tickets</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Vienna - Budapest train tickets</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Daily breakfast at hotel</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Cruise on the Vlatava river in Prague</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Prageu Bus Tour</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Prage Castle tour</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Vienna City Tour with Schoenbrunn Palace</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Budapest city tour</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Danube River Cruise in Budapest</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> GST,Visa Assisstance </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flight tickets </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> PCR Test </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Visa Fee (Directly payable at VFS at the time of biometric)</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Travel Insurance</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> TCS 5%</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional cost in case of Lockdown if any</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tips and porter chargers. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Cost of any excursions not included package</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early check in and late check out at the hotel as per availability (Extra Charges May Apply) </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Items of a personal nature such as phone calls, pay movies, room services, mini bars laundries or other expenditures during the tour</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional Costs due to Flight Cancellations, Road blocks, natural calamities</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Local taxes, if any</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Transfer Surcharges in case of public holiday</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything not mentioned in Inclusions Part</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Climbing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Skiing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Snowbombing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Vienna</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Salzburg</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gellért Spa</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Danube Waterway Voyage</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Budapest Parliament Visit</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Danube Twist Visit</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Budapest Night Visit</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Salzkammergut</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637846.015562922!2d13.231814591059463!3d49.78566062103788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948fd7dd8243%3A0xf8661c75d3db586f!2sCzechia!5e0!3m2!1sen!2sin!4v1661766913726!5m2!1sen!2sin" ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pe-lg-4"><Packages_Form></Packages_Form></div>
                    </div>
                </div>
            </section>
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
        </div>

    )
}