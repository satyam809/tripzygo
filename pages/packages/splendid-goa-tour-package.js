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

                <title>TripzyGo - Book The Best Goa Beach Tour Package At Best Prices</title>
                <meta name="description" content="Planning a trip to Goa beach? Don't miss out on the best Goa beach tour package. Contact us to book now and save big on your dream holiday to Goa beach. " />
                <meta name="keywords" content="best goa beach tour package, trip to goa beach, holiday to goa beach" />
                <link rel="icon" href="/icon.png" />
               <link rel="canonical" href="https://www.tripzygo.in/packages/splendid-goa-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/splendid-goa-tour-package" />
                <meta property="og:title" content="Book The Best Goa Beach Tour Package At Best Prices" />
                <meta property="og:description" content="Planning a trip to Goa beach? Don't miss out on the best Goa beach tour package. Contact us to book now and save big on your dream holiday to Goa beach. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/beach_luxury_vacation/splendid_goa_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="65" progressBarPercentage="70%"/>
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
                                        <h2 className="mb-1">Splendid Goa Tour Package</h2>

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
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/1.webp" alt="best goa beach tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/2.webp" alt="best goa beach tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/3.webp" alt="trip to goa beach" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/4.webp" alt="trip to goa beach" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/5.webp" alt="holiday to goa beach" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/6.webp" alt="holiday to goa beach" />
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
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/1.webp" alt="best goa beach tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/2.webp" alt="best goa beach tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/3.webp" alt="trip to goa beach" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/4.webp" alt="trip to goa beach" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/5.webp" alt="holiday to goa beach" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/splendid_goa_tour_package/6.webp" alt="holiday to goa beach" />
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
                                                <div>Goa is a place that offers a perfect blend of sun, sand and sea; a place known for its sprawling beaches, world-famous nightlife, incredible cuisine and historical attractions.</div>
                                                <div class="mb-0">Whenever one plans to have a wonderful getaway in the midst of golden shimmering beaches, the first place that comes to mind is Goa. </div>
                                                <div>From witnessing beautifully built age-old cathedrals, old Portuguese-style buildings to indulging in adventurous activities to feel the thrill within, Goa has a lot to offer to visitors to have an adventurous getaway.</div>
                                                <div>Picturesque beaches with a scenic backdrop and coconut trees dotting the vastly stretched coastline make this former Portuguese Territory one of the most happening places in India.</div>
                                                <div>Being the party destination that it is, Goa has all to make sure that you have a memorable time amidst its beautiful beaches.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 Nights/ 4 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Cost : INR 29,300/-* (Subject to availability) </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion">
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival in Goa </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Meet and get greeted by our official, who will ensure a smooth transfer to your pre-booked hotel and help you out with the check-in formalities.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy the first day of your Goa trip leisurely, go out exploring the surroundings or the beaches nearby while having a great time with your loved ones.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, reach the Santa Monica Jetty under the Atal Setu to board your Sunset cruise on the Mandovi river.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Spend the evening along with the sun, sea, and wind and get a glimpse of historical sights and treasured wonders of this tiny yet mesmerizing state while cruising through the Mandovi River.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can also enjoy the live music in the form of a DJ and the cultural performances on board as the sun sets, leaving a colorful sky behind.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - North Goa Tour </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up in the morning, have a scrumptious breakfast, and proceed for a full day sightseeing of North Goa.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Start off by visiting the famous Aguada Fort, a 17th-century Portuguese fort looking out at the confluence of Mandovi River and the Arabian Sea.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stroll through the remains of the fort standing tall along the Goan coastline and watch the Arabian sea meeting the horizon.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later, visit Sinquerim Beach which is located just below the Aguada Fort.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Move Northward towards the Candolim beach that is a gateway to the other more famous beaches.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Further, you move to the famous Calangute beach that is thronged with people throughout the year, as the beach hosts some of the most exciting water sports.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Head towards the Baga beach that boasts one of the best nightlife scenes in Goa along with the famous Tito’s Lane that has some of the best bars and clubs.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the most happening beach of North Goa - the Anjuna beach that is popular for offering a plethora of activities like full moon parties, flea markets, eateries serving the best seafood, beach shacks, water sports, and a lot more.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Spend the evening at the 'most photographed beach in Goa' the Vagator beach, a beautiful crescent-shaped beach crowned by the cliff of Chapora Fort on one side and the Chapora river basin on the other.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return back to the hotel for your overnight stay in Goa.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> -  Experience the classic Goan culture in old Goa</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up in the morning, have a delicious breakfast, and get ready for a tour to South Goa.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Begin your day by visiting the Shri Manguesh temple that is dedicated to Bhagavan Manguesh, an incarnation of Shiva and is worshipped here as Shivlinga.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later, visit the old parts of Goa that house some of the oldest churches in the country.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will be visiting The Bom Jesus Basilica which is a UNESCO World Heritage Monument and has the relics of Saint Francis Xavier are enshrined here.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Se Cathedral is another must-visit church in Goa, as it was built over a span of 100 years and its vaulted interior overwhelms visitors with its sheer grandeur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stroll through the shimmering sands of Miramar Beach, which is located on the estuary of the Mandovi river opening to the Arabian Sea and offers panoramic views of the majestic Fort Aguada across.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Spend the evening at the Dona Paula beach, which is the meeting point of the Zuari and the Mandovi river where you can spend some tranquil moments.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, you can go Shopping at the Panjim flea market and collect souvenirs for your loved one</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return back to the hotel for your overnight stay in Goa.  </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Time to head back home </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up in the morning, have a hearty breakfast, pack your bags and complete the check-out formalities.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take along the bundle of joyful memories from the beaches of Goa to cherish for a lifetime.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Your trip concludes as you get dropped at the airport/ railway station for your onwards journey.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Airport pick up and drop as per your flight timings</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Comfortable and hygienic vehicle (Ac Sedan/SUV car) for sightseeing on all days as per the itinerary </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Breakfast from day 2 to day 4</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Highly experienced Driver cum guide</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodation (Depending on the variant selected)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any meal unless specified above. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Air Fare/ Train Ticket.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Guide Service. All entrances fees to monuments. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal nature expenses like telephone / laundry bills etc. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Airports tax and travel insurance etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Services not specified above.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> GST</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4>Things To Do</h4>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Scuba Diving in Goa</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a thrilling experience of a Premium water sport - Fly Board</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Bungee Jumping at Chapora</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Relish the flavours of delicious dinner on Mandovi River Cruise while witnessing some cultural performances.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try premium water sport Fly Boarding</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Plan a visit to Cruise Casino</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wind Surfing at Baga Beach </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shop at the Goa Flea Market</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Join a Night Party at a beach club in North Goa</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-map mb-4">
                                    <h4>Map</h4>
                                    <div className="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984973.546649297!2d73.45177646406508!3d15.346513097149792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1662833496362!5m2!1sen!2sin"  ></iframe>


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
