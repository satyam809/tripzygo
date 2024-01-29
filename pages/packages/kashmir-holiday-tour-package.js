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

                <title>TripzyGo - Book Affordable & Luxurious Kashmir Holiday Tour Package - Kashmir Itinerary 4 Days</title>
                <meta name="description" content="Book Kashmir holiday tour packages at affordable price with the best Kashmir itinerary 4 days. Get luxury in budget on your holiday trip to Kashmir. Grab now!" />
                <meta name="keywords" content="kashmir holiday tour package, holiday trip to kashmir, kashmir itinerary 4 days" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/kashmir-holiday-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/kashmir-holiday-tour-package" />
                <meta property="og:title" content="Book Affordable & Luxurious Kashmir Holiday Tour Package - Kashmir Itinerary 4 Days" />
                <meta property="og:description" content="Book Kashmir holiday tour packages at affordable price with the best Kashmir itinerary 4 days. Get luxury in budget on your holiday trip to Kashmir. Grab now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/kashmir_holiday_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="63" progressBarPercentage="60%"/>
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
                                        <h2 className="mb-1">Kashmir Holiday Tour Package</h2>

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
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/1.webp" alt="kashmir holiday tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/2.webp" alt="kashmir holiday tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/3.webp" alt="holiday trip to kashmir" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/4.webp" alt="holiday trip to kashmir" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/5.webp" alt="kashmir itinerary 4 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/6.webp" alt="kashmir itinerary 4 days" />
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
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/1.webp" alt="kashmir holiday tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/2.webp" alt="kashmir holiday tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/3.webp" alt="holiday trip to kashmir" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/4.webp" alt="holiday trip to kashmir" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/5.webp" alt="kashmir itinerary 4 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kashmir_holiday_tour_package/6.webp" alt="kashmir itinerary 4 days" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div className="description mb-2">
                                    <div className="row">
                                        <div class="desc-box bg-grey p-4 rounded ">

                                            <h5 class="mb-2">Overview</h5>
                                            <div>Kashmir is a gorgeous place and is rightly called the paradise on earth. So, how mesmerising would it be to go on a trip to this paradise.</div>
                                            <div class="mb-0">A holiday trip to Kashmir is something that you cannot miss at all. There’s all the snow, glaciers, rivers, lakes, meadows, and so much more to enjoy and witness in Kashmir. Moreover you can have some really unique stays in Kashmir and the whole experience is simply out of the world.</div>
                                            <div>When you’re talking about Kashmir, there is less to speak and more to experience. So, don’t keep thinking about it. Just plan your holiday trip to Kashmir for the most amazing vacations of your life.</div>
                                            <div>Surprise your trip partners with an amazing and unforgettable tour to Kashmir by booking this glorious Kashmir holiday tour package which has the most amazing Kashmir tour itinerary designed for your comfort and luxury.</div>
                                            <div>Book the package now by getting in touch with us.</div>
                                        </div>

                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 Nights / 4 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 13,500/-* </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Srinagar </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Start your journey with a visit to the beautiful Shalimar Bagh.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once you arrive at the airport, meet the cab driver and check-in at the hotel. Take the afternoon to proceed for the local sightseeing.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a visit to the Mughal Gardens — Nishant Bagh and Shalimar Bagh. Similar to the magnificent Taj Mahal built by Shah Jahan for his wife Mumtaj Mahal, his father built the Shalimar Bagh for hiswife, Noor-E-Jahan. Stroll in this garden of love, sometimes also referred to as the ‘abode of love and pleasure', on the shore of the Dal Lake.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later, in the evening, proceed to a shikara ride in the heart of Srinagar — the Dal Lake. This particular ride is one of the most soothing parts of the holiday. Then, later visit the floating gardens (Rad) in the Dal Lake and stare at the beauty of it. Return to the hotel later for an overnight stay.The soothing Shikara Ride</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Pahalgam</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Drive to Pahalgam and enjoy another blissful day in paradise</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once you have had your breakfast at ease, proceed for a drive to Pahalgam and see the famous saffron growing fields of Kashmir on the way. Enjoy the beauty of the Pir Panjal Mountain Ranges and Liddar Stream that flows parallel to the road to Pahalgam.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Make a visit to the horses and then a mild trek to the Baisan Valley to see for yourself the amount of beauty Mother Nature has bestowed upon this place. After that, proceed for a drive through Aru Valley and Chandanwadi, but at your own cost because only the local cars are allowed here.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a walk along the Liddar Stream towards Pahalgam from the Aru Village, something that is highly recommended to any nature lover. Later, return to Srinagar and dine at your hotel.</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Gulmarg</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After your breakfast, drive to Gulmarg, also known as the Meadow of Flowers. At 2730 meters above sea-level, it offers a spectacular view of the snow-capped mountain peaks, conifer trees and the beautiful green meadows.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast start for Pelling (6,300 ft.). Enroute visit Samdruptse & Siddheshwar Dham (Chardham) is a huge pilgrimage cum cultural complex located atop Solophok hill in Namchi.On arrival check-in to your hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is also home to the highest golf course! Once you're done with that, you can spend your time whichever way you want. Take the time to enjoy a sledge ride on the snow-covered slopes, or for a gondola ride or even a cable car ride. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> All these rides are not paid. Have your dinner later and spend a night in a houseboat.Floating Garden in Kashmir Shikara ride in Dal lake</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Fly Back Home</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Finish your journey with a drive back to Srinagar.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once you’re done with your breakfast and enjoyed thoroughly at out 3 nights 4 days Kashmir package,drive back to the Srinagar airport with all your belongings and board the plane as per your time.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Meal PlanBreakfast </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> TransportAll transfer as per itinerary and airport pickup and drop</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Allowance Government Taxes/VAT/Service Charges Toll Charge Fuel Driver</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Expenses Adventure Shakira Ride Accommodation Hotel</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Transport Airfare Entry Fee ChargesAt </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Pahalgam Trip to Chandanwari Valley, Betaab Valley, Gulmarg </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Gondola Tickets, Sonmarg Trip to Thajiwas GlacierGuide Charges</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Floating Vegetable Market</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the famous Jamia Masjid</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go Birdwatching at Manasabal Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Hazratbal Mosque</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Seek Blessings at Shankaracharya Temple</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience The Stay in Houseboat</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Magnificent Gardens</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take Shikara Ride on the Dal Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Snowboarding & Skiing in Gulmarg & Pahalgam</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go On Trekking amidst Great Himalayas & on Deadly Routes</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take Pony Ride in Kashmir</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Golfing in Gulmarg</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dig your spoon into Tasty Kashmiri Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> A thrilling experience while River Rafting In Pahalgam</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Camping in Gulmarg</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Gulmarg's glory by paragliding</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ride the Gondola at Gulmarg for a majestic view of the valley</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1703113.1569307246!2d74.14022610509987!3d33.51716941438035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1666348491211!5m2!1sen!2sin" ></iframe>
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
