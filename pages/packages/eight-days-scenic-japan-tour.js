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

                <title>TripzyGo - 8 Days Scenic Japan Tour | Book Now!</title>
                <meta name="description" content="Explore the Land of the Rising Sun with our tailor-made Japan holiday tour packages. Our Japan holiday tour packages provide you with an unforgettable experience." />
                <meta name="keywords" content="holiday tour to japan, japan holiday tour package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/eight-days-scenic-japan-tour" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/eight-days-scenic-japan-tour" />
                <meta property="og:title" content="Experience Japan with the Best Holiday Tour Packages" />
                <meta property="og:description" content="Book the Best Selling 7 Days Japan Tour Package. Our tour packages include accommodations, transportation, sightseeing activities, meals, and more. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/eight_days_scenic_japan_tour/1.webp" />
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
                                            8 Days Scenic Japan Tour
                                        </h2>
                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/eight_days_scenic_japan_tour/1.webp"
                                                imageLink2="/images/international_packages/eight_days_scenic_japan_tour/2.webp"
                                                imageLink3="/images/international_packages/eight_days_scenic_japan_tour/3.webp"
                                                imageLink4="/images/international_packages/eight_days_scenic_japan_tour/4.webp"
                                                imageLink5="/images/international_packages/eight_days_scenic_japan_tour/5.webp"
                                                imageLink6="/images/international_packages/eight_days_scenic_japan_tour/6.webp"
                                                alt1="holiday tour to japan"
                                                alt2="holiday tour to japan"
                                                alt3="holiday tour to japan"
                                                alt4="japan holiday tour package"
                                                alt5="japan holiday tour package"
                                                alt6="japan holiday tour package">
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
                                                            <h5 className="mb-2">8 Days Scenic Japan Tour</h5>
                                                            <p >Japan is home to some of the world's most stunning natural landscapes, from towering mountains to pristine beaches and lush forests. If you're looking for a Japan holiday tour package that combines natural beauty with cultural experiences, a holiday tour to Japan to witness scenic places is a perfect choice.</p>
                                                            <p >One of the best places to witness the scenic beauty of Japan is Hokkaido, the country's northernmost island. Known for its rugged wilderness, Hokkaido offers visitors a chance to explore snow-capped mountains, crystal-clear lakes, and vast fields of wildflowers. Some of the must-visit scenic spots in Hokkaido include the stunning Shiretoko National Park, the beautiful Blue Pond, and the spectacular Daisetsuzan National Park. </p>
                                                            <p >Another popular destination for scenic vacations in Japan is the Japanese Alps, a majestic range of mountains that stretches across central Honshu. Visitors can hike through alpine forests, soak in natural hot springs, and witness breathtaking views of the mountain range. Some of the must-visit scenic spots in the Japanese Alps include Kamikochi, the Tateyama-Kurobe Alpine Route, and the Hakuba Valley.</p>
                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >For those looking for a more coastal experience, the Seto Inland Sea offers some of the most beautiful island scenery in Japan. Visitors can explore the islands by ferry or kayak, admiring the stunning views of the sea and the surrounding mountains. Some of the must-visit islands in the Seto Inland Sea include Naoshima, Teshima, and Shodoshima.
                                                                To get the most out of your scenic vacation in Japan, it's recommended to book a guided holiday tour to Japan. </p>
                                                            <p >Our Japan holiday tour package offers travelers the opportunity to witness the beauty of Japan's natural landscapes while exploring some of the country's most iconic destinations. Our tours typically include visits to Tokyo, Kyoto, and other popular destinations such as Hiroshima and Hakone.</p>
                                                            <p >One of the highlights of our 8 Days Scenic Japan Tour is a visit to the iconic Mount Fuji, where visitors can witness the stunning views of the mountain and surrounding landscape. Visitors can take a boat ride on the stunning Lake Kawaguchi and enjoy panoramic views of Mount Fuji, or hike up to the mountain's summit for a breathtaking view of the surrounding countryside. In addition to scenic beauty, our holiday tour to Japan also offers cultural experiences such as tea ceremonies, traditional Japanese drumming performances, and calligraphy classes. Visitors can also indulge in delicious Japanese cuisine, including traditional dishes such as sushi, tempura, and ramen.</p>
                                                            <p >One of the benefits of joining a holiday tour to Japan is that you can avoid crowds and enjoy the best scenic spots without worry. Our knowledgeable guides can provide insight into the history and culture of Japan, as well as tips on the best places to witness the country's natural beauty.
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
                                                <div>A holiday tour to japan is a must-do for anyone looking to experience the country's incredible natural beauty and rich cultural heritage. From the majestic Mount Fuji and stunning Japanese Alps to the picturesque gardens and charming rural towns, Japan is a country that offers a wealth of breathtaking landscapes and cultural treasures.</div>
                                                <div> A Japan holiday tour package will allow you to explore the country's diverse regions and immerse yourself in its unique traditions and customs. You'll have the opportunity to try delicious local cuisine, visit historic temples and shrines, and meet friendly locals who are proud to share their country with visitors. </div>

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
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 1,17,499/-* </td>
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
                                                    <h5 className="mb-0"><span>Day 4</span> - Tokyo – Osaka Bullet Train</h5>
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
                                                            back to home.</div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> 07 nights accommodation with breakfast</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Private transfer from Tokyo airport - hotel</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Private transfer from Tokyo hotel - airport</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Cherry Blossom Festival & Gotemba </li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Mount Fuji and Hakone Full Day Tour</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Kyoto and Nara 1 Day Bus Tour</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Sumiyoshi Taisha Shrine and Kuromon Market </li>
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
