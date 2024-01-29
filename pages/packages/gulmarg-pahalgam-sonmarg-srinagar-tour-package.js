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

                <title>TripzyGo - Book Your Srinagar Sonmarg Pahalgam Gulmarg Holiday Packages - Trip To Kashmir</title>
                <meta name="description" content="Check our Srinagar Sonmarg Pahalgam Gulmarg Holiday Packages and book your Gulmarg Pahalgam Sonmarg Srinagar tour package. Plan your trip to Kashmir and enjoy." />
                <meta name="keywords" content="gulmarg pahalgam sonmarg srinagar tour package, Srinagar Sonmarg Pahalgam Gulmarg Holiday Packages, trip to kashmir" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/gulmarg-pahalgam-sonmarg-srinagar-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/gulmarg-pahalgam-sonmarg-srinagar-tour-package" />
                <meta property="og:title" content="Book Your Srinagar Sonmarg Pahalgam Gulmarg Holiday Packages - Trip To Kashmir" />
                <meta property="og:description" content="Check our Srinagar Sonmarg Pahalgam Gulmarg Holiday Packages and book your Gulmarg Pahalgam Sonmarg Srinagar tour package. Plan your trip to Kashmir and enjoy." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="63" progressBarPercentage="65%"/>
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
                                        <h2 className="mb-1">Gulmarg Pahalgam Sonmarg Srinagar Tour Package</h2>

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
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/1.webp" alt="gulmarg pahalgam sonmarg srinagar tour package" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/2.webp" alt="gulmarg pahalgam sonmarg srinagar tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/3.webp" alt="Srinagar Sonmarg Pahalgam Gulmarg Holiday Packages" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/4.webp" alt="Srinagar Sonmarg Pahalgam Gulmarg Holiday Packages" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/5.webp" alt="trip to kashmir" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/6.webp" alt="trip to kashmir" />
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
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/1.webp" alt="gulmarg pahalgam sonmarg srinagar tour package" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/2.webp" alt="gulmarg pahalgam sonmarg srinagar tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/3.webp" alt="Srinagar Sonmarg Pahalgam Gulmarg Holiday Packages" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/4.webp" alt="Srinagar Sonmarg Pahalgam Gulmarg Holiday Packages" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/5.webp" alt="trip to kashmir" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/gulmarg_pahalgam_sonmarg_srinagar_tour_package/6.webp" alt="trip to kashmir" />
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
                                                <div>Kashmir is the valley no one wants to miss. It’s the paradise on Earth after all. So, how can you ever miss a chance for a Kashmir trip.</div>
                                                <div class="mb-0">Go on the best Kashmir trip ever with this amazing Gulmarg Pahalgam Sonmarg Srinagar Tour Package which covers the best of Kashmir in its itinerary.</div>
                                                <div>From the beautiful lakes of Kashmir to enjoying in snow to watching the lush green valleys and getting mesmerized by the natural beauty and appeal of the place, this Gulmarg Pahalgam Sonmarg Srinagar Tour Package has it all.</div>
                                                <div>Whether you want to visit with your family, spouse, or go on a solo trip, this Gulmarg Pahalgam Sonmarg Srinagar Tour Package is perfect and will give you the best ever touring experiences.</div>
                                                <div>Don’t wait up. Now is the time to enjoy the most amazing Kashmir trip of your life with a perfect Gulmarg Pahalgam Sonmarg Srinagar Tour Package.</div>
                                                <div>Book the Gulmarg Pahalgam Sonmarg Srinagar Tour Package now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 32,499/-*   </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> -  Arrive Srinagar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Transfer from Srinagar Airport to Houseboat on arrival.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check-In and take rest for some time. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight at sirnagar.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> – Srinagar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After delicious breakfast, visit the Shankaracharya Temple. Trek to the top of the hills and explore this sacred temple.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight at Srinagar.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span>  –  Srinagar - Sonamarg</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After fulfill breakfast, you will head to Sonanmarg. Check into the hotel and then you will visit the Vishansar Lake and Thajiwas Glacier.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight at Sonamarg.</div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Sonamarg - Gulmarg</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Drive to Gulmarg and check into the hotel after breakfast. Your next stop will be Apharwat Peak. A world-class skiing experience awaits you at one of the world's best ski slopes. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at Gulmarg.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Gulmarg - Pahalgam</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Next visit is to the Aru Valley. Witness the beautiful meadows, pines, misty surroundings, and conifers. This will surely offers you a captivating charm. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Staty overnight at Pahalgam.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Pahalgam - Srinagar/Departure</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, check out of the hotel and make your way back to the airport for your flight home.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 2 Nights Stay at Srinagar</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 1 Nights Stay at Sonamarg </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 1 Nights Stay at Gulmarg</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 1 Nights Stay at Pahalgam </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Daily Breakfast </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> All sightseeing and transfer as per itinerary</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Airfare</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Lunch & services other than mentioned</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Expenses of personal nature such as laundry expenses, telephone charges etc.</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pay Visit at Shankaracharya Temple</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go Trek to the Famous Tourist Spots</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Taste the Popular Local Cuisines</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go Shopping on Different Streets </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Indira Gandhi Memorial Tulip Garden</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Birdwatching at Manasabal Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Hazratbal Mosque</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Go River Rafting at Sonmarg</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Skiing at Gulmarg</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Fun at Cricket Bat Factories</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Jamia Masjid, the Famous Mosque</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Stay in a Spectacular Houseboat</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go & Enjoy Paragliding</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Tour of the Lush Green Mughal Gardens</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Shikara Ride on Dal Lake</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55157.090636371846!2d78.7544303000776!3d30.22800220642755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a58434d2979d%3A0x854f99d49c9387e7!2sSrinagar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1667812651961!5m2!1sen!2sin" ></iframe>

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