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

                <title>TripzyGo - Best Honeymoon Package To Meghalaya - Couple Trip To Meghalaya</title>
                <meta name="description" content="Get your perfect honeymoon package for the best couple trip to Meghalaya. Enjoy a romantic time with your partner on your Meghalaya honeymoon trip. Book now!" />
                <meta name="keywords" content="honeymoon package to meghalaya, couple trip to meghalaya, meghalaya honeymoon trip" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/romantic-honeymoon-package-to-meghalaya" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/romantic-honeymoon-package-to-meghalaya" />
                <meta property="og:title" content="Best Honeymoon Package To Meghalaya - Couple Trip To Meghalaya" />
                <meta property="og:description" content="Get your perfect honeymoon package for the best couple trip to Meghalaya. Enjoy a romantic time with your partner on your Meghalaya honeymoon trip. Book now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/romantic_honeymoon_package_to_meghalaya/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="61" progressBarPercentage="60%"/>
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
                                        <h2 className="mb-1">Romantic Honeymoon Package To Meghalaya</h2>

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
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/1.webp" alt="honeymoon package to meghalaya" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/2.webp" alt="honeymoon package to meghalaya" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/3.webp" alt="couple trip to meghalaya" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/4.webp" alt="couple trip to meghalaya" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/5.webp" alt="meghalaya honeymoon trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/6.webp" alt="meghalaya honeymoon trip" />
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
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/1.webp" alt="honeymoon package to meghalaya" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/2.webp" alt="honeymoon package to meghalaya" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/3.webp" alt="couple trip to meghalaya" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/4.webp" alt="couple trip to meghalaya" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/5.webp" alt="meghalaya honeymoon trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_honeymoon_package_to_meghalaya/6.webp" alt="meghalaya honeymoon trip" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>Meghalaya, the city which is full of waterfalls, you will be awestruck by its mesmerizing beauty and soothing and calming atmosphere. With that it’s the perfect place for a couple trip. </div>
                                                <div class="mb-0">A couple trip to Meghalaya will give you and your partner the chance to come closer to each other amidst the natural beauty and calm of the environment. Imagine yourself standing in a fall with your partner or taking a swim in a lake. Doesn’t that feel wonderful? You can have it all with a couple trip to Meghalaya by taking out amazing honeymoon package to Meghalaya.</div>
                                                <div>This honeymoon package to Meghalaya is designed with the best tour itinerary covering the most amazing waterfalls and lakes of Meghalaya. This couple trip to Meghalaya will be one amazing experience of your life.</div>
                                                <div>Don’t wait up. Book your honeymoon package to Meghalaya now by getting in touch with a TripzyGo travel executive.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 4 Nights/5 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 23,999/-*   </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> -  Guwahati - Shillong </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon your arrival at the Dubai Airport, our tour representative will escort you to one of our listed hotels.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Travel to Shillong. On the way, visit Umiam Lake, which is a man-made reservoir that was built after a dam was constructed to generate power. It is encircled by lush green hills & its intriguing sunrises along its edge.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Our representative will transfer you to the hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at hotel in Shillong.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> – Sightseeing Tour in Shillong </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a delicious breakfast, explore the Scotland of East.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Laitlum Canyon, Cathedral Church, Shillong Golf Course, Don Bosco Museum, Wards Lake.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Also visit Lady Hydari Park, Cathedral in Laitumkhrah and all Saints Church & enjoys the Police Bazaar filled with colorful shops and street food joints in the evening.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> At Shillong, stay overnight.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span>  –  Mesmerize the beauty of Cherrapunjee </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a mouth-watering breakfast in the morning. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get transferred to the town Cherrapunjee. Check out the breathtaking views at Wei Sawdong Falls & Mawkdok Dympep ViewPoint.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After this, grasp a spectacular view of Seven Sisters’ Falls, Mawsmai cave, Elephant Falls, Arwah Caves, Garden of caves,  and Nohkalikai falls for a wonderful experience. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at Cherapunjee.</div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Excursion to Mawlynnong</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a tasty breakfast, drive to Mawlynnong, which is a picturesque village located in East Khasi hills along the India - Bangladesh border. Declared as the Asia’s cleanest village. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This place offers many wonderful scenic sights such as the balancing rock & root bridge.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later on head to Dawki, a small town near the India-Bangladesh border.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy the beautiful view of the Umangot river.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, head back to Shillong.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at Shillong.</div>
                                                    </div>
                                                </div>End of a beautiful Journey
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - End of a beautiful Journey</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a bag full of Meghalaya memories!</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After tasty breakfast, drop at Railway/Guwahati Airport station as per the timings.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Additional visit to Kamakhya Temple, if time allows.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Kamakhya temple is not only a famous shrine in Assam but is also a very special monument in the country. Located on the Nilachal hill, the holy shrine of Kamakhya Devi is believed to have emanations as the 'Bleeding Goddess'.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a wonderful journey back to your hometown.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Stay : Private Accommodation in 3 Star Deluxe Hotel (Upgradation Available on Request)</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Meals : Breakfast on all days</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Vehicle : Sedan / SUV/ Tempo Traveler (Depending on Group size)</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Toll Charges</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Fuel Charges</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Permits</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Guide at Nongriat</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Driver</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Parking Charges</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any other charges other than those mentioned in the itinerary</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early check-in & late checkout charges</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> 5 % GST</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flight cost</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Trek to Bewildering Living Root Bridges</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Camping Around Umiam Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Mawsmai Cave in Meghalaya</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Water Sports in Umiam Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Taking a Walk Along the David Scott Trail</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Siju Cave</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visiting Laitlum Canyon for Hiking</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Visit Gleneagles and Play Golf</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pay Visit at Mawphanlur Village</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> a Shillong Shopping Experience at Bara Bazaar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Elephant Falls Photographic Tour</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842636.119392907!2d90.18956251662827!3d25.575037750285585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507e8f34bd207f%3A0xf5ef6117f496d6e!2sMeghalaya!5e0!3m2!1sen!2sin!4v1667812741198!5m2!1sen!2sin"></iframe>

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