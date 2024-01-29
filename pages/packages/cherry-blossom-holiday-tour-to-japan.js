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

                <title>TripzyGo - Incredible Cherry Blossom Holiday Tour to Japan | Book Now!</title>
                <meta name="description" content="Enjoy a unique and unforgettable experience in Japan with our Cherry Blossom Holiday Tour. Book now to save your spot and start planning your dream getaway!" />
                <meta name="keywords" content="cherry blossom tour japan, cherry blossom festival" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/cherry-blossom-holiday-tour-to-japan" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/cherry-blossom-holiday-tour-to-japan" />
                <meta property="og:title" content="Incredible Cherry Blossom Holiday Tour to Japan" />
                <meta property="og:description" content="Book the Best Selling 7 Days Japan Tour Package. Our tour packages include accommodations, transportation, sightseeing activities, meals, and more. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/cherry_blossom_holiday_tour_to_japan/1.webp" />
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
                                            Cherry Blossom Holiday Tour to Japan
                                        </h2>
                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/cherry_blossom_holiday_tour_to_japan/1.webp"
                                                imageLink2="/images/international_packages/cherry_blossom_holiday_tour_to_japan/2.webp"
                                                imageLink3="/images/international_packages/cherry_blossom_holiday_tour_to_japan/3.webp"
                                                imageLink4="/images/international_packages/cherry_blossom_holiday_tour_to_japan/4.webp"
                                                imageLink5="/images/international_packages/cherry_blossom_holiday_tour_to_japan/5.webp"
                                                imageLink6="/images/international_packages/cherry_blossom_holiday_tour_to_japan/6.webp"
                                                alt1="cherry blossom tour japan"
                                                alt2="cherry blossom tour japan"
                                                alt3="cherry blossom tour japan"
                                                alt4="cherry blossom festival"
                                                alt5="cherry blossom festival"
                                                alt6="cherry blossom festival">
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
                                                            <h5 className="mb-2">Cherry Blossom Holiday Tour to Japan</h5>
                                                            <p >A vacation with a cherry blossom tour in Japan during the cherry blossom festival is a truly magical experience that draws visitors from all over the world. This beautiful natural phenomenon typically occurs in late March to early April, when the cherry trees across Japan burst into bloom, covering the country in a sea of pink and white petals.</p>
                                                            <p >One of the best places to witness the cherry blossoms is in Tokyo, where visitors can enjoy the stunning views of the blossoms at famous parks such as Ueno Park, Yoyogi Park, and Shinjuku Gyoen. Another popular destination for cherry blossom viewing in Kyoto, where visitors can explore the beautiful temples and shrines while surrounded by cherry blossoms. Some of the must-visit cherry blossom spots in Kyoto include the famous Philosopher's Path and the beautiful Maruyama Park. </p>


                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >To get the most out of your cherry blossom vacation in Japan, it's recommended to book our cherry blossom tour in Japan. Our Japan tour packages offer travelers the opportunity to witness the beauty of the cherry blossoms festival while exploring some of Japan's most iconic destinations. Our tours typically include visits to Tokyo, Kyoto, and other popular destinations such as Nara, Hiroshima, and Hakone.</p>
                                                            <p >One of the highlights of our cherry blossom tour Japan packages is a visit to the iconic Mount Fuji, where visitors can witness the cherry blossoms against the backdrop of Japan's most famous mountain. Visitors can take a boat ride on the stunning Lake Kawaguchi and enjoy panoramic views of the cherry blossoms and Mount Fuji. In addition to cherry blossom viewing, our Japan cherry blossom tours also offer cultural experiences such as tea ceremonies, traditional Japanese drumming performances, and calligraphy classes. Visitors can also indulge in delicious Japanese cuisine, including traditional dishes such as sushi, tempura, and ramen.</p>
                                                            <p >One of the benefits of joining a guided cherry blossom tour in Japan is that you can avoid the crowds and enjoy the best cherry blossom festival viewing spots without having to worry about transportation or logistics. Our knowledgeable guides can provide insight into the history and culture of Japan, as well as tips on the best places to view the cherry blossoms.</p>
                                                            <p >In conclusion, a vacation in Japan during the cherry blossom festival is a once-in-a-lifetime experience that combines stunning natural beauty, rich culture, and delicious cuisine. Our cherry blossom tour in Japan offers travellers the opportunity to witness the beauty of the cherry blossoms while exploring some of Japan's most iconic destinations. Whether you're interested in exploring the cities, hiking in the mountains, or relaxing in a hot spring, our cherry blossom tour in Japan can be customised to suit your interests and preferences.</p>


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
                                                <div>Japan's cherry blossom season, which typically runs from late March to early May, is a spectacular time to visit this beautiful country. The blooming of the cherry blossom trees is a breathtaking sight that draws visitors from all over the world. It's a time when the entire country is transformed into a sea of delicate pink and white blossoms, creating a magical atmosphere that is unlike anything else. </div>
                                                <div>The weather is also mild and pleasant, making it the perfect time to explore Japan's picturesque towns and cities with our cherry blossom tour Japan, try delicious local cuisine, and experience the warmth and hospitality of the Japanese people. A trip to Japan to witness cherry blossom festival is an unforgettable experience that should be on every traveler's bucket list.</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 7 Nights/ 8 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 1,28,700/-* </td>
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
                                                    <h5 className="mb-0"><span>Day 2</span>  - Cherry Blossom Festival & Gotemba</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Today the first destination is Matsuda Winter Cherry Blossoms
                                                            Festival to see Kawazu Sakura. In the festival, walk around the hill covered with early blooming cherry trees, and try to take a miniture train going under the trees. And you can take
                                                            good photos of cherry blossoms with Mt. Fuji if the weather is nice. After that, enjoy shopping
                                                            at Gotemba Premium Outlet. Overnight at hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Mount Fuji and Hakone Full Day Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Discover Japan's natural miracle, Mt. Fuji and Hakone in 1
                                                            day! Climb Mt. Fuji and feel the enrgy of Japan, take a refreshing Lake Ashi cruise and head
                                                            to Owakudani valley with stunning cablecar.Overnight at hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Tokyo : Osaka Bullet Train</h5>
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
                                                    <h5 className="mb-0"><span>Day 5</span> - Kyoto and Nara 1 Day Bus Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Be amazed by visiting the former capital cities of Japan, Kyoto
                                                            and Nara! Depart from Osaka, heading to Fushimi Inari Taisha, the perfect spot to get in touch
                                                            with Kyoto’s spirit. Overnight at hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 6</span> - Sumiyoshi Taisha Shrine and Kuromon Market</h5>
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
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. Today you will be traveling back to Tokyo from Osaka by
                                                            bullet train. Check in to the hotel. In the evening you can explore the city at your own.
                                                            Overnight at hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 8</span> - Depart from Tokyo</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at the hotel. After that you will be transferred to Tokyo airport. Take flight
                                                            back to home.
                                                            Overnight at hotel.</div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> 07 nights’ accommodation with breakfast</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Private transfer from Tokyo airport - hotel</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Private transfer from Tokyo hotel - airport</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Cherry Blossom Festival & Gotemba </li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Mount Fuji and Hakone Full Day Tour</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Kyoto and Nara 1 Day Bus Tour</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Sumiyoshi Taisha Shrine and Kuromon Market </li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Tokyo - Osaka - Bullet train</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Osaka - Tokyo Bullet train</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Visa Assistance </li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> GST</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> TCS 5% of Land Part (Refundable at time of ITR filling)</li>
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
