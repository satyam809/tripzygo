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

                <title>TripzyGo - Affordable 4 Night 5 Days Kashmir Budget Tour Packages - Budget Trip To Kashmir</title>
                <meta name="description" content="Plan a trip to Bangkok and Pattaya to experience the best of Thailand with our Bangkok and Pattaya tour from India. Book now and enjoy your travel to Bangkok!" />
                <meta name="keywords" content="trip to Bangkok and Pattaya, Bangkok and Pattaya tour from India, travel to bangkok" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/five-days-best-kerala-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/four-night-five-days-budget-kashmir-tour-package" />
                <meta property="og:title" content="Affordable 4 Night 5 Days Kashmir Budget Tour Packages - Budget Trip To Kashmir" />
                <meta property="og:description" content="Plan a trip to Bangkok and Pattaya to experience the best of Thailand with our Bangkok and Pattaya tour from India. Book now and enjoy your travel to Bangkok!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/four_night_five_days_budget_kashmir_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="65" progressBarPercentage="65%"/>
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
                                        <h2 className="mb-1">4 Night 5 Days Budget Kashmir Tour Package</h2>

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
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/1.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/2.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/3.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/4.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/5.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/6.webp" alt="family kerala tour package" />
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
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/1.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/2.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/3.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/4.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/5.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/four_night_five_days_budget_kashmir_tour_package/6.webp" alt="family kerala tour package" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div className="description mb-2">
                                    <div className="row">
                                        <div class="col-lg-12 col-md-6 mb-2 ">
                                            <div class="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>Want to go to a trip to some amazing place but you’re pretty tight on budget?Well, you don’t have to worry at all when you have so many Kashmir budget tour packages to choose from.</div>
                                                <div class="mb-0">Kashmir is an amazing place to travel with your family, friends, or partners.</div>
                                                <div>You can have fun times and moments of joy and happiness with your family and friends in Kashmir or you can spend some utterly romantic and intimate time with your partner in the valleys of this beautiful place.</div>
                                                <div>Be it visiting the beautiful lakes and glaciers in Kashmir or trekking some mountains or simply spending some time in the gardens and meadows, there is everything to enjoy in this amazing, fantastic, and gorgeous valley.</div>
                                                <div>Have the best time of your life on an amazing trip to Kashmir. Book this 4 Nights 5 Days budget Kashmir tour package now by getting in touch with us.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 4 Nights / 5 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 30,000/-* </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Srinagar </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After arrival at Srinagar airport, meet our representative, he will guide you and take you in a private car from the airport to the Srinagar hotel. Later on get fresh and you will leave for Srinagar local sightseeing. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can start from ShankarAcharya Temple, later on you will visit some gardens like,Cheshmashahi garden, Parimahal garden, Botanical garden of Kashmir; also you will visit Mughal gardens of Kashmir like, Nishat garden & Shalimar garden.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later in the evening return back to Srinagar hotel for dinner and overnight stay.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Srinagar – Sonmarg- Srinagar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning after breakfast get fresh and today you will visit Sonmarg. Sonmarg (Meadow of Gold). Sonmarg is absolutely true to its name, which means ‘Meadow of Gold’.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The distance of about 85 kms, will be covered in about 3 hrs. Sonmarg lies in Sindh Valley streamed with flowers and surrounded by mountains. Sonmarg is also the base for someinteresting treks to the high altitude Himalayan Lakes. Sonmarg is the last stop of Kashmir District. From here starts the territory of Ladakh. Situated at an altitude of 274 mabove sea level. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The moment you enter Sonmarg, the first thing that you will notice will be he snow-covered mountain that forms the backdrop of the town. Covered with alpine treesfrom all sides, Sonmarg has few of the loveliest flower collections in Jammu and Kashmir.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Here you can visit Thajiwas Glacier (by pony ride) where snow remains round the year.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening night stay in a hotel at Sonmarg.</div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Pahalgam – Gulmarg</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after breakfast leave from the Pahalgam hotel & drive to Gulmarg (Meadow of Flowers) 2730 mts. above the sea level. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The drive past colourful villages and rice fields, gives you an insight of the rich cultural past of Kashmir. We arrive at a small picturesque market town of Tangmarg and drive ahead on a scenic drive of 14 kilometres to Gulmarg.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In Gulmarg we will board the Gondola cable car system, and ascend towards the Afarwatt Mountain range. The 08 minutes of ropeway will take you past colourful shepherd hutments to the lower ridge of the Afarwatt peak. From here you can click lots of photos of the nearby mountainranges that stand tall like sentinels guarding the rich natural beauty of Kashmir valley. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gulmarg has one of the best ski slopes in the world and the highest golf course with 18 holes. If weather permits one can also have the view of Nanga Parbat, the naked mountain that is over 26,000 feets and dominates the entire region. Later we will begin a short tour around the meadow familiarising ourselves with the beauty. In Gulmarg we will board the Gondola cable car system,and ascend towards the Afarwatt Mountain range. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The 08 minutes of ropeway will take you past colourful shepherd hutments to the lower ridge of the Afarwatt peak. From here you can click lots of photos of the nearby mountain ranges that stand tall like sentinels guarding the rich natural beauty of Kashmir valley. We descend back to Gulmarg base after an hour or so and laterdo some horse-riding.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Gulmarg – Srinagar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today, have your breakfast later on, you can spend some of your time at Gulmarg enjoying the beauty. Later on leave back to Srinagar.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After reaching Srinagar you can enjoy the Shikara ride in Dal Lake. Here you can see the floating vegetable gardens in Dal Lake. Enjoy the leisure of the evening. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After Shikara at Evening check in to the Srinagar houseboat. Have your dinner and night stay at a hotel / house boat.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Fly back Home</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today morning have your breakfast and later on pack your bags and get ready to be transferred to Srinagar Airport to catch a flight for an onward destination with sweet Holiday memories.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Srinagar airport pickup & drop off included</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Transfers and Sightseeing by private Non AC Innova / similar cab</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Daily breakfast & dinner included in the package</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Welcome drink on arrival</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> All toll taxes, parking charges included</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 24 Hours telephonic support from our office</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Includes driver’s expenses, fuel charges and allowances</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All taxes included.</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Air tickets/Train tickets</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Garden entrance fee</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Pony Ride in Gulmarg / Pahalgam / Sonmarg</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Gondola Tickets at Gulmarg</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Guide services</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Trip to Chandanwari, Betaab valley & Aru valley in Pahalgam</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Floating Vegetable Market</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the famous Jamia Masjid</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go Birdwatching at Manasabal Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Hazratbal Mosque</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Seek Blessings at Shankaracharya Temple</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience The Stay in Houseboat</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Magnificent Gardens</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take Shikara Ride on the Dal Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Snowboarding & Skiing in Gulmarg & Pahalgam</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go On Trekking amidst Great Himalayas & on Deadly Routes</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take Pony Ride in Kashmir</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Golfing in Gulmarg</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dig your spoon into Tasty Kashmiri Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> A thrilling experience while River Rafting In Pahalgam</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Camping in Gulmarg</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Gulmarg's glory by paragliding</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ride the Gondola at Gulmarg for a majestic view of the valley</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1703113.1569307246!2d74.14022610509987!3d33.51716941438035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1666348491211!5m2!1sen!2sin" ></iframe>
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
