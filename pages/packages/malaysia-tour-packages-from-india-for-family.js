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

                <title>TripzyGo - Malaysia Tour Package From India For Family - Family Package For Malaysia</title>
                <meta name="description" content="Finding a family package for Malaysia? Grab our Malaysia tour packages from India for family on a budget. Enjoy budget family vacation in Malaysia. Book now!" />
                <meta name="keywords" content="malaysia holiday package for family, family trip to malaysia, best place for family vacation in malaysia" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/malaysia-tour-packages-from-india-for-family" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/malaysia-tour-packages-from-india-for-family" />
                <meta property="og:title" content="Malaysia Tour Package From India For Family - Family Package For Malaysia" />
                <meta property="og:description" content="Finding a family package for Malaysia? Grab our Malaysia tour packages from India for family on a budget. Enjoy budget family vacation in Malaysia. Book now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/malaysia_tour_packages_from_india_for_family/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="73" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Malaysia Tour Packages From India For Family</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/1.webp" alt="malaysia holiday package for family" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/2.webp" alt="malaysia holiday package for family" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/3.webp" alt="family trip to malaysia" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/4.webp" alt="family trip to malaysia" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/5.webp" alt="best place for family vacation in malaysia" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/6.webp" alt="best place for family vacation in malaysia" />
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
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/1.webp" alt="malaysia holiday package for family" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/2.webp" alt="malaysia holiday package for family" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/3.webp" alt="family trip to malaysia" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/4.webp" alt="family trip to malaysia" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/5.webp" alt="best place for family vacation in malaysia" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/malaysia_tour_packages_from_india_for_family/6.webp" alt="best place for family vacation in malaysia" />
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
                                                <div>Thinking of a fun and exciting family vacation? </div>
                                                <div class="mb-0">How about a trip to one of the most beautiful and amazing islands in the world?</div>
                                                <div>Malaysia has an amazing experience to offer, one that you cannot imagine but only live.</div>
                                                <div>With amazing beaches and rainforests and the cultures of four different countries blended together, Malaysia has wonders to unfold for you and your family.</div>
                                                <div>Experience everything that Malaysia has to offer on one fun loving, exciting, and budget family vacation in Malaysia.</div>
                                                <div>This family package for Malaysia has everything you need for the most amazing tour of your life with your family.</div>
                                                <div>So, don’t wait up. Get in touch now and book this amazing Malaysia tour package from India for family.</div>
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
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 16,800/-*     </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrive at Kualalumpur </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Malaysia tour starts with arrival at Kuala Lumpur International airport.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After reaching the airport you will be assisted to the booking. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Complete the check-in formalities after reaching the hotel and relax. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Slip into your cozy bed for a restful sleep and energize yourself to enjoy the Kuala Lumpur night tour, next day.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> – Enjoy Kuala Lumpur Night Tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up early in the mor ing, enjoy your delicious breakfast, and relax till dusk or indulge in recreational activities at the hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, get ready to enjoy a tour where you will be introduced to the Malaysian way of life - a beautiful blend of different races, cultures, and religions.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will be assisted to the famous Gold Award Winning Center-        Kuala Lumpur City Gallery, where you can explore the history of Kuala Lumpur. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The gallery has many illustrations and pictorial representations the history of KL.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Thereafter, head to the famous and the oldest that depict Hindu temple of Kuala Lumpur- Sri Mahamariamman Temple. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Now, head towards Petaling Street - a paradise for shopaholics and buy souvenirs fr Open Air Bazaar of Chinatown.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span>  –  A Trip to Genting Highlands</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Greet the day with a toothsome breakfast and get ready for another unparalleled experience. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today you will be transferred to Genting Highlands, a hill station and one of the most popular tourist destinations of the country. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The place offers various outdoor theme parks, recreation centers, and casinos. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> En-route you will also get an opportunity to visit the renowned Batu Caves, which are a series of caves and cave temples, perched on a limestone hill.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dedicated to Lord Murugan these cave temples are among the most popular Hindu shrines outside India. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once you reach Genting Highlands, enjoy a marvelous view of th islands from the mountain peak. cable car ride.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have fun at the Genting snow world and enjoy the cable car ride.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After having an action-packed day, return to your hotel and relax.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span>  – Delight in Sunwa Lagoon Tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> ‘Break’ you’re nightlong ‘fa t’ and set off to explore Sunway Lagoon on this day of your 4 days Kuala Lumpur tour. It is a theme park in Subang Jaya, at a distance of 15-minute drive from Kuala Lumpur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sunway Lago n is divided into 3 major themed lands, where each offers exciting attractions, replete with adventure and enjoyment.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> With more than 80 rides and attractions, Sunway Lagoon spoils you for choices to have fun.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The theme park offers Sunway 3 Park tickets that include a water park, an amusement park, and a wildlife park.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Sunway 5 Park ticket includes Water Park, amusement park, wildlife par Park, and scream park.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After having an action-packed day, return to your hotel and relax.Extreme Park, and scream park Once you are back to the hotel, slip into your cozy beds to doze off.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Day at leisure </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After having breakfast you can rest at hotel or enjoy the day by your own.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - The Tour Ends</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to a scrumptious breakfast and complete your checkout formalities.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As your 4 days/ 3 nights Malaysia tour concludes, you will be transferred to Kuala Lumpur International Airport for your journey home.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 05 nights accommodation</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Daily breakfast</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Half Day kualalumpur city tour with KL Tower</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Genting Full Day Tour Enroute Batu Caves + One Way Cable Car with Indoor Theme Park</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Return airport transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> All tours and transfers on seat in coach basis</li>


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
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Petronas Twin Pinnacles</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Menara KL Pinnacle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Rock Moving at Batu Caverns</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wet World Water Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Sunway Tidal pond Amusement Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Langkawi Submerged World</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Mangrove Safari</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kinabalu Public Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Langkawi Disclosure Helicopter</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Langkawi Streetcar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Find Kuala Lumpur Bird Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Mangrove Safari</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Tunku Abdul Rahman Marine Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Langkawi Sky Scaffold</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Pulau Payar Marine Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cable car Ride to Penang Slope</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Cameron High countries, Pahang</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "110%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16300693.677379517!2d100.55648900387007!3d4.089132889034755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2sin!4v1663842203579!5m2!1sen!2sin" ></iframe>
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