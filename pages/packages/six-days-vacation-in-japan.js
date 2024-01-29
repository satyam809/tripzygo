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

                <title>TripzyGo - 6 Days Vacation in Japan | Book Now!</title>
                <meta name="description" content="Want to go for a vacation in Japan? Plan the best fun vacations in Japan with our Japan vacation tour packages. Book a tour with us at the best prices now!" />
                <meta name="keywords" content="vacation in japan, japan vacation tour package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/six-days-vacation-in-japan" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/six-days-vacation-in-japan" />
                <meta property="og:title" content="Affordable and Fun Japan Vacation Tour Packages" />
                <meta property="og:description" content="Book the Best Selling 7 Days Japan Tour Package. Our tour packages include accommodations, transportation, sightseeing activities, meals, and more. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/six_days_vacation_in_japan/1.webp" />
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
                                        6 Days Vacation in Japan
                                        </h2>
                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/six_days_vacation_in_japan/1.webp"
                                                imageLink2="/images/international_packages/six_days_vacation_in_japan/2.webp"
                                                imageLink3="/images/international_packages/six_days_vacation_in_japan/3.webp"
                                                imageLink4="/images/international_packages/six_days_vacation_in_japan/4.webp"
                                                imageLink5="/images/international_packages/six_days_vacation_in_japan/5.webp"
                                                imageLink6="/images/international_packages/six_days_vacation_in_japan/6.webp"
                                                alt1="vacation in japan"
                                                alt2="vacation in japan"
                                                alt3="vacation in japan"
                                                alt4="japan vacation tour package"
                                                alt5="japan vacation tour package"
                                                alt6="japan vacation tour package">
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
                                                            <h5 className="mb-2">6 Days Vacation in Japan</h5>
                                                            <p >A vacation in japan is a great idea, Japan offers visitors a unique blend of ancient traditions and modern technology. From bustling cities to the serene countryside, Japan has something to offer everyone. One of the most popular destinations in Japan is Tokyo, the country's capital and largest city. Tokyo is a hub of modernity, offering visitors a chance to witness cutting-edge technology, futuristic architecture, and a vibrant pop culture scene. Visitors can explore famous landmarks such as the Tokyo Tower and the Shibuya Crossing, shop at trendy boutiques and department stores, and indulge in delicious Japanese cuisine at local restaurants.</p>
                                                            <p >Another must-visit destination with japan vacation tour package is Kyoto, a city known for its traditional architecture and ancient temples. Visitors can explore the historic Gion district, known for its geisha culture, and visit iconic landmarks such as the Kinkaku-ji Temple and the Fushimi Inari Shrine. Kyoto also offers visitors a chance to witness traditional Japanese arts and crafts, such as calligraphy, pottery, and tea ceremonies. For those looking for a more serene vacation in japan, the Japanese countryside offers breathtaking natural beauty and a chance to experience traditional rural life. The Kumano Kodo, a network of ancient pilgrimage trails, winds through the mountains and forests of the Kii Peninsula, offering visitors a chance to witness the natural beauty of Japan and explore historic shrines and temples. </p>
                                                            <p >Another popular destination for a serene vacation in Japan is the island of Okinawa, located in the southernmost part of Japan. Okinawa is known for its stunning beaches, crystal-clear waters, and laid-back culture. Visitors can enjoy snorkeling, scuba diving, and other water sports, as well as explore traditional Okinawan villages and try local cuisine. One of the benefits of spending vacations in japan is the country's efficient public transportation system, which makes it easy to travel between destinations. Visitors can use Japan's extensive train network, including the famous bullet trains, to explore different regions of the country. Additionally, Japan's hospitality industry is renowned for its quality and attention to detail, offering visitors a range of accommodation options, from traditional ryokans to modern luxury hotels.</p>
                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >A vacation in japan is undoubtedly a great idea is that this destination is a rich cultural heritage, which is evident in everything from food to fashion. Visitors can try traditional Japanese cuisines, such as sushi, tempura, and ramen, and explore local markets and shops selling unique Japanese products. Japan is also famous for its fashion industry, with cutting-edge designers and trend-setting streetwear brands. </p>
                                                            <p >In conclusion, a japan vacation tour package offers visitors a chance to witness a unique blend of ancient traditions and modernity, with something to offer everyone. From bustling cities to the serene countryside, Japan offers breathtaking natural beauty, fascinating cultural experiences, and a chance to explore one of the most technologically advanced societies in the world. Whether you're interested in exploring historic temples, trying delicious Japanese cuisine, or simply relaxing on the beach, Japan is the perfect destination for a memorable vacation.</p>
                                                            
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
                                                <div>Japan is a fascinating and unique country that offers a perfect blend of ancient traditions and modern innovations. From the bustling city of Tokyo to the serene countryside, explore everything with Japan vacation tour package. The country is famous for its delicious cuisine, stunning architecture, and rich cultural heritage.</div>
                                                <div>You can explore historical temples, take a dip in natural hot springs, attend a traditional tea ceremony, or shop for the latest technology gadgets. Moreover, the hospitality and kindness of the Japanese people will make your trip unforgettable. Whether you are interested in art, history, technology, or just want to experience something new, vacation in Japan is the perfect destination for your next vacation.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights / 6 Days </td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 89,799/-* </td>
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
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Today you will be traveling to Osaka from Tokyo by bullet 
train. Check in to the hotel which will be nearest to your train station. In the evening you can 
explore the city at your own. Overnight at hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Tokyo – Osaka Bullet Train</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Today you will be traveling to Osaka from Tokyo by bullet 
train. Check in to the hotel which will be nearest to your train station. In the evening you can 
explore the city at your own. Overnight at hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> -  Sumiyoshi Taisha Shrine and Kuromon Market</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Be amazed by visiting the former capital cities of Japan, Kyoto 
and Nara! Depart from Osaka or Kyoto, heading to Fushimi Inari Taisha, the perfect spot to 
get in touch with Kyoto’s spirit. Overnight at hotel</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 5</span> - Osaka - Tokyo Bullet Train
</h5>
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
                                                    <h5 className="mb-0"><span>Day 6</span> - Depart from Tokyo</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Be amazed by visiting the former capital cities of Japan, Kyoto
                                                            and Nara! Depart from Osaka or Kyoto, heading to Fushimi Inari Taisha, the perfect spot to
                                                            get in touch with Kyoto’s spirit. Overnight at hotel</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 7</span> - Osaka - Tokyo Bullet Train</h5>
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
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> 05 nights accommodation with breakfast</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Private transfer from Tokyo airport - hotel</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Private transfer from Tokyo hotel - airport</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Mt. Fuji & Hakone 1 Day Tour From Tokyo</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Kyoto and Nara 1 Day Bus Tour</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Tokyo - Osaka - Bullet train</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Osaka - Tokyo Bullet train</li>
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
