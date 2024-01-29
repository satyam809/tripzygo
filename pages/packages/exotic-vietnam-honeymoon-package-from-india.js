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

                <title>TripzyGo - Best Vietnam Honeymoon Packages From India - Couple Package To Vietnam From India</title>
                <meta name="description" content="Best-in-class Vietnam honeymoon packages from India. Book our best couple package to Vietnam from India and enjoy a Vietnam couple trip from India. Contact us!" />
                <meta name="keywords" content="vietnam honeymoon packages from india, vietnam couple trip from india, couple package to vietnam from india" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/exotic-vietnam-honeymoon-package-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/exotic-vietnam-honeymoon-package-from-india" />
                <meta property="og:title" content="Best Vietnam Honeymoon Packages From India - Couple Package To Vietnam From India " />
                <meta property="og:description" content="Best-in-class Vietnam honeymoon packages from India. Book our best couple package to Vietnam from India and enjoy a Vietnam couple trip from India. Contact us!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/exotic_vietnam_honeymoon_package_from_india/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="79" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Exotic Vietnam Honeymoon Package From India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/1.webp" alt="vietnam honeymoon packages from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/2.webp" alt="vietnam honeymoon packages from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/3.webp" alt="vietnam couple trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/4.webp" alt="vietnam couple trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/5.webp" alt="couple package to vietnam from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/6.webp" alt="couple package to vietnam from india" />
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
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/1.webp" alt="vietnam honeymoon packages from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/2.webp" alt="vietnam honeymoon packages from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/3.webp" alt="vietnam couple trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/4.webp" alt="vietnam couple trip from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/5.webp" alt="couple package to vietnam from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/exotic_vietnam_honeymoon_package_from_india/6.webp" alt="couple package to vietnam from india" />
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
                                                <div>Vietnam is a beautiful place, cheap, safe, and romantic. Given that a Vietnam couple trip from India is a great idea.</div>
                                                <div class="mb-0">You can enjoy on the romantic beaches of Vietnam with your partner, chilling looking at the beautiful rivers, and going through the beautiful and ancient cities of the country. You can also enjoy wonderful dates with your partner having lavish and delicious Vietnamese food. Moreover, the culture of Vietnam is something great to witness.</div>
                                                <div>So, there’s everything amazing and beautiful in this country which makes it a great place for a romantic getaway.</div>
                                                <div>Have your romantic getaway with your partner with a Vietnam couple trip from India by booking our amazing Vietnam honeymoon package.</div>
                                                <div>This Vietnam honeymoon package from India has the best itinerary for taking you to the most amazing tour in Vietnam.</div>
                                                <div>Book the Vietnam honeymoon package from India now by getting in touch with a TripzyGo tour executive.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 4 Nights/5 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 44,899/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival at Hanoi international airport</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> When you get to the airport, you will be greeted by the representative. The representative will then take you to the hotel you have pre-booked, where you will check in and then have rest.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> That's the day you've got free to go off and do as you please. See how incredible this location is and visit it. Come back to your hotel and continue eating your meal.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Explore Hanoi</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up early and have your tasty breakfast. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Following that, you will go on a sightseeing tour of Hanoi. It is a beautiful city, so you can enjoy its beauty there. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> There will be a visit to the Old Quarter, followed by a stroll along Hang Bac Street and Hang Ma Street. Make some good memories here and admire the architecture.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the trip, you can return to the hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Go on a tour to Halong bay</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up early and have your breakfast. Then you will be taken on a tour to Halong Bay. While there, take in the stunning views of Halong Bay, which has nice places for sightseeing and swimming.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then, you will finally have your lunch. From there, you will go on a cruise to a long cave in the deep bay. You can explore and enjoy this cave's beautiful sunset view!</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Visit to Me Cung Cave</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get ready and have your tasty breakfast by waking up early. Then you will be going on a tour to Me Cung cave. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Following your tour, you will be taken to witness how pearls are made. On the way back from Halong Bay, you will embark on a cruise. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return to Hanoi and check into your hotel after that.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Get back to home</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get ready to be back home with a bag full of memories.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get up early and eat breakfast. Check out from the hotel after packing your bags. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Your next stop will be the airport. Your flight home will be boarding there. Vietnam will leave you with many memories to take home with you.</div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Vietnam Visa approval letter</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodations in central cities</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Night on Halong Bay cruise</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Meals mentioned in program (Breakfast, Lunch and Dinner)</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Air-conditioned transfers</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Sightseeing and entrance fees</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> English speaking guides</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Bottles of drinking water on transfers</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Airfare (subject to change)</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Visa </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> FeesImmigration staff at each airport</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tipping for guide and driver</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Other services not clearly indicated in the package inclusions above</li>

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