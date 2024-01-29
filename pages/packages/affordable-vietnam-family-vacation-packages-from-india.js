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

                <title>TripzyGo - Affordable Vietnam Family Vacation Packages from India - Vietnam Tour Packages For Family</title>
                <meta name="description" content="Book affordable Vietnam family vacation packages from India. Get amazing discounts on Vietnam tour packages for family. Book a family vacation to Vietnam now." />
                <meta name="keywords" content="vietnam family vacation packages from India, family vacation to vietnam, vietnam tour packages for family" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/affordable-vietnam-family-vacation-packages-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/affordable-vietnam-family-vacation-packages-from-india" />
                <meta property="og:title" content="Affordable Vietnam Family Vacation Packages from India - Vietnam Tour Packages For Family" />
                <meta property="og:description" content="Book affordable Vietnam family vacation packages from India. Get amazing discounts on Vietnam tour packages for family. Book a family vacation to Vietnam now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="69" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Vietnam Couple Tour Package From India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/1.webp" alt="vietnam family vacation packages from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/2.webp" alt="vietnam family vacation packages from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/3.webp" alt="family vacation to vietnam" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/4.webp" alt="family vacation to vietnam" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/5.webp" alt="vietnam tour packages for family" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/6.webp" alt="vietnam tour packages for family" />
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
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/1.webp" alt="vietnam family vacation packages from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/2.webp" alt="vietnam family vacation packages from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/3.webp" alt="family vacation to vietnam" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/4.webp" alt="family vacation to vietnam" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/5.webp" alt="vietnam tour packages for family" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/affordable_vietnam_family_vacation_packages_from_india/6.webp" alt="vietnam tour packages for family" />
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
                                                <div>Thinking of a family vacation to an international destination but quite tight on the budget? Well, who said you need a lot of money for an international vacation? You can have an amazing family vacation to Vietnam at the most affordable prices with our affordable Vietnam family vacation packages from India.</div>
                                                <div class="mb-0">Our affordable Vietnam family vacation packages from India are designed with the most amazing itineraries taking you to the most amazing places in Vietnam and making your trip enjoyable with things like chilling at beaches, dinners and lunches where you can try authentic Vietnamese food, visit to Buddhist pagodas, and walk around the ancient and bustling cities.</div>
                                                <div>With all these things your family vacation to Vietnam will be one of the most memorable experiences of your life and you can do it at a cheap price with our Vietnam family vacation packages from India.So, don’t wait up. Book the affordable and cheap Vietnam family vacation packages from India now to gift your family a wonderful holiday.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 6 Nights/7 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 31,899/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival at Vietnam</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> When you arrive at Noi Bai Airport in Hanoi, your driver will lead you to your hotel and a local tour guide who will let you know about Vietnam and Hanoi.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can spend your time enjoying the town or taking a quick nap after being on the road for a long time. Spend the night at the hotel and get ready for another exciting excursion the following day.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> -  Halong Bay</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to a wholesome breakfast in the hotel and check out as today you will be visiting Halong Bay. Around 8 o'clock in the morning you will be leaving for Halong Bay, which is one of the most spectacular UNESCO World heritage areas. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit world’s largest Marine limestone landscape in Halong Bay known as Karst. After that board your boat and explore some of the less well-known grottos and caves. These boats are a wooden junk built from the old Vietnamese court vessels with sails. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sail to the Sung Sot Cave and then paddle kayaking among the hidden areas around the Drum Cave. return the boat for a sunset party at the Sun Deck.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - A visit to the Titov Island</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Awake to the fresh air of the bay and enjoy a Tai Chi session on the Sun Deck. Your breakfast will be served to you on the deck itself. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get ready as today you will be going on a cruise to visit the Titov Island for swimming and relaxing on the beach. Meanwhile you will can also watch the fruit carving demonstration and participate in cooking classes. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> If weather permits then climb the hills and enjoy a panoramic view over the bay’s remarkable seascape. Savour the traditional Vietnamese lunch before docking around the noon. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later you will be transferred to Hanoi by a shuttle bus and spend the remaining day in Hanoi. </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> -  Transfer to Siem reap</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will be free until being picked up and transferred by your private car to the airport for your flight to Siem Reap. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> on your arrival at Siem reap you will be greeted by guide and the private drive who will transfer you to the hotel. You will be staying for the night in the hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Siem Reap</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> breakfast, you will visit to the South Gate of the Angkor Thom: Bayon Temple, The Royal Enclosure, Phimeanakas, Elephant and Leper King Terrace. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Continue to visit to Ta Prohm and other various sites. In between you will also be served lunch and then continue your excursion. Visit to the Thommanum, chau say Tevoda, Takeo which are small but attractive temples built during the construction of Angkor Wat Temple. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Last but not the least visit one of the seven wonders of the world Angkor Wat Temple famous for its beauty and splendor. Visit the Bakheng Hill for an eye-popping sunset view.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later visit the night and pub street to experience the nightlife of vietnam. Overnight at hotel in Siem reap.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Last day to enjoy at Vietnam</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after breakfast you will be taken to the Floating Village, where you will be riding a traditional wooden boat on the Tonle Sap Lake, which is one of the largest freshwater lakes in Asia during the wet season. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the human occupation at the edges of the lake. The floating villages, towering stilled houses, huge fish traps are all what you will find here. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the silk farm in the Pouk District in the afternoon which is a 15 km drive from Siem Reap. witness and learn the entire process of silk creation. You can also pick up some amazing stuff from retail silk and souvenir shop.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Departure</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This morning, free at own leisure until assemble time transfer to Airport for your flight back.</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Hotel Accommodation</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Visa Letter</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Internal Flight Tickets (HAN-DAD & DAD-SGN)</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Airport Pick and Drop</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Entrance Tickets</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Sightseeing</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Experienced English speaking guide</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Accommodation shared in Double room with Daily Breakfast</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Meals as stated in the itinerary (B: Breakfast; L: Lunch; D: Dinner)</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 24/7 Hotline Support</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Exclusive and Personalized Single Agent/Single Customer Service</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All sightseeing tickets</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> No extra charge after services confirmation</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Incoming and Outgoing Flight & Departure taxes</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Beverage, Personal expenses, Tips and Gratuitiesx</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Travel insurance</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Compulsory Gala Dinner on 24 Dec and 31 Dec</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early check-in and Late check-out (If not mentioned)Visa stamping fee on arrival at the airport (Vietnam- 25$/person)</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Surcharge for airport cabs from 12:00 am–05:00 am</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything not mentioned in Inclusions</li>

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