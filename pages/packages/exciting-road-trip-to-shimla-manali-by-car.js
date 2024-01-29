import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import Head from "next/dist/shared/lib/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import { useEffect } from 'react';
import RelatedPackage from "../../components/Package_Description/RelatedPackages";
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import { FreeMode, Thumbs } from "swiper";
import { useRef, useState } from "react";
import LocationMap from '../../components/Package_Description/locationMap';
import axios from 'axios';
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';
SwiperCore.use([Pagination, Autoplay]);

export default function test() {
    const [obj, setObj] = useState({});
    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Himachal Pradesh`;
            const { data } = await axios.get(url);
            setObj(data);
        } catch (err) {
        }
    };
    useEffect(() => {
        getAllPackages();
    });
    const [readMore, setReadMore] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const extraContent = <div>
        <p className="extra-content">
            The way the mountains become more giant with the due passage of time and the view they give are soothing to the eyes and who would want to miss such a scenic view? The Shimla Manali tour is undoubtedly one of the most adventurous and breathtaking trips that anyone can ever experience. From lush green landscapes to a variety of life to serene rivers flowing, there is a lot to see on your tour of Shimla Manali. Truth be told, you can never have enough of these places
        </p>
        <p className="extra-content">
            The ‘summer capital of British India’ Shimla has now diverted into a tourist-satisfying hill station in north India. Shimla is the shimmering capital of the attractive Himachal Pradesh and is well-known as the best tourist place in the country. The best travel package for Shimla Manali tour includes a destination like Shimla, from which you can see Shimla's shimmer shining.  Alternatively, Manali is located on the banks of the Beas River, and welcomes you to enjoy many adventure activities such as trekking, climbing, mountain biking, Paragliding, and skiing. Place the best travel package for Shimla Manali tour if you want to relish the outdoor fun and activities.
        </p>
        <p className="extra-content">
            Adding onto this, trekking is the best part of a Shimla-Manali trip. Especially if you are visiting the mountains with your group of friends then trekking is a must to do an activity. The fun and excitement of exploring new places and the happiness of getting to interact with the locals of the place are hard to explain in words but very very special to experience. Well, this can be done if you plan a tour to Shimla Manali and if you think of a road trip to Shimla Manali by car, the experience becomes worth it.</p>
        <p className="extra-content">
            This Shimla and Manali tour package is exclusively meant for you if you want to enjoy the best deals and offers while you plan a holiday to Shimla Manali by car. The itinerary is the best that you can ever experience and even though you will be offered a well-prepared tour plan, you have the privilege of customizing it anytime whenever you feel like it. The tour plan can be changed for you and as per you in no time.
        </p>
        <p className="extra-content">
            Moreover, this Shimla and Manali tour package covers all the beautiful places for you to view in Shimla and Manali. There is also a list of amazing activities that you can get to enjoy with this best Shimla and Manali tour package. Visiting Shimla and Manali by car is nevertheless a fantastic idea and with this amazing package, even an unplanned trip of yours can become extremely exciting and adventurous.
        </p>
        <p className="extra-content">
            Well, a road trip to Shimla and Manali by car can never be a bad idea! So, what are you waiting for? Pack your bags now, call your friends and ask them to bind up their work and get ready for a road trip to Shimla and Manali by car. Also, grab this amazing package that would save you a lot of time and money while you can comfortably enjoy your vacation. Create memories for a lifetime and enjoy as much as possible. Get in touch with a TripzyGo tour executive now and have the best Shimla Manali package booked for yourself on the best deals.

        </p>

    </div>
    const linkName = readMore ? 'Read Less' : 'Read More'

    return (
        <div>
            <Head>

                <title>TripzyGo - Road Trip To Shimla Manali By Car - Shimla And Manali Tour Package</title>
                <meta name="description" content="Travel to Shimla Manali by car. Go on an amazing road trip to Shimla Manali by car with this amazing and affordable Shimla and Manali tour package. Contact us. " />
                <meta name="keywords" content="Shimla Manali tour package from Delhi, Shimla Manali tour package, delhi to manali shimla" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/exciting-road-trip-to-shimla-manali-by-car" />
                <meta property="og:title" content="Road Trip To Shimla Manali By Car - Shimla And Manali Tour Package" />
                <meta property="og:description" content="Travel to Shimla Manali by car. Go on an amazing road trip to Shimla Manali by car with this amazing and affordable Shimla and Manali tour package. Contact us. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/exciting_road_trip_to_shimla_manali_by_car/1.webp" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/exciting-road-trip-to-shimla-manali-by-car" />

            </Head>
            <ShareButton/>
<PopularityWidget packageCount="71" progressBarPercentage="65%"/>

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
                                        <h2 className="mb-1">Exciting Road Trip to Shimla Manali by Car Ex- Delhi</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Swiper
                                                style={{
                                                    "--swiper-navigation-color": "#fff",
                                                    "--swiper-pagination-color": "#fff",
                                                }}
                                                autoplay={{
                                                    delay: 2000,
                                                    disableOnInteraction: false,
                                                }}
                                                loop={true}
                                                spaceBetween={10}
                                                // navigation={true}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper2"
                                            >
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/1.webp" alt="Shimla and Manali tour package" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/2.webp" alt="Shimla and Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/3.webp" alt="Shimla Manali by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/4.webp" alt="Shimla Manali by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/5.webp" alt="road trip to shimla manali by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/6.webp" alt="road trip to shimla manali by car" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className='gap'></div>
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                loop={true}
                                                autoplay={{
                                                    delay: 2000,
                                                    disableOnInteraction: false,
                                                }}
                                                spaceBetween={0}
                                                slidesPerView={6}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/1.webp" alt="Shimla and Manali tour package" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/2.webp" alt="Shimla and Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/3.webp" alt="Shimla Manali by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/4.webp" alt="Shimla Manali by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/5.webp" alt="road trip to shimla manali by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exciting_road_trip_to_shimla_manali_by_car/6.webp" alt="road trip to shimla manali by car" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <div className="App">
                                                    <h5 className="mb-2">Exciting Road Trip to Shimla Manali by Car</h5>
                                                    <p>The chance of tasting roadside food in the mountains can only be achieved if you plan a trip to the mountains by car. The noodles, the corn and not to forget the flavorful tea that you get served in earthen cups are the memories that you can only create and cherish forever by going on a Shimla Manali tour by car. While the mountains of Shimla Manali are appealing in themselves, the journey is far more beautiful than the actual destination. </p>
                                                    {readMore && extraContent}
                                                    <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h6 style={{ float: "right", margin: "-10px", fontSize: "13px" }}>{linkName}</h6></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-6 mb-2 ">
                                            <div class="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>A road trip to Shimla and Manali is always a welcome plan. </div>
                                                <div> Make this plan with this amazing Shimla and Manali tour package that will take you to Shimla Manali by car through the most beautiful routes.</div>
                                                <div>With picturesque landscapes and the lively view of mountains and valleys all over your path, you’ll love the journey and create many moments and memories that you’ll cherish for an eternity. </div>
                                                <div>The package facilities and amenities are of premium quality and will offer you the most lovable 6 days and 5 Nights on your Shimla Manali trip by road.</div>
                                                <div>Plan this trip now and book the exciting road trip package to Shimla Manali by car by getting in touch with a TripzyGo travel executive.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Package Category : Premium</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Shimla : The Royal Regency / Sukh Sagar regency / Baljees Regency Or Similar</td>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Manali : Whistling Pine Resorts / Vivaan Resorts / Himalayan Height Or Similar</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 21,850/-*</td>

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
                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Delhi – Shimla (320 Kms)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Dinner & Car</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>After picking from Delhi Airport/Railway station, start your wonderful vacation to Himachal starting from Shimla. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Reach Shimla and check-in into the pre-booked hotel for Overnight stay. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Dinner &Overnight stay at the hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shimla renowned its name as Queen of hills due to its flattering sceneries and colonial heritage which has retained its charm from British India time to till now.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Shimla – Kufri – Local – Shimla</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, proceed to Kufri (22 Kms from Shimla). </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kufri is an all season place – winters are packed with snow adventures while the summers are brimmed with colourful meadows.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> ufri also has a Himalayan Wildlife Zoo and Kufri Fun Park which will make the trip even more exciting (Entry & Activities at your own cost).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After sightseeing, head back to Shimla.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the city we will visit the Indian Institute of Advance Study, the Mall, Johnnie’s Wax Museum, Scandal Point, Ridge, Gaiety Theatre, Heritage Museum, Lakkar Bazaar,Rani Jhansi Park and Christ Church.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>Overnight stay in the Hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Shimla – Kullu – Manali (250 Kms)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>Today morning after breakfast I checked out from the hotel and proceeded towards Manali. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Places to cover enroute will be Vaishno Devi Temple, Hanogi Mata Temple, Pandoh Dam & Sundar Nagar Lake.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Near Kullu, we will be visiting Pashmina Shawl showrooms and will try out our hands on white water River Rafting too. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Reach Manali followed by check-in into the hotel. Overnight stay will be in the hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Manali Local Sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After freshening up, enjoy the  Manali Local Sightseeing tour. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Start your trip by covering Hadimba Devi Temple and Ghatotkacha Temple. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The temples are dedicated to Mata Hadimba (the most worshipped deity in Himachal) and her son Ghatotkacha. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  The Clubhouse will be the next place to visit. Here, enjoy recreational activities such as Skating, disco, zipline, TT and much more.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Later bathe ourselves in Sage Vashisht’s Hot Springs containing Medical properties.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Right across the Hot spring are temples of Lord shiva and Lord Ram where one can pay a visit.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>Overnight stay will be in a reserved Hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Manali – Solang Valley + Club Housse</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Solang Valley (15 Kms from Manali) Wake up to the sweet sound of nature and after breakfast head towards Solang Valley.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This valley is famous for its adventure activities and you can try your hand at Paragliding, Zorbing, ATV Rides, Horse-riding, Trail-rides and so much more.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Before indulging in these activities make sure to understand all safety protocols and measures.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afterwards return to the hotel for dinner and a comfortable stay.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Please Note: Adventure activities will be at your own risk and cost.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Manali - Delhi (570 Kms)
                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Breakfast & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast check out from the hotel and drive to Delhi Airport/ Railway Station for a drop with every memorable moment of your exotic trip.</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Free pick up & drop services from Delhi.</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Stay for 5 Nights on Double occupancy.</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i>MAP Meal Plan – 5 Breakfasts and 5 Dinners (Same as number of nights). </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Separate Sedan (2-4)/ Innova (5-6) Car according to the itinerary (NGT Terms will apply & A/C Will not be used in hilly areas). </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Transfer taxes, parking, fuel & driver charges.</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i>Perking Tax, toll tax, Luxury Tax, Fuel Exp. Driver Exp. Etc. </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Bedroom : 01 Double Rooms</li>



                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flights, Trains, Ferries etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Monument Entrance Fees & Camera Fees. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i>Personal Expenses - Laundry, Shopping, Telephone bills, tips etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Adventure Activities - Safari, Rides, Surfing, Paragliding etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i>Any Extra services - Permits, Volvo Luggage Charges, Heater, Meals etc </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything else not listed in above details.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> 5% GST Extra. </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4>Things To Do</h4>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Adventure Sports: Engage in Exciting Activities Waterfalls: Take in the Music Temples: Visit the Almighty Museum of Himachal Culture & Folk Art: Investigate the history of Shri Hari Yoga Ashram and engage in some yoga</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Manali Wildlife Sanctuary: Yak Adventure Sher-e-Punjab: Enjoy Some Delicious Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Astrid Gufa: Vashist Hot Water Springs for Meditation and Relaxation: Try a therapeutic bath</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Trek to the top of Beas Kund after riding a bike through Rohtang Pass</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Manikaran Gurudwara: Take A Bath in Sulfurous Water</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Monastery in Tibet: Visit For Serenity and Pleasure</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Zorbing: A Fun and Exciting Activity</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> For the Love of Art: Naggar Castle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Trek To Witness A Mesmerizing Landscape At Bhrigu Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gauri Shankar Temple: Seek Lord Shiva's Blessings Manu Market: Shop Until You Drop</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2" id="places-to-eat">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">Best Cafes</h5>
                                                <div>A trip to the ‘queen of the hills is as yet a #1 among the majority since it offers pleasant perspectives as well as wonderful experiences. Try out these most aesthetic cafes in Shimla that will without a doubt add a rich flavor to your get-away....</div>
                                                <a href="/blogs/ten-most-aesthetic-cafes-in-shimla-with-incredible-views-and-delicious-food" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

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
                                                                <h5 className="mb-0">Please suggest the best offer for Shimla and Manali Tour Package.</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "block" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Following are the recommended best offers for Shimla and Manali Tour Packages:<br></br>
                                                                        • Super Deluxe Shimla Kullu Manali Tour Package<br></br>
                                                                        • Premium Shimla Manali Package<br></br>
                                                                        • Luxury Shimla Manali Tour Package
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> Can a road trip to Shimla Manali by car be risky?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">No, not at all. Because we provide Exciting Road Trip to Shimla Manali by Car. Here you feel the purity and freshness of nature throughout the journey. And at different stops, enjoy delicious dishes. Trained and professional drivers also give you the fun of smooth riding. This way it is best for a memorable trip. </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Should I go camping in Manali in winter? </h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Of course, you can but before it snows. You may have to face many problems while camping in the snow. Due to continuous snowfall, you cannot go outside, water freezes, there is a lot of difficulty in getting food and drink, and highways get jammed, which can make it difficult to reach the destination. Make a camping plan keeping these problems in mind.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> How many days will be enough to explore Manali?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0"> Manali is a small town with lots to explore. 2 days will be enough to visit Manali. But if you increase one more day in this, then you can also roam Kullu adjacent to Manali. In this way, in 2 to 3 days you can visit Manali and the surrounding area.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> Which are the best picnic spots in Shimla?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Some best picnic spots in Shimla are<br></br>
                                                                        • Annadale<br></br>
                                                                        • The Glen<br></br>
                                                                        • Indira Tourist Park<br></br>
                                                                        • Hip Hip Hurray Amusement Park<br></br>
                                                                        • Green Valley<br></br>
                                                                        • Mashorba

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> Are all the hotels in the Luxury Shimla Manali Tour Package luxurious?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">All the hotels or resorts are grand and luxurious precisely as the name suggests. That's why they have been kept in the luxury category. Not only hotels but all the service is also included in the package, it is magnificent.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472104.418748328!2d75.05085023035727!3d31.805190146663996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1661253400401!5m2!1sen!2sin"></LocationMap>

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