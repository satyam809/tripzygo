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

                <title>TripzyGo - Book a Vietnam trip from India - Best India to Vietnam tour</title>
                <meta name="description" content="Planning a Vietnam trip from India? Find the best holiday package to Vietnam from India. Get in touch with us today to plan your India to Vietnam tour." />
                <meta name="keywords" content="holiday package to vietnam from india, vietnam trip from india, india to vietnam tour" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/holiday-package-to-vietnam-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/holiday-package-to-vietnam-from-india" />
                <meta property="og:title" content="Book a Vietnam trip from India - Best India to Vietnam tour" />
                <meta property="og:description" content="Planning a Vietnam trip from India? Find the best holiday package to Vietnam from India. Get in touch with us today to plan your India to Vietnam tour." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/holiday_package_to_vietnam_from_india/1.webp" />
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
                                        <h2 className="mb-1">Holiday Package To Vietnam From India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/1.webp" alt="holiday package to vietnam from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/2.webp" alt="holiday package to vietnam from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/3.webp" alt="vietnam trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/4.webp" alt="vietnam trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/5.webp" alt="india to vietnam tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/6.webp" alt="india to vietnam tour" />
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
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/1.webp" alt="holiday package to vietnam from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/2.webp" alt="holiday package to vietnam from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/3.webp" alt="vietnam trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/4.webp" alt="vietnam trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/5.webp" alt="india to vietnam tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/holiday_package_to_vietnam_from_india/6.webp" alt="india to vietnam tour" />
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
                                                <div>Vietnam is a beautiful country with lovely beaches and rivers, diverse culture, delicious food, bustling and ancient cities, and a lot more. So, a Vietnam trip from India will be a great idea for an exciting holiday.</div>
                                                <div class="mb-0">The country is great to visit with your friends and family, partner, or even solo. You can chill at the beaches, watch the rivers, enjoy the authentic and delicious taste of Vietnamese food, go around the ancient cities learning Vietnamese culture, and do a lot more exciting things on your Vietnam trip from India.</div>
                                                <div>Moreover, the best part is it doesn’t take a lot. Vietnam is a cheap country and you can easily go on a budget holiday to Vietna especially with our Holiday package to Vietnam from India.</div>
                                                <div>With this holiday package to Vietnam from India, you get the best experience of the most wonderful holiday with memorable moments and memories.</div>
                                                <div>Book the holiday package to Vietnam from India now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 6 Nights/7Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 35,000/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Welcome to Vietnam</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As you arrive at the international airport in Ho Chi Minh City, you and your partner will be transferred to the hotel. The rest of the day is at leisure and you can take your partner on long romantic walks throughout the city and savor some of the delicious local cuisine.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cuddle up to one another back at the hotel and relax for the night.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> -  Ho Chi Minh City: Cu Chi Tunnels tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a leisurely breakfast and then leave with your partner for a tour of the Cu Chi tunnels. Explore this network of tunnels that give you a brief history about the difficult conditions that the Vietcong guerrillas had to undergo.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a riveting adventure, return to the city center and enjoy lunch at a local restaurant. In the afternoon, stroll around the various attractions including the Notre Dame Cathedral, old Ho Chi Minh Post Office, the War Museum and the Reunification Palace. Head back to the hotel to rest.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Ho Chi Minh City</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Eat breakfast and check out of the hotel and head to My Tho on this honeymoon in Vietnam. Enjoy the romantic atmosphere on a boat cruise along the Mekong River and take in the scenic sights all around.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stop at the local orchard and feed each other some of the exotic fruit and pay a visit to a coconut candy workshop. Next, enjoy a horse-cart ride and then head for a sampan cruise along My Tho canals and gaze at the stars in the sky while holding your beloved’s hand. Next, proceed for a lunch at a stilt restaurant on Turtle Island and then head back to Ho Chi Minh in the afternoon.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Rest of the day is at leisure .</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Mui Ne: Enjoy a beach holiday</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a hearty breakfast and then go check out the hotel in Ho Chi Minh and go to Mui Ne. When you get there, check in at the resort and then relax. Freshen up and go for a walk along the Surf Beach in Mui Ne or just relax on the sand and sip on some tropical drinks.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As you enjoy your honeymoon experience in Vietnam, relax at the tropical-themed resort of your choice.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Mui Ne: A lovely leisure day </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Set off on a stimulating walk with your loved one and enjoy the beauty of Mui Ne. Delight in the gardens of this pretty town as you stroll the afternoon away and enjoy the thrill of the laid-back atmosphere of this location.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Treat yourself to a fine dining experience at one of the fine restaurants here and then share one another's company on this honeymoon vacation.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Ho Chi Minh City: A pleasurable sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Delight in a relaxing breakfast together with your sweetheart, then check out from the hotel in accordance with this tour to Ho Chi Minh City. Now, you will transfer to Ho Chi Minh City. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> At the airport, you will be checked into the local hospital and your hotel. Based on your time, you could go sightseeing with your loved one at the Ho Chi Minh Opera House, and then pick up some fun souvenirs at the Ho Chi Minh Square.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a taste of some of the local and international cuisine at the restaurants.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Ho Chi Minh City: Departure back home</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a romantic breakfast on the last day of your honeymoon in Ho Chi Minh.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go shopping for some souvenirs and then complete all check-out out formalities at hotels.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  You will be taken to the international airport in Ho Chi Minh City.</div>

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