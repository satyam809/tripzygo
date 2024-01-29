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

                <title>TripzyGo - Book Jaipur Jodhpur Jaisalmer Tour Package In Budget </title>
                <meta name="description" content="Get the best Jaipur Jodhpur Jaisalmer tour package in budget. Know more about the best time to visit Jaipur Jodhpur and Jaisalmer. Book Jaipur Jodhpur Jaisalmer tour now!" />
                <meta name="keywords" content="best time to visit jaipur jodhpur and jaisalmer, Jaipur Jodhpur Jaisalmer tour package, jaipur jodhpur jaisalmer tour" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/escape-with-jaipur-jodhpur-jaisalmer-tour" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/escape-with-jaipur-jodhpur-jaisalmer-tour" />
                <meta property="og:title" content="Book Jaipur Jodhpur Jaisalmer Tour Package In Budget " />
                <meta property="og:description" content="Get the best Jaipur Jodhpur Jaisalmer tour package in budget. Know more about the best time to visit Jaipur Jodhpur and Jaisalmer. Book Jaipur Jodhpur Jaisalmer tour now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="67" progressBarPercentage="70%"/>
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
                                        <h2 className="mb-1">Escape With Jaipur Jodhpur Jaisalmer Tour </h2>

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
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/1.webp" alt="best time to visit Jaipur Jodhpur and Jaisalmer" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/2.webp" alt="best time to visit Jaipur Jodhpur and Jaisalmer" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/3.webp" alt="Jaipur Jodhpur Jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/4.webp" alt="Jaipur Jodhpur Jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/5.webp" alt="jaipur jodhpur jaisalmer tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/6.webp" alt="jaipur jodhpur jaisalmer tour" />
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
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/1.webp" alt="best time to visit Jaipur Jodhpur and Jaisalmer" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/2.webp" alt="best time to visit Jaipur Jodhpur and Jaisalmer" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/3.webp" alt="Jaipur Jodhpur Jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/4.webp" alt="Jaipur Jodhpur Jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/5.webp" alt="jaipur jodhpur jaisalmer tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_escape_on_a_jaipur_jodhpur_jaisalmer_tour/6.webp" alt="jaipur jodhpur jaisalmer tour" />
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
                                                <div>Enroute a luxury escape to the best of Rajasthan, a Jaipur Jodhpur Jaisalmer Tour Package for 5 Nights and 6 Days to delve into the amazing luxurious and ecstatic life that Rajasthan offers.</div>
                                                <div class="mb-0">With the best of the places to visit in Jaipur Jodhpur and Jaisalmer this tour package is designed for the most memorable experience on your Rajasthan Trip</div>
                                                <div>Post monsoon is also the best time to visit Jaipur Jodhpur and Jaisalmer as the weather is calm and beautiful and you can have the taste of warm days and cool nights in these places.</div>
                                                <div>Visit the deserts, forts, palaces, and everything luxurious, cultural, and traditional in these places to have the most fun-loving tour experiences.  </div>
                                                <div>Also enjoy the amazing activities to do in the deserts such as camel ride, bonfire, etc., and tap your feet to cultural dance with all such activities included in your travel itinerary.</div>
                                                <div>With the best of the things, this Jaipur Jodhpur Jaisalmer tour package will be the best package you take for a most memorable trip. </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 nights/ 6 days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 23,500 /-* </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Jaipur Arrival</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival in Jaipur, meet and greet by our representative at Jaipur Airport/Railway Station. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Jaipur Being the City of Forts and Palaces known as the Pink City is of utmost importance when it comes to checking in and evening time check out Moti Dungri Ganesh Temple, Birla Temple.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The city is surrounded by wonderful structures along with an outstanding past.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of the day is free to relax, overnight stay at accommodation in Jaipur.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Jaipur Sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast enjoy the sightseeing of Jaipur visiting Amber Fort, it is really certainly one of the main tourist attraction in Jaipur, located at top a hills it really is a masterpiece of Indo – Mughal Architecture &royalty.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later proceed to travel back to the city, photo stop at Jal Mahal & later visit City Palace, Hawa Mahal, Jantar Mantar observatory & evening time explore the colorful market & busy bazaars of the Pink city, here you may enjoy the purchasing some amazing handicrafts, Jewelry & essential stones & gems.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Over-night stay at Jaipur.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Jaipur - Jodhpur</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning after early meal leave Jaipur proceed to Jodhpur Upon arrival check in hotel visit Sun City, reach Jodhpur by afternoon, visit Mehrangarh Fort, Umaid Bhawan palace one of the most awe-inspiring forts in Rajasthan Do not miss the view of Jodhpur blue houses from top of the fort, later visit Jaswant Thada. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return back to the hotel and stay overnight at the hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Jodhpur – Jaisalmer</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After Breakfast checkout from the hotel and drive to The Golden City' of Rajasthan, Jaisalmer is famous for its yellow sandstone formations, dusky landscapes and romantic sand dunes. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The window of Jaisalmer Thar he thus made the city a cultural cauldron.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight at HoteL.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Jaisalmer Sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After morning breakfast visit Jaisalmer fort, Patwon ki Haweli, Bada bag, Gadisar lake.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afternoon drive to Jaisalmer Sand Dunes in and evening enjoy camel ride at rolling sand dunes, enjoy dinner with Rajasthani Dance show, overnight stay at Desert camp.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Jaisalmer Departure
                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning on time convert to Jaisalmer Terminal to board your airline flight for onward destination/ back home</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Tour concludes here with sweet memories.</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Sightseeing as per the itinerary </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Breakfast & Dinner at the hotels mentioned </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodation for 05 nights/ 06 days on Triple sharing basis </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Parking and all transport related expense including Driver Services </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All toll taxes, parking fees, Fuel and driver's allowances • All Transport & Hotels Related Taxes </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All Transport & Hotels Related Taxes </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> A 24 - hour helpline  </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Welcome & Assistance on Arrival.  </li>



                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Air fare, domestic / International </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any applicability of new taxes from Government </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any up gradation in hotel room category </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Cost of Insurance </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Cost of Pre/Post tour hotel accommodation, transfers etc  </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any extra expense such as route change, Airline change, Date change, Accommodation facilities, etc incurred due to the unforeseen, unavoidable forced majeure circumstances during the tour   </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Porterage (coolie charges), laundry, telephone charges, shopping, wines and alcoholic beverages, mineral water, items of personal nature and food or drink which is not part of a set group menu    </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any extra cost incurred on behalf of an individual due to illness, accident, hospitalization, or any personal emergency     </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any services or activity charges other than those included in the group tour itinerary      </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything specifically not mentioned in the ‘tour price includes’ column      </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4>Things To Do</h4>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Learn how the famous Jaipur Blue Pottery is made without clay</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Taking an elephant ride to the top of the Amer Fort will give you a feel of being a Maharaja</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> 'Dal Baati Churma' is an authentic Rajasthani staple at Chokhi Dhani Village</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the mammoth-sized Jaivana Cannon at Jaigarh, whose projectile made a small lake in Chaksu after traveling approximately 35 Km</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Find out why Kuldhara Village was cursed and abandoned over night by visiting the village</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Jodhpuri Mirchi Vada from Janta Sweets is world-famous for its taste</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Discover the mysterious origins of the Royal Enfield Bullet Motorcycle, a 350cc motorcycle with a power output of 35 horsepower</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308190.844275631!2d69.37606700830034!3d26.569849199676863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1660319810574!5m2!1sen!2sin"></iframe>
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