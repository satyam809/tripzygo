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

                <title>TripzyGo - Holiday Trip To Dubai With Dubai Travel Package From India</title>
                <meta name="description" content="Enjoy the luxurious holiday trip to Dubai With the customized Dubai travel package. Book your package tour to dubai from india for the hassle-free vacation." />
                <meta name="keywords" content="dubai travel package from india, hoilday trip to dubai, package tour to dubai from india" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/luxury-dubai-travel-package-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/luxury-dubai-travel-package-from-india" />
                <meta property="og:title" content="Holiday Trip To Dubai With Dubai Travel Package From India" />
                <meta property="og:description" content="Enjoy the luxurious holiday trip to Dubai With the customized Dubai travel package. Book your package tour to dubai from india for the hassle-free vacation." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="79" progressBarPercentage="80%"/>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/about_us.webp)" }}>                <div className="breadcrumb-outer">
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
                                        <h2 className="mb-1">Luxury Dubai Travel Package From India</h2>

                                    </div>
                                </div>
                                <div className="description-/images mb-4 overflow-hidden">
                                    <div className="thumbnail-/images position-relative">
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
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/1.webp" alt="dubai travel package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/2.webp" alt="dubai travel package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/3.webp" alt=" hoilday trip to dubai" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/4.webp" alt="hoilday trip to dubai " />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/5.webp" alt="package tour to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/6.webp" alt="package tour to dubai from india" />
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
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/1.webp" alt="dubai travel package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/2.webp" alt="dubai travel package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/3.webp" alt=" hoilday trip to dubai" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/4.webp" alt="hoilday trip to dubai " />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/5.webp" alt="package tour to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/luxurious_vacation_with_dubai_travel_package_from_india/6.webp" alt="package tour to dubai from india" />
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
                                                <div>"Famous for Burj Khalifa and Dubai Mall, a place with amazing infrastructure and culture, Dubai will take you to a whole different world of comfort and luxury.</div>
                                                <div class="mb-0">Enjoy a day at Burj Khalifa, have luxurious stays at unique locations, and feel great in the comfort of all the luxury of Dubai in package tour to Dubai from India.</div>
                                                <div>This Dubai travel package from India tour is full of adventurous and fun activities planned for you such as a night at the cruise, a desert safari, Dubai city tour, a soothing time at the 127th floor of Burj Khalifa and a lot more.</div>
                                                <div>Create memories and moments that you will never forget on your hoilday trip to Dubai. </div>
                                                <div>The trip will have everything for you to cherish all your life.</div>
                                                <div>So, what are you waiting for? Get in touch with us now and let’s book your Dubai tour package for a fun-filled and luxurious experience.</div>
                                                <div>Important Instructions</div>
                                                <div>Standard Hotel Check-in Time 1400 hrs.</div>
                                                <div>Standard Hotel Check-out Time 1100 hrs.</div>
                                                <div>Airfare is subject to availability at the time of booking.</div>
                                                <div>All tours will start from a common meeting point. Guest(s) has to reach at the meeting point at least 15minutes prior to the start of the tour.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 05 Nights/ 06 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Cost : INR 54,999/-* (Subject to availability)</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 4 star</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival in Dubai</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival in dubai international airport where our representative will escort you to your hotels.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The day will be free for your self-time.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go for an awesome experience of cruising with our Dhow cruise Marina tour. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This two hours cruisingtours has a complete package with entertainment, Buffet Dinner and beautiful scene of Burj Al Arab, Atlantis and Marina.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> – Dubai city tour </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Drive through the city of skyscrapers with detailed information provided by our knowledgeable tour guides about every significant place of this emirate which includes Glamorous shopping malls, CulturalHeritage, world-class architecture and the tallest tower in the world -The Burj Khalifa.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Noon to evening burj Khalifa 124 Floor visit with complimentary fountain show.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span>  – Desert safari with BBQ dinner</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy your buffet breakfast in hotel. Later afternoon Desert Safari where you move towards Safari Point.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy our desert safari tour that provide you an ultimate adventurous experience with Dune bashing on the sand dunes in a 4X4 vehicle, camel riding, various photographic opportunities, belly dancing show, Tanura dance show and BBQ dinner with vegetarian and non-vegetarian food options.</div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Drop to Dubai Airport</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After morning breakfast spend a day on your own where you can hire taxi half or Full day at an additional cost to see place of your Interest which you think you missed out or You can take local public transport like metro to go place of your interest that you come to know about while spending time in Dubai.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> If you have last minute activities planned, we suggest you check out and leave your luggage with the concierge.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later, transfer from the hotel to airport in Dubai.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> ( Note : Drop to Airport will be 3 Hrs before your Return Flight Timings from Hotel Lobby )</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 03 Nights’ Accommodation in Dubai with breakfast</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Return Airport transfer </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Dhow cruise creek with dinner </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Dubai city tour </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Desert Safari with BBQ dinner on Private basis (vehicle type-land cruiser or similar type of vehicle</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Burj Khalifa with fountain show 124 Floor visit on non- prime time</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> All tours and transfer on Sic basis </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Visa Included</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tourism Dirham Fee</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> TCS 5 %</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Travel Insurance</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tips and porter chargers</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early check in and late check out at the hotel</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Expenses of personal nature</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any other services not specified above</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional Costs due to Flight Cancellations, Road blocks, natural calamities and nature's</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Museum Of Future</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Burj Khalifa</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Dubai Aquarium and Submerged Zoo</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> An evening of BBQ and desert safari</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a tour of Dubai City Sightseeing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a ride at IMG Worlds of Adventure</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dubai Marina dinner cruise</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Check out Dubai Frame</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Green Planet by Meraas</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Dubai Mall</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Skiing at Ski Dubai</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Laguna Waterpark offers water slides</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dolphin Show is fun to watch</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Taking a skydive off Palm Jumeirah</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Ferrari World</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Try Zip-lining at Dubai Marina</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Indoor Skydiving at Ifly Dubai</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go for a Hot Air Balloon ride</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a tour of Dubai Miracle Garden</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "110%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.30118397996!2d54.947287526927106!3d25.076381471817122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1664532320506!5m2!1sen!2sin" ></iframe>
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