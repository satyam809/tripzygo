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

                <title>TripzyGo - Splendid Japan Package from Delhi - Delhi to Japan Tour Package</title>
                <meta name="description" content="Experience the beauty of Japan with our splendid Japan package from Delhi. Book Delhi to Japan tour package now for an unforgettable trip to Japan!" />
                <meta name="keywords" content="japan package from delhi, delhi to japan tour package, japan tour packages from delhi" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/splendid-japan-package-from-delhi" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/splendid-japan-package-from-delhi" />
                <meta property="og:title" content="Splendid Japan Package from Delhi - Delhi to Japan Tour Package" />
                <meta property="og:description" content="Experience the beauty of Japan with our splendid Japan package from Delhi. Book Delhi to Japan tour package now for an unforgettable trip to Japan! " />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/splendid_japan_package_from_delhi/1.webp" />
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
                                        Splendid Japan Package from Delhi</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/splendid_japan_package_from_delhi/1.webp"
                                                imageLink2="/images/international_packages/splendid_japan_package_from_delhi/2.webp"
                                                imageLink3="/images/international_packages/splendid_japan_package_from_delhi/3.webp"
                                                imageLink4="/images/international_packages/splendid_japan_package_from_delhi/4.webp"
                                                imageLink5="/images/international_packages/splendid_japan_package_from_delhi/5.webp"
                                                imageLink6="/images/international_packages/splendid_japan_package_from_delhi/6.webp"
                                                alt1="japan package from delhi"
                                                alt2="japan package from delhi"
                                                alt3="japan package from delhi"
                                                alt4="delhi to japan tour package"
                                                alt5="delhi to japan tour package"
                                                alt6="delhi to japan tour package">
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
                                                            <h5 className="mb-2">Splendid Japan Package from Delhi</h5>
                                                            <p >The Splendid Japan Package from Delhi is an exciting travel package that offers a unique opportunity to explore the rich cultural and historical heritage of Japan. The package is designed for travelers who want to experience the best of Japan's natural beauty, vibrant cities, and unique culture. The Delhi to Japan tour package includes round-trip airfare from Delhi to Tokyo, as well as accommodation in some of Japan's best hotels. The hotels are strategically located in the heart of the city, offering easy access to major attractions and transportation.</p>


                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >The Japan tour packages from Delhi begin with a visit to Tokyo, Japan's vibrant capital city. Here, travelers will have the opportunity to visit some of the city's most iconic landmarks, including the famous Tokyo Tower, the Imperial Palace, and the bustling Shibuya district. Travelers will also have the opportunity to explore the city's vibrant food scene, with visits to traditional markets and local restaurants.</p>
                                                            <p >Throughout the tour with our Japan package from Delhi, travelers will be accompanied by experienced local guides who will provide insight into the history and culture of each destination. They will also have plenty of free time to explore on their own, allowing them to customize their itinerary to their preferences.</p>

                                                            <p >In summary, the Splendid Japan Package from Delhi is an excellent choice for travelers who want to experience the best of Japan's culture, history, and natural beauty. With its comprehensive itinerary, experienced guides, and excellent accommodations, this tour is sure to provide an unforgettable travel experience.</p>


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
                                                <div>Discover Japan's wonder through TripzyGo which offers various Japan packages from Delhi, all with special savings and discounts. Japan tour packages from "Delhi" are customizable and can be fashioned to meet your individual demands.</div>
                                                <div>A vacation package with Delhi to Japan tour package is one of the top choices for an unforgettable vacation. In addition to conventional sightseeing opportunities, we also offer locally curated tours that blend sightseeing with other activities. From sightseeing tours to adventurous activities to special experiences, our Japan tour packages are a great option.</div>
                                                <div>TripzyGo offers a wide variety of customized Japan tour packages from Delhi, including tours for couples, families, and those traveling solo. The country offers a perfect mix of modern and ancient technology with serene landscapes and cosmopolitan buildings.</div>
                                                <div>Enjoy a fantastic journey to this intriguing nation by booking your Japan tour packages.</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights / 6 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 70,000 /-* </td>
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
                                                    <h5 className="mb-0"><span>Day 1</span> - Tokyo: Arrival and Leisure Day</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "block" }} >
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the arrival at the Tokyo airport, on the day one, you would be transferred to the designated hotel on the seat in Coach Basis from Airport Limousine. Once you check in to the hotel, the rest of the day you will spend time relaxing and enjoying nearby places. At the end of the day, you would stay in Tokyo.</div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  - Tokyo: City Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the second day of your Japan tour, in the morning, you will have your breakfast at the Hotel and move out for the Tokyo City Tour. For the Tokyo City Tour, you will gather at the designated location from the Hotel by bus on your own. From there, you will be picked by the transport service and dropped at the Bus Terminal. Later, you will visit Meiji Shrine National Diet Building and by drive, you will go to the next destination i.e., East Gardens of the Imperial Palace. After visiting these places, you will also visit Nakamise Shopping Street, Senso-Ji Temple and Ginza where you can shop and also enjoy treating yourself by capturing beautiful pictures of the scenery and yourself as well. After lunch which is included in the tour package, you will spend time on famous Tokyo Bay Cruise and in the late evening on the Odaiba Seaside Park for a walk. At the end of the day, you will be dropped to the Marunouchi South Entrance of the Tokyo Station; from there you need to head for the overnight stay at the Tokyo Hotel on your own.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Tokyo Sightseeing</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The first thing that you will on the morning of day three will be breakfast. Once you are done with it you will leave your hotel and gather at the designated location to board a bus for the visit to Mt. Fuji 5th Station and spend around 30 minutes there. After that, you will go sightseeing at Lake Ashi which is known for the presentation of the lake full of Cruises style of ships with a background of Mountain View scenario. Later you will visit Mt. Komagatake for the ropeway trip and depart from Hakone by Bus to return to Tokyo. The tour will disband when you arrive at Ginza in Tokyo. Thereafter, you need to travel on your own to the hotel and overnight stay in Tokyo.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Transfer from Tokyo to Osaka</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the fourth day, after breakfast, you will proceed to Tokyo Station on your own and board the Shinkansen Train that will drop you to Osaka. From the Osaka station, you will have to reach to your said Osaka hotel by own and check in there to stay overnight in Osaka.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 5</span> - Osaka: Tour day</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the 5th Day of your Japan tour, the schedule for the day will begin after the breakfast at the said Hotel. At first, you will gather at the designated location from the hotel in Osaka for the pickup of the tour to Kyoto and Nara city. You will discover the listed famous places in the cities. The list will have some of the religious and tourist attractions in sightseeing places. The names are Nijo Castle, Kinkaku-Ji Temple, Kyoto Imperial Palace, Nara Todai-Ji Temple, Kasuga Taisha Shrine, and Nara Nagomikan. You will visit these places on your own within the given time in the schedule planner. Once you finish the tour of all the places, at the end of the tour, you will be dropped at the Osaka Station. From there you need to go by you to the Hotel for an overnight stay in Osaka.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 6</span> - Departure from Osaka</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the morning, after breakfast at the Hotel, at the scheduled flight time, you will proceed to Osaka Kansai Airport from the Hotel. On the seat in Coach basis, you will be transferred to the Airport.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            


                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> 5 Nights accommodation with Breakfast</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> All Transfers and Sightseeing as per itinerary</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Tokyo city tour</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Mt Fuji and Hakone tour by motorcoach</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Bullet train ride from Tokyo to Osaka (Ordinary Class-Reserved Seats)</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Full Day Kyoto and Nara tour.</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Train Station to Hotel transfer & vice versa</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Local transfers to pick-up and drop-off points for SIC tours: Expense of Personal naturePorter at the airport and hotel</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Flights, Visa & Insurance feesMeals not mentioned in the itinerary</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Anything not mentioned in above order Hotels & Itinerary column.</li>



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
