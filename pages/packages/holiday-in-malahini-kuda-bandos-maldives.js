import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';
import { useEffect } from 'react'
import Head from "next/dist/shared/lib/head";
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import axios from 'axios';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import { FreeMode, Thumbs } from "swiper";
import { useRef, useState } from "react";
SwiperCore.use([Pagination, Autoplay]);
import Carousel from '../../components/Package_Description/descriptionCarousel';
import LocationMap from '../../components/Package_Description/locationMap';
export default function test() {
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

                <title>TripzyGo - Enjoy Malahini Kuda Bandos All Inclusive Package - Maldives Tour</title>
                <meta name="description" content="Malahini Kuda Bandos Maldives All Inclusive package is a tour of a lifetime. Treat yourself to a private beach villa, four-course meals, and more. Book now!" />
                <meta name="keywords" content="malahini kuda bandos maldives, malahini kuda bandos all inclusive package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/holiday-in-malahini-kuda-bandos-maldives" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/holiday-in-malahini-kuda-bandos-maldives" />
                <meta property="og:title" content="Enjoy Malahini Kuda Bandos All Inclusive Package - Maldives Tour" />
                <meta property="og:description" content="Malahini Kuda Bandos Maldives All Inclusive package is a tour of a lifetime. Treat yourself to a private beach villa, four-course meals, and more. Book now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/holiday_in_malahini_kuda_bandos_maldives/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="67" progressBarPercentage="65%" />

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
                                        <h2 className="mb-1">Holiday in Malahini Kuda Bandos Maldives</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/holiday_in_malahini_kuda_bandos_maldives/1.webp"
                                                imageLink2="/images/international_packages/holiday_in_malahini_kuda_bandos_maldives/2.webp"
                                                imageLink3="/images/international_packages/holiday_in_malahini_kuda_bandos_maldives/3.webp"
                                                imageLink4="/images/international_packages/holiday_in_malahini_kuda_bandos_maldives/4.webp"
                                                imageLink5="/images/international_packages/holiday_in_malahini_kuda_bandos_maldives/5.webp"
                                                imageLink6="/images/international_packages/holiday_in_malahini_kuda_bandos_maldives/6.webp"
                                                alt1="malahini kuda bandos maldives"
                                                alt2="malahini kuda bandos maldives"
                                                alt3="malahini kuda bandos maldives"
                                                alt4="malahini kuda bandos all inclusive package"
                                                alt5="malahini kuda bandos all inclusive package"
                                                alt6="malahini kuda bandos all inclusive package">
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
                                                            <h5 className="mb-2">Holiday in Malahini Kuda Bandos Maldives</h5>
                                                            <p >Malahini Kuda Bandos is a resort located on the island of Kuda Bandos in the Maldives. The Maldives
                                                                is a tropical nation made up of 26 atolls located in the Indian Ocean, south of India. The Maldives is
                                                                known for its beautiful beaches, crystal clear waters, and vibrant coral reefs, making it a popular
                                                                destination for tourists seeking a tropical getaway.</p>
                                                            <p >The resort, Malahini Kuda Bandos, is situated on a small private island and offers guests a range of
                                                                accommodation options, from traditional Maldivian bungalows to more modern and luxurious villas. All
                                                                of the accommodations are designed to blend in with the natural surroundings and offer guests a
                                                                comfortable and relaxing experience.</p>


                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >The resort features a range of amenities and activities to keep guests entertained during their stay.
                                                                There is a large swimming pool, a spa and wellness center, and a range of water sports such as
                                                                snorkeling, diving, and fishing. Guests can also take part in island-hopping tours, visit nearby islands,
                                                                and explore the local marine life.</p>
                                                            <p >In addition to the activities and amenities offered on the island, Malahini Kuda Bandos Maldives also
                                                                provides guests with the opportunity to indulge in some of the local culture and traditions. The resort
                                                                organizes cultural activities such as traditional Maldivian cooking classes, where guests can learn how
                                                                to prepare traditional dishes using local ingredients.</p>
                                                            <p >For guests who want to explore the local area, the resort can arrange for island hopping tours and
                                                                visits to nearby islands, where guests can experience the local culture and way of life. Visitors can
                                                                also take a trip to the capital city of Malé, which is a short boat ride from the resort. Malé offers a
                                                                glimpse into the daily life of Maldivians, with markets, shops, and local eateries, as well as historical
                                                                and cultural sites such as the 17th century Hukuru Miskiy mosque.</p>
                                                            <p >The Maldives is also known for its eco-tourism and Malahini Kuda Bandos Maldives is committed to
                                                                preserving the natural environment. The resort has a number of initiatives in place to reduce its
                                                                environmental impact, such as a waste management program and a coral reef conservation project.
                                                                The resort is also proud to be a member of the Maldives Sustainable Tourism Foundation, which
                                                                promotes sustainable tourism in the Maldives.</p>
                                                            <p>The Maldives is renowned for its marine life and the resort is located in a prime spot for exploring the
                                                                local coral reefs. The resort offers guests the opportunity to go snorkeling and diving to discover the
                                                                vibrant coral reefs and see a wide variety of tropical fish, turtles, and other marine life.</p>
                                                            <p>The resort&#39;s restaurant serves a range of delicious local and international dishes and guests can also
                                                                enjoy a drink at the bar while taking in the stunning views of the ocean.</p>
                                                            <p>In conclusion, a holiday at Malahini Kuda Bandos Maldives offers not only a tropical paradise but also
                                                                a unique blend of culture and tradition, and eco-friendly approach. The resort provides a range of
                                                                activities and amenities for guests to enjoy, from water sports and marine life exploration to cultural
                                                                activities and island hopping tours. It is the perfect destination for those looking for a relaxing and
                                                                rejuvenating holiday experience in a beautiful and unique location.</p>

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
                                                <div>Holidays in Maldives are an exciting experience which everyone wants to live at least once in life. And what with the amazing resorts where you can enjoy a brilliant staycation in the luxurious suites while enjoying the jacuzzi baths and lavish dinners in the restaurants.</div>
                                                <div className="mb-0">This Maldives tour package is designed for one amazing experience like that. This Holiday in Malahini Kuda Bandos Maldives will be one of the best holidays that you will ever have. Enjoy the best vacations in this luxury resort with the best things to do in Maldives and visit the rest of the Maldives so that you can chill at the beaches and enjoy other adventures that this island country has to offer.</div>
                                                <div>Get it all in this Malahini Kuda Bandos Maldives package which is designed with the most amazing and well-planned Maldives tour itinerary.</div>
                                                <div>Don’t wait up. Book this amazing package now and have the most unique trip experience of your life.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 Nights in Beach Villa</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : Per Couple</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 1,15,000/-* </td>
                                                {/* <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 5 star</td> */}

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
                                <div className="description mb-2">
                                    <div className="row">


                                        <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div className="accrodion">
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
                                                        <div>The Maldives is a tropical country in the Indian Sea, encircled by the excess of 1,000 coral islands, it's known for its sea shores, occupied fish markets, cafés, and shops. Discussing the best restaurants in Maldives, they are famous for the fish and the ocean side....</div>
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
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Is Malahini Kuda Bandos Maldives a good place to spend New Year's Eve?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Of course, you can celebrate the new year with a different style and grandeur. Here you get groovy music for the new year and enjoy live performances by amazing artists. Along with this, arrangements are also made for DJ nights and unique night fireworks views add an extra spark to your eyes. Thus this place is best for a memorable New Year's Eve.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Is Malahini Kuda Bandos Maldives kids-friendly?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Yes, many tourists come to enjoy themselves with their children in this unique property. Here's a welcome to fruity non-alcoholic cocktails, plus lots of amazing stuff to get kids happy and excited. No common swimming pool is present here, but if you book a villa, it comes with a plunge pool attached, which is most popular among the kids.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Is alcohol served at the property?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Yes, alcohol is available as a Malahini kuda Bandos all inclusive package, as well as on a pay-per-drink basis.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Can I bring my liquor?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">No, unfortunately, carrying your liquor is strictly prohibited.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What is the distance between Male airport and Malahini Kuda Bandos Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">The distance between Male airport and Malahini Kuda Bandos Maldives is 8.9 kms.</div>
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

                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8159086.322151871!2d68.73855895375104!3d3.113522111614398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sin!4v1670327153633!5m2!1sen!2sin"></LocationMap>
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
