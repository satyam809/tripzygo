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

                <title>TripzyGo - Best Deals On Kashmir Tour Package For Couple - Kashmir Package For Couple</title>
                <meta name="description" content="Get the best deals on a Kashmir tour package for couple. Explore the beauty of Kashmir on your couple tour with our Kashmir package for couple. Book now & save." />
                <meta name="keywords" content="kashmir tour package for couple, kashmir couple tour, kashmir package for couple" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/romantic-kashmir-tour-package-for-couple" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/romantic-kashmir-tour-package-for-couple" />
                <meta property="og:title" content="Best Deals On Kashmir Tour Package For Couple - Kashmir Package For Couple" />
                <meta property="og:description" content="Get the best deals on a Kashmir tour package for couple. Explore the beauty of Kashmir on your couple tour with our Kashmir package for couple. Book now & save." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/romantic_kashmir_tour_package_for_couple/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="65" progressBarPercentage="65%"/>
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
                                        <h2 className="mb-1">Romantic Kashmir Tour Package For Couple</h2>

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
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/1.webp" alt="kashmir couple tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/2.webp" alt="kashmir couple tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/3.webp" alt="kashmir package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/4.webp" alt="kashmir package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/5.webp" alt="4 night 5 days budget kashmir tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/6.webp" alt="4 night 5 days budget kashmir tour package" />
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
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/1.webp" alt="kashmir couple tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/2.webp" alt="kashmir couple tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/3.webp" alt="kashmir package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/4.webp" alt="kashmir package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/5.webp" alt="4 night 5 days budget kashmir tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/romantic_kashmir_tour_package_for_couple/6.webp" alt="4 night 5 days budget kashmir tour package" />
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
                                                <div>Thinking of a Kashmir couple tour? Well, that’s amazing. Kashmir is an utterly romantic place with beautiful lakes and glaciers, gardens and meadows, hills and mountains, and everything gorgeous. Someone has rightly said that it is a paradise on earth and who will not want to have some amazing days on this beautiful paradise?</div>
                                                <div class="mb-0">Have the most amazing, beautiful and romantic time of your life on a fantastic couple trip to Kashmir with your partner. Surprise your partner in the beautiful valleys of Kashmir and rekindle the romance between you and your partner.</div>
                                                <div>A few days in Kashmir is what you need and you will love it with this couple package to Kashmir with the best Kashmir tour itinerary. </div>
                                                <div>Book the amazing Kashmir tour package for couple now and have the best time of your life with your partner on the most amazing and romantic trip of your life.</div>
                                                <div>Get in touch with us now to book the package.</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights / 6 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 19,999/-* </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Srinagar </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After arrival at Srinagar airport, meet our representative, he will guide you and take you in a private car from the airport to the Srinagar hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later on get fresh and you will leave for Srinagar local sightseeing. You can start from ShankarAcharya Temple, later on you will visit  some gardens like, Cheshmashahi garden, Parimahal garden, Botanical garden of Kashmir; also you will visit  Mughal gardens of Kashmir like, Nishat garden &Shalimar garden.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later in the evening return back to Srinagar hotel for dinner and overnight stay.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Srinagar- Doodhpathri- Srinagar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after breakfast you will visit one of the best destinations of Kashmir known as Doodh Pathri. Doodhpathri (translation; Valley of Milk) is a tourist destination and hill station in the State of Jammu and Kashmir.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is located in Budgam district of Jammu & Kashmir Situated at an altitude of 8,957 ft from sea level, and located at a distance of 42 km from state summer capital Srinagar and 22 km from district headquarter Budgam. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Doodhpathri lies in a bowl-shaped valley in the Pir Panjal Range of the Himalayas, at an altitude of 2,730 m (8,957 ft) above sea level.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is an alpine valley covered with snow-clad mountains and the meadows of Pine Fir and Deodar. The natural meadows, which are covered with snow in winter, allow the growth of wild flowers such as daisies, forget-me-nots and buttercups during spring and summer.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  After full enjoyment of the day, return back to Srinagar for a night stay.</div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> -  Srinagar- Pahalgam </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after breakfast, get fresh and leave from the Srinagar hotel & our driver will take you in a vehicle from Srinagar & drive to Pahalgam. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Full day in Pahalgam. Pahalgam is not a mere hill-station, Its like going into the lap of nature to do many things – one of the best – that “do-nothing”.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You want to have a romantic trip with your beloved, get together with your family,and have what they call a ‘quality’ family time, you want to do those little interesting things with the family and kids,like take a pony ride, or just picnic next to a beautiful river.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Here you can also visit many breathtaking places like Betaab Valley, Chandanwari & Aru Valley (In local taxi). After completing sightseeing, return back to your hotel for a night stay.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Pahalgam – Gulmarg</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after breakfast leave from the Pahalgam hotel & drive to Gulmarg (Meadow of Flowers) 2730 mts. above the sea level. The drive past colourful villages and rice fields, gives you an insight of the rich cultural past of Kashmir. We arrive at a small picturesque market town of Tangmarg and drive ahead on a scenic drive of 14 kilometres to Gulmarg.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gulmarg has one of the best ski slopes in the world and the highest golf course with 18 holes. If weather permits one can also have the view of Nanga Parbat, the naked mountain that is over 26,000feets and dominates the entire region. Later we will begin a short tour around the meadow familiarising ourselves with the beauty. In Gulmarg we will board the Gondola cable car system, and ascend towards the Afarwatt Mountain range. The 08 minutes of ropeway will take you past colourful shepherdhutments to the lower ridge of the Afarwatt peak. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> From here you can click lots of photos of the nearby mountain ranges that stand tall like sentinels guarding the rich natural beauty of Kashmir valley.  We descend back to Gulmarg base after an hour or so and later do some horse-riding to the strawberry valley. Dinner & overnight Stay will be at Gulmarg.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Gulmarg – Srinagar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today, have your breakfast later on, you can spend some of your time at Gulmarg enjoying the beauty. Later on leave back to Srinagar. After reaching Srinagar you can enjoy the Shikara ride in Dal Lake. Here you can see the floating vegetable gardens in Dal Lake.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy the leisure of the evening. After Shikara at Evening check in to the Srinagar houseboat. Have your dinner and night stay at a hotel / house boat.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Srinagar airport departure</h5>
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
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 03 Nights stay  at  Srinagar</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 01 Night stay at houseboat in Srinagar</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 01Double Room included at all places</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 01 Hour complimentary Shikara ride included in Dal Lake</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Srinagar airport pickup & drop off included</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Transfers and Sightseeing by private  Non-AC Tavera</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Daily breakfast & dinner included in the package</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Welcome drink on arrival</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> All toll taxes, parking charges included</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 24 Hours telephonic support from our office</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Includes driver’s expenses, fuel charges and allowances</li>
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
                                                <h4>Things To Do</h4>
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
                                <div className="single-map mb-4">
                                    <h4>Map</h4>
                                    <div className="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1703113.1569307246!2d74.14022610509983!3d33.51716941438035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1666348126400!5m2!1sen!2sin" ></iframe>


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
