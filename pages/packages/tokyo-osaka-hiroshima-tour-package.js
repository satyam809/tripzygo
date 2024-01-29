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

                <title>TripzyGo -  Grab Tokyo Osaka Hiroshima Tour Package for 6N/7D</title>
                <meta name="description" content="Book exclusive Tokyo Osaka Hiroshima Tour Package for 6N/7D. Our tour packages include accommodations, transportation, sightseeing activities, meals, and more. " />
                <meta name="keywords" content="tokyo osaka hiroshima tour package, tokyo osaka hiroshima holiday package, tokyo osaka hiroshima travel package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/tokyo-osaka-hiroshima-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/tokyo-osaka-hiroshima-tour-package" />
                <meta property="og:title" content="Grab Tokyo Osaka Hiroshima Tour Package for 6N/7D" />
                <meta property="og:description" content="Book exclusive Tokyo Osaka Hiroshima Tour Package for 6N/7D. Our tour packages include accommodations, transportation, sightseeing activities, meals, and more. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/tokyo_osaka_hiroshima_tour_package/1.webp" />
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
                                        Tokyo Osaka Hiroshima Tour Package for 6N/7D</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/tokyo_osaka_hiroshima_tour_package/1.webp"
                                                imageLink2="/images/international_packages/tokyo_osaka_hiroshima_tour_package/2.webp"
                                                imageLink3="/images/international_packages/tokyo_osaka_hiroshima_tour_package/3.webp"
                                                imageLink4="/images/international_packages/tokyo_osaka_hiroshima_tour_package/4.webp"
                                                imageLink5="/images/international_packages/tokyo_osaka_hiroshima_tour_package/5.webp"
                                                imageLink6="/images/international_packages/tokyo_osaka_hiroshima_tour_package/6.webp"
                                                alt1="tokyo osaka hiroshima tour package"
                                                alt2="tokyo osaka hiroshima tour package"
                                                alt3="tokyo osaka hiroshima tour package"
                                                alt4="tokyo osaka hiroshima holiday package"
                                                alt5="tokyo osaka hiroshima holiday package"
                                                alt6="tokyo osaka hiroshima holiday package">
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
                                                            <h5 className="mb-2">Tokyo Osaka Hiroshima Tour Package for 6N/7D</h5>
                                                            <p >Japan is a fascinating country located in East Asia, known for its unique blend of ancient traditions and modern technologies. Tokyo Osaka Hiroshima tour package offers an opportunity to explore three of its most prominent cities - Tokyo, Osaka, and Hiroshima. Each city has its own distinct characteristics, offering a diverse range of experiences to visitors.</p>
                                                            <p >Tokyo, the capital city of Japan, is a bustling metropolis with a population of over 13 million people. It is renowned for its skyscrapers, neon-lit streets, and futuristic technologies. Tokyo offers a plethora of attractions, including the iconic Tokyo Tower, the Imperial Palace, and the vibrant Shibuya district. Visitors can also indulge in the delicious local cuisine, such as sushi and ramen, or experience the traditional Japanese tea ceremony. </p>


                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >Osaka, the second-largest city in Japan, is a vibrant hub of culture and entertainment. It is renowned for its lively street food culture, world-class shopping districts, and iconic landmarks such as Osaka Castle and the Umeda Sky Building. Visitors can explore the vibrant Dotonbori district, where they can sample delicious local delicacies such as takoyaki, okonomiyaki, and kushikatsu. Osaka is also a popular destination for anime and manga enthusiasts, with several theme parks and museums dedicated to popular culture.</p>
                                                            <p >Hiroshima, located on the western coast of Japan, is a city with a poignant history. It was the site of the first atomic bomb attack in 1945, and the city has since transformed itself into a symbol of peace and resilience. Visitors can pay their respects at the Hiroshima Peace Memorial Park, which includes the Peace Memorial Museum, the Atomic Bomb Dome, and the Children's Peace Monument. The city also offers stunning natural beauty, with the scenic Hiroshima Bay and Miyajima Island, which is home to the iconic Itsukushima Shrine.</p>
                                                            <p >Our Tokyo Osaka Hiroshima travel package offers a unique opportunity to experience the rich culture and history of Japan. Visitors can immerse themselves in the bustling metropolis of Tokyo, enjoy the vibrant street food culture of Osaka, and reflect on the tragic past and the hope for peace in Hiroshima. The package includes accommodation in each city, as well as guided tours of the top attractions, allowing visitors to make the most of their time in each location.</p>

                                                            <p >Overall, this Tokyo Osaka Hiroshima holiday package is perfect for travelers who want to experience the best of Japan. The three cities included in the package offer a diverse range of experiences, allowing visitors to explore the various facets of Japanese culture, history, and modernity. From the bustling streets of Tokyo to the solemn peace memorials of Hiroshima, this Tokyo Osaka Hiroshima Tour Package for 6N/7D promises to be an unforgettable journey through one of the most fascinating countries in the world.</p>


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
                                                <div>Japan is one of those regions in the world that people need to visit to experience its many distinctive features. Known for its beautiful skyscrapers and lush forests, it is also home to colorful neon signs and serene temples. Tourists would also love the food and the unique local culture. Your Tokyo Osaka Hiroshima tour package can cover all this and more.</div>
                                                <div>Our Tokyo Osaka Hiroshima holiday package allows you to experience the rising sun and the illustrious scenery of japan. There is moderate weather all around Japan year-round, making activities possible year-round. Unfortunately, the best time to visit japan is in the spring and autumn. </div>
                                                <div>So, you can bring your loved ones on this trip to Tokyo-Osaka-Haneda and take a trip to this region. Book your Tokyo Osaka Hiroshima travel package with TripzyGo and visit this place with your loved ones.</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 6 Nights / 7 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 80,000 /-* </td>
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
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The trip and tour of Japan starts when you arrive to Tokyo. When you reach at the Tokyo airport, our representatives will help you to transfer to the hotel that is booked for the stay. You would be transferred to the hotel for the airport in a limousine. Upon reaching the hotel, you can complete all your check in formalities and then spend the rest of the day in leisure. There will be an overnight at the same bed and breakfast in Tokyo.</div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  - Tokyo: City Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the second day of the trip, you can have your breakfast early in the morning. Then our representatives will help you to start the full day tour. You need to gather at the designated boarding places and then wait for the bus to pick you up. You would drive by National Diet Building and the east gardens of the imperial palace. You would visit Senso-ji Temple and go shopping to the Nakamise Shopping street. You would also drive by the Ginza. After lunch you can go on a cruise on the Tokyo Bay and then spend some time in the Odaiba SeaSide Park. After visiting all the places, you can go back to your hotel and have a night stay.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Tokyo: Mount Fuji Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the third day of the trip, you can have your breakfast at the hotel and then proceed to go on a tour to Mount Fuji and Hakone. You need to get ready and gather at the designated starting point. Then you can board the bus upon its arrival and then go to Mount Fuji, then to Lake Ashi Cruise and finally to Mount Komagatake Ropeway. After completing all the sightseeing activities you can board the bus and return to your hotel for the night stay.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Osaka: Arrival</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can have your breakfast at the hotel and then proceed to the Tokyo station. Then board the Shinkansen train from Tokyo to reach Osaka. Upon reaching Osaka, you can check in to the hotel and stay there for the night.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 5</span> - Osaka: Sightseeing</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can have your breakfast early in the morning and then visit some of the designated destinations of Osaka. You would be picked up from the designated pickup point. Then the tour to kyoto and nara would start. You would be visiting Nijo Castle, Kinkaku-ji Temple, Kyoto Imperial Palace and some nearby place. After that you can head out to visit nara. There you can visit Todai-ji Temple, Kasuga Taisha Shrine and Nara Nagomikan. The tour of the day would end after reaching Osaka. You can then head to the hotel and stay for the night.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 6</span> - Hiroshima and Miyajima Island: Sightseeing</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can have your breakfast at the hotel and then proceed to the Tokyo station. Then board the Shinkansen train from Tokyo to reach Osaka. Upon reaching Osaka, you can check in to the hotel and stay there for the night.On the 6th day of the trip, you can have your breakfast at the hotel, then head out to visit Hiroshima and miyajima island. This is an optional tour. If you are not interested then you can go for Osaka city tour. There will be an overnight stay at the same bed breakfast at Osaka.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 7</span> - Departure</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can have your breakfast at the hotel and then head out to reach the Kansai airport to travel back to your hometown.</div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> 6 Nights accommodation with Breakfast in 3 star hotel</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> All Transfers and Sightseeing</li>
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
