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

                <title>TripzyGo - Jaipur Udaipur Tour Package - Book 5 Nights 6 Days Jaipur Udaipur Tour Package </title>
                <meta name="description" content="Looking for a Jaipur Udaipur Tour Package? This 5 nights 6 days Jaipur Udaipur tour package covers all the best that Jaipur and Udaipur have to offer. Book the tour now!" />
                <meta name="keywords" content="jaipur udaipur tour package, 6 days jaipur udaipur tour package, best time to visit jaipur and udaipur" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/jaipur-udaipur-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/jaipur-udaipur-tour-package" />
                <meta property="og:title" content="Jaipur Udaipur Tour Package - Book 5 Nights 6 Days Jaipur Udaipur Tour Package " />
                <meta property="og:description" content="Looking for a Jaipur Udaipur Tour Package? This 5 nights 6 days Jaipur Udaipur tour package covers all the best that Jaipur and Udaipur have to offer. Book the tour now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/jaipur_udaipur_tour_package/1.webp" />
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
                                        <h2 className="mb-1">Jaipur Udaipur Tour Package</h2>

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
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/1.webp" alt="jaipur udaipur tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/2.webp" alt="jaipur udaipur tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/3.webp" alt="best time to visit jaipur and udaipur" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/4.webp" alt="best time to visit jaipur and udaipur" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/5.webp" alt="5 days jaipur udaipur tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/6.webp" alt="5 days jaipur udaipur tour package" />
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
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/1.webp" alt="jaipur udaipur tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/2.webp" alt="jaipur udaipur tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/3.webp" alt="best time to visit jaipur and udaipur" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/4.webp" alt="best time to visit jaipur and udaipur" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/5.webp" alt="5 days jaipur udaipur tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/6.webp" alt="5 days jaipur udaipur tour package" />
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
                                            <div>If you wish to experience the luxury and customary Rajasthani culture, heritage, and tradition, well, enroute to a Jaipur Udaipur trip.</div>
                                            <div class="mb-0">This Jaipur Udaipur tour package will take you to Rajasthani land making you witness the best of the Rajasthani style, culture, and tradition as you travel through the famous mahals, palaces, and forts in the cities featuring the exquisite Rajasthani architecture and design.</div>
                                            <div>Adding to the experience would be the luxurious stays in 3 star hotels in Udaipur and Jaipur which will offer a luxurious stay experience where you can delve into the comfort and convenience of amazing rooms.</div>
                                            <div>Enjoy this amazing 5 Nights 6 Days  Jaipur Udaipur tour package that will give you a complete escape into the Rajasthani heritage. </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/ 6 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>


                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 20,000/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Jaipur Arrival</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival in Jaipur, meet and greet by our representative at Jaipur Airport/Railway Station. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> JaipurBeing the City of Forts and Palaces known as the Pink City is of utmost importance when it Comes to checking in and evening time check out Moti Dungri Ganesh Temple, Birla Temple.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The city is surrounded by wonderful structures along with an outstanding past.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of theday is free to relax, overnight stay at accommodation in Jaipur.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Jaipur Sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast enjoy the sightseeing of Jaipur visiting Amber Fort, it is really certainly one of the main tourist attraction in Jaipur, located at top a hills it really is a masterpiece of Indo – Mughal Architecture &royalty.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later proceed to travel back to the city, photo stop at Jal Mahal & later visit City Palace, Hawa Mahal, Jantar Mantar observatory & evening time explore the colorful market & busy bazaars of the Pink city, here you may enjoy the purchasing some amazing handicrafts, Jewellery & essential stones & gems.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After you are done exploring the beauty of Nahargarh Fort, you can proceed to Jaigarh Fort.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Jaipur – Udaipur</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After Morning Breakfast depart from Jaipur for Udaipur On arrival to Udaipur, transfer to hotel relax and refreshed.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at hotel
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Udaipur Sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast enjoy the sightseeing complete day town tour of Udaipur visiting the City palace, and its museum, in the museum you will discover a big range of protective equipment, weapons & fatal two-sided sword. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As well enjoy the peacock square as well as the small painting school inside the palace property. Later visit Lake Pichola .Over-night stay at Udaipur.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Udaipur Sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast enjoy the Sightseeing of Udaipur visiting the BhartiyaLok Kala Mandal, Saheliyo Ki Bari often known as Garden of Maids of Honor, it is really a wonderful garden designed with lotus pool, fountains, floral beds & marble pavilions.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The biggest & most wonderful temple in this city is – Jagdish Temple, which we travel to after that & by evening time, enjoy a beautiful boat ride on Lake Pichola (Optional).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Over-night stay is in Udaipur. </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Udaipur Departure
                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning on time convert to Udaipur Terminal to board your airline flight for onward destination/ back home Tour concludes here with sweet memories.</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Sightseeing as per the itinerary </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Breakfast at the hotels mentioned </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodation for 05 nights/ 06 days on double sharing basis</li>
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
                                                <h4>Thing To Do</h4>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> At the Jaipur Blue Pottery Art Centre, see how the renowned Jaipur Blue pottery is created</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Travel in Maharaja fashion through the Amer fort by riding an elephant</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> At the Chokhi Dhani Village, enjoy authentic Rajasthani culture</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Admire the enormous Jaivana cannon from the 18th century, whose projectile, after travelling around 35 km, created a tiny lake near Chaksu</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the covert tunnel that connected Jaigarh and the Amer fort during the battles</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Vintage Car Museum in Udaipur to get a glimpse into the royal way of life, which features some of the most stunning collections of royal antique automobiles</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Riding a horse through the Aravallis will allow you to experience the scenery around Udaipur in a royal manner</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy the entire city's vista of Jaipur</div>
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
