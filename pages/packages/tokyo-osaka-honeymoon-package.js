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

                <title>TripzyGo - The Best Tokyo Osaka Honeymoon Package</title>
                <meta name="description" content="Plan the perfect honeymoon with our Tokyo Osaka honeymoon package. We offer luxurious hotels, guided tours, and convenient transportation. Book now." />
                <meta name="keywords" content="tokyo osaka honeymoon package, tokyo osaka couple tour package, tokyo osaka honeymoon trip" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/tokyo-osaka-honeymoon-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/tokyo-osaka-honeymoon-package" />
                <meta property="og:title" content="The Best Tokyo Osaka Honeymoon Package" />
                <meta property="og:description" content="Plan the perfect honeymoon with our Tokyo Osaka honeymoon package. We offer luxurious hotels, guided tours, and convenient transportation. Book now. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/tokyo_osaka_honeymoon_package/1.webp" />
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
                                        Tokyo Osaka Honeymoon Package</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/tokyo_osaka_honeymoon_package/1.webp"
                                                imageLink2="/images/international_packages/tokyo_osaka_honeymoon_package/2.webp"
                                                imageLink3="/images/international_packages/tokyo_osaka_honeymoon_package/3.webp"
                                                imageLink4="/images/international_packages/tokyo_osaka_honeymoon_package/4.webp"
                                                imageLink5="/images/international_packages/tokyo_osaka_honeymoon_package/5.webp"
                                                imageLink6="/images/international_packages/tokyo_osaka_honeymoon_package/6.webp"
                                                alt1="tokyo osaka honeymoon package"
                                                alt2="tokyo osaka honeymoon package"
                                                alt3="tokyo osaka honeymoon trip"
                                                alt4="tokyo osaka honeymoon trip"
                                                alt5="tokyo osaka couple tour package"
                                                alt6="tokyo osaka couple tour package">
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
                                                            <h5 className="mb-2">Tokyo Osaka Honeymoon Package</h5>
                                                            <p >A Tokyo Osaka honeymoon trip is a magical experience, filled with stunning landscapes, rich cultural traditions, and delicious cuisine. Tokyo and Osaka are two of the most popular cities to visit, each offering unique experiences for newlyweds to enjoy with our Tokyo Osaka honeymoon package.</p>


                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >The tour begins with a flight from India to Tokyo, Japan's capital city. Upon arrival, you will be greeted by your tour guide and taken to your hotel. The next day, you will embark on a city tour of Tokyo with an amazing itinerary. The ancient city of Kyoto was the capital of Japan for over 1,000 years. Here, you can visit historic temples, including the famous Fushimi Inari Shrine with its iconic torii gates, and the Kiyomizu-Dera Temple, which offers stunning views of the city. You can also participate in a traditional Japanese pottery-making workshop and try your hand at creating your own masterpiece.Tokyo, the bustling capital of Japan, is a city that never sleeps. From the bright lights of Shinjuku to the serene gardens of the Imperial Palace, Tokyo is a city of contrasts that will leave you breathless. One of the most romantic places to visit in Tokyo is the famous Tokyo Tower, which offers stunning views of the city from its observation deck. Couples can also take a romantic stroll through the traditional streets of Asakusa, visit the famous Senso-ji Temple, and explore the trendy neighborhoods of Shibuya and Harajuku. For a unique experience, couples can also take a sushi-making class together and enjoy the delicious sushi they create.</p>
                                                            <p >Osaka, known as the "Kitchen of Japan," is a food lover's paradise. Couples can experience the city's vibrant food scene by visiting Dotonbori, a popular food street filled with street vendors, restaurants, and cafes. Another must-visit attraction in Osaka is Osaka Castle, a historic castle that dates back to the 16th century. For a more modern experience, couples can visit the popular Universal Studios Japan theme park, which offers a range of thrilling rides and attractions.</p>

                                                            <p >In addition to these two cities, couples can also take a day trip to nearby attractions such as Mount Fuji, Hakone, or Kyoto. Kyoto, in particular, is a popular destination for honeymooners, known for its beautiful temples, traditional tea ceremonies, and stunning gardens. The Fushimi Inari Shrine, with its thousands of vermilion torii gates, is a particularly romantic spot to visit.</p>
                                                            <p>Japan is also known for its hot springs, or onsens, which are perfect for a romantic and relaxing experience. Couples can enjoy a private onsen together, followed by a traditional Japanese meal, and stay at a ryokan, a traditional Japanese inn.
In conclusion, a honeymoon with the Tokyo Osaka couple tour package is a unique and unforgettable experience. Tokyo and Osaka offer different experiences that cater to different interests, but both are perfect destinations for newlyweds to explore together. From the bright lights of Tokyo to the food paradise of Osaka, there is something for every couple to enjoy in Japan.</p>


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
                                                <div>Looking for a calm yet happening place that is a perfect blend of culture and modernization with magnificent architecture all around for your honeymoon? Well, let us tell you. There can be no better place than Japan, where you can experience all of these things with your beloved and spend a lot of quality time together on your Tokyo Osaka honeymoon trip.</div>
                                                <div>This island country in the Pacific Ocean is perfect for you two to spend time together and bond over your honeymoon. Japan is known as a timeless country because you can spot people following cultures as old as its inception people complimenting best with their modern outlook. </div>
                                                <div>If you and your partner are those who like to learn about the cultures of different countries, you should avail Tokyo Osaka honeymoon package So, why wait any longer? Go and explore the best deals on the Tokyo Osaka couple tour package.</div>

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
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 130,000 /-* </td>
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
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon reaching the airport in Tokyo, you will be greeted by our representative. Get transferred to the hotel and complete all the check-in formalities. Head to your room and keep all your tiredness at bay while getting cozy in your room. You can also explore nearby markets and restaurants.</div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  - Mount Fuji and Hakone: Sightseeing Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Your second day is dedicated to Mount Fuji & Hakone tour. Visit Hakone which is a beautiful town that offers breathtaking views of Mount Fuji. Next, you will be visiting Mount Fuji which is the tallest mountain Japan and famous widely for its sanctity. You can also indulge in hiking and make your vacation an adventurous one. After a fun-filled day, come back to the hotel to enjoy an overnight stay.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Tokyo: Leisure Day</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a hearty breakfast at the hotel and make your day 3 the most relaxing one. You can stay at the hotel and take advantage of several amenities extended to you by the hotel. Other than this, you can also explore your surroundings and visit local markets and try out authentic cuisines at various nearby restaurants.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Tokyo: Transfer to Osaka</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a filling breakfast at the hotel, proceed to Tokyo Station. Board the Shinkansen Train from Tokyo To Osaka and upon reaching, transfer to your Hotel in Osaka on your own. Quickly get done with all the check-in formalities and head to your room to relax</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 5</span> - Osaka: Sightseeing Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Now is the time to explore the best of Osaka. Post enjoying your morning meal, gear up for a fun-filled day. Today, you will visit several tourist attractions such as Osaka Castle, Dotonbori, Shinsaibashi, Kuromon Ichiba Market, Shinsekai, and many more. Make the most of your vacation while visiting all the top attractions. Post enjoying a lovely day, head back to the hotel and enjoy a sound sleep.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 6</span> - Osaka: Leisure Day</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Make your mornings blissful while gorging upon scrumptious breakfast at the hotel. You can spend your day 6 by relaxing and rejuvenating at the hotel or visiting nearby attractions.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 7</span> - Departure</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> With day 7, your Japan local tour package comes to an end. Relish your breakfast at the hotel and proceed to the airport to catch your flight back home.</div>
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
