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

                <title>TripzyGo - Trip to Japan from India</title>
                <meta name="description" content="Planning a trip to Japan from India? Make your vacation in Japan truly memorable with our exciting Japan tour packages.  Enjoy the best of Japan with us!" />
                <meta name="keywords" content="trip to japan from india, travel to japan from india, vacation in japan" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/trip-to-japan-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/trip-to-japan-from-india" />
                <meta property="og:title" content="Trip to Japan from India" />
                <meta property="og:description" content="Planning a trip to Japan from India? Make your vacation in Japan truly memorable with our exciting Japan tour packages.  Enjoy the best of Japan with us! " />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/trip_to_japan_from_india/1.webp" />
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
                                        Trip to Japan from India</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/trip_to_japan_from_india/1.webp"
                                                imageLink2="/images/international_packages/trip_to_japan_from_india/2.webp"
                                                imageLink3="/images/international_packages/trip_to_japan_from_india/3.webp"
                                                imageLink4="/images/international_packages/trip_to_japan_from_india/4.webp"
                                                imageLink5="/images/international_packages/trip_to_japan_from_india/5.webp"
                                                imageLink6="/images/international_packages/trip_to_japan_from_india/6.webp"
                                                alt1="trip to japan from india"
                                                alt2="trip to japan from india"
                                                alt3="travel to japan from india"
                                                alt4="travel to japan from india"
                                                alt5="vacation in japan"
                                                alt6="vacation in japan">
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
                                                            <h5 className="mb-2">Trip to Japan from India</h5>
                                                            <p >A trip to Japan from India is an exciting adventure that offers a unique blend of cultural immersion and modern city exploration. Our Japan tour packages are designed to showcase the best of Japan, from its bustling cities to its serene countryside, all while providing a comfortable and hassle-free travel experience.</p>


                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >The tour begins with a flight from India to Tokyo, Japan's capital city. Upon arrival, you will be greeted by your tour guide and taken to your hotel. The next day, you will embark on a city tour of Tokyo with an amazing itinerary. The ancient city of Kyoto was the capital of Japan for over 1,000 years. Here, you can visit historic temples, including the famous Fushimi Inari Shrine with its iconic torii gates, and the Kiyomizu-Dera Temple, which offers stunning views of the city. You can also participate in a traditional Japanese pottery-making workshop and try your hand at creating your own masterpiece.</p>
                                                            <p >Next, Hiroshima is a city that has come to symbolize peace and resilience in the face of tragedy. Here, you can visit the Hiroshima Peace Memorial Park and Museum, which serves as a powerful reminder of the devastating impact of the atomic bomb that was dropped on the city during World War II. You can also visit the nearby Miyajima Island, which is famous for its iconic torii gate that appears to float on the water during high tide.</p>

                                                            <p >Finally, after a few many days of city exploration on your travel to Japan from India, at last, you can shop for souvenirs on the famous shopping streets of Japan. The tour concludes here where you can reflect on your unforgettable vacation in Japan. Overall, a trip to Japan from India tour package is a perfect blend of cultural immersion, city exploration, and natural beauty. It offers a unique opportunity to experience the traditions and customs of Japan, while also enjoying its modern and dynamic cities. With comfortable accommodations, expert guides, and a well-planned itinerary, the Japan tour package is an ideal choice for anyone looking for an unforgettable travel experience. So why not take the leap and book your trip to Japan from India today?</p>


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
                                                <div>Discover the beauty while taking a vacation in japan with TripzyGo, which provides various Japan tour packages from India. Japan holiday Packages from India are customizable to clients and their interests.</div>
                                                <div>Travel to japan from India with TripzyGo might be the perfect choice for you. TripzyGo offers a diverse variety of tailor-made Japan tour packages from India, ranging from excursions for couples, families, and individuals alike. The scenic and diversified landscape, which the Japanese love, is backed by beautiful mountains and panoramic views, and has so much to offer in diversity and experience.</div>
                                                <div>Treat yourself to a wonderful holiday trip to Japan from India.</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 7 Nights / 8 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 164,999 /-* </td>
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
                                                    <h5 className="mb-0"><span>Day 1</span> - Tokyo: Arrival, Sightseeing</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "block" }} >
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Our representatives will greet you as you reach Narita airport, and they will guide you further towards the hotel. After you complete your check-in formalities and have a little bit of rest, the adventures of the day will begin. Your first destination will be Imperial Palace Plaza, and from there, you will head to Asakusa Kannon Temple. You will be given time to run your shopping spree at Nakamise and Odaiba. After this, you will visit Mega Web, a theme park, and at last Daiso. After all these tiring sightseeing, you will come back to the hotel, have dinner, and take your sleep.</div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  - Tokyo: Sightseeing</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The entire Day 2 will be left to you to go around the streets of Tokyo and explore the city at your expense. You can visit Ginza, shop on the streets, purchase apparel, homewares, gadgets, and accessories.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Hakone: Transfer</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On day 3, you will be transferred to Hakone. And you will head on to begin your excursion to Mount Fuji. This is to be noted that this excursion depends majorly on the weather conditions on the day of your trip. You can enjoy your Indian food on Mt Fuji, and after this, you will be taken back to your hotel to relax.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Osaka: Transfer</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will be transferred to your next honeymoon destination on Day 4, which is Kobe. The day will start after having breakfast. You will get to visit Kobe Earthquake Memorial Museum on the same day. You will come back to the hotel and have a rest.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 5</span> - Hiroshima: Transfer</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will set a 300km journey on this day to Hiroshima, the state of Japan that was destroyed by atomic bomb years ago. Also, visit Hiroshima Peace Memorial Park & Museum and Atomic Bomb Dome.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 6</span> - Osaka: City Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day 6 will be booked for the city tour of Kyoto and Nara. You will visit Kinkaku-Ji Temple, Todaiji Temple, and watch deer at Nara Deer Park. After this, you will come back to the hotel and have a rest.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 7</span> - Osaka: Leisure Day</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Just like day 2, you will have day 7 also to yourself to explore Japan on your own. You can either rest at the hotel, perform sports, or shop to your full. The next morning, you will leave for your hometown.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 8</span> - Osaka: Departure</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a delicious breakfast, check-out from the hotel. You will get a transfer to the airport to board a flight back home.</div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> VISA</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> 7-night accommodation in 3 star hotels or similar</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Sightseeing and transfer starting by Deluxe Coach</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Bullet-train ticket: Hiroshima to Osaka (Normal class)</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Meals as per itinerary (Both Lunch and Dinner with set menu) (NO REFILL)</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Indian tour manager</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Photo stop at Imperial Palace</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Asakusa Kanon Temple & Nakamise Shopping Street</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Visit Odaiba- Statue of Liberty, Mega Web & Daiso</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Visit Mt. Fuji 5th Station (Weather permitting)</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Lake Ashi Cruise</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Earthquake Museum Kobe</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Hiroshima Peace Park & Atomic Bomb Dome</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Visit Nara Deer Park & Todaiji TempleKinkakuji Temple</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Personal expenses</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Any other services that are not shown in the list of inclusions</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Airfare</li>



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
