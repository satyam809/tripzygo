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

                <title>TripzyGo -  Grab The Best Selling 7 Days Japan Tour Package</title>
                <meta name="description" content="Explore Japan with the best selling 7 Days Japan Tour Package! Visit Tokyo, Mount Fuji, Osaka and other cities in this travel package for Japan." />
                <meta name="keywords" content="7 days japan tour package, travel package for japan, best luxury tours of japan" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/best-selling-seven-days-japan-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/best-selling-seven-days-japan-tour-package" />
                <meta property="og:title" content="Grab The Best Selling 7 Days Japan Tour Package" />
                <meta property="og:description" content="Book the Best Selling 7 Days Japan Tour Package. Our tour packages include accommodations, transportation, sightseeing activities, meals, and more. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/best_selling_seven_days_japan_tour_package/1.webp" />
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
                                        The Best Selling 7 Days Japan Tour Package
                                        </h2>
                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/best_selling_seven_days_japan_tour_package/1.webp"
                                                imageLink2="/images/international_packages/best_selling_seven_days_japan_tour_package/2.webp"
                                                imageLink3="/images/international_packages/best_selling_seven_days_japan_tour_package/3.webp"
                                                imageLink4="/images/international_packages/best_selling_seven_days_japan_tour_package/4.webp"
                                                imageLink5="/images/international_packages/best_selling_seven_days_japan_tour_package/5.webp"
                                                imageLink6="/images/international_packages/best_selling_seven_days_japan_tour_package/6.webp"
                                                alt1="7 days japan tour package"
                                                alt2="7 days japan tour package"
                                                alt3="7 days japan tour package"
                                                alt4="travel package for japan"
                                                alt5="travel package for japan"
                                                alt6="travel package for japan">
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
                                                            <h5 className="mb-2">Best Selling 7 Days Japan Tour Package</h5>
                                                            <p >A vacation in Japan is a truly unique and unforgettable experience that offers something for every type of traveler. From the bustling cities of Tokyo and Kyoto to the tranquil countryside, Japan has it all.</p>
                                                            <p >One of the most popular destinations in Japan is Tokyo, the country's capital city. Here, visitors can experience the best of Japanese culture, including delicious food, stunning temples and shrines, and exciting nightlife with our travel package for japan. Some must-see attractions in Tokyo include the famous Tsukiji Fish Market, the historic Asakusa district, and the iconic Tokyo Skytree. </p>


                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >Another popular destination in Japan is Kyoto, a city steeped in history and tradition. Here, visitors can explore beautiful temples and gardens, sample delicious traditional cuisine, and participate in cultural activities such as tea ceremonies and flower arranging. Some of Kyoto's most popular attractions include the stunning Kiyomizu Temple, the beautiful Arashiyama bamboo forest, and the historic Gion district.</p>
                                                            <p >For those seeking a more tranquil experience, Japan's countryside offers stunning natural beauty and a chance to immerse oneself in traditional Japanese culture, you can explore our 7 days japan tour package to spend great 7 days in Japan. The beautiful region of Hokkaido, located in the north of Japan, is home to some of the country's most breathtaking landscapes, including the stunning Shiretoko National Park and the beautiful lavender fields of Furano.</p>
                                                            <p >In addition to its natural beauty and cultural attractions, Japan is also known for its delicious cuisine. From sushi and ramen to tempura and udon noodles, Japan's cuisine is a feast for the senses. Visitors can sample local specialties at street vendors and markets, or indulge in a multi-course meal at a high-end restaurant.</p>
                                                            <p >One of the best ways to experience Japan is through our guided best luxury tours of japan. Our 7 days japan tour package offers travelers a chance to explore the country's most popular destinations with the help of knowledgeable guides who can provide insight into the country's culture and history. Whether you're interested in exploring the cities, hiking in the mountains, or relaxing in a hot spring, our Japan tour packages can be customized to suit your interests and preferences.</p>


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
                                                <div>Embark on an unforgettable journey to Japan with our specially curated travel package for japan. Experience the vibrant culture, breathtaking scenery, and delicious cuisine of this fascinating country. Our 7 days japan tour package offers a range of options, from immersive cultural experiences to exciting outdoor adventures.</div>
                                                <div>Discover the beauty of Japan's traditional temples and gardens, witness the incredible technology in bustling cities, and indulge in world-famous Japanese cuisine. We offer a variety of accommodation options to suit your preferences, from transportation, accommodation, and meals to guided tours, so all you have to do is sit back and enjoy the journey. Come experience the best luxury tours of japan, and make memories that will last a lifetime. </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 6 Nights/ 7 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 1,24,999 /-* </td>
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
                                                    <h5 className="mb-0"><span>Day 1</span> - Tokyo: Arrival</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "block" }} >
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon reaching the airport in Tokyo, you will be greeted by our representative who will transfer you to the hotel. Check-in at the hotel and rest for you have the rest of the day at your own leisure. In the evening, you can go out to explore the nearby markets and restaurants and after exploring the city at your own pace, return to the hotel for a comfortable overnight stay.</div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  - Mount Fuji and Hakone: Sightseeing Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Post a scrumptious breakfast at the hotel, this cheap Japan your package will let you visit the mountainous town of Hakone. The town is famous for hot springs and beautiful views of Mount Fuji. After thism, get ready to explore the beautiful Mount Fuji. Enjoy the scenic sights from the top of the mountain and indulge in the beautiful summit hiking experience. Besing the tallest peak in japan, Mount. Fuji is the perfect spot for travelers to boast of their Japan tour. After this amazing day of sightseeing and adventure you will be escorted back to your hotel for a comfortable overnight stay.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Tokyo: Leisure Day</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today, after a delightful breakfast, you have the whole day at your own leisure. You can choose to explore the city at your own pace or arrange for various tours across the city and get close to the culture and tradition of Japan. Visit the various local markets around and shop for some of the best souvenirs to take back home. Also, dine at the various popular eateries located round and do not miss to get a taste of authentic Japanese cuisine. You can also relax at your accommodation in Japan and take various massage and spa facilities available onsite. Later in the day, head back to your hotel rooms for a restful sleep.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Tokyo: Transfer to Osaka by train</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Start your day with a hearty breakfast and later pack your bags and get ready for a bullet train ride to Osaka. Check-out form the hotel and board the train for your onward journey. Osaka is located on the island of Honshu and is known for its beautiful architecture and nightlife. On arriving in Osaka, you will be transferred to your hotel. After check-in rest after the journey and get ready for the adventures of the next day.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 5</span> - Osaka: Sightseeing tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> A city tour of Osaka is the best and convenient way to explore the city and hence after breakfast you will venture on this tour. Witness the many architectural wonders of the city. On this tour you will get to visit the various attractions across the city like Shinsaibashi, Osaka Castle, Dotonbori and Kuromon Ichiba Market. After a sightseeing tour of the city you are free to visit places that want to visit in Japan. Later, return to your lodging in Japan for a comfortable stay.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 6</span> - Osaka: Leisure Day</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This cheap Japan tour package also lets you spend your holiday the way you like and therefore today you can explore the city the way you like. Make the most of your leisure day and take some of the best tour around the city. Take a food tour or visit attractions that you had never visited before. Click amazing pictures in the streets of the city and get close to the culture of Japan. In the evening, you can return to the hotel for a convenient stay.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 7</span> - Osaka: Departure</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Finally it is time to say goodbye to Japan and after breakfast you can check-out from the hotel and get transferred to the airport. Board your flight back to India and carry along a bundle of fond memories to cherish forever.</div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Accommodation in 3 star hotel</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Transfers</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Breakfast</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Sightseeing</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Visa</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Service Tax</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Anything not included in the inclusions</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Personal expenses</li>
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
