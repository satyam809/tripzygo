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
    const [obj, setObj] = useState({});
    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Japan`;
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

                <title>TripzyGo - Cheap Japan Tour Packages | Book Now!</title>
                <meta name="description" content="Want to go for a vacation in Japan? Plan the best fun vacations in Japan with our Japan vacation tour packages. Book a tour with us at the best prices now!" />
                <meta name="keywords" content="cheap japan tour packages, tokyo travel tour package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/cheap-japan-tour-packages" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/cheap-japan-tour-packages" />
                <meta property="og:title" content="Affordable Japan Tour Packages - Get the Best Deals Now!" />
                <meta property="og:description" content="Planning a budget trip to Japan from India? Book a cheap Japan tour plan for an exciting and affordable Japan trip from India. Contact us now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/cheap_japan_tour_packages/1.webp" />
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
                                            Cheap Japan Tour Packages
                                        </h2>
                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/cheap_japan_tour_packages/1.webp"
                                                imageLink2="/images/international_packages/cheap_japan_tour_packages/2.webp"
                                                imageLink3="/images/international_packages/cheap_japan_tour_packages/3.webp"
                                                imageLink4="/images/international_packages/cheap_japan_tour_packages/4.webp"
                                                imageLink5="/images/international_packages/cheap_japan_tour_packages/5.webp"
                                                imageLink6="/images/international_packages/cheap_japan_tour_packages/6.webp"
                                                alt1="cheap japan tour packages"
                                                alt2="cheap japan tour packages"
                                                alt3="cheap japan tour packages"
                                                alt4="tokyo travel tour package"
                                                alt5="tokyo travel tour package"
                                                alt6="tokyo travel tour package">
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
                                                            <h5 className="mb-2">Cheap Japan Tour Packages</h5>
                                                            <p >Japan is a fascinating country with a unique culture and history, but many people assume that it's too expensive to visit. However, there are plenty of great affordable vacation options in Japan that won't break the bank. From bustling cities to peaceful countryside, here are some ideas for an unforgettable trip to Japan on a budget.
                                                                One of the most affordable ways to travel in Japan is by checking out our special guided Cheap Japan tour packages. </p>
                                                            <p >If you're interested in experiencing Japan's vibrant cities, Tokyo and Osaka are two great options to visit with our Cheap Japan tour packages that won't break the bank. In Tokyo, you can explore the bustling neighbourhoods of Shibuya and Shinjuku, visit the famous Tsukiji fish market, or take a stroll through the beautiful Ueno Park. For a taste of traditional Japanese culture, check out the Senso-ji temple in the historic Asakusa district. Osaka, on the other hand, is known for its delicious street food, lively nightlife, and stunning castle. </p>
                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >No trip to Japan would be complete without trying the local cuisine, and there are plenty of affordable options available. From delicious ramen noodles to savory okonomiyaki pancakes, there's something for every taste and budget. You can also visit one of the many izakayas (Japanese-style pubs) for a fun and affordable night out with friends.</p>
                                                            <p >Overall, Japan is a wonderful destination for a budget-friendly vacation to visit with our Tokyo travel tour package. With our pocket-friendly tours, you're sure to have an unforgettable experience without breaking the bank.</p>

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
                                                <div>A vacation in Japan doesn't have to break the bank, as there are plenty of cheap Japan tour packages available that offer great value for money. Japan is known for its high standard of living, but with a little bit of planning, you can enjoy all that the country has to offer without breaking the bank.</div>
                                                <div>From budget-friendly accommodations to affordable dining options, there are plenty of ways to save money while still having a fantastic vacation. You can explore the cities on a budget without breaking the bank with our Tokyo travel tour package. So if you're looking for an affordable but unforgettable vacation, Japan is definitely worth considering.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 Nights / 4 Days </td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: 45,999/-* </td>
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
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#time-to-visit" >Time to Visit</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#faq">FAQ’s</a>

                                        </div>
                                    </ul>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">


                                        <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 1</span> - Arrival at Tokyo airport</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "block" }} >
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival at Tokyo airport. Meeting and greeting at the airport. Private transfer to hotel from
                                                            Tokyo airport. Evening will be free for leisure. Overnight at hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  -  Mount Fuji and Hakone Full Day Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Discover Japan's natural miracle, Mt. Fuji and Hakone in 1
                                                            day! Climb Mt. Fuji and feel the enrgy of Japan, take a refreshing Lake Ashi cruise and head
                                                            to Owakudani valley with stunning cablecar.Overnight at hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Tokyo – Osaka Bullet Train</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Today you will be traveling back to Tokyo from Osaka by
                                                            bullet train. Check in to the hotel. In the evening you can explore the city at your own.
                                                            Overnight at hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Depart from Tokyo
                                                    </h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. After that you will be transferred to Tokyo airport. Take flight
                                                            back to home.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> 03 nights accommodation with breakfast</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Private transfer from Tokyo airport - hotel - airport </li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Mont Fuji - Day Tour with Kawaguchiko Lake and Gotemba Outlets</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Tokyo Signature Sightseeing Tour - Half Day</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Insurance </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Flight Tickets</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Visa Fee</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Any expenses of personal nature</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Extra meal</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Anything that is not specified in the Itinerary</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Hike to Mt. Fuji</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Tokyo Nightlife</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cherry Blossom Festival</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Japanese Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit a Shrine or a Temple</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Hot Spring Bathe</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Attend a Matsuri</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Attend a Sumo Show</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Attend a Tea Ceremony</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ride a Bullet Train</div>



                                            </div>
                                        </div>
                                        <div className="description mb-2" id="time-to-visit">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        <h5 className="mb-2">Best Time to Visit</h5>
                                                        <div>Japan’s spring season is renowned for its exceptional cherry blossom festival as it is a unique experience seen from all angles. From blogs to festivals, news reports to talk shows - Japan's cherry blossom season gets....</div>
                                                        <a href="/blogs/japan-cherry-blossom-festival" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

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
                                                                        <h5 className="mb-0 px-3">What are some popular destinations included in Japan Packages?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Some popular destinations included in Japan tour packages include Tokyo, Kyoto, Hiroshima, Osaka, Mount Fuji, and the Japanese Alps. Other popular activities and sights include visiting temples and shrines, experiencing traditional Japanese culture such as tea ceremonies and kimono wearing, and trying local cuisine.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">When is the best time to visit Japan?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">The best time to visit Japan depends on your preferences and what you want to see and do. Generally, spring (March to May) and autumn (September to November) are the most popular seasons to visit, as the weather is mild and the cherry blossoms or autumn foliage are in full bloom. Summer (June to August) can be hot and humid, but it's a good time for outdoor activities. Winter (December to February) can be cold and snowy, but it's a great time for winter sports and enjoying hot springs.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3"> What are the famous food items of Japan?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0"> Japan has a rich culinary culture, and some of the famous food items of Japan include:</div>
                                                                            <div className="mb-0">• Sushi</div>
                                                                            <div className="mb-0">• Ramen</div>
                                                                            <div className="mb-0">• Tempura</div>
                                                                            <div className="mb-0">• Yakitori</div>
                                                                            <div className="mb-0">• Udon</div>
                                                                            <div className="mb-0">• Sashimi</div>
                                                                            <div className="mb-0">• Mochi</div>
                                                                            <div className="mb-0">• Macha</div>

                                                                            <div className="mb-0">These are just a few examples of the many delicious and unique foods you can find in Japan.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What are some cultural customs and etiquette to be aware of in Japan?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 "> Some cultural customs and etiquette to be aware of in Japan include taking off your shoes before entering a home or temple, bowing as a sign of respect, and not tipping in restaurants.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">How much does a Japan package typically cost?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">The cost of a Japan package can vary depending on a variety of factors, including the time of year, the length of the trip, the level of accommodations, and the activities included. On average, a 7-10 day package can cost around 1.5 Lakh to 2 Lakh per person.</div>

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
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27656756.849685844!2d118.98089323780266!3d32.20237265970969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sin!4v1677654215868!5m2!1sen!2sin"></LocationMap>
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
