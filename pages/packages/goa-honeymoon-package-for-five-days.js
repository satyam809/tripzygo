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

                <title>TripzyGo - Grab A Romantic Honeymoon Goa Package For 5 Days </title>
                <meta name="description" content="Goa Honeymoon Package For Couples - Planning a Goa trip for couple? Grab our romantic Goa honeymoon package for 5 days! We will help you plan the perfect getaway." />
                <meta name="keywords" content="goa honeymoon package for couples, goa honeymoon package for 5 days, goa trip for couple" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/goa-honeymoon-package-for-five-days" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/goa-honeymoon-package-for-five-days" />
                <meta property="og:title" content="Grab A Romantic Honeymoon Goa Package For 5 Days " />
                <meta property="og:description" content="Goa Honeymoon Package For Couples - Planning a Goa trip for couple? Grab our romantic Goa honeymoon package for 5 days! We will help you plan the perfect getaway." />
                <meta property="og:image" content="https://www.tripzygo.in/images/beach_luxury_vacation/goa_group_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="65" progressBarPercentage="65%"/>
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
                                        <h2 className="mb-1">Goa Honeymoon Package For 5 Days</h2>

                                    </div>
                                </div>
                                <div className="description-///images mb-4 overflow-hidden">
                                    <div className="thumbnail-///images position-relative">
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
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/1.webp" alt="goa honeymoon package for couples" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/2.webp" alt="goa honeymoon package for couples" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/3.webp" alt="goa honeymoon package for 5 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/4.webp" alt="goa honeymoon package for 5 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/5.webp" alt="goa trip for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/6.webp" alt="goa trip for couple" />
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
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/1.webp" alt="goa honeymoon package for couples" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/2.webp" alt="goa honeymoon package for couples" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/3.webp" alt="goa honeymoon package for 5 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/4.webp" alt="goa honeymoon package for 5 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/5.webp" alt="goa trip for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/goa_group_tour_package/6.webp" alt="goa trip for couple" />
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
                                            <div>Goa is a place that offers visitors a perfect blend of sun, sand, and sea. </div>
                                            <div class="mb-0"> It is a beautiful place to spend some time with your beloved. </div>
                                            <div>With its golden sand beaches, age-old cathedrals, and old Portuguese-style buildings, Goa is a place that has something for everyone. </div>
                                            <div>Adventure seekers can indulge in a variety of thrilling activities, while those looking for a more relaxed holiday can enjoy the beaches and the scenery.</div>
                                            <div>If you're looking for a romantic getaway that features beautiful beaches, a scenic backdrop, and coconut trees dotting the coastline, look no further than Goa.</div>
                                            <div>This Indian state offers a perfect blend of traditional and modern influences, making it the perfect place to spend some quality time with your significant other. </div>
                                            <div>From walks on the beach to candle-light dinners at seaside shacks, Goa honeymoon package has everything you need to make some lasting memories. </div>
                                            <div>And if you're looking for a little nightlife excitement, you'll find plenty of bars, clubs, and cafes to keep you entertained.</div>
                                        </div>

                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 4 Nights/ 5 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Cost : INR 13,200/-* (Subject to availability) </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="description mb-2">
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
                                                    <h5 class="mb-0"><span>Day 2</span> - South Goa </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up in the morning, have a scrumptious breakfast and proceed for a full day sightseeing of South Goa.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Anjuna Beach and spend some amazing time cycling at the beach.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Seek blessings at the Shri Shantadurga Temple at Kavlem and Shri Manguesh Temple in Priol.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Basilica of Bom Jesus and Se Cathedral, that dates back to the Portuguese Era.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sit back and relax with your partner as you cruise through the Mandovi river, witnessing the beautiful views of the blue ocean.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sip a cup of hot coffee at any of the beach shacks at Miramar Beach with your beloved.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have an intimate and romantic candlelight dinner with your partner.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay in Goa.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Calangute Beach</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up in the morning, have a delicious breakfast and get ready for a tour to North Goa.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Begin your tour by visiting the Aguada Fort which can offer you breath-taking views and a soothing experience.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the largest beach in North Goa, Calangute Beach.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later, head out to Baga beach which offers one of the best nightlife in Goa.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Anjuna beach which is known for the famous and popular full-moon parties.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay in Goa.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> -  Indulge in water sports</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up in the morning, post lip-smacking breakfast, all set to go out to get some sensation in water in Goa.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Drive to Candolim beach for the various exciting water sports and activities, as this beach offers the best watersports.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Indulge yourself in Jet Ski, Paragliding, Bumper ride and splash out on Banana boat ride & Speedboat ride.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After adrenaline rush activities, you can choose crocodile sightseeing, bird watching and quad biking.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening spend some time shopping in a flea market close to Candolim beach.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Overnight stay in Goa.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Time to head back home</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up in the morning, have a hearty breakfast, pack your bags and complete the check-out formalities.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take along the bundle of joyful memories with you and cherish the moments on arrival at your desired destination.</div>

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
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go on a romantic sunset cruise on the Mandovi River</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stroll hand in hand around the aromatic fresh spice plantation</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go island hopping to witness the Portuguese-style houses, lush vegetation and a quaint environment</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Bungee Jumping at Chapora</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Candle Night Dinner at Baga Beach</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sunset Cruise at Mandovi River</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Plan a visit to Cruise Casino</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wind Surfing at Baga Beach</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breathtaking Couple Photoshoot</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shop at the Goa Flea Market</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Join a Night Party at a beach club in North Goa</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
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
