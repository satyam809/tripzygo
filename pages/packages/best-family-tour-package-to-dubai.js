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

                <title>TripzyGo - Best Family Tour Package To Dubai With Dubai Family Package</title>
                <meta name="description" content="Want to get the best family tour package to Dubai? Check out our Dubai family package and enjoy your Dubai trip package for family. Book now with us." />
                <meta name="keywords" content="best family tour package to dubai, dubai family package, dubai trip package for family" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/best-family-tour-package-to-dubai" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/best-family-tour-package-to-dubai" />
                <meta property="og:title" content="Best Family Tour Package To Dubai With Dubai Family Package" />
                <meta property="og:description" content="Want to get the best family tour package to Dubai? Check out our Dubai family package and enjoy your Dubai trip package for family. Book now with us." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/best_family_tour_package_to_dubai/1.webp" />
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
                                        <h2 className="mb-1">Best Family Tour Package To Dubai</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/1.webp" alt="best family tour package to dubai" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/2.webp" alt="best family tour package to dubai" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/3.webp" alt="dubai family package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/4.webp" alt="dubai family package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/5.webp" alt="dubai trip package for family" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/6.webp" alt="dubai trip package for family" />
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
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/1.webp" alt="best family tour package to dubai" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/2.webp" alt="best family tour package to dubai" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/3.webp" alt="dubai family package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/4.webp" alt="dubai family package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/5.webp" alt="dubai trip package for family" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_family_tour_package_to_dubai/6.webp" alt="dubai trip package for family" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>A family trip to Dubai can be the most amazing experience of your life.</div>
                                                <div class="mb-0">There are so many amazing places to visit in Dubai and you can have the most amazing time with your family on a wonderful desert safari or in the Burj Khalifa.</div>
                                                <div>You can also enjoy at some of the best beaches and there are many more places where you can have the best time of your life.</div>
                                                <div>We help you plan the most amazing family vacation with a Dubai trip package for family customized with the best itinerary taking you to the most amazing spots for a beautiful time in this country of royals.</div>
                                                <div>Have the best time of your life with our Dubai family package designed with the best and most specialised tour itinerary. </div>
                                                <div>Book the best family tour package to Dubai now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 05 Nights/ 06 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 37,499/-*</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 3 star</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival in Dubai </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon your arrival at the Dubai Airport, our tour representative will escort you to one of our listed luxurious hotels. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check-in at the hotel where you can relax in the comfort room.  </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of the aft   rnoon is at your leisure you can spend the whole day relaxing and napping.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening you will move out of the hotel for shopping.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The world's first rotating skyscrapers and the most amazing man-made archipelagos along with palm-shaped islands.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can enjoy shopping here with your loved ones.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later return to the hotel for extravagant  dinner and overnight  stay in Dubai.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> – City Tour & Desert Safari With BBQ Dinner</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up with the fresh morning vibes and start your day with a hearty breakfast in your hotel.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the vibrant cosmopolitan life of the city and historic sites that give you a great outlook on Dubai.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take photos at Yo        will start at the prominent landmark  of Dubai- Burj al Arab & Jumeirah, a beautiful residential area of Dubai and home to man        attractions.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Camel ride is also one of the must-try things to do in Dubai.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch the belly dance and Tanoura Show under star lights and with a campfire, You will come back to your hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the hotel in Dubai.</div>



                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span>  –  Visit Burj Khalifa @124th Floor</h5>
                                                </div>

                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> With a delightful breakfast in the hotel begin your day.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later proceed for a sightseeing tour to the Burj Khalifa, world's tallest tower.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get to the observation deck to enjoy the picturesque view of Dubai. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Rest of the day is at leisure. <div>
                                                            <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight   stay in the Hotel.</div>

                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accrodion">
                                                    <div class="accrodion-title rounded">
                                                        <h5 class="mb-0"><span>Day 4</span>  – Dhow Marina Cruise</h5>
                                                    </div>
                                                    <div class="accrodion-content" style={{ display: "none" }}>
                                                        <div class="inner">
                                                            <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy your jolly evening and take in a spectacular view of Dubai Marina from the waters as you embark on the traditional Marina Cruise, and see the  beauty of Dubai.</div>
                                                            <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy  the stunning  scenes of  the skyscrapers.</div>
                                                            <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch the gratifying views with a Live Tanoura dance show and rich dinner. </div>
                                                            <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> An open-air upper deck and a full- window view of the  Dubai Marina Cruise another side on the lower deck will leave you awesome throughout the evening.   </div>
                                                            <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go through two miles long c the Persian Gulf coastline with tremendous views of Dubai's marvelous infrastructure that includes The Dubai Marina Mall.</div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Dubai – Day at leisure </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast in the Hotel The day is at your leisure.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can spend the whole day relaxing and napping.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening you can move out of the hotel for shopping. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The world's first rotating skyscrapers and the most amazing man-made archipelagos along with palm-haped islands. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can enjoy shopping here with your loved ones.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay at the hotel in Dubai.
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Depart Dubai</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The delightful Dubai tour ends today. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a leisurely breakfast.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later in the afternoon check out of the day and opt for some last-minute shopping.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the  evening, get assisted transfer to the airport to board in your flight to home. </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 05 Night Accommodation at  above mention Hotel</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Daily breakfast</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Meet & Greet at   Dubai Airport </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Dubai Airport Return transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Half Day Dubai City Tour </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Desert Safari With BBQ Dinner, & Tanura Show</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Dhow cruise with Dinner with Transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Burj Khalifa (124th Floor Non Prime) with Ticket & Transfer</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i>  All Tours & Transfer on Sic</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flights, Trains, Ferries etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Monument Entrance Fees & Camera Fees</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal Expenses - Laundry, Shopping, Telephone bills, tips etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Adventure Activities - Safari, Rides, Surfing, Paragliding etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Extra services - Permits, Volvo Luggage Charges, Heater, Meals etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything else not listed in above details</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Visa</li>

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
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.65103659616!2d54.94728415298325!3d25.075759432959853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1663841706264!5m2!1sen!2sin" ></iframe>
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