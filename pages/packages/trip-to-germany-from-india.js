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

                <title>TripzyGo - Germany Tour Package - Plan an amazing trip to Germany from India</title>
                <meta name="description" content="Germany Tour Package From India - Enjoy a cool vacation with a trip to Germany from India. Book this exciting Germany tour package till the offers lasts. " />
                <meta name="keywords" content="Germany tour package, Germany tour package from India, trip to germany from india " />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/trip-to-germany-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/trip-to-germany-from-india" />
                <meta property="og:title" content="Germany Tour Package - Plan an amazing trip to Germany from India" />
                <meta property="og:description" content="Germany Tour Package From India - Enjoy a cool vacation with a trip to Germany from India. Book this exciting Germany tour package till the offers lasts. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/an_escape_with_germany_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="71" progressBarPercentage="70%"/>
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
                                        <h2 className="mb-1">Trip To Germany From India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/1.webp" alt="Germany tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/2.webp" alt="Germany tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/3.webp" alt="Germany tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/4.webp" alt="Germany tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/5.webp" alt="trip to germany from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/6.webp" alt="trip to germany from india" />
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
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/1.webp" alt="Germany tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/2.webp" alt="Germany tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/3.webp" alt="Germany tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/4.webp" alt="Germany tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/5.webp" alt="trip to germany from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/an_escape_with_germany_tour_package/6.webp" alt="trip to germany from india" />
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
                                                <div>Germany is a place with more famous things that you could count on your
                                                    fingers.</div>
                                                <div class="mb-0">It has amazing architecture, forts, castles, and cathedrals that
                                                    speak for the age-old ancient culture and heritage of the place.</div>
                                                <div>Its food is delicious and appetising, especially the bread and the beer. </div>
                                                <div>And there are many more things such as cars, music, the sightings of the
                                                    nature, and even the cold and freezing climate.</div>
                                                <div>With all things so beautiful and breathtaking, there hardly remains any reason
                                                    not to plan a  trip to Germany from India. </div>
                                                <div>We know you’re excited and to help your excitement, here’s a wonderful 7
                                                    Nights, 8 Days Germany tour package that you’re going to love.</div>
                                                <div>This package is planned keeping the best cities in Germany and making sure that
                                                    you have enough time to visit all that’s worth visiting in the different cities
                                                    where you stay.</div>
                                                <div>The stays planned are 2 Nights each in Berlin and Munich and 3 Nights in
                                                    Frankfurt.</div>
                                                <div>With the travel plan and itinerary we have for this Germany tour package from
                                                    India, you’re going to have the most memorable and coolest trip of your life.
                                                </div>
                                                <div>Get your bags and start packing now. </div>
                                                <div>But before that, book this trip to Germany from India quickly by getting in touch with the TripzyGo travel executive.</div>
                                                <div>Happy Travelling!</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 07 nights & 08 days
                                                </td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 89,900/-* </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion">
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival Berlin </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> Meet and greet at Berlin airport
                                                            transfers to hotel rest of the day free fo Leisure</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Sachsenhausen</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast proceed for
                                                            Sachsenhausen Concentration Camp Memorial Tour, Overnight stay at Berlin
                                                            hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> -  Frankfurt</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast proceed for Frankfurt
                                                            check in at hotel, rest of the day free for leisure.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Enjoy at Cruise</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakast enjoy Frankfurt
                                                            Panorama Cruise, overnight stay at Frankfurt hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Valley day</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast proceed for Full Day
                                                            Rhine Valley Day Trip, Overnight stay at Frankfurt hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Munich</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast proceed for Munich
                                                            check in at hotel, rest of the day free for leisure.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Munich city tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast proceed for Munich
                                                            city tour, overnight stay at Munich hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 8</span> - Transfers to airport</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast transfers to airport
                                                            to board your flight and fly back to India.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Return Airport
                                                        transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Daily breakfast
                                                        at hotel. </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Sachsenhausen
                                                        Concentration Camp Memorial Tour from Berlin</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Frankfurt Panorama
                                                        Cruise</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Rhine Valley Day Trip
                                                    </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Munich City Tour</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> GST & Visa Assisstance
                                                    </li>



                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flight tickets
                                                    </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> PCR Test </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Visa Fee
                                                        (Directly payable at VFS at the time of biometric)</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Travel Insurance
                                                    </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> TCS 5%</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional cost
                                                        in case of Lockdown if any</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tips and porter
                                                        chargers. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Cost of any
                                                        excursions not included package. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early check in
                                                        and late check out at the hotel as per availability (Extra Charges May
                                                        Apply). </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Items of a
                                                        personal nature such as phone calls, pay movies, room services, mini bars
                                                        laundries or other expenditures during the tour.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional Costs
                                                        due to Flight Cancellations, Road blocks, natural calamities. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Local taxes, if
                                                        any. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Transfer
                                                        Surcharges in case of public holiday.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything not
                                                        mentioned in Inclusions Part.</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Brandenburg Entryway: Walk Around</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cologne Church: Appreciate The Heavenliness</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Miniatur Wunderland: Become mixed up In The Wizardry</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Neuschwanstein Palace: Pay That Fantasy Visit</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Europa Park: Set out On An Undeniably exhilarating Experience</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Berlin Wall: Stroll Along The Remembrance</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Marienplatz: Investigate The Authentic Heart Of Munich</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Englischer Garten: Go through Certain Snapshots Of Ecstasy</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gallery Island: Look In Marvel At The Captivating Shows</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Mercedes Benz Exhibition hall: Find The Universe Of Autos</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Erholungspark Marzahn - Visit To Creative Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Berchtesgaden Public Park - Visit To Public Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Aachen House of God - Visit Most seasoned Church building In Northern Europe</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sylt - Investigate The Tropical Island</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Burg Eltz Palace - Ingest The Middle age History</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-map mb-4">
                                    <h4>Map</h4>
                                    <div className="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12743709.802596604!2d26.17583854226598!3d38.75780273089607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sin!4v1661767162389!5m2!1sen!2sin"></iframe>


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
