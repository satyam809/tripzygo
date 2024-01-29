



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
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import axios from 'axios';
import { useEffect } from 'react'
export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [obj, setObj] = useState({});
    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Maldives`;
            const { data } = await axios.get(url);
            setObj(data);
        } catch (err) {
        }
    };
    useEffect(() => {
        getAllPackages();
    });
    return (
        <div>
            <Head>

                <title>TripzyGo - Oblu Xperience Ailafushi Maldives - Couple Maldives Package</title>
                <meta name="description" content="Your perfect retreat awaits you at Oblu Xperience Ailafushi Maldives. We offer a wide selection of resorts with our couple Maldives package. Plan with us now!" />
                <meta name="keywords" content="oblu xperience ailafushi maldives, couple maldives package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/oblu-xperience-ailafushi-maldives-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/oblu-xperience-ailafushi-maldives-package" />
                <meta property="og:title" content="Oblu Xperience Ailafushi Maldives - Couple Maldives Package" />
                <meta property="og:description" content="Your perfect retreat awaits you at Oblu Xperience Ailafushi Maldives. We offer a wide selection of resorts with our couple Maldives package. Plan with us now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/oblu_xperience_ailafushi_maldives_package/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="71" progressBarPercentage="70%" />
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
                                        <h2 className="mb-1">OBLU XPERIENCE Ailafushi Maldives Package</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/oblu_xperience_ailafushi_maldives_package/1.webp"
                                                imageLink2="/images/international_packages/oblu_xperience_ailafushi_maldives_package/2.webp"
                                                imageLink3="/images/international_packages/oblu_xperience_ailafushi_maldives_package/3.webp"
                                                imageLink4="/images/international_packages/oblu_xperience_ailafushi_maldives_package/4.webp"
                                                imageLink5="/images/international_packages/oblu_xperience_ailafushi_maldives_package/5.webp"
                                                imageLink6="/images/international_packages/oblu_xperience_ailafushi_maldives_package/6.webp"
                                                alt1="oblu xperience ailafushi maldives"
                                                alt2="oblu xperience ailafushi maldives"
                                                alt3="oblu xperience ailafushi maldives"
                                                alt4="couple maldives package"
                                                alt5="couple maldives package"
                                                alt6="couple maldives package">
                                            </Carousel>
                                        </div>

                                    </div>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-2 rounded ">
                                                <div class="container">

                                                    <article>
                                                        <input type="checkbox" className='checkbox' id="read_more" role="button" />
                                                        <label for="read_more" onclick=""><span>Read More</span><span>Read Less</span></label>

                                                        <section className='set_padding'>
                                                            <h5 className="mb-2">OBLU XPERIENCE Ailafushi Maldives Package</h5>
                                                            <p>The OBLU XPERIENCE Ailafushi Maldives Package is a complete and luxurious vacation package offered by the OBLU resort on the island of Ailafushi in the Maldives. The Maldives is a tropical paradise located in the Indian Ocean, known for its crystal clear waters, white sandy beaches, and diverse marine life. Ailafushi is a small island located in the Maldives, and is home to the OBLU resort, which offers a wide range of accommodations and activities for guests to enjoy.
                                                            </p>
                                                            <p>The package includes accommodations at the resort, which offers a variety of room options to suit the needs and preferences of different guests. The resort features beachfront villas, overwater bungalows, and garden rooms, all of which are beautifully designed and well-appointed with modern amenities. Guests can choose from different room types, depending on their budget and the level of luxury they desire.
                                                            </p>                                                 </section>
                                                        <section className='set_padding'>
                                                            <p>The package also includes access to a wide range of amenities and activities, such as a swimming pool, spa, fitness center, and water sports like snorkeling and diving. The resort has a diving center where guests can take diving lessons, rent equipment and go on diving trips to explore the nearby coral reefs, where they can see a wide variety of fish and other sea creatures. The Maldives is renowned for its marine life, and the OBLU resort offers guests the opportunity to experience this natural wonder firsthand. Guests can also take boat tours to nearby islands, where they can visit local communities and learn more about the Maldives' culture and history.
                                                            </p>
                                                            <p>The package includes meals and drinks, either included in the room rate or offered as an add-on. The resort has multiple dining options, such as a main restaurant, a beachside grill, and a bar, where guests can enjoy delicious local and international cuisine, as well as a wide variety of drinks. The resort's chefs use fresh and locally sourced ingredients to create delicious and healthy dishes that will satisfy even the most discerning palates.
                                                            </p>
                                                            <p>In addition, the OBLU XPERIENCE package offers additional services such as excursions, spa treatments, and other activities like yoga classes and sunset cruises. Guests can book excursions to visit nearby islands, go on a fishing trip, or take a boat trip to watch the sunset. The resort's spa offers a wide range of treatments, such as massages, facials, and body treatments, that are designed to help guests relax and rejuvenate. Yoga classes are held in a secluded garden, where guests can practice yoga surrounded by nature, while the sunset cruises offer a romantic and unforgettable experience.
                                                            </p>
                                                            <p>Overall, the OBLU XPERIENCE Ailafushi Maldives Package is the perfect choice for travelers looking for a luxurious and relaxing vacation in one of the most beautiful destinations in the world. The Maldives is a paradise on earth and the OBLU resort is a perfect base from which to explore this natural wonder. With a wide range of room options, amenities, activities, and services, this package is perfect for couples, families, and groups of friends, who want to experience the beauty and luxury of the Maldives.
                                                            </p>
                                                        </section>
                                                    </article>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">Overview</h5>
                                                <div>Maldives is an amazing island country and one of the most beautiful and enchanting aspects of Maldives is its gorgeous resorts. This Maldives tour package is designed for a stay in one such amazing and enchanting resort of Maldives, the Oblu Experience Ailafushi Maldives where you can have the best time with your partner in the pool, playroom, and other areas of the resort.</div>
                                                <div className="mb-0">The beautiful hotel suites with all luxury facilities and amenities will be perfect for a romantic and mesmerizing staycation with your partner. You can go for a romantic dinner with your partner in candlelight, in the luxurious settings of the hotel, and there are a lot more amazing things that you can do in Maldives.</div>
                                                <div>Go on the most exciting tour to Maldives with your partner with this amazing and beautiful couple Maldives package designed and customized for the most memorable and unique experiences in Maldives.</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 4 Nights / 5 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : Per Couple</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 1,40,600/-* </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div class="tabs-navbar bg-white sticky bordernone py-2">
                                    <ul id="tabs" class="nav nav-tabs bordernone mb-0 overflow-visible ">
                                        <div class="scrollmenu container px-0 py-1">
                                            <a class="scroller-item2 col-lg-2  py-1" href="#iternary">Itinerary</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#inclusions">Inclusions</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#exclusions">Exclusions</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#things-to-do">Things to Do</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#places-to-eat" >Food</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#faq">FAQ’s</a>

                                        </div>
                                    </ul>
                                </div>
                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 1</span> - Arrival in Maldives</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "block" }} >
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon arriving in the Maldives, transfer to your resort.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the sights and attractions available around you at leisure.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at Maldives</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  - Maldives</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After delicious breakfast, you will explore the Maldives.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Rest of the time at leisure. Enjoy a romantic time with your partner, either in a pool villa or wherever you want.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at Maldives.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Maldives</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Either relax at leisure with your partner or add an activity to your complete your day.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at Maldives.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Maldives</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, check out from the resort to begin your journey back home with a bag full of cherished memories.</div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions' >
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Welcome drink on arrival</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Daily Breakfast</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> All sightseeing as per itinerary</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> All Taxes included in the package (Bed Tax, GST and Service Charges by the resort)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Airfare</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> 3.50 % Service Tax extra on all the above mentioned rates</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Any expense of personal nature.</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Optional tour/activity cost.</li>



                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Scuba Diving at Maaya Thila</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Sunset Cruise</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Maldives Island Hopping Tour</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Glowing Beach on Vaadhoo Island</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Surfing in the Maldives</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Indulge in Spa Treatment</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay in a Overwater Bungalow</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Stroll at Hulhumale Beach</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the Capital Island Male</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the Capital Island Male</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Helicopter Tour of Maldives</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Snorkeling at Maafushi Island</div>


                                            </div>
                                        </div>
                                        <div className="description mb-2" id="places-to-eat">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        <h5 className="mb-2">Best Cafes</h5>
                                                        <div>The Maldives is a tropical country in the Indian Sea, encircled by the excess of 1,000 coral islands, it's known for its sea shores, occupied fish markets, cafés, and shops. Discussing the best restaurants in Maldives, they are famous for the fish and the ocean side.....</div>
                                                        <a href="/blogs/ten-best-places-to-eat-in-maldives-for-every-taste-and-budget" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        <div className="description mb-2" id="faq">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        <h5 className="mb-2">FAQs</h5>
                                                        <div className="row">


                                                            <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What is a great way to explore Ailafushi Island?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Ailafushi Island is a beautiful island in Maldives. Don't miss it when visiting Maldives. Nothing better to explore than OBLU XPERIENCE Ailafushi Maldives Resort. This is a luxurious resort whose magnificence will leave you speechless. You can book it through OBLU XPERIENCE Ailafushi Maldives Package.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">How big is Ailafushi Island?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Ailafushi Island is 566 meters long and 180 meters wide, and it is connected to the neighboring island – OBLU SELECT Lobigili, by a 270-meter-long jetty.</div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3"> Can we choose OBLU XPERIENCE Ailafushi for a family getaway?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Yes, OBLU XPERIENCE Ailafushi is a family-friendly resort. It's a family island in a nutshell. Find here the biggest kids club, PlayStation, and Xbox to keep kids busy and happy, with a dedicated food corner stocked with popular dishes such as pasta, pizza, and cakes.</div>
                                                                            {/* <div className="mb-0">• Sushi</div>
                                                                    <div className="mb-0">• Ramen</div>
                                                                    <div className="mb-0">• Tempura</div>
                                                                    <div className="mb-0">• Yakitori</div>
                                                                    <div className="mb-0">• Udon</div>
                                                                    <div className="mb-0">• Sashimi</div>
                                                                    <div className="mb-0">• Mochi</div>
                                                                    <div className="mb-0">• Macha</div> */}

                                                                            {/* <div className="mb-0">These are just a few examples of the many delicious and unique foods you can find in Japan.</div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">How far is this resort from Male airport?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">It is 15 minutes away from Male airport.</div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Does the couple Maldives package include this OBLU XPERIENCE Ailafushi Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">No, not included in any of the couple's packages. For this, you have to go with OBLU XPERIENCE Ailafushi Maldives Package.</div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8159086.303178883!2d68.7399088777782!3d3.1135245610135382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sin!4v1663652641939!5m2!1sen!2sin"></LocationMap>
                            </div>
                        </div>
                        <div className="col-lg-4 pe-lg-4">
                            <div class="sidebar-sticky">
                                <div class="list-sidebar">
                                    <div class="sidebar-item">
                                        <Packages_Form></Packages_Form>
                                        <RelatedPackage packages={obj.packages ? obj.packages : []}></RelatedPackage>
                                    </div>
                                </div>
                            </div>
                        </div>
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
