

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

                <title>TripzyGo - Budget-Friendly Maldives Vacation Packages from India - Holiday Packages to Maldives</title>
                <meta name="description" content="Choose from the Maldives holiday vacation package from India and enjoy an affordable vacation. Book now and get attractive discounts. Plan with us today!" />
                <meta name="keywords" content="holiday packages to maldives, maldives vacation packages from india" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/marvelous-maldives-vacation-packages-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/marvelous-maldives-vacation-packages-from-india" />
                <meta property="og:title" content=" Budget-Friendly Maldives Vacation Packages from India - Holiday Packages to Maldives" />
                <meta property="og:description" content="Choose from the Maldives holiday vacation package from India and enjoy an affordable vacation. Book now and get attractive discounts. Plan with us today!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/marvelous_maldives_vacation_packages_from_india/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="75" progressBarPercentage="75%" />
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
                                        <h2 className="mb-1">
                                            Marvelous Maldives Vacation Packages From India</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/marvelous_maldives_vacation_packages_from_india/1.webp"
                                                imageLink2="/images/international_packages/marvelous_maldives_vacation_packages_from_india/2.webp"
                                                imageLink3="/images/international_packages/marvelous_maldives_vacation_packages_from_india/3.webp"
                                                imageLink4="/images/international_packages/marvelous_maldives_vacation_packages_from_india/4.webp"
                                                imageLink5="/images/international_packages/marvelous_maldives_vacation_packages_from_india/5.webp"
                                                imageLink6="/images/international_packages/marvelous_maldives_vacation_packages_from_india/6.webp"
                                                alt1="holiday packages to maldives"
                                                alt2="holiday packages to maldives"
                                                alt3="holiday packages to maldives"
                                                alt4="maldives vacation packages from india"
                                                alt5="maldives vacation packages from india"
                                                alt6="maldives vacation packages from india">
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
                                                            <h5 className="mb-2">Marvelous Maldives Vacation Packages From India</h5>
                                                            <p>Imagine laying in the sun, surrounded by warm, clear waters and soft white sand, with nothing but the sound of the waves and the occasional bird to break the silence. This is the experience you can expect when on your marvelous trip to the Maldives. Maldives is a beautiful and captivating place to spend your holidays at. You always have a lot to explore in the Maldives. From shopping to museums to water sports and exciting beaches, your trip to the Maldives is going to bring the best for you always.
                                                            </p>
                                                            <p>The Maldives are a chain of atolls and islands in the Indian Ocean, about 1,200 kilometers southwest of Sri Lanka. Maldives is a place that is better known for its clear waters and perfect coral reefs, and the luxurious resorts sitting on the islands. No doubt, the islands of Maldives are also a popular destination for those looking for a relaxing break, with many of the resorts offering activities such as yoga, windsurfing, and horse riding. The beaches are beautiful and calming and the food is something that you are going to love in the Maldives.
                                                            </p>
                                                        </section>
                                                        <section className='set_padding'>
                                                            <p>The resorts in the Maldives are very comfortable and have everything that you need to have the best vacation. There is absolutely no reason to wait for your trip to Maldives and have an awesome time with your friends and family. Not only this, but the Maldives is also the best place for honeymoon couples as they can enjoy themselves truly in every sense. The white sand and clear beaches provide a great view to click amazing pictures in the Maldives. Get yourself this holiday package to Maldives and enjoy your life to the fullest.
                                                            </p>
                                                            <p>This Maldives vacation package from India is a Mozart in disguise for everyone. The entire cost of this amazing tour package is extremely pocket friendly and the resorts that are provided to you in this tour package have a lot to explore. There is a range of activities that you can try such as spa treatments and swimming with dolphins to tennis and golf. Not only this, but in this tour package you can also enjoy the luxurious setting of the resorts, with rooftop pools and private beaches. This holiday package to Maldives is the best for couples or even when you are wanting to have a Maldives tour with your friends and family members.
                                                            </p>
                                                            <p>If relaxation is what you are looking for, the Maldives is the perfect destination. For those looking for a truly luxurious experience, the Maldives are a great option. You can enjoy a lot of water sports such as snorkeling and river rafting here. Along with that, you always have the chance to explore the markets for shopping. There is a range of products that you can get in these markers. The museums are one of the best places to be visited by a person who loves history. Along with that, the beaches are always there to provide you with immense fun.
                                                            </p>
                                                            <p>So there is nothing to wait for. Have a wonderful trip to Maldives by booking this amazing holiday tour package to Maldives from India. The tour package explains everything you are going to enjoy on your trip. So, without waiting, take this amazing and the best tour package for the Maldives. Get in touch with a TripzyGo tour executive now and have the best Maldives tour package booked for yourself on the best deals.
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
                                                <div>Maldives is an amazing country where you can have a blasting and marvellous vacation that will give you the memories of a lifetime. Be it chilling on the beaches, going on adventures, having a romantic dinner, or just staying and lazing around in the luxury suites in lavish resorts, Maldives has everything.</div>
                                                <div>Whether you want to spend some great time with your partner or make deeper connections with your family and friends, Maldives is the perfect place to have all of it while chilling at the beaches and enjoying lavish lunches and dinners and going on exciting adventures.</div>
                                                <div>That’s what this Maldives vacation package from India is all about.</div>
                                                <div>This is one of the best holiday packages to Maldives that you can get for an exciting and amazing time in this marvellous and splendid island country.</div>
                                                <div>So, don’t wait up, book this amazing and marvellous Maldives vacation package from India now by getting in touch with a TripzyGo travel executive.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 Nights / 4 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 88,970 /-* </td>
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
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
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
                                                                        <h5 className="mb-0 px-3">Which package is right for holiday packages to Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Some of the holiday packages for Maldives are:</div>
                                                                            ●	Marvelous Maldives Vacation Packages From India <br />
                                                                            ●	Exquisite Maldives Luxury Tour Package <br />
                                                                            ●	Malahini Kuda Bandos all-inclusive package


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Is Maldives Suitable For Female Travelers?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Yes, the resort islands of Maldives are very safe for solo female travelers. Here you will find a large number of women who travel solo or with visitors from different parts of the world. Anyway, Maldives doesn't have a special reputation for being infamous for its crime scene. </div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Which are the famous shopping centers of Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Best shopping centers of Maldives are:</div>
                                                                            ●	Centro Mall. Shopping Malls<br />
                                                                            ●	Art Gallery Malé - artgmle. Art Galleries.<br />
                                                                            ●	S.T.O Trade Centre. Specialty & Gift Shops<br />
                                                                            ●	Angolo Souvenir shop. Specialty & Gift Shops.<br />
                                                                            ●	Island Bazaar. Specialty & Gift Shops.<br />
                                                                            ●	Oevaali Art Shop. Speciality & Gift Shops • Art Galleries.<br />
                                                                            ●	Nala Boutique. Specialty & Gift Shops.<br />
                                                                            ●	Mare Scuba Concept.

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Are only non-vegetarian and seafood available in Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Not at all, avoid any illusions. A variety of cuisine is available here, and many restaurants serve vegetarian dishes. </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What are the things to buy in Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Things you can shop from Maldives like Local cosmetics, local jewelry, dried fish chips, canned smoked fish, Perfumes, Local mementos, handicrafts, electronic gadgets, etc.</div>




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
