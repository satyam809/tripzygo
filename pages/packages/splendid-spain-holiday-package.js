import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';

import Head from "next/dist/shared/lib/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import { FreeMode, Thumbs } from "swiper";
import { useRef, useState } from "react";
SwiperCore.use([Pagination, Autoplay]);

export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Head>

                <title>TripzyGo - Book A Spain Holiday Package - Best Spain Tour Package</title>
                <meta name="description" content="Grab a Spain Holiday Package. We offer the best Spain Tour Package from India. Travel to Spain from India and explore the best of what the country has to offer." />
                <meta name="keywords" content="Spain Holiday Package, travel to Spain from India, best spain tour package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/splendid-spain-holiday-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/splendid-spain-holiday-package" />
                <meta property="og:title" content="Book A Spain Holiday Package - Best Spain Tour Package" />
                <meta property="og:description" content="Grab a Spain Holiday Package. We offer the best Spain Tour Package from India. Travel to Spain from India and explore the best of what the country has to offer." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="73" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Splendid Spain Holiday Package</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/1.webp" alt="Spain Holiday Package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/2.webp" alt="Spain Holiday Package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/3.webp" alt=" travel to Spain from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/4.webp" alt=" travel to Spain from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/5.webp" alt="best spain tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/6.webp" alt="best spain tour package" />
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
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/1.webp" alt="Spain Holiday Package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/2.webp" alt="Spain Holiday Package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/3.webp" alt=" travel to Spain from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/4.webp" alt=" travel to Spain from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/5.webp" alt="best spain tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/spain_holiday_package_escape_into_adventure_self_exploration_freedom_and_fun/6.webp" alt="best spain tour package" />
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
                                                <div>Spain… you instantly remember ZNMD when you hear of Spain. </div>
                                                <div class="mb-0">The La Tomatina festival, Running with the Bulls, and many other sports and adventures, Spain is full of beautiful memories and moments to create. </div>
                                                <div>A Spain Holiday is like a dream for everyone. </div>
                                                <div>Fulfill your dream with this amazing Spain Holiday Package designed with a tour itinerary of the best things to do on your travel to Spain from India.</div>
                                                <div class="mb-0">Be it enjoying the different Spanish festivals from season to season or just chilling around in Spain with different activities, sports, and adventures, or else treating your eyes with the magnificent beauties in the form of landscapes and sceneries that Spain has to offer, this Spain Holiday Package has everything covered.</div>
                                                <div>Don’t wait up. This will be in the list of your best holidays ever. Book a Spain Holiday Package now. </div>
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
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 89,900/-* </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrive at  Barcelona</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Meet and greet at Barcelona airport transfers to hotel rest of the ay free fo Leisure.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span>  - Explore Barcelona</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>   After breakfast can expore the city with Barcelona travel card.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  overnight stays at Barcelona hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Barcelona </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast can expore the city with Barcelona travel card, overnight stays at Barcelona hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Valencia </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast proceed for Valencia heck in at hotel, rest of the day free for leiusre.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Valencia</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakast proceed for Hemisfèric, Principe Felipe Museum of Sciences and Oceanogràfic, Overnight stay at Valencia hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Madrid</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  After breakfast proceed for Madrid check in at hotel rest of the day free for leisure.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> -  Madrid</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  After breakfast proceed for Toledo day tour from Madrid, Overnight stay at Madrid hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 8</span> - Transfers to airport </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast transfers to airport to board your flight and fly back to India.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Barcelona airport to hotel transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Madrid hotel to airport transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Barcelona - Valencia train tickets</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Valencia - Madrid train tickets</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Daily breakfast at hotel</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Barcelona travel card for 02 days</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Hemisfèric, Principe Felipe Museum of Sciences and Oceanogràfic in Valencia</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Toledo day tour from Madrid</li>
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
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Barcelona - Witness Antoni Gaudi's Craftsmanship</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Camp Nou Arena - Watch A Live Match</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Seville - Enjoy The Best Served Tapas</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Madrid - Watch The Well known Flamenco Show</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Empuriabrava - Go Skydiving</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ibiza - Party Throughout the Evening</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sierra Nevada - We should Ski</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Bunol - Go to The La Tomatina</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Granada - Visit Alhambra</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Benicassim Celebration - Score To The Best Beats</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Limite Zero - Take A Ride On The Worldwide Zipline</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Lord's Little Pathway - Stroll On The Deadliest Way</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Galicia - Go to The Most insane Celebration</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> El Somorrostro - Take A Beverage In The Ice Bar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Burial service Carriages Gallery - Take A Visit</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-map mb-4">
                                    <h4>Map</h4>
                                    <div className="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6247525.876950715!2d-8.205054347295944!3d40.130036554673026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2sin!4v1661761714036!5m2!1sen!2sin" ></iframe>


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
