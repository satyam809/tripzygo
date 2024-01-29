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
import Carousel from '../../components/Package_Description/descriptionCarousel';
import LocationMap from '../../components/Package_Description/locationMap';
export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Head>

                <title>TripzyGo - Affordable India To Sri Lanka Trip Package - Trip To Sri Lanka From India</title>
                <meta name="description" content="Make your trip memorable with India to Sri Lanka trip package. Plan a trip to Sri Lanka from India at an affordable price & get customized tour deals. Book now!" />
                <meta name="keywords" content="india to sri lanka trip package, trip to sri lanka from india" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/best-selling-india-to-sri-lanka-trip-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/best-selling-india-to-sri-lanka-trip-package" />
                <meta property="og:title" content="Affordable India To Sri Lanka Trip Package - Trip To Sri Lanka From India" />
                <meta property="og:description" content="Make your trip memorable with India to Sri Lanka trip package. Plan a trip to Sri Lanka from India at an affordable price & get customized tour deals. Book now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/best_selling_india_to_sri_lanka_trip_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="71" progressBarPercentage="70%"/>
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
                                        <h2 className="mb-1">Best - Selling India To Sri Lanka Trip Package</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/best_selling_india_to_sri_lanka_trip_package/1.webp"
                                                imageLink2="/images/international_packages/best_selling_india_to_sri_lanka_trip_package/2.webp"
                                                imageLink3="/images/international_packages/best_selling_india_to_sri_lanka_trip_package/3.webp"
                                                imageLink4="/images/international_packages/best_selling_india_to_sri_lanka_trip_package/4.webp"
                                                imageLink5="/images/international_packages/best_selling_india_to_sri_lanka_trip_package/5.webp"
                                                imageLink6="/images/international_packages/best_selling_india_to_sri_lanka_trip_package/6.webp"
                                                alt1="india to sri lanka trip package"
                                                alt2="india to sri lanka trip package"
                                                alt3="india to sri lanka trip package"
                                                alt4="trip to sri lanka from india"
                                                alt5="trip to sri lanka from india"
                                                alt6="trip to sri lanka from india">

                                            </Carousel>
                                        </div>

                                    </div>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">Overview</h5>
                                                <div>Sri Lanka is a beautiful place, an exotic island country with exquisite beauty in the form of beautiful landscapes and rich biodiversity. Moreover, the country has a rich history and culture with very friendly people who are always keen and eager to talk about their culture and history.</div>
                                                <div className="mb-0">So, who wouldn’t want to go on a trip to such a beautiful country which has so much to offer? Well, of course you will love a trip to Sri Lanka from India and that’s what this package is all about. This amazing and best selling India to Sri Lanka trip package is designed for the best time in Sri Lanka with the most amazing tour itinerary that has plans for the best things to do in Sri Lanka along with the best places to visit in Sri Lanka.</div>
                                                <div>With this India to Sri Lanka trip package, you can have an amazing tour that will be an unforgettable experience with memories of a lifetime.</div>
                                                <div>So, don’t wait up. Get this India to Sri Lanka trip package now and enjoy your wonderful trip to Sri Lanka from India.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 6 Nights 7 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 55,738/-* </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">


                                        <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div className="accrodion active">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 1</span> - COLOMBO- HARBARANA</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "block" }} >
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival at Colombo airport.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Meet with our representative at the airport. Meet at the airport in Habarana, pick-up from the airport, and transfer to our hotel.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the hotel. Afterward, you will visit Hurulu Forest Reserve. Observe many endangered species like the Indian Star Tortoise, Sri Lanka Jungle Fowl, Sri Lankan Elephant, Sri Lankan Leopard, and Rusty-spotted Cat.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at Harbarana.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  - HARBARANA</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Head straight to the Ranagala Ruins and Nature Reserve after breakfast.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Travel to this exciting mountain range and get acquainted with the ruins of the Ritigala monastery.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Next, visit the Dambulla Cave Temple. Find three statues of Sri Lankan Kings and 4 Statues of gods and goddesses.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at Harbarana.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  HARBARANA - TRINCOMALEE</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, go to Trincomalee.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check into the hotel then visit the Koneswaram Temple.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will enjoy Marble Beach next.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at Trincomalee.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - TRINCOMALEE - KANDY</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After delicious breakfast head to Kandy.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check into the hotel, then visit the Horton Plains National Park.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take the time to admire native wildlife in their natural habitat and appreciate the diversity of animal species.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Next, head towards  the Lankatilaka Temple.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at Kandy.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 5</span>  - KANDY</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After you're done eating breakfast, proceed to Bahiravokanda Vihara Buddha Statue.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The next location is the Pinnawala Elephant Orphanage.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at Kandy.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 6</span>  - KANDY - COLOMBO</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After tasty breakfast you will head towards Colombo.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Hotel check-in. Later in the afternoon, you will visit Kelaniya Raja Maha Vihara.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at Colombo.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 7</span>  - Departure</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Departure from the hotel after breakfast.</div>


                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2">
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Accommodation on bed & breakfast basis at above mentioned or similar hotels, commencing with breakfast on day 02 and ending with breakfast on day 06.</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Airport Pick Up an drop</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Services of an English speaking chauffeur for groups up to 07 Pax. Groups above 08 Pax, services of an English speaking guide will be provided.</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> 12% Value added tax (Vat) and 1% tourism development levy </li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Transfer</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2">
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Visa</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Cost of lunch and dinner on tour.</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Expenses of a personal nature. </li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Cost of Camera / Video permits. </li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Tips and porter charges.</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Entrance fees to all places of interest mentioned above.</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Any other services not specified above.</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Viharamahadevi Park - Best For Excursion</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gangaramaya Sanctuary - Edify Yourself Profoundly</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pettah Drifting Business sector - An Intriguing Shopping Experience</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Colombo -Enjoy The Nightlife</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Madu Stream - Enjoy Watersports</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Turtle Atchery - Go for A Walk</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ayurvedic Spa Center -Rejuvenate Your Senses</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Kandy Lake - Witness Dawn</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sanctuary Of Tooth Artifact - Witness The Strict Angles</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Seetha Amman Sanctuary - Look for Favors</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Glen Falls - Take A Plunge</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Tea Industrial facility - Investigate The Plant life</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ella - Bounce On A Train</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dambulla Cavern Sanctuary - For Your Spirit</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dutch Stronghold - Investigate The Trustworthiness</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Hikkaduwa - Investigate The Sandy Sea shores</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ramayana Visit - Gain proficiency with The Embodiment Of Religion</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Mirissa - Spot Whales And Dolphins</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pinnawala Elephant Shelter - Play With Elephants</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047218.232002178!2d78.46082788417557!3d7.857177414976679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sin!4v1670320844788!5m2!1sen!2sin"></LocationMap>
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
