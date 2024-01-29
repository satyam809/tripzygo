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

                <title>TripzyGo - Best Budget Trip To Vietnam From India - Vietnam Tour Plan From India</title>
                <meta name="description" content="Planning a budget trip to Vietnam from India? Book a Vietnam tour plan for an exciting and affordable Vietnam budget trip from India. Contact us now!" />
                <meta name="keywords" content="budget trip to vietnam from india, vietnam tour plan from india, vietnam budget trip from india" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/budget-trip-to-vietnam-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/budget-trip-to-vietnam-from-india" />
                <meta property="og:title" content=" Best Budget Trip To Vietnam From India - Vietnam Tour Plan From India" />
                <meta property="og:description" content="Planning a budget trip to Vietnam from India? Book a Vietnam tour plan for an exciting and affordable Vietnam budget trip from India. Contact us now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/budget_trip_to_vietnam_from_india/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="71" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Budget Trip To Vietnam From India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/1.webp" alt="budget trip to vietnam from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/2.webp" alt="budget trip to vietnam from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/3.webp" alt="vietnam tour plan from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/4.webp" alt="vietnam tour plan from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/5.webp" alt="vietnam budget trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/6.webp" alt="vietnam budget trip from india" />
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
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/1.webp" alt="budget trip to vietnam from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/2.webp" alt="budget trip to vietnam from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/3.webp" alt="vietnam tour plan from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/4.webp" alt="vietnam tour plan from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/5.webp" alt="vietnam budget trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/budget_trip_to_vietnam_from_india/6.webp" alt="vietnam budget trip from india" />
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
                                                <div>Thinking of an affordable trip to an international destination? This affordable Vietnam holiday package from India is just for you.</div>
                                                <div class="mb-0">With the best designed itinerary for a budget trip to Vietnam from India, this affordable Vietnam holiday package has all the things you need for a wonderful and exciting trip experience.Chill at the beaches, watch the beautiful rivers, go around the bustling and ancient cities, enjoy the authentic and delicious Vietnamese food, and have all kinds of fun on your budget trip to Vietnam from India.</div>
                                                <div>With this affordable Vietnam holiday package from India, you’ll have the best touring experience of your life.</div>
                                                <div>Don’t wait up. Now is the time to make the most beautiful memories of your life on your budget and affordable trip that does not wipes you out of money.</div>
                                                <div>Book the affordable Vietnam holiday package from India now by getting in touch with a TripzyGo travel executive.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR  26,999/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Hanoi: Welcome to Vietnam</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After arrival at the Hanoi airport, you will be taken to the hotel to complete all your checking in formalities. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Your day is at leisure and you can spend it as per your convenience. Visit the local markets and enjoy a romantic dinner. </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Hanoi: Go on a fun sightseeing tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a delicious breakfast on the second day of this Vietnam tour package before heading out on a city tour. You can see the One Pillar Pagoda, the Ho Chi Minh Mausoleum, and the President's Palace among other major attractions. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afterwards, visit one of Hanoi's most ancient pagodas, the Tran Quoc pagoda, before continuing your journey. Visit the Hoa Lo prison museum or "the Hanoi Hilton" after enjoying a tasty lunch at an Indian restaurant.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Halong Bay</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After completing a delicious meal, you will be taken to Halong Bay City, which is roughly three hours' drive from Hanoi. Upon arrival at Halong Bay City, you will board a boat that's roughly four hours long, cruising along the breathtaking Halong Bay. You may browse at the limestone caves along the way.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Devor a lavish seafood meal while sailing along this bay. Afterward, you'll be taken to a luxury yacht's private port and taken to your hotel by car for an overnight accommodation in Hanoi.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Ho Chi Minh</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Begin the day with a nutritious breakfast and check out of the hotel in Hanoi. Proceed to the airport and board a flight to Ho Chi Minh. Once you reach, check into the hotel and rest for a while.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the afternoon, go on a half day visit to the Cu Chi Tunnels or enjoy a private tour of boutiques, studios and galleries. Explore the underground Cu Chi tunnels that connect to hideouts, shelters, and entrances to other tunnels. After this historical expedition, try some of the local cuisine and then head back to the hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Ho Chi Minh: Enjoy a fun sightseeing tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Eat a delectable breakfast and head out on a city tour of Ho Chi Minh that was once known as Saigon. Wander around Opera House, Dong Khoi Street, Old Saigon post office and the Ben Thanh market.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Satisfy your taste buds with a tasty lunch and then visit China Town in the afternoon. Shop for fun knickknacks at the Ben Thanh market. The rest of the day is at your leisure  to go out and explore the city’s various attractions on your own. Catch up on some sleep at the hotel after a tiring and fun day.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Ho Chi Minh: Departure back home</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Eat a leisurely breakfast and check out of the hotel. Go shopping for some souvenirs to take back home and devour some wholesome local cuisine. Head to the airport to board the flight back home.</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Private transfers with English Speaking guide</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodation with breakfast at mentioned hotels</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Meals (Food only / NO drinks) as mentioned in program</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All Entrance fees for the whole trip as mentioned in programmer</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Flight Hanoi – Ho Chi Minh by Vietnam Airlines</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Service charges, room tax and baggage handling</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Daily 2 mineral water bottles per pax</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All taxes</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Highly responsive 24x7 support during the tour</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Local guides at all government approved places</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Chauffeur at your service for the tour</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Special assistance in each city for smooth check-ins</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Visa On Arrival guaranteed letter</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> International flights & departure taxes</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal expenses, tips and gratuities</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Travel insurance</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Beverage</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Other services not mentioned above</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In Halong Sound, You Can Journey and Kayak</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Cruising in Mekong Delta</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Taste Vietnamese Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Crawl Through the Cu Chi Tunnel</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Living with the Authentic Shows in Hỏa Lò Jail</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy the Melodic Event at Saigon Show House</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the Sizzling Nightlife of Ho Chi Minh City</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Climbing and Cycling at Mai Chau</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shop the Best Silk Materials in Hoi an</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15738110.955688218!2d96.86305347702816!3d15.628352495661526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sin!4v1668068461073!5m2!1sen!2sin"></iframe>
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