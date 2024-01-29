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

                <title>TripzyGo - Special Deal On Kedarnath Tour Package From Haridwar - Kedarnath Yatra From Haridwar</title>
                <meta name="description" content="Book Kedarnath tour package from Haridwar and start your Haridwar to Kedarnath trip. Fill yourself with spirituality on this Kedarnath yatra from Haridwar. " />
                <meta name="keywords" content="kedarnath tour package from haridwar, haridwar to kedarnath trip, kedarnath yatra from haridwar" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/kedarnath-tour-package-from-haridwar" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/kedarnath-tour-package-from-haridwar" />
                <meta property="og:title" content="Special Deal On Kedarnath Tour Package From Haridwar - Kedarnath Yatra From Haridwar" />
                <meta property="og:description" content="Book Kedarnath tour package from Haridwar and start your Haridwar to Kedarnath trip. Fill yourself with spirituality on this Kedarnath yatra from Haridwar. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/kedarnath_tour_package_from_haridwar/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="61" progressBarPercentage="60%"/>
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
                                        <h2 className="mb-1">Kedarnath Tour Package From Haridwar</h2>

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
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/1.webp" alt="kedarnath tour package from haridwar" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/2.webp" alt="kedarnath tour package from haridwar" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/3.webp" alt="haridwar to kedarnath trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/4.webp" alt="haridwar to kedarnath trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/5.webp" alt="kedarnath yatra from haridwar" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/6.webp" alt="kedarnath yatra from haridwar" />
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
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/1.webp" alt="kedarnath tour package from haridwar" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/2.webp" alt="kedarnath tour package from haridwar" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/3.webp" alt="haridwar to kedarnath trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/4.webp" alt="haridwar to kedarnath trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/5.webp" alt="kedarnath yatra from haridwar" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/kedarnath_tour_package_from_haridwar/6.webp" alt="kedarnath yatra from haridwar" />
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
                                                <div>Kedarnath Yatra from Haridwar is one of the most divine and holiest pilgrimages that you can go on. </div>
                                                <div class="mb-0">Every Shiv bhakt wishes to go on a Haridwar to Kedarnath trip at least once in life. </div>
                                                <div>The divinity of the place amidst the holy river Ganga and the feeling of being at the top, in the close vicinity of Kedar, offering our prayers through ghee is just being in a different world altogether.</div>
                                                <div>Having the chance to do the holy abhishek and witnessing the stories of Kedarnath for real is also great.  </div>
                                                <div>You can see the akhand jyot that has been lighting in Kedarnath for as long as one can remember, and there are many more holy and magical things in this land of Kedar.</div>
                                                <div>Witness it all in its best form on an amazing trip to Kedarnath with your friends and family.</div>
                                                <div>Book the Kedarnath tour package from Haridwar now by getting in touch with us.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 Nigths/ 4 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 17,500/-* </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">



                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival at Haridwar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get picked up from Haridwar Railway Station/ Haridwar Bus stand and get transferred to the Hotel in a private vehicle.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check in at the hotel & and relax for a while before sightseeing tour of Uttarakhand tour package from Haridwar.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy having lunch at a local restaurant in the old lanes of Haridwar and get the flavors of local food. Few things one mustgive a try while at Haridwar are aloopuri, chaat papdi, jalebi,badam milk etc. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit hill top temples Chanda devi , Mansa devi one can take a ropeway to skip walking and get a city view while sitting on the ropeway, it shall be a small ride for Mansa Devi and Chanda devi temple. Both temples are situated at opposite sides of each other and refer as Siddh Peetha.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy the evening by getting into the city vibes and experience the ritual of light and sound (Ganga Aarti) at Har ki pauri where the priests perform prayers with bowls of fire and the ringing ofthe temple bells. (Aarti timings: 5:30 AM - 6:30 and 6:00 PM -7:00 PM can vary).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get surrounded by chanting mantras and reflection of the lights off the surface of holy river water float diyas and flowers in the river.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dinner at hotel and retire for the day.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Make sure to have a good sleep to remove all stress and prepare for the next day.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Sitapur Local Tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy your breakfast at the hotel and then we will leave for Sitapur. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> While driving to Sitapur explore nature of Haridwar and its surrounding areas. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check-in at the hotel in Sitapur and dinner is also planned at the hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can choose to explore Sitapur on your own as well.</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Kedarnath:Trekking to Kedarnath Temple</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gaurikund</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shankaracharya Samadhi</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Bhaironath Temple</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After an early breakfast, get ready for Kedarnath temple visit and cover the trek of 16 km. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gaurikund is the starting point of the journey and we will proceed from the hotel for Gaurikund.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Meet other pilgrims at the place and get ready to cover the trek and seek blessings of Lord Shiva.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> During the journey you will get a chance to visit the famous Shankaracharya Samadhi and Bhaironath Temple.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the pooja and darshan of Kedarnath Temple, return to the hotel and enjoy a delicious dinner served.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Bhaironath temple should be visited as it is believed that Bahiron Ji takes care of the Kedarnath Temple while it is closed during winters.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Kedarnath to Haridwar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Inclusion: Breakfast</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after Breakfast, check out from the hotel and drive back to Delhi for back to home.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodation in 3-Star Hotel at Premium Location</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Breakfast and Dinner for all  days </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Vehicle “Ertiga” or similar for Sightseeing</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any other Charges other than mentioned in the itinerary</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early check in & late checkout charges</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Pickup for all services are available on certain location only</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Extra Charges may apply if the hotel location is out of the pickup area</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ganga Arti At Har Ki Pauri</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Adventure Tours in Haridwar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a dip in holy water at various ghats</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Seek blessings at Ganga aarti</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Trek to Kedarnath Peak </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Seek Blessings at Kedarnath Temple </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Relax at Vasuki Tai </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Trek to Chorabari Tal </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Deoria Tal</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "110%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767638.4436143574!2d78.19052475762615!3d30.08218894448342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909dcc202279c09%3A0x7c43b63689cc005!2sUttarakhand!5e0!3m2!1sen!2sin!4v1666347860974!5m2!1sen!2sin"></iframe>
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
